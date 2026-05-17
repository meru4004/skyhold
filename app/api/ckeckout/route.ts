import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const planPrices: Record<string, number> = {
  basic: 1400,
  express: 2400,
  priority: 3900,
};

const planNames: Record<string, string> = {
  basic: "Basic Plan — Flight Reservation (12 hours)",
  express: "Express Plan — Flight Reservation (3 hours)",
  priority: "Priority Plan — Flight Reservation (1 hour)",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, name, email, departure, destination, depDate, retDate, visaCountry, passengers, notes } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: planNames[plan] || "Flight Reservation",
              description: `${departure} → ${destination} | Visa: ${visaCountry} | Passengers: ${passengers}`,
            },
            unit_amount: planPrices[plan] || 2400,
          },
          quantity: 1,
        },
      ],
      metadata: {
        name,
        email,
        departure,
        destination,
        depDate,
        retDate,
        visaCountry,
        passengers,
        plan,
        notes,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}