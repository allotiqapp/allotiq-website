import Link from "next/link";
import PhoneWalkthrough from "@/components/PhoneWalkthrough";
import WaitlistForm from "@/components/WaitlistForm";
import { ShieldCheck, Zap, Activity } from "lucide-react";
import { LogoWordmark } from "@/components/LogoWordmark";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full flex items-center justify-between gap-2 px-4 sm:px-8 py-3 sm:py-4 bg-brand-slate/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-lg shadow-brand-emerald/20 flex-shrink-0 relative">
            {/* The uploaded interlocking AQ logo */}
            <img src="/icon.png" alt="AllotIQ Icon" className="w-full h-full object-cover" />
          </div>
          <LogoWordmark className="text-4xl sm:text-5xl" />
        </div>
        <a href="#waitlist" className="flex-shrink-0 whitespace-nowrap px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full bg-brand-emerald text-brand-slate font-semibold hover:bg-brand-emerald/90 transition-colors">
          Get Early Access
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center">
        <div className="absolute inset-0 top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-emerald/15 via-brand-slate/0 to-brand-slate/0 -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight">
          Never wonder <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-cyan-400">
            if you&apos;ve got enough again!
          </span>
        </h1>
        <p className="mt-8 text-xl text-slate-400 max-w-2xl">
          The ultimate on-device calculator for your medical state limits. Track 35-day rolling windows, 70-day non-smokable routes, and predict exact return dates.
        </p>
        <div id="waitlist" className="mt-10 w-full flex flex-col items-center scroll-mt-24">
          <WaitlistForm />
          <p className="mt-3 text-sm text-slate-500">AllotIQ isn&apos;t live yet — be the first to know when it launches.</p>
        </div>
      </section>

      {/* Scroll-jacking Phone Walkthrough Section */}
      <section className="mt-20">
        <PhoneWalkthrough />
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
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
            <h3 className="text-2xl font-semibold text-white mb-3">Live MMUR Sync</h3>
            <p className="text-slate-400">
              Sync directly with your state registry with one tap. Secure keychain storage safely manages your sessions.
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

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
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
          <LogoWordmark className="text-base" />
          <span>. All rights reserved.</span>
        </div>
        <p className="mt-2 text-sm">Made for Florida Patients (Rule 64-4.224)</p>
        <div className="mt-4 flex items-center gap-4 text-sm">
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
