import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
                  <path d="M10 2L2 7l2 1v5l6 3 6-3V8l2-1-8-5z"/>
                </svg>
              </div>
              <span className="text-white text-lg" style={{ fontFamily: "var(--font-serif)" }}>SkyHold</span>
            </div>
            <p className="text-sm leading-relaxed max-w-[200px]">
              Official flight reservations for visa applications. Trusted by 50,000+ travellers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">Product</h4>
            <ul className="flex flex-col gap-2 list-none">
              <li><Link href="/" className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline">Home</Link></li>
              <li><Link href="/pricing" className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline">Pricing</Link></li>
              <li><Link href="/order" className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline">Book Now</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">Support</h4>
            <ul className="flex flex-col gap-2 list-none">
              <li><Link href="/faq" className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline">Contact</Link></li>
              <li><a className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline cursor-pointer">Live Chat</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">Legal</h4>
            <ul className="flex flex-col gap-2 list-none">
              <li><a className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline cursor-pointer">Terms of Service</a></li>
              <li><a className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline cursor-pointer">Privacy Policy</a></li>
              <li><a className="text-sm text-slate-500 hover:text-slate-200 transition-colors no-underline cursor-pointer">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">© 2025 SkyHold. All rights reserved.</p>
          <p className="text-xs">✉ <a href="mailto:support@skyhold.io" className="text-slate-500 hover:text-slate-200 no-underline">support@skyhold.io</a></p>
        </div>
      </div>
    </footer>
  );
}