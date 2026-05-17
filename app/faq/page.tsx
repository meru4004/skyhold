"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "About the Service",
    q: "Is this a real plane ticket?",
    a: "No — it is a flight reservation (also called a dummy ticket or itinerary). It is a confirmed booking reference issued by a real GDS system (Amadeus, Sabre, or Galileo), but no seat is paid in full. It is specifically designed for visa applications and will be cancelled after the validity period.",
  },
  {
    category: "Documents",
    q: "How long is the reservation valid?",
    a: "Standard reservations are valid for 14 days from the date of issue. Our Priority plan includes an option to extend validity up to 28 days if your visa appointment is further out.",
  },
  {
    category: "Documents",
    q: "Is it embassy acceptable?",
    a: "Yes. Our reservations are accepted at Schengen embassies (all 26 countries), UK Visas & Immigration, US Embassies, Canada Immigration (IRCC), Australian Home Affairs, and over 120 other visa-issuing authorities worldwide.",
  },
  {
    category: "Payments",
    q: "Do I need to pay full airfare?",
    a: "Absolutely not. You only pay our small service fee starting from €14. You are not purchasing a real ticket. Once your visa is approved, you can book your actual flights independently through any airline or booking platform.",
  },
  {
    category: "Payments",
    q: "What is your refund policy?",
    a: "We offer a full refund if we are unable to deliver your reservation within the promised timeframe, or if the embassy rejects the document due to a fault on our part. Refunds are not available if the reservation has already been issued and delivered.",
  },
  {
    category: "About the Service",
    q: "Can I use this for Schengen visa applications?",
    a: "Yes, this is one of our most common use cases. Schengen visa applicants are required to provide proof of onward travel, and our reservations satisfy that requirement perfectly.",
  },
  {
    category: "Delivery",
    q: "How will I receive my reservation PDF?",
    a: "Your reservation PDF will be emailed to the address you provide during checkout. Express and Priority plan customers can also receive it via WhatsApp. Priority customers additionally receive an SMS notification.",
  },
  {
    category: "Delivery",
    q: "What if I need to change the dates or route?",
    a: "Minor changes requested within 30 minutes of placing your order are free of charge. Changes requested after delivery will be treated as a new order. Priority plan customers receive one free revision at any time during the reservation's validity period.",
  },
  {
    category: "Payments",
    q: "Is my payment secure?",
    a: "Yes. All payments are processed through Stripe, a PCI-DSS Level 1 certified payment processor. We never store your card details on our servers. The checkout page uses 256-bit SSL encryption.",
  },
];

const categories = ["All", "About the Service", "Documents", "Payments", "Delivery"];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter(
    (f) => activeCategory === "All" || f.category === activeCategory
  );

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-[120px] pb-12 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Help Centre
          </p>
          <h1 className="text-5xl text-slate-900 mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-500 font-light">
            Everything you need to know about our flight reservation service.
          </p>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">

          {/* Category filters */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            {filtered.map((item, i) => (
              <div
                key={item.q}
                className={`${i < filtered.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-medium text-slate-800 pr-4">
                    {item.q}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    openIndex === i
                      ? "bg-blue-50 border-blue-200"
                      : "border-slate-200"
                  }`}>
                    <svg
                      width="10" height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke={openIndex === i ? "#2563eb" : "#94a3b8"}
                      strokeWidth="2"
                      className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                    >
                      <polyline points="2,3 5,7 8,3"/>
                    </svg>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center mt-10">
            <p className="font-semibold text-slate-800 mb-2">Still have questions?</p>
            <p className="text-sm text-slate-500 mb-5">
              Our support team is available 24/7 to help you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors no-underline"
            >
              Contact Support
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}