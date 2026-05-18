import Link from "next/link";

export default function RefundPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-[120px] pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Legal</p>
          <h1 className="text-5xl text-slate-900 mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Refund Policy
          </h1>
          <p className="text-slate-500 font-light">Last updated: May 2025</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-2xl mx-auto px-6">

          {/* Quick summary cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: "✅",
                title: "Full Refund",
                desc: "If we fail to deliver within the promised timeframe",
                color: "bg-green-50 border-green-200",
              },
              {
                icon: "✅",
                title: "Full Refund",
                desc: "If embassy rejects document due to our error",
                color: "bg-green-50 border-green-200",
              },
              {
                icon: "❌",
                title: "No Refund",
                desc: "If reservation has already been delivered successfully",
                color: "bg-red-50 border-red-200",
              },
            ].map((item) => (
              <div key={item.title + item.desc} className={`border rounded-2xl p-5 ${item.color}`}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-semibold text-slate-800 text-sm mb-1">{item.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-slate max-w-none">
            {[
              {
                title: "1. Our Refund Guarantee",
                content: "At SkyHold, we stand behind the quality of our service. We offer a full refund in specific circumstances outlined in this policy. Our goal is to ensure every customer receives a professional, embassy-ready flight reservation that meets their visa application requirements."
              },
            ].map((item) => (
              <div key={item.title} className="mb-10">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
