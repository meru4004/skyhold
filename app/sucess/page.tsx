"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const plan = params.get("plan") || "express";
  const email = params.get("email") || "your@email.com";

  const planDetails: Record<string, { name: string; price: string; delivery: string }> = {
    basic: { name: "Basic", price: "€14", delivery: "Within 12 hours" },
    express: { name: "Express", price: "€24", delivery: "Within 3 hours" },
    priority: { name: "Priority", price: "€39", delivery: "Within 1 hour" },
  };

  const pd = planDetails[plan] || planDetails.express;
  const orderId = "SKH-2025-" + Math.floor(1000 + Math.random() * 9000);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-50">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-10 shadow-lg text-center">

        {/* Success icon */}
        <div className="w-16 h-16 rounded-full bg-green-50 border-4 border-green-500 flex items-center justify-center mx-auto mb-6 animate-bounce">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
            <polyline points="20,6 9,17 4,12"/>
          </svg>
        </div>

        <h1 className="text-3xl text-slate-900 mb-2" style={{ fontFamily: "var(--font-serif)" }}>
          Order Confirmed!
        </h1>
        <p className="text-slate-500 text-sm font-light mb-8 leading-relaxed">
          Your flight reservation is being processed. You'll receive your embassy-ready PDF shortly.
        </p>

        {/* Order details */}
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-5 text-left">
          {[
            ["Order ID", orderId],
            ["Plan", pd.name],
            ["Estimated Delivery", pd.delivery],
            ["Status", "Processing"],
          ].map(([label, val], i, arr) => (
            <div
              key={label}
              className={`flex items-center justify-between px-4 py-3 text-sm ${
                i < arr.length - 1 ? "border-b border-slate-100" : ""
              } ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
            >
              <span className="text-slate-500">{label}</span>
              <span className={`font-semibold ${
                label === "Estimated Delivery" ? "text-green-600" :
                label === "Status" ? "text-amber-500" : "text-slate-800"
              }`}>
                {label === "Status" ? (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block" />
                    {val}
                  </span>
                ) : val}
              </span>
            </div>
          ))}
        </div>

        {/* Email notice */}
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-left">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <p className="text-sm text-blue-700 leading-relaxed">
            A confirmation has been sent to{" "}
            <strong>{decodeURIComponent(email)}</strong>. Check your spam folder if you don't see it.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href="/"
            className="flex-1 py-2.5 px-4 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors no-underline text-center"
          >
            ← Back to Home
          </Link>
          <Link
            href="/order"
            className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors no-underline text-center"
          >
            New Order
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}