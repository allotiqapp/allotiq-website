"use client";

import { useState } from "react";
import { Gift, Fuel, Sparkles, ExternalLink, Copy, Check, HeartHandshake, Award } from "lucide-react";

interface ReferralPerksProps {
  chimeUrl?: string;
  upsideUrl?: string;
  upsideCode?: string;
  cashAppReferralUrl?: string;
  cashAppReferralCode?: string;
  venmoReferralUrl?: string;
}

export default function ReferralPerks({
  chimeUrl = "https://www.chime.com/r/williammckinney5/?c=s",
  upsideUrl = "https://upside.app.link/WILLIAM24327",
  upsideCode = "WILLIAM24327",
  cashAppReferralUrl = "https://cash.app/refer/PSDCLQZ",
  cashAppReferralCode = "PSDCLQZ",
  venmoReferralUrl = "https://get.venmo.com/EMFFzqOvf6b",
}: ReferralPerksProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  return (
    <section className="pt-2 pb-20 px-6 max-w-4xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-b from-brand-charcoal via-brand-slate to-[#0e1620] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Glow ambient effects */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2.5">
                <Gift className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero-Cost Ways to Support</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                Other Ways to Support the Developer
              </h3>
              <p className="mt-1.5 text-sm text-slate-400 max-w-xl leading-relaxed">
                Want to help keep AllotIQ running ad-free without spending any money? Use these referral links for everyday apps we use. You get real sign-up cash or fuel savings, and we receive a referral kickback to support server hosting.
              </p>
            </div>

            <div className="hidden sm:flex flex-col items-end shrink-0">
              <span className="text-xs text-brand-emerald font-semibold flex items-center gap-1">
                <HeartHandshake className="w-4 h-4" />
                Win-Win Community Perks
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">Free perks for both of us</span>
            </div>
          </div>

          {/* Core Referral Cards Grid */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {/* Chime Banking Card ($100 Bonus) */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#25C974]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25C974]/15 border border-[#25C974]/30 flex items-center justify-center font-bold text-[#25C974] text-xl">
                      C
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Chime Banking</h4>
                      <span className="text-xs text-[#25C974] font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        $100 Cash Welcome Bonus
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Open a free Chime checking account and receive a <strong>$100 cash bonus</strong> when you set up an eligible direct deposit. Enjoy fee-free SpotMe overdraft, 2-day early paydays, and zero monthly fees. Terms apply.
                </p>

                <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-[11px] text-slate-400 mb-5">
                  <span className="text-slate-300 font-semibold block mb-0.5">Win-Win:</span>
                  You get the $100 bonus deposited directly to your balance, and Chime credits our account to help fund AllotIQ hosting bills.
                </div>
              </div>

              <div className="pt-3 border-t border-white/5">
                <a
                  href={chimeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25C974] hover:bg-[#20b868] text-black text-xs font-bold transition-all shadow-md shadow-[#25C974]/20"
                >
                  <span>Claim $100 Bonus on Chime</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Upside Card (Extra 15¢/gal + 10% Food) */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center font-bold text-cyan-400 text-lg">
                      <Fuel className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Upside Fuel & Dining</h4>
                      <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        +15¢/gal Gas & 10% Food Cash Back
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Save on every dispensary run! Use our invite code to get an extra <strong>15¢ per gallon cash back</strong> on your first gas fill-up, plus <strong>10% extra cash back</strong> on your first restaurant or grocery run.
                </p>

                <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-[11px] text-slate-400 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">Promo Code:</span>
                    <span className="font-mono text-cyan-300 font-bold">{upsideCode}</span>
                  </div>
                  <span className="text-slate-400 block mt-1">
                    Apply during signup or tap the link to auto-activate your fuel bonus.
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-2">
                <a
                  href={upsideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold transition-all shadow-md shadow-cyan-400/20"
                >
                  <span>Claim Upside Cash Back</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  title="Copy Upside Code"
                  onClick={() => copyToClipboard(upsideCode, "upside")}
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 transition-colors"
                >
                  {copiedKey === "upside" ? (
                    <Check className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Cash App Signup Card ($5 Free) */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00D632]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00D632]/15 border border-[#00D632]/30 flex items-center justify-center font-bold text-[#00D632] text-xl">
                      $
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Cash App</h4>
                      <span className="text-xs text-[#00D632] font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        $5 Free When You Send $5+
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Don&apos;t have Cash App yet? Create a new account with our referral code, send your first $5 or more to a friend, and Cash App deposits <strong>$5 free cash</strong> straight into your balance. Terms apply.
                </p>

                <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-[11px] text-slate-400 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">Referral Code:</span>
                    <span className="font-mono text-[#00D632] font-bold">{cashAppReferralCode}</span>
                  </div>
                  <span className="text-slate-400 block mt-1">
                    Enter code in profile settings or tap below to open referral link.
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-2">
                <a
                  href={cashAppReferralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00D632] hover:bg-[#00c02d] text-black text-xs font-bold transition-all shadow-md shadow-[#00D632]/20"
                >
                  <span>Get $5 on Cash App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  title="Copy Cash App Code"
                  onClick={() => copyToClipboard(cashAppReferralCode, "cashapp_code")}
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 transition-colors"
                >
                  {copiedKey === "cashapp_code" ? (
                    <Check className="w-4 h-4 text-[#00D632]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Venmo Invite Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#008CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#008CFF]/15 border border-[#008CFF]/30 flex items-center justify-center font-bold text-[#008CFF] text-xl">
                      V
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Venmo</h4>
                      <span className="text-xs text-[#008CFF] font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Join With Friend Invite
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  If you haven&apos;t joined Venmo yet, tap our invite link to download the app and set up your account for fast, zero-fee mobile transfers with friends and family.
                </p>

                <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-[11px] text-slate-400 mb-5">
                  <span className="text-slate-300 font-semibold block mb-0.5">Community Invite:</span>
                  Quick mobile onboarding link straight from our member profile.
                </div>
              </div>

              <div className="pt-3 border-t border-white/5">
                <a
                  href={venmoReferralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#008CFF] hover:bg-[#007be0] text-white text-xs font-bold transition-all shadow-md shadow-[#008CFF]/20"
                >
                  <span>Tap to Join Venmo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Community Bonus Tip: Google Opinion Rewards (0% Kickback · 100% For the Patient) */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-brand-slate to-emerald-500/10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/15 text-blue-300 text-[11px] font-semibold mb-1">
                  <span>Patient Pro-Tip · 100% Free For You</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Earn Real Money for Apps with Google Opinion Rewards
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1 max-w-xl">
                  Answer 10-second surveys about local shops you visit. Google pays you real Play Store credits (on Android) or PayPal cash (on iPhone) — perfect for grabbing apps like AllotIQ completely free of charge!
                </p>
                <span className="text-[11px] text-slate-500 mt-1.5 block">
                  *The developer receives $0 from this — it is just a genuinely useful tool every smartphone owner should know about.
                </span>
              </div>
            </div>

            <a
              href="https://surveys.google.com/google-opinion-rewards/"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold transition-all shrink-0"
            >
              <span>Download Google Rewards</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
