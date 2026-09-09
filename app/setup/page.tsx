import Link from "next/link";
import type { Metadata } from "next";
import { AQIconLogo } from "@/components/LogoWordmark";

export const metadata: Metadata = {
  title: "How to Connect Your Florida MMUR Account — Setup Guide | AllotIQ",
  description:
    "Step-by-step guide to connecting AllotIQ to your official Florida MMUR registry account: log in, 1-tap import your card, doctor's orders, and purchase history, and turn on Face ID sync.",
  openGraph: {
    title: "How to Connect Your Florida MMUR Account | AllotIQ",
    description: "A 5-step walkthrough for linking your Florida medical marijuana registry account to AllotIQ.",
    url: "https://allotiq.com/setup",
  },
};

const STEPS = [
  {
    title: "Open AllotIQ and go to Connect Account",
    body: "From the Profile tab, tap “Connect Real Florida MMUR.” This is the only screen in the app that asks for a login.",
  },
  {
    title: "Log in with your Florida MMUR account",
    body: "Use the same username and password you already use at mmuregistry.flhealth.gov — the official Florida medical marijuana registry site. AllotIQ loads that real state site directly inside the app; it's never a copy or a lookalike form. If you've never registered on the MMUR portal itself, you'll need to do that first through the state's own site before AllotIQ can read your account.",
  },
  {
    title: "Let it read your account automatically",
    body: "Once you're logged in, AllotIQ pulls your card expiration, doctor's orders, and purchase history straight from the page — you don't type any of it in by hand. This usually takes well under a minute.",
  },
  {
    title: "Tap “1-Tap Import to AllotIQ”",
    body: "When it's done reading, a banner appears summarizing what it found. Tap the button to save it to your dashboard.",
  },
  {
    title: "Turn on Face ID for next time (optional)",
    body: "If your device supports it, you'll be offered Face ID / Touch ID 1-Tap Sync. Turn it on and future syncs are a single tap — no retyping your password.",
  },
];

export default function SetupPage() {
  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30">
      <nav className="w-full flex items-center justify-between gap-2 px-4 sm:px-8 py-3 sm:py-4 border-b border-white/5">
        <Link href="/" className="flex items-center min-w-0">
          <AQIconLogo className="h-10 sm:h-12" priority />
        </Link>
        <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Getting set up</h1>
        <p className="text-slate-400 mb-14 leading-relaxed text-lg">
          Five steps, no paperwork. AllotIQ connects to your real Florida MMUR account and reads
          your existing records — nothing to fill out by hand.
        </p>

        <ol className="space-y-10">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-emerald/15 border border-brand-emerald/30 text-brand-emerald font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-1.5">{step.title}</h2>
                <p className="text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
          <p className="text-slate-400 leading-relaxed text-sm">
            Don&apos;t have a Florida MMUR account yet? That&apos;s set up directly through the state, not
            through AllotIQ — you&apos;ll need an active medical marijuana card first. Once you can
            log in at{" "}
            <a
              href="https://mmuregistry.flhealth.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-emerald hover:underline"
            >
              mmuregistry.flhealth.gov
            </a>
            , you&apos;re ready for step 2 above.
          </p>
        </div>
      </div>

      <footer className="border-t border-white/5 py-12 px-6 text-center text-slate-500">
        <p>Made for Florida Patients (Rule 64-4.224)</p>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm">
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
