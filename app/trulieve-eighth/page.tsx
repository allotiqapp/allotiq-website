import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";
import { AQIconLogo } from "@/components/LogoWordmark";
import { ArrowLeft, Calculator, CheckCircle2, Scale, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Trulieve's 0.123 oz Eighth vs a Standard 0.125 oz Eighth, Explained | AllotIQ",
  description:
    "Why Trulieve's eighth deducts 0.123 oz from your Florida MMJ allotment instead of the standard 0.125 oz — the exact metric math, how much buffer it actually saves you, and a side-by-side comparison table.",
  keywords: [
    "Trulieve 0.123 oz",
    "Trulieve metric eighth",
    "Trulieve eighth math",
    "Florida MMJ eighth ounce",
    "3.5 grams to ounces",
    "Trulieve vs standard eighth",
  ],
  openGraph: {
    title: "Trulieve's 0.123 oz Eighth vs a Standard 0.125 oz Eighth",
    description: "The exact metric math behind Trulieve's eighth, and how much allotment buffer it actually saves you.",
    url: "https://allotiq.com/trulieve-eighth",
    siteName: "AllotIQ",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AllotIQ — Florida MMJ Allotment Tracker" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trulieve's 0.123 oz Eighth vs a Standard 0.125 oz Eighth",
    description: "The exact metric math, and how much buffer it saves on your Florida MMJ allotment.",
    images: ["/og-image.png"],
  },
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "Is Trulieve's eighth actually smaller than other dispensaries'?",
    a: "No — it's the same 3.5 grams everyone else sells. The difference is only in how that weight gets converted to ounces on your Florida MMUR allotment. Trulieve converts using the exact metric formula; other dispensaries round to a standard fraction. You get the same amount of product either way — what differs is how much of your legal ounce-denominated limit that purchase uses up.",
  },
  {
    q: "Why does 0.123 oz vs 0.125 oz matter if it's such a small difference?",
    a: "On its own, 0.002 oz per eighth is tiny. But it compounds: over a full ounce (8 eighths), it's a real 0.016 oz of extra buffer against your 35-day rolling limit. For a patient buying at their cap regularly, that buffer can be the difference between qualifying for one more small purchase before your window resets or not.",
  },
  {
    q: "Does this affect my doctor's authorized amount?",
    a: "No. Your doctor's authorization (e.g. 2.5 oz per 35 days) never changes. This only affects how much of that authorization a given purchase actually consumes — buying the metric way just leaves you more room under the same ceiling.",
  },
  {
    q: "Do other Florida dispensaries ever use the 0.123 oz conversion too?",
    a: "It varies by MMTC and can change over time — this isn't a statewide standard, it's a per-dispensary rounding choice. AllotIQ reads the actual amount your MMUR record shows for each purchase rather than assuming either number, so your real balance is always accurate regardless of which convention a given dispensary uses.",
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

const COMPARISON_ROWS = [
  { size: "1 Eighth (3.5g)", tru: "0.123 oz", std: "0.125 oz" },
  { size: "Quarter / 2 Eighths (7.0g)", tru: "0.246 oz", std: "0.250 oz" },
  { size: "Half Ounce / 4 Eighths (14.0g)", tru: "0.492 oz", std: "0.500 oz" },
  { size: "Full Ounce / 8 Eighths (28.0g)", tru: "0.984 oz", std: "1.000 oz" },
];

export default function TrulieveEighthPage() {
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

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-5">
          <Scale className="w-3.5 h-3.5" />
          Trulieve Metric Eighth Rule
        </span>

        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
          Trulieve&apos;s 0.123 oz Eighth vs a Standard 0.125 oz Eighth
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          Same 3.5 grams of flower. Two different numbers taken off your Florida allotment, depending on
          which math the dispensary uses to convert grams to ounces.
        </p>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-bold text-white">Where the two numbers come from</h2>
          <p className="text-slate-300 leading-relaxed">
            Florida&apos;s medical marijuana limits are denominated in ounces, but flower is weighed and sold
            in grams. An eighth of an ounce is a physical product — 3.5 grams — but converting that back
            into the ounce figure your MMUR allotment tracks can be done two different ways:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Exact Metric Conversion</p>
              <p className="text-slate-300 leading-relaxed text-sm font-mono mb-2">3.5g ÷ 28.3495g/oz = 0.123 oz</p>
              <p className="text-slate-400 leading-relaxed text-xs">
                Divides the real gram weight by the real number of grams in a legal ounce (28.3495g).
                This is the math Trulieve uses.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Standard Fraction</p>
              <p className="text-slate-300 leading-relaxed text-sm font-mono mb-2">1 oz ÷ 8 = 0.125 oz</p>
              <p className="text-slate-400 leading-relaxed text-xs">
                Just divides a clean ounce into 8 equal fractions, ignoring the actual gram weight sold.
                Most other Florida MMTCs default to this.
              </p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Both describe the exact same physical product — a 3.5g eighth. The only thing that changes is
            how much of your ounce-denominated legal limit that purchase is recorded as using.
          </p>
        </section>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-bold text-white">Side-by-side, at every common size</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.03] text-left">
                  <th className="px-4 py-3 font-semibold text-slate-300">Product Size</th>
                  <th className="px-4 py-3 font-semibold text-cyan-400">Trulieve (0.123 Math)</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Standard (0.125 Math)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                    <td className="px-4 py-3 text-slate-300 border-t border-white/5">{row.size}</td>
                    <td className="px-4 py-3 text-cyan-300 font-mono border-t border-white/5">{row.tru}</td>
                    <td className="px-4 py-3 text-slate-400 font-mono border-t border-white/5">{row.std}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Buy a full ounce (8 eighths) the metric way, and it registers as <strong className="text-white">0.984 oz</strong>{" "}
            against your allotment instead of a full <strong className="text-white">1.000 oz</strong> — a real{" "}
            <strong className="text-brand-emerald">0.016 oz of extra buffer</strong> on top of your 35-day
            rolling limit, for buying the exact same product.
          </p>
        </section>

        <section className="space-y-5 mb-14">
          <h2 className="text-2xl font-bold text-white">Why this actually matters at the counter</h2>
          <p className="text-slate-300 leading-relaxed">
            Florida&apos;s{" "}
            <Link href="/35-day-rule" className="text-brand-emerald hover:underline">
              35-day rolling flower limit
            </Link>{" "}
            is checked in ounces at the register, down to the thousandth. If you&apos;re buying near your
            cap regularly, that extra 0.016 oz per ounce can be the difference between qualifying for one
            more small purchase before your rolling window catches up, or getting turned away. It&apos;s a
            small number that only shows up when you actually track it — which is exactly why most
            patients never notice it&apos;s there.
          </p>
        </section>

        <div className="rounded-3xl bg-gradient-to-br from-[#131F33] to-[#0D1624] border border-cyan-500/30 shadow-2xl p-8 sm:p-10 text-center relative overflow-hidden mb-14">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>No More Mental Math at the Counter</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            AllotIQ Converts Your Exact Buying Power, Automatically
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Connect your Florida MMUR account once. AllotIQ shows exactly how many eighths, quarters, or
            full ounces you can buy right now — at Trulieve&apos;s metric math or a standard dispensary&apos;s —
            without you doing a single calculation.
          </p>
          <div className="max-w-md mx-auto mb-6">
            <WaitlistForm />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 1-Tap MMUR Sync
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> 100% On-Device Privacy
            </span>
          </div>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-cyan-400 hover:underline"
          >
            <Calculator className="w-4 h-4" />
            Or try the free side-by-side converter, no account needed
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
          Want the full picture on rolling limits?{" "}
          <Link href="/35-day-rule" className="text-brand-emerald hover:underline">
            Read how Florida&apos;s 35-day rule actually counts
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
        </div>
      </footer>
    </main>
  );
}
