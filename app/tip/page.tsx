import Link from "next/link";
import { AQIconLogo } from "@/components/LogoWordmark";
import TipJar from "@/components/TipJar";
import ReferralPerks from "@/components/ReferralPerks";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Tip the Developer · AllotIQ",
  description: "Support independent, tracker-free tools for Florida medical marijuana patients.",
};

export default function TipPage() {
  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30 flex flex-col justify-between">
      {/* Top Navbar */}
      <nav className="w-full flex items-center justify-between gap-2 px-4 sm:px-8 py-3 sm:py-4 border-b border-white/5 bg-brand-slate/80 backdrop-blur-md sticky top-0 z-40">
        <Link href="/" className="flex items-center min-w-0">
          <AQIconLogo className="h-10 sm:h-12" priority />
        </Link>
        <Link
          href="/#calculator"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Calculator</span>
        </Link>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 py-8 sm:py-12 space-y-6">
        <TipJar />
        <ReferralPerks />
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-slate-500 flex flex-col items-center text-sm">
        <div className="flex items-center gap-2 mb-2">
          <span>&copy; 2026</span>
          <AQIconLogo className="h-5 sm:h-6" />
          <span>. All rights reserved.</span>
        </div>
        <p className="text-xs text-slate-500 max-w-md mt-1">
          Voluntary tips support free web tools and hosting. Not payment or license for the AllotIQ mobile application.
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs">
          <Link href="/" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Home
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/#calculator" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Calculator
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/setup" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Getting Set Up
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/privacy" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}
