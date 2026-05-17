import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "14",
    delivery: "12 hours",
    featured: false,
    features: [
      { text: "1 passenger itinerary", included: true },
      { text: "Embassy-ready PDF", included: true },
      { text: "Email delivery", included: true },
      { text: "Verifiable PNR code", included: true },
      { text: "WhatsApp delivery", included: false },
      { text: "Priority support", included: false },
      { text: "Free revision", included: false },
    ],
  },
  {
    name: "Express",
    price: "24",
    delivery: "3 hours",
    featured: true,
    features: [
      { text: "Up to 4 passengers", included: true },
      { text: "Embassy-ready PDF", included: true },
      { text: "Email delivery", included: true },
      { text: "Verifiable PNR code", included: true },
      { text: "WhatsApp delivery", included: true },
      { text: "Priority support", included: true },
      { text: "Free revision", included: false },
    ],
  },
  {
    name: "Priority",
    price: "39",
    delivery: "1 hour",
    featured: false,
    features: [
      { text: "Unlimited passengers", included: true },
      { text: "Embassy-ready PDF", included: true },
      { text: "Email delivery", included: true },
      { text: "Verifiable PNR code", included: true },
      { text: "WhatsApp + SMS delivery", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Free revision included", included: true },
    ],
  },
];

const compareRows = [
  { feature: "Delivery time", basic: "12 hours", express: "3 hours", priority: "1 hour" },
  { feature: "Passengers", basic: "1", express: "Up to 4", priority: "Unlimited" },
  { feature: "Embassy-ready PDF", basic: true, express: true, priority: true },
  { feature: "Verifiable PNR", basic: true, express: true, priority: true },
  { feature: "WhatsApp delivery", basic: false, express: true, priority: true },
  { feature: "Priority support", basic: false, express: true, priority: true },
  { feature: "Free revision", basic: false, express: false, priority: true },
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  );
}

function Dash() {
  return <span className="text-slate-300 text-lg">—</span>;
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-[120px] pb-12 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Pricing</p>
          <h1 className="text-5xl text-slate-900 mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-slate-500 font-light">
            No hidden fees. No subscriptions. Pay once, receive your reservation.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-xl ${
                  plan.featured
                    ? "border-blue-300 bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.featured ? "text-blue-600" : "text-slate-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-slate-500 text-lg mt-2">€</span>
                  <span className="text-5xl text-slate-900" style={{ fontFamily: "var(--font-serif)" }}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-slate-400 flex items-center gap-1.5 mb-6">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  Delivered within {plan.delivery}
                </p>
                <hr className="border-slate-100 mb-5" />
                <ul className="flex flex-col gap-2.5 mb-7 list-none">
                  {plan.features.map((f) => (
                    <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.included ? "text-slate-600" : "text-slate-300"}`}>
                      {f.included ? (
                        <Check />
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/order"
                  className={`block text-center py-3 px-4 rounded-xl text-sm font-medium transition-colors no-underline ${
                    plan.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Get {plan.name} Plan
                </Link>
              </div>
            ))}
          </div>

          {/* ── COMPARISON TABLE ── */}
          <div className="mt-16 border border-slate-200 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
              <div className="p-5 text-sm font-semibold text-slate-700">Feature comparison</div>
              {["Basic", "Express", "Priority"].map((name, i) => (
                <div key={name} className={`p-5 text-center ${i === 1 ? "bg-blue-50" : ""}`}>
                  <div className={`text-sm font-semibold ${i === 1 ? "text-blue-700" : "text-slate-700"}`}>{name}</div>
                  <div className={`text-lg font-bold mt-1 ${i === 1 ? "text-blue-600" : "text-slate-800"}`}>
                    €{["14", "24", "39"][i]}
                  </div>
                </div>
              ))}
            </div>

            {/* Rows */}
            {compareRows.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
              >
                <div className="p-4 text-sm text-slate-700 flex items-center">{row.feature}</div>
                {[row.basic, row.express, row.priority].map((val, i) => (
                  <div key={i} className={`p-4 flex items-center justify-center ${i === 1 ? "bg-blue-50/50" : ""}`}>
                    {typeof val === "boolean" ? (
                      val ? <Check /> : <Dash />
                    ) : (
                      <span className="text-sm text-slate-600">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* ── GUARANTEE ── */}
          <div className="mt-8 flex items-start gap-4 bg-green-50 border border-green-200 rounded-2xl p-6">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="flex-shrink-0 mt-0.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div>
              <p className="font-semibold text-green-700 text-sm mb-1">Money-back guarantee</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                If your reservation is not accepted by the embassy for reasons attributable to us, we will provide a full refund or free replacement. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}