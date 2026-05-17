"use client";
import { useState } from "react";

const plans = [
  { value: "basic", label: "Basic — €14 (12 hours)" },
  { value: "express", label: "Express — €24 (3 hours)" },
  { value: "priority", label: "Priority — €39 (1 hour)" },
];

const visaCountries = [
  "Schengen Area (Germany, France, Italy…)",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "UAE / Dubai",
  "New Zealand",
  "India",
  "Japan",
  "Other",
];

export default function OrderPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    departure: "",
    destination: "",
    depDate: "",
    retDate: "",
    visaCountry: "",
    name: "",
    email: "",
    passengers: "1 passenger",
    plan: "express",
    notes: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  const planDetails: Record<string, { name: string; price: string; delivery: string }> = {
    basic: { name: "Basic", price: "€14", delivery: "Within 12 hours" },
    express: { name: "Express", price: "€24", delivery: "Within 3 hours" },
    priority: { name: "Priority", price: "€39", delivery: "Within 1 hour" },
  };

  const pd = planDetails[form.plan];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── HERO ── */}
      <div className="pt-[100px] pb-8 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Book</p>
          <h1 className="text-4xl text-slate-900 mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            Order your reservation
          </h1>
          <p className="text-slate-500 font-light">
            Fill in your travel details and we'll deliver your embassy-ready PDF.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center max-w-sm mx-auto mt-8 px-6">
          {[1, 2, 3].map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1.5 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all ${
                  step > s
                    ? "bg-green-50 border-green-500 text-green-600"
                    : step === s
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-slate-200 text-slate-400"
                }`}>
                  {step > s ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  ) : s}
                </div>
                <span className={`text-xs font-medium ${step === s ? "text-blue-600" : "text-slate-400"}`}>
                  {["Travel Info", "Passengers", "Review"][i]}
                </span>
              </div>
              {i < 2 && (
                <div className={`h-0.5 flex-1 mb-5 transition-all ${step > s ? "bg-green-400" : "bg-slate-200"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── FORM CARD ── */}
      <div className="max-w-xl mx-auto px-6 pb-20">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">

          {/* ── STEP 1: Travel Info ── */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl text-slate-900 mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                Travel details
              </h2>
              <p className="text-sm text-slate-400 mb-7">
                Enter your itinerary exactly as you want it on the reservation.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Departure Airport</label>
                  <input
                    type="text"
                    placeholder="e.g. London (LHR)"
                    value={form.departure}
                    onChange={(e) => update("departure", e.target.value)}
                    className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Destination Airport</label>
                  <input
                    type="text"
                    placeholder="e.g. Paris (CDG)"
                    value={form.destination}
                    onChange={(e) => update("destination", e.target.value)}
                    className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Departure Date</label>
                  <input
                    type="date"
                    value={form.depDate}
                    onChange={(e) => update("depDate", e.target.value)}
                    className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">
                    Return Date <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="date"
                    value={form.retDate}
                    onChange={(e) => update("retDate", e.target.value)}
                    className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 col-span-2">
                  <label className="text-sm font-medium text-slate-700">Visa Country</label>
                  <select
                    value={form.visaCountry}
                    onChange={(e) => update("visaCountry", e.target.value)}
                    className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                  >
                    <option value="">Select a country…</option>
                    {visaCountries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-7">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  Continue
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Passenger Info ── */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl text-slate-900 mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                Passenger information
              </h2>
              <p className="text-sm text-slate-400 mb-7">
                Lead passenger details for the reservation.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Full Name (as in passport)</label>
                  <input
                    type="text"
                    placeholder="e.g. Maria Elena Rodriguez"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">Number of Passengers</label>
                    <select
                      value={form.passengers}
                      onChange={(e) => update("passengers", e.target.value)}
                      className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                    >
                      {["1 passenger", "2 passengers", "3 passengers", "4 passengers", "5+ passengers"].map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">Plan</label>
                    <select
                      value={form.plan}
                      onChange={(e) => update("plan", e.target.value)}
                      className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                    >
                      {plans.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">
                    Special Notes <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    placeholder="Any special requirements or additional notes…"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                    className="px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-7">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  Review Order
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Review ── */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl text-slate-900 mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                Review your order
              </h2>
              <p className="text-sm text-slate-400 mb-7">
                Please check everything before confirming.
              </p>

              <div className="border border-slate-200 rounded-xl overflow-hidden mb-5">
                {[
                  ["Route", `${form.departure || "—"} → ${form.destination || "—"}`],
                  ["Departure", form.depDate || "—"],
                  ["Return", form.retDate || "One-way"],
                  ["Visa Country", form.visaCountry || "—"],
                  ["Passenger", form.name || "—"],
                  ["Email", form.email || "—"],
                  ["Passengers", form.passengers],
                  ["Plan", `${pd.name} — ${pd.delivery}`],
                ].map(([label, val], i, arr) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                      i < arr.length - 1 ? "border-b border-slate-100" : ""
                    } ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <span className="text-slate-500">{label}</span>
                    <span className="font-medium text-slate-800 text-right max-w-[55%]">{val}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-5">
                <span className="font-semibold text-slate-700">Total</span>
                <span className="text-xl font-bold text-blue-600" style={{ fontFamily: "var(--font-serif)" }}>
                  {pd.price}
                </span>
              </div>

              {/* Security note */}
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
                Secure payment via Stripe. Your card details are never stored.
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Redirecting to payment…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                      Pay & Confirm
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}