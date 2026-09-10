import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";
import { AQIconLogo } from "@/components/LogoWordmark";
import { ArrowLeft, Calculator, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Florida's 35-Day Medical Marijuana Rule, Explained | AllotIQ",
  description:
    "How Florida's 35-day rolling flower limit under Rule 64-4.224 actually works: a real rolling window (not a calendar reset), worked examples, and why your doctor's cap and the dispensary's cap aren't always the same number.",
  keywords: [
    "Florida 35 day rule",
    "Florida medical marijuana rolling limit",
    "Rule 64-4.224",
    "Florida MMJ flower limit",
    "35 day rolling window marijuana",
    "Florida medical marijuana possession limit",
  ],
  openGraph: {
    title: "Florida's 35-Day Medical Marijuana Rule, Explained",
    description:
      "A real rolling window, not a calendar reset — how Florida's 35-day flower limit actually counts, with worked examples.",
    url: "https://allotiq.com/35-day-rule",
    siteName: "AllotIQ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AllotIQ — Florida MMJ Allotment Tracker" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida's 35-Day Medical Marijuana Rule, Explained",
    description: "How the rolling window actually counts, with worked examples.",
    images: ["/og-image.png"],
  },
};

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Does my 35-day limit "reset" every 35 days like a subscription?',
    a: "No — that's the single most common misunderstanding. It's a rolling window, not a calendar period. Every day, the system looks back exactly 35 days and totals what you've purchased in that window. There's no fixed reset date; every purchase you make starts its own private 35-day countdown, and it drops out of the total the instant that countdown hits zero — one purchase at a time, not all at once.",
  },
  {
    q: "Why did the dispensary tell me I have less than my doctor authorized?",
    a: "Your doctor's order sets a ceiling (commonly 2.5 oz per 35 days for flower, more with a Routine Frequency Exception). But the dispensary's register checks a second, independent number: how much you've actually bought in the trailing 35 days. Whichever number is lower — the doctor's ceiling or your rolling usage — is what you can buy today. Reaching your doctor's authorized amount doesn't mean you've reached your rolling limit, and vice versa.",
  },
  {
    q: "If I buy 1 oz today, exactly when do I get that ounce back?",
    a: "35 days later, at midnight. More precisely: it clears at 12:00 AM Eastern on day T+36 (the day after the 35-day window closes), not day T+35 itself and not \"some time that day\" — the full ounce becomes available all at once, at that exact moment.",
  },
  {
    q: "Does buying non-smokable products (vapes, oils, edibles) affect my 35-day flower limit?",
    a: "No. Smokable flower has its own separate 35-day cap that nothing else touches. The other 6 routes (Inhalation, Oral, Edibles, Topical, Sublingual, Suppository) are a completely different bucket — see our breakdown of how those routes share one combined 70-day pool.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ThirtyFiveDayRulePage() {
  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />

      <article className="pt-28 sm:pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to AllotIQ Home
        </Link>

        <span className="inline-block px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-bold uppercase tracking-wider mb-5">
          Rule 64-4.224
        </span>

        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Florida&apos;s 35-Day Medical Marijuana Rule, Explained
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          If you&apos;ve ever been told you have less flower available than your doctor authorized, this is
          almost always why. It&apos;s a rolling window, not a monthly reset — and the difference matters
          every time you walk into a dispensary.
        </p>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-bold text-white">The rule in one sentence</h2>
          <p className="text-slate-300 leading-relaxed">
            Under Florida Administrative Code Rule 64-4.224, a qualified patient with a standard order may
            not have dispensed to them more than <strong className="text-white">2.5 ounces of smokable flower</strong>{" "}
            in any rolling 35-day period. Patients with a physician-certified Routine Frequency Exception
            (RFE) can be authorized for more. This is a per-patient possession limit checked at the point of
            sale — the dispensary&apos;s register enforces it directly.
          </p>
        </section>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-bold text-white">It&apos;s a rolling window, not a calendar month</h2>
          <p className="text-slate-300 leading-relaxed">
            This is the part almost everyone gets wrong the first time. A &quot;35-day limit&quot; sounds like it
            should work like a phone plan — a fixed period that resets on the same date every cycle. It
            doesn&apos;t. Every single day, the system asks one question:{" "}
            <em className="text-slate-200">&quot;How much has this patient bought in the last 35 days, counting back from right now?&quot;</em>
          </p>
          <p className="text-slate-300 leading-relaxed">
            That means every purchase has its own private countdown. If you buy flower on three different
            days, you have three different 35-day windows ticking down at once — each one clearing
            independently, on its own schedule, not all together.
          </p>
        </section>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-bold text-white">A worked example</h2>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
            <p className="text-slate-300 leading-relaxed">
              Say your doctor authorizes the standard 2.5 oz, and you buy exactly that much in one visit on{" "}
              <strong className="text-white">July 1</strong>.
            </p>
            <ul className="space-y-2 text-slate-300 leading-relaxed list-disc pl-5">
              <li>
                From July 1 through August 4, your rolling 35-day total is stuck at <strong className="text-white">2.5 oz</strong> — you&apos;re at your limit and can&apos;t buy more flower, even though your doctor&apos;s authorization never changed.
              </li>
              <li>
                On <strong className="text-white">August 5</strong> (day T+35), that July 1 purchase is still inside the window — it only just barely counts.
              </li>
              <li>
                At <strong className="text-white">12:00 AM Eastern on August 6</strong> (day T+36), the window finally closes on that purchase. The full 2.5 oz returns to your available balance all at once.
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              Buy in smaller amounts across multiple visits instead, and each purchase clears on its own
              schedule — which is why patients who buy in increments almost always have more available at
              any given moment than someone who buys their whole allotment in one trip.
            </p>
          </div>
        </section>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-bold text-white">Two different numbers, and the lower one wins</h2>
          <p className="text-slate-300 leading-relaxed">
            Your doctor&apos;s order and the dispensary&apos;s register are checking two genuinely different
            things:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Doctor&apos;s Order</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                A fixed authorization — e.g. &quot;up to 2.5 oz per 35 days.&quot; This is a ceiling that doesn&apos;t
                change day to day.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-emerald/30 bg-brand-emerald/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-emerald mb-2">Rolling Balance</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                What you&apos;ve actually bought in the trailing 35 days, recalculated every single day as old
                purchases drop off.
              </p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            What you can buy <em className="text-slate-200">today</em> is the minimum of those two numbers.
            Getting turned away at the counter almost never means your doctor&apos;s authorization was
            revoked — it means your rolling balance hasn&apos;t caught up yet.
          </p>
        </section>

        <div className="rounded-3xl bg-gradient-to-br from-[#131F33] to-[#0D1624] border border-brand-emerald/30 shadow-2xl p-8 sm:p-10 text-center relative overflow-hidden mb-14">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stop Tracking This By Hand</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            AllotIQ Tracks Every Purchase&apos;s Own Countdown Automatically
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Connect your Florida MMUR account once. AllotIQ reconstructs your real rolling balance from
            your actual purchase history and tells you the exact date and time each purchase clears — no
            spreadsheets, no counting days on a calendar.
          </p>
          <div className="max-w-md mx-auto mb-6">
            <WaitlistForm />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" /> 1-Tap MMUR Sync
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-emerald" /> 100% On-Device Privacy
            </span>
          </div>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-emerald hover:underline"
          >
            <Calculator className="w-4 h-4" />
            Or try the free return-date calculator, no account needed
          </Link>
        </div>

        <section className="mb-4">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 className="text-base font-semibold text-white mb-1.5">{item.q}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-slate-500 text-sm mt-14 leading-relaxed">
          Curious how non-smokable routes work instead?{" "}
          <Link href="/trulieve-eighth" className="text-brand-emerald hover:underline">
            Read about Trulieve&apos;s metric eighth math
          </Link>
          , or head back to the{" "}
          <Link href="/calculator" className="text-brand-emerald hover:underline">
            full calculator
          </Link>
          .
        </p>
      </article>

      <footer className="border-t border-white/5 py-12 px-6 text-center text-slate-500">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span>&copy; 2026</span>
          <AQIconLogo className="h-6 sm:h-7" />
          <span>. All rights reserved.</span>
        </div>
        <p className="mt-2 text-sm">Made for Florida Patients (Rule 64-4.224)</p>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm flex-wrap">
          <Link href="/" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Home
          </Link>
          <span className="text-slate-700">·</span>
          <Link href="/calculator" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
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
          <span className="text-slate-700">·</span>
          <Link href="/terms" className="text-slate-400 hover:text-brand-emerald transition-colors underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
