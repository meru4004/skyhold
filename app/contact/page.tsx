"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-[120px] pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Contact</p>
          <h1 className="text-5xl text-slate-900 mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Get in touch
          </h1>
          <p className="text-lg text-slate-500 font-light">
            We're available 24/7. Expect a response within minutes.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-12 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* ── LEFT: Contact methods ── */}
            <div className="flex flex-col gap-4">

              {/* Contact method cards */}
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  title: "Email Support",
                  value: "support@skyhold.io",
                  note: "Average response: under 15 minutes",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                  ),
                  title: "Live Chat",
                  value: "Available on this page 24/7",
                  note: "Fastest option for urgent orders",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.7 5.19a2 2 0 011.97-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L10.91 10a16 16 0 006.09 6.09l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  title: "WhatsApp",
                  value: "+44 20 0000 0000",
                  note: "For Priority plan customers",
                },
              ].map((method) => (
                <div key={method.title} className="flex items-start gap-4 p-5 border border-slate-200 rounded-2xl bg-white">
                  <div className="w-10 h-10 flex-shrink-0 bg-blue-50 rounded-xl flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-0.5">{method.title}</h4>
                    <p className="text-sm text-slate-600">{method.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{method.note}</p>
                  </div>
                </div>
              ))}

              {/* Existing order note */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-slate-700 mb-2">Have an existing order?</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  To track your order or request a change, include your Order ID
                  (format: <span className="font-mono text-slate-700">#SKH-XXXX-XXXX</span>) in your message.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  Orders are processed 24 hours a day
                </div>
              </div>
            </div>

            {/* ── RIGHT: Contact form ── */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-green-50 border-4 border-green-500 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <h3 className="text-xl text-slate-900 mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                    Message sent!
                  </h3>
                  <p className="text-sm text-slate-500">
                    We'll get back to you within 15 minutes.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl text-slate-900 mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                    Send a message
                  </h2>
                  <p className="text-sm text-slate-400 mb-7">We'll get back to you via email.</p>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">Your Name</label>
                      <input
                        type="text"
                        placeholder="Full name"
                        className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">Subject</label>
                      <select className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white">
                        <option>General inquiry</option>
                        <option>Order status</option>
                        <option>Change request</option>
                        <option>Refund request</option>
                        <option>Technical issue</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700">Message</label>
                      <textarea
                        placeholder="Describe your issue or question…"
                        rows={4}
                        className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      />
                    </div>
                    <button
                      onClick={() => setSent(true)}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}