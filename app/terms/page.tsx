export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-[120px] pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Legal</p>
          <h1 className="text-5xl text-slate-900 mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Terms of Service
          </h1>
          <p className="text-slate-500 font-light">Last updated: May 2025</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="prose prose-slate max-w-none">

            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing and using SkyHold's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and customers of SkyHold."
              },
              {
                title: "2. Description of Service",
                content: "SkyHold provides flight reservation documents (also known as dummy tickets or flight itineraries) for the purpose of visa applications. These reservations are temporary bookings issued through global distribution systems (GDS) and are not confirmed paid airline tickets. The service is intended solely for use in supporting visa applications and travel documentation requirements."
              },
              {
                title: "3. What You Receive",
                content: "Upon successful payment, you will receive a PDF document containing a flight reservation with a verifiable PNR (Passenger Name Record) code. This document shows flight details including route, dates, and passenger information. The reservation is valid for the period specified in your chosen plan (14 or 28 days) and will be cancelled after that period."
              },
              {
                title: "4. Acceptable Use",
                content: "You agree to use our services only for lawful purposes. You must provide accurate passenger information as it appears in your passport. You acknowledge that our reservations are intended for visa application support only and must not be used as confirmed travel bookings. You are responsible for ensuring the reservation meets your embassy's requirements."
              },
              {
                title: "5. Payment Terms",
                content: "All payments are processed securely through Stripe. Prices are displayed in Euros (€) and are inclusive of all service fees. Payment is required in full before the reservation is issued. We accept all major credit and debit cards. By providing payment information, you authorise us to charge the full amount for the service selected."
              },
              {
                title: "6. Delivery",
                content: "We aim to deliver reservations within the timeframe specified for your chosen plan (Basic: 12 hours, Express: 3 hours, Priority: 1 hour). Delivery times are estimates and may vary. Reservations are delivered to the email address provided at checkout. We are not responsible for delays caused by incorrect email addresses or spam filters."
              },
              {
                title: "7. Refund Policy",
                content: "Please refer to our Refund Policy page for full details. In summary, refunds are available if we fail to deliver within the promised timeframe or if the document is rejected by the embassy due to our error. Refunds are not available once the reservation has been successfully delivered."
              },
              {
                title: "8. Limitation of Liability",
                content: "SkyHold is not responsible for visa application outcomes. We do not guarantee that your visa application will be approved. We are not liable for any losses arising from visa refusals, travel cancellations, or any decisions made by immigration authorities. Our liability is limited to the amount paid for the service."
              },
              {
                title: "9. Intellectual Property",
                content: "All content on the SkyHold website, including text, graphics, logos, and software, is the property of SkyHold and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission."
              },
              {
                title: "10. Changes to Terms",
                content: "We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the new terms. We encourage you to review these terms periodically."
              },
              {
                title: "11. Contact",
                content: "If you have any questions about these Terms of Service, please contact us at support@skyhold.io."
              },
            ].map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="text-lg font-semibold text-slate-800 mb-3">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}

          </div>

          {/* Contact box */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
            <p className="font-semibold text-slate-800 mb-2">Questions about our terms?</p>
            <p className="text-sm text-slate-500 mb-4">Our team is happy to clarify anything.</p>
            <a
              href="mailto:support@skyhold.io"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors no-underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}