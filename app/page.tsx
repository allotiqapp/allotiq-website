import Link from "next/link";
import Image from "next/image";
import InteractiveDemoPhone from "@/components/InteractiveDemoPhone";
import WaitlistForm from "@/components/WaitlistForm";
import { ShieldCheck, Zap, Activity } from "lucide-react";
import { AQIconLogo } from "@/components/LogoWordmark";
import FAQAccordion from "@/components/FAQAccordion";
import FeaturesSection from "@/components/FeaturesSection";
import PricingPillar from "@/components/PricingPillar";
import RollingCalculator from "@/components/RollingCalculator";
import TipBanner from "@/components/TipBanner";
import FormulaReveal from "@/components/FormulaReveal";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30">
      
      {/* Responsive Navigation with Hamburger Menu */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-40 pb-20 px-6 flex flex-col items-center text-center">
        <div className="absolute inset-0 top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-emerald/15 via-brand-slate/0 to-brand-slate/0 -z-10"></div>
        
        {/* Name Origin Formula: Allotment + IQ = ? (Interactive Hover/Tap Reveal) */}
        <FormulaReveal />

        {/* Hero Full Logo & Icon Image (3x Enlarged) */}
        <div className="mb-6 flex items-center justify-center w-full px-4">
          <Image
            src="/AQIconLogo-transparent.png"
            alt="AllotIQ = Allotment + IQ"
            width={900}
            height={300}
            priority
            className="h-28 sm:h-44 md:h-56 lg:h-64 w-auto max-w-full object-contain drop-shadow-[0_20px_60px_rgba(16,185,129,0.4)]"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-3xl leading-snug">
          Never wonder <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-cyan-400">
            if you&apos;ve got enough again!
          </span>
        </h1>
        <p className="mt-8 text-xl text-slate-400 max-w-2xl">
          The ultimate on-device calculator for your Florida medical marijuana limits. Track 35-day rolling flower windows, 70-day non-smokable routes, and predict exact return dates.
        </p>
        <div id="waitlist" className="mt-10 w-full flex flex-col items-center scroll-mt-24">
          <WaitlistForm />
          <p className="mt-3 text-sm text-slate-500">AllotIQ isn&apos;t live yet — be the first to know when it launches.</p>
          
          {/* App Store / Google Play Coming Soon Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-xs">
              <svg className="w-4 h-4 text-white shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.58.67-1.08 1.75-.95 2.78 1.01.08 2.03-.53 2.65-1.28z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[10px] text-slate-500">Coming soon to</span>
                <span className="font-semibold text-white">Apple App Store</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-xs">
              <svg className="w-4 h-4 text-white shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.43 2.43 0 0 1-.22-.395V2.21c.066-.14.14-.27.219-.396zm11.3 11.3l2.458-2.458-9.923-5.73 7.465 8.188zm0 1.772l-7.465 8.188 9.923-5.73-2.458-2.458zm1.245-1.245l3.284 1.896c1.107.64 1.107 1.68 0 2.32l-3.284 1.896 1.826-1.826a1.737 1.737 0 0 0 0-2.46l-1.826-1.826z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="block text-[10px] text-slate-500">Coming soon to</span>
                <span className="font-semibold text-white">Google Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stop Doing MMJ Math By Hand — Automation Value Strip */}
        <div className="mt-14 max-w-4xl w-full">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-emerald font-extrabold">
              Stop Doing Florida MMJ Math By Hand
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-3.5 text-left">
            {/* Card 1: Return Timelines */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400/90 flex items-center gap-1 mb-1">
                  <span className="text-xs font-black">✕</span> The Manual Chore
                </span>
                <p className="text-xs text-slate-400 leading-snug">
                  Counting 35 &amp; 70 days forward on your calendar or keeping spreadsheet logs.
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-emerald flex items-center gap-1 mb-0.5">
                  <span className="text-xs font-black">✓</span> AllotIQ Automates It
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  1-Tap MMUR sync with live countdowns &amp; customizable return alerts (midnight, 9 AM, or after work).
                </p>
              </div>
            </div>

            {/* Card 2: Dispensary Metric Eighth Math */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400/90 flex items-center gap-1 mb-1">
                  <span className="text-xs font-black">✕</span> The Manual Chore
                </span>
                <p className="text-xs text-slate-400 leading-snug">
                  Calculating Trulieve 0.123 oz vs 0.125 oz eighths in a phone calculator.
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-emerald flex items-center gap-1 mb-0.5">
                  <span className="text-xs font-black">✓</span> AllotIQ Automates It
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  Dynamic buying power shows exact purchasable jars across every MMTC.
                </p>
              </div>
            </div>

            {/* Card 3: Dual-Constraint Surprise */}
            <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400/90 flex items-center gap-1 mb-1">
                  <span className="text-xs font-black">✕</span> The Manual Chore
                </span>
                <p className="text-xs text-slate-400 leading-snug">
                  Getting turned away because your 35-day window was lower than your doctor cap.
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-emerald flex items-center gap-1 mb-0.5">
                  <span className="text-xs font-black">✓</span> AllotIQ Automates It
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  Dual-constraint resolution computes Florida Rule 64-4.224 in real time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Test-Drive Demo Phone Section */}
      <InteractiveDemoPhone />

      {/* Features Grid */}
      <section id="features" className="py-32 px-6 max-w-6xl mx-auto scroll-mt-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-brand-charcoal border border-white/5">
            <ShieldCheck className="w-10 h-10 text-brand-emerald mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">100% On-Device Privacy</h3>
            <p className="text-slate-400">
              No cloud accounts. No tracking. Your medical recommendations never leave your phone. 
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-brand-charcoal border border-white/5">
            <Activity className="w-10 h-10 text-brand-amber mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">Live MMUR Sync — or Manual Entry</h3>
            <p className="text-slate-400">
              Sync directly with your state registry with one tap, or skip that entirely and log purchases by hand. Your choice — either way, your limits stay accurate.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-brand-charcoal border border-white/5">
            <Zap className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">Offline Capable</h3>
            <p className="text-slate-400">
              In a dispensary with zero signal? All calculations and history are available fully offline.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* Pricing & Anti-Subscription Transparency Pillar */}
      <PricingPillar />

      {/* Interactive Florida Rolling Window Calculator */}
      <RollingCalculator />

      {/* Discreet Tip Developer Banner */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 mb-12">
        <TipBanner />
      </div>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-slate-500 flex flex-col items-center">
        <div className="flex items-center gap-5 mb-6">
          <a href="https://x.com/AllotIQ" target="_blank" rel="noopener noreferrer" aria-label="AllotIQ on X" className="text-slate-500 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
          </a>
          <a href="https://www.instagram.com/allotiq/" target="_blank" rel="noopener noreferrer" aria-label="AllotIQ on Instagram" className="text-slate-500 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>
          </a>
          <a href="https://www.facebook.com/AllotIQ" target="_blank" rel="noopener noreferrer" aria-label="AllotIQ on Facebook" className="text-slate-500 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.5-3.5h-3V7.8c0-1 .3-1.8 1.8-1.8H16.5V2.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7v3.5h2.8V21h3.7z" /></svg>
          </a>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span>&copy; 2026</span>
          <AQIconLogo className="h-6 sm:h-7" />
          <span>. All rights reserved.</span>
        </div>
        <p className="mt-2 text-sm">Made for Florida Patients (Rule 64-4.224)</p>
        <div className="mt-4 flex items-center gap-4 text-sm flex-wrap justify-center">
          <Link href="/35-day-rule" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            The 35-Day Rule
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/trulieve-eighth" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Trulieve Eighth Math
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

