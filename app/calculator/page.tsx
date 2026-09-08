import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import RollingCalculator from '@/components/RollingCalculator';
import TipBanner from '@/components/TipBanner';
import FAQAccordion from '@/components/FAQAccordion';
import WaitlistForm from '@/components/WaitlistForm';
import { AQIconLogo } from '@/components/LogoWordmark';
import { Sparkles, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Florida MMJ 35-Day Return & Allotment Calculator — Rule 64-4.224 | AllotIQ',
  description:
    'Free Florida medical marijuana calculator: Calculate exact 35-day flower and 70-day non-smokable return dates, or compare Trulieve 0.123 oz vs standard 0.125 oz eighths side-by-side with zero mental math.',
  keywords: [
    'Florida MMJ Calculator',
    '35 Day Rolling Limit Calculator',
    'Florida Medical Marijuana Return Date',
    'Trulieve 0.123 Calculator',
    'Rule 64-4.224 Calculator',
    'MMUR Calculator',
    'Allotment Return Date',
    'Florida Cannabis Calculator',
  ],
  openGraph: {
    title: 'Florida MMJ 35-Day Return & Allotment Calculator | AllotIQ',
    description:
      'Free Rule 64-4.224 calculator: Exact 35-day flower return dates, 70-day non-smokables, and Trulieve 0.123 oz vs 0.125 oz side-by-side comparison.',
    url: 'https://allotiq.com/calculator',
    siteName: 'AllotIQ',
    images: [
      {
        url: '/AQIconLogo.png',
        width: 1024,
        height: 341,
        alt: 'AllotIQ Florida MMJ 35-Day Return Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida MMJ 35-Day Return & Allotment Calculator | AllotIQ',
    description:
      'Free Florida medical marijuana calculator: exact 35-day return countdowns & Trulieve 0.123 oz math.',
    images: ['/AQIconLogo.png'],
  },
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30">
      <Navbar />

      <div className="pt-28 sm:pt-32 pb-16 px-6 max-w-5xl mx-auto">
        {/* Breadcrumb / Top Bar Actions */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to AllotIQ Home
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/tip"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 transition-all text-xs font-semibold group shadow-sm"
            >
              <span>Tip Jar</span>
              <span className="group-hover:scale-110 transition-transform">☕</span>
            </Link>
            <span className="px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-bold uppercase tracking-wider">
              100% Free Tool
            </span>
          </div>
        </div>

        {/* The Calculator */}
        <RollingCalculator />

        {/* Voluntary Tip Jar Banner for Free Tool Users */}
        <div className="mt-8 mb-6">
          <TipBanner />
        </div>

        {/* The Automate this on your phone High-Converting Bridge CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#131F33] to-[#0D1624] border border-brand-emerald/30 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tired of Calculating Return Dates on the Web?</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            AllotIQ Puts These Calculations on Your Phone Lock Screen
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Connect your Florida MMUR account once. AllotIQ automatically tracks your rolling 35-day flower window, converts Trulieve 0.123 oz metric eighths, and alerts you the moment ounces return — at midnight, 9:00 AM dispensary opening, or whatever custom time fits your schedule.
          </p>

          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> 1-Tap MMUR Sync
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> Zero Subscriptions
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-emerald" /> 100% On-Device Privacy
            </span>
          </div>
        </div>

        {/* Statutory FAQ */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions: Rule 64-4.224
          </h3>
          <FAQAccordion />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5 py-12 px-6 text-center text-slate-500 flex flex-col items-center">
        <div className="flex items-center gap-5 mb-6">
          <a
            href="https://x.com/AllotIQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AllotIQ on X"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/allotiq/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="AllotIQ on Instagram"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span>&copy; 2026</span>
          <AQIconLogo className="h-6 sm:h-7" />
          <span>. All rights reserved.</span>
        </div>
        <p className="mt-2 text-sm">Made for Florida Patients (Rule 64-4.224)</p>
        <div className="mt-4 flex items-center gap-4 text-sm">
          <Link href="/" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Home
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/setup" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Getting Set Up
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/privacy" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Privacy Policy
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/tip" className="text-slate-400 hover:text-amber-400 transition-colors underline">
            Tip Jar ☕
          </Link>
        </div>
      </footer>
    </main>
  );
}
