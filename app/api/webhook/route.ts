import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const Stripe = (await import("stripe")).default;
    const { createClient } = await import("@supabase/supabase-js");
    const { Resend } = await import("resend");

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const body = await request.text();
    const sig = request.headers.get("stripe-signature");

    if (!sig) {
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      console.error("Webhook error:", err);
      return NextResponse.json({ error: "Webhook error" }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as any;
      const meta = session.metadata ?? {};

      const planDelivery: Record<string, string> = {
        basic: "12 hours",
        express: "3 hours",
        priority: "1 hour",
      };

      await supabase.from("orders").insert({
        name: meta.name,
        email: meta.email,
        departure: meta.departure,
        destination: meta.destination,
        dep_date: meta.depDate,
        ret_date: meta.retDate,
        visa_country: meta.visaCountry,
        passengers: meta.passengers,
        plan: meta.plan,
        price: session.amount_total ? `€${session.amount_total / 100}` : "",
        notes: meta.notes,
        status: "pending",
        stripe_session_id: session.id,
      });

      await resend.emails.send({
        from: "SkyHold <onboarding@resend.dev>",
        to: meta.email,
        subject: "✈️ Your Flight Reservation is Confirmed!",
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;">
            <h2>Order Confirmed! ✈️</h2>
            <p>Hi ${meta.name},</p>
            <p>Your reservation will be delivered within <strong>${planDelivery[meta.plan] ?? "3 hours"}</strong>.</p>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin:20px 0;">
              <p><strong>Route:</strong> ${meta.departure} → ${meta.destination}</p>
              <p><strong>Departure:</strong> ${meta.depDate}</p>
              <p><strong>Visa Country:</strong> ${meta.visaCountry}</p>
              <p><strong>Passengers:</strong> ${meta.passengers}</p>
              <p><strong>Plan:</strong> ${meta.plan}</p>
            </div>
            <p>Questions? Email support@skyhold.io</p>
            <p>The SkyHold Team</p>
          </div>
        `,
      });

      await resend.emails.send({
        from: "SkyHold <onboarding@resend.dev>",
        to: "support@skyhold.io",
        subject: `🆕 New Order — ${meta.plan} — ${meta.name}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;">
            <h2>New Order! 💰</h2>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin:20px 0;">
              <p><strong>Name:</strong> ${meta.name}</p>
              <p><strong>Email:</strong> ${meta.email}</p>
              <p><strong>Route:</strong> ${meta.departure} → ${meta.destination}</p>
              <p><strong>Departure:</strong> ${meta.depDate}</p>
              <p><strong>Return:</strong> ${meta.retDate ?? "One-way"}</p>
              <p><strong>Visa Country:</strong> ${meta.visaCountry}</p>
              <p><strong>Passengers:</strong> ${meta.passengers}</p>
              <p><strong>Plan:</strong> ${meta.plan}</p>
              <p><strong>Notes:</strong> ${meta.notes ?? "None"}</p>
            </div>
            <p style="color:#16a34a;font-weight:bold;">Create and send PDF to customer now.</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}