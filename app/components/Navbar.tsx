"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[68px] bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-shadow ${scrolled ? "shadow-sm" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-slate-900 no-underline">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
              <path d="M10 2L2 7l2 1v5l6 3 6-3V8l2-1-8-5z"/>
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "20px" }}>SkyHold</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors no-underline ${
                  pathname === href
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/order"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors no-underline"
        >
          Book Reservation
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="19" y2="6"/>
            <line x1="3" y1="11" x2="19" y2="11"/>
            <line x1="3" y1="16" x2="19" y2="16"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pb-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md no-underline"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 px-3 text-sm font-semibold text-white bg-blue-600 rounded-lg text-center no-underline"
          >
            Book Reservation →
          </Link>
        </div>
      )}
    </nav>
  );
}