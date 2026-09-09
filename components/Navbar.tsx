"use client";

import { useState } from "react";
import Link from "next/link";
import { AQIconLogo } from "@/components/LogoWordmark";
import { Menu, X } from "lucide-react";

// Anchor links are prefixed with "/" (not bare "#...") so they still work from pages other
// than the home page (e.g. /calculator, /tip) — Next.js Link navigates to "/" and scrolls to
// the section instead of silently doing nothing when the id doesn't exist on the current page.
const NAV_LINKS = [
  { label: "Live Demo", href: "/#demo" },
  { label: "Features", href: "/#features" },
  { label: "Calculator", href: "/#calculator" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Setup Guide", href: "/setup" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-brand-slate/90 backdrop-blur-md z-50 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick} className="flex items-center min-w-0">
          <AQIconLogo className="h-14 sm:h-16 md:h-20" priority />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-brand-emerald transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/#waitlist"
            onClick={handleLinkClick}
            className="hidden sm:inline-flex flex-shrink-0 whitespace-nowrap px-4 py-2 text-sm rounded-full bg-brand-emerald text-brand-slate font-semibold hover:bg-brand-emerald/90 transition-colors shadow-lg shadow-brand-emerald/20"
          >
            Get Early Access
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-brand-slate/95 backdrop-blur-xl px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2 px-3 rounded-lg text-base font-medium text-slate-200 hover:text-brand-emerald hover:bg-white/[0.03] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href="/#waitlist"
              onClick={handleLinkClick}
              className="block w-full text-center py-3 rounded-full bg-brand-emerald text-brand-slate font-semibold hover:bg-brand-emerald/90 transition-colors shadow-lg shadow-brand-emerald/20"
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
