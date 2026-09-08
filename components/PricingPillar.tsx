import { Shield, Sparkles, CheckCircle2, Ban } from "lucide-react";

export default function PricingPillar() {
  return (
    <section id="pricing" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-24">
      <div className="relative rounded-3xl bg-gradient-to-b from-brand-charcoal to-[#131d2b] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Honest, Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Pay Once. Own It Forever. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-cyan-400">
              Zero Subscriptions. Zero Ads.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Florida patients shouldn&apos;t have to pay a monthly bill just to calculate their legal medicine limits. 
            AllotIQ is a single, one-time upfront purchase. Once downloaded, every feature, widget, and future update is 100% unlocked.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 sm:gap-6 w-full text-left">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white">100% Unlocked</h3>
              </div>
              <p className="text-sm text-slate-400">
                All 7 route limits, 35-day & 70-day rolling math, Ask Mary voice assistant, and widgets are included out of the box.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                  <Ban className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white">No Monthly Fees</h3>
              </div>
              <p className="text-sm text-slate-400">
                No monthly or annual subscription charges. Download once and never see a paywall or recurring charge on your statement.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Zero Third-Party Ads</h3>
              </div>
              <p className="text-sm text-slate-400">
                No dispensary advertising deals, no tracking cookies, and no popups. Your medical data stays strictly on your phone.
              </p>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span>Available soon on the Apple App Store and Google Play Store</span>
          </div>
        </div>
      </div>
    </section>
  );
}
