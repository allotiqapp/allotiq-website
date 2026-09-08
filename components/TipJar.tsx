"use client";

import { useState } from "react";
import { Coffee, Heart, Check, ExternalLink, ShieldCheck, DollarSign, Info } from "lucide-react";

interface TipJarProps {
  cashAppTag?: string;
  venmoHandle?: string;
  chimeSign?: string;
  stripePaymentUrl?: string;
}

const PRESET_AMOUNTS = [
  { value: 3, label: "$3", perk: "Fresh Coffee ☕" },
  { value: 5, label: "$5", perk: "An Eighth of Vibes 🌿" },
  { value: 10, label: "$10", perk: "Dev Lunch 🥪" },
  { value: 20, label: "$20", perk: "Super Supporter 🚀" },
];

export default function TipJar({
  cashAppTag = process.env.NEXT_PUBLIC_CASHAPP_TAG || "ChiTownSounds",
  venmoHandle = process.env.NEXT_PUBLIC_VENMO_HANDLE || "ChiTownSounds",
  chimeSign = process.env.NEXT_PUBLIC_CHIME_SIGN || "ChiTownSounds",
  stripePaymentUrl = process.env.NEXT_PUBLIC_STRIPE_PAY_URL || "",
}: TipJarProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(5);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeAmount = isCustom
    ? Math.max(1, parseFloat(customAmount) || 1)
    : selectedAmount;

  // Clean tags (kept strictly internal for URL resolution, never rendered publicly on cards)
  const cleanCashApp = cashAppTag.replace(/^\$/, "");
  const cleanVenmo = venmoHandle.replace(/^@/, "");
  const cleanChime = chimeSign.replace(/^\$/, "");

  // Pre-filled direct links (loads receiver info securely inside destination app)
  const cashAppUrl = `https://cash.app/$${cleanCashApp}/${activeAmount}`;
  const venmoUrl = `https://venmo.com/${cleanVenmo}?txn=pay&amount=${activeAmount}&note=${encodeURIComponent("Fueling AllotIQ Development 🌿")}`;
  const chimeUrl = `https://member.chime.com`;

  const copyToClipboard = (text: string, key: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleChimeClick = () => {
    copyToClipboard(`$${cleanChime}`, "chime");
    if (typeof window !== "undefined") {
      window.open(chimeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="support" className="pt-2 pb-10 px-6 max-w-4xl mx-auto scroll-mt-24">
      <div className="relative rounded-3xl bg-gradient-to-b from-brand-charcoal via-brand-slate to-[#0e1620] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header Badge & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2.5">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                <span>Fuel Independent Development</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                Buy the Developer a Coffee
              </h3>
              <p className="mt-1.5 text-sm text-slate-400 max-w-xl leading-relaxed">
                AllotIQ is 100% independent, private, and tracker-free. If this calculator or app saved you an allotment headache, small tips keep the servers running and fuel future updates.
              </p>
            </div>

            <div className="hidden sm:flex flex-col items-end shrink-0">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-brand-emerald" />
                Zero Platform Fees
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">100% goes directly to dev</span>
            </div>
          </div>

          {/* Explicit App Payment Disclaimer */}
          <div className="mt-5 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 font-semibold">Important Notice:</strong> This is a voluntary tip jar to help support free web tools, hosting, and independent development. <strong className="text-white">This is NOT payment for the AllotIQ mobile app.</strong> The mobile app is purchased separately as a one-time download on the Apple App Store and Google Play Store.
            </p>
          </div>

          {/* Amount Selector */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Choose Tip Amount
              </span>
              <span className="text-xs text-brand-emerald font-medium">
                Active: ${activeAmount.toFixed(0)}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PRESET_AMOUNTS.map((preset) => {
                const isSelected = !isCustom && selectedAmount === preset.value;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => {
                      setIsCustom(false);
                      setSelectedAmount(preset.value);
                    }}
                    className={`py-3 px-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-brand-emerald/20 border-brand-emerald text-white shadow-lg shadow-brand-emerald/10 ring-1 ring-brand-emerald/50"
                        : "bg-white/[0.03] border-white/5 text-slate-300 hover:bg-white/[0.06] hover:border-white/15"
                    }`}
                  >
                    <span className="text-lg font-extrabold text-white">
                      {preset.label}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {preset.perk}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Input Bar */}
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsCustom(true)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  isCustom
                    ? "bg-brand-emerald/20 border-brand-emerald text-white font-semibold"
                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                Custom Amount
              </button>
              {isCustom && (
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-slate-400 text-sm">$</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-36 pl-7 pr-3 py-1 text-sm rounded-lg bg-black/40 border border-brand-emerald/40 text-white focus:outline-none focus:ring-1 focus:ring-brand-emerald"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Direct Payment Rails (Privacy-First: Names Not Exposed On Page) */}
          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-3">
              Select Your Preferred Payment Method
            </span>

            <div className="grid sm:grid-cols-3 gap-3">
              {/* Cash App Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00D632]/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#00D632]/15 flex items-center justify-center font-bold text-[#00D632] text-base">
                        $
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Cash App</h4>
                        <span className="text-[11px] text-slate-400">Direct instant transfer</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-4">
                    Send ${activeAmount} directly via Cash App. Safe, instant, and 0% fees.
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <a
                    href={cashAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#00D632] hover:bg-[#00c02d] text-black text-xs font-bold transition-all shadow-md shadow-[#00D632]/20"
                  >
                    <span>Pay ${activeAmount} with Cash App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Venmo Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#008CFF]/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#008CFF]/15 flex items-center justify-center font-bold text-[#008CFF] text-base">
                        V
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Venmo</h4>
                        <span className="text-[11px] text-slate-400">Direct mobile tip</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-4">
                    Open Venmo with a pre-filled ${activeAmount} tip and note.
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <a
                    href={venmoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#008CFF] hover:bg-[#007be0] text-white text-xs font-bold transition-all shadow-md shadow-[#008CFF]/20"
                  >
                    <span>Pay ${activeAmount} with Venmo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Chime Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#25C974]/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#25C974]/15 flex items-center justify-center font-bold text-[#25C974] text-base">
                        C
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Chime</h4>
                        <span className="text-[11px] text-slate-400">Member-to-member</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-4">
                    Send directly from your Chime checking or savings app via ChimeSign.
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <button
                    type="button"
                    onClick={handleChimeClick}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25C974] hover:bg-[#20b868] text-black text-xs font-bold transition-all shadow-md shadow-[#25C974]/20"
                  >
                    {copiedKey === "chime" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>ChimeSign Copied! Opening Chime…</span>
                      </>
                    ) : (
                      <>
                        <span>Pay with Chime</span>
                        <ExternalLink className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Optional Stripe Payment Link Card if provided */}
            {stripePaymentUrl && (
              <div className="mt-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Apple Pay / Google Pay / Card</span>
                    <span className="text-[11px] text-slate-400">Checkout in 1 tap without any account</span>
                  </div>
                </div>
                <a
                  href={stripePaymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-purple-300 hover:text-purple-200 underline"
                >
                  <span>Pay via Stripe</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Privacy Safeguard Assurance */}
          <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-emerald shrink-0" />
              <span>
                <strong>Zero Third-Party Trackers:</strong> No advertising cookies, no data collection, and 0% platform tax.
              </span>
            </div>
            <div className="flex items-center gap-1 text-slate-400 shrink-0">
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
              <span>Thank you for supporting Florida patients!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
