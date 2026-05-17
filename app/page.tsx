import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-[140px] pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_60%_0%,rgba(219,234,254,0.5),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_10%_80%,rgba(219,234,254,0.3),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-7">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Trusted by 50,000+ travellers worldwide
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl text-slate-900 leading-tight tracking-tight mb-5" style={{ fontFamily: "var(--font-serif)" }}>
            Flight Reservations for{" "}
            <em className="text-blue-600 not-italic" style={{ fontStyle: "italic" }}>Visa Applications</em>
          </h1>

          <p className="text-lg text-slate-500 font-light max-w-xl mx-auto mb-9 leading-relaxed">
            Get temporary flight reservations and onward travel proof for embassies and visa applications — delivered fast, embassy-ready.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Link
              href="/order"
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg no-underline text-base"
            >
              Book Reservation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-8 py-4 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl transition-all no-underline text-base"
            >
              View Pricing
            </Link>
          </div>

          <p className="text-sm text-slate-400 flex items-center justify-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            PDF delivered in as little as 1 hour
          </p>

          {/* Trust strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden mt-12 text-left">
            {[
              { icon: "⚡", label: "Fast Delivery", sub: "1–12 hours" },
              { icon: "📄", label: "Embassy-Ready", sub: "Official PDF" },
              { icon: "🔒", label: "Secure Payment", sub: "SSL encrypted" },
              { icon: "💬", label: "24/7 Support", sub: "Always available" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-4 flex flex-col gap-1">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-600 text-slate-700 font-semibold">{item.label}</span>
                <span className="text-xs text-slate-400">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-blue-400 rounded" />
              Process
            </p>
            <h2 className="text-4xl text-slate-900 mb-3" style={{ fontFamily: "var(--font-serif)" }}>How it works</h2>
            <p className="text-slate-500 font-light max-w-md">Three simple steps to get your embassy-ready flight reservation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
            {[
              { num: "01", title: "Fill in your details", desc: "Enter your travel itinerary — departure city, destination, dates, and passengers. Takes under 2 minutes." },
              { num: "02", title: "Secure checkout", desc: "Pay safely with card or PayPal. Encrypted and processed instantly via our PCI-compliant gateway." },
              { num: "03", title: "Receive your PDF", desc: "Your official flight reservation is emailed as a PDF — ready for your visa application within the hour." },
              { num: "✓", title: "Embassy approved", desc: "Accepted by Schengen, UK, US, Canada, and 100+ embassy types globally.", highlight: true },
            ].map((step) => (
              <div key={step.num} className={`p-8 relative ${step.highlight ? "bg-blue-600" : "bg-white"}`}>
                <span className={`absolute top-6 right-6 text-5xl font-serif italic ${step.highlight ? "text-white/20" : "text-slate-100"}`}>
                  {step.num}
                </span>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${step.highlight ? "bg-white/20" : "bg-blue-50"}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={step.highlight ? "white" : "#2563eb"} strokeWidth="1.8">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                </div>
                <h3 className={`text-base font-semibold mb-2 ${step.highlight ? "text-white" : "text-slate-800"}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${step.highlight ? "text-white/75" : "text-slate-500"}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-blue-400 rounded" />Pricing
              </p>
              <h2 className="text-4xl text-slate-900" style={{ fontFamily: "var(--font-serif)" }}>Simple, transparent pricing</h2>
            </div>
            <Link href="/pricing" className="text-sm text-slate-500 hover:text-slate-800 no-underline border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
              See full comparison →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Basic", price: "14", delivery: "12 hours", features: ["1 passenger", "Embassy-ready PDF", "Email delivery", "Verifiable PNR"], featured: false },
              { name: "Express", price: "24", delivery: "3 hours", features: ["Up to 4 passengers", "Embassy-ready PDF", "Email + WhatsApp", "Priority support"], featured: true },
              { name: "Priority", price: "39", delivery: "1 hour", features: ["Unlimited passengers", "Embassy-ready PDF", "Email + WhatsApp + SMS", "Free revision"], featured: false },
            ].map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-xl ${plan.featured ? "border-blue-300 bg-blue-50 shadow-md" : "border-slate-200 bg-white"}`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.featured ? "text-blue-600" : "text-slate-500"}`}>{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-slate-500 text-lg mt-2">€</span>
                  <span className="text-5xl text-slate-900" style={{ fontFamily: "var(--font-serif)" }}>{plan.price}</span>
                </div>
                <p className="text-sm text-slate-400 mb-6">Delivered within {plan.delivery}</p>
                <hr className="border-slate-100 mb-5" />
                <ul className="flex flex-col gap-2.5 mb-7 list-none">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/order"
                  className={`block text-center py-2.5 px-4 rounded-xl text-sm font-medium transition-colors no-underline ${plan.featured ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-slate-200 text-slate-700 hover:bg-slate-50"}`}
                >
                  Get {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">FAQ</p>
            <h2 className="text-4xl text-slate-900" style={{ fontFamily: "var(--font-serif)" }}>Common questions</h2>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            {[
              { q: "Is this a real plane ticket?", a: "No — it is a flight reservation designed for visa applications. It contains a real PNR code that embassies can verify, but no full airfare is charged." },
              { q: "How long is the reservation valid?", a: "Standard reservations are valid for 14 days from issue. Priority plan customers can extend to 28 days." },
              { q: "Will embassies accept it?", a: "Yes. Accepted at Schengen, UK, US, Canada, Australia embassies and 120+ others worldwide." },
              { q: "Do I need to pay full airfare?", a: "No. You only pay our small service fee from €14. Book your real flights after your visa is approved." },
            ].map((item, i, arr) => (
              <details key={item.q} className={`group ${i < arr.length - 1 ? "border-b border-slate-100" : ""}`}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-sm font-medium text-slate-800 hover:bg-slate-50 list-none">
                  {item.q}
                  <svg className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faq" className="text-sm text-slate-500 hover:text-slate-800 border border-slate-200 px-4 py-2 rounded-lg hover:bg-white transition-colors no-underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-600 rounded-3xl px-8 py-16 text-center">
            <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 left-[10%] w-72 h-72 rounded-full bg-white/[0.04]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                Ready for your visa appointment?
              </h2>
              <p className="text-white/75 font-light mb-8 text-lg">Order now and receive your reservation PDF within the hour.</p>
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors no-underline"
              >
                Book Your Reservation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}