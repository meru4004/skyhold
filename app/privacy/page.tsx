export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-[120px] pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Legal</p>
          <h1 className="text-5xl text-slate-900 mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-light">Last updated: May 2025</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="prose prose-slate max-w-none">
            {[
              {
                title: "1. Information We Collect",
                content: "We collect information you provide directly to us when placing an order, including your full name, email address, travel details (departure and destination airports, travel dates), visa country, number of passengers, and any special notes. We also collect payment information through our secure payment processor Stripe, though we never store your card details on our servers."
              },
              {
                title: "2. How We Use Your Information",
                content: "We use the information we collect to process and deliver your flight reservation, send order confirmation and delivery emails, respond to your inquiries and support requests, improve our services and website experience, comply with legal obligations, and prevent fraud and abuse of our services."
              },
              {
                title: "3. Information Sharing",
                content: "We do not sell, trade, or rent your personal information to third parties. We share your information only with trusted service providers who help us operate our business, including Stripe for payment processing, Resend for email delivery, and Supabase for secure data storage. These providers are contractually obligated to protect your information."
              },
              {
                title: "4. Data Storage and Security",
                content: "Your data is stored securely using Supabase, a SOC 2 compliant database provider. All data is encrypted in transit using SSL/TLS encryption. We retain your order information for a period of 2 years for legal and accounting purposes, after which it is securely deleted. We implement industry-standard security measures to protect against unauthorised access."
              },
              {
                title: "5. Cookies",
                content: "Our website uses essential cookies to ensure the website functions correctly. We do not use tracking or advertising cookies. We may use analytics cookies to understand how visitors use our site. You can control cookie settings through your browser settings, though disabling cookies may affect website functionality."
              },
              {
                title: "6. Your Rights",
                content: "You have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data (subject to legal retention requirements), object to processing of your data, and request data portability. To exercise any of these rights, please contact us at support@skyhold.io."
              },
              {
                title: "7. Children's Privacy",
                content: "Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete it."
              },
              {
                title: "8. International Transfers",
                content: "Your data may be transferred to and processed in countries outside your country of residence. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses approved by relevant data protection authorities."
              },
              {
                title: "9. Third Party Links",
                content: "Our website may contain links to third party websites. We are not responsible for the privacy practices of these websites. We encourage you to review the privacy policies of any third party sites you visit."
              },
              {
                title: "10. Changes to This Policy",
                content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of our services after changes constitutes acceptance of the updated policy."
              },
              {
                title: "11. Contact Us",
                content: "If you have any questions about this Privacy Policy or how we handle your data, please contact our data protection team at support@skyhold.io. We will respond to all inquiries within 48 hours."
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
            <p className="font-semibold text-slate-800 mb-2">Questions about your privacy?</p>
            <p className="text-sm text-slate-500 mb-4">We take your privacy seriously and are happy to help.</p>
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