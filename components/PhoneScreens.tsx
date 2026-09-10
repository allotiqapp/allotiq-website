"use client";

import React from "react";
import { 
  Calendar, 
  Scale, 
  Mic, 
  Clock, 
  CheckCircle2, 
  Info, 
  Layers, 
  LayoutDashboard 
} from "lucide-react";

export interface ScreenProps {
  onNavigate?: (screenIndex: number) => void;
}

// Visual pulsing spotlight pinpointing where to look on the screen
export function WhereToLookBeacon({ 
  top, 
  left, 
  label, 
  align = "bottom" 
}: { 
  top: string; 
  left: string; 
  label: string;
  align?: "top" | "bottom" | "left" | "right";
}) {
  return (
    <div 
      className="absolute pointer-events-none z-30 flex items-center justify-center transition-all duration-500" 
      style={{ top, left, transform: "translate(-50%, -50%)" }}
    >
      {/* Expanding beacon rings */}
      <span className="absolute -inset-3 rounded-full bg-emerald-400/40 animate-ping duration-1000" />
      <span className="absolute -inset-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
      <span className="relative block w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white shadow-[0_0_15px_rgba(52,211,153,1)]" />

      {/* Floating tooltip */}
      <div 
        className={`absolute whitespace-nowrap px-2.5 py-1 rounded-lg bg-emerald-950/95 border border-emerald-400/60 shadow-xl backdrop-blur-md text-[10px] font-bold text-emerald-200 flex items-center gap-1.5 ${
          align === "bottom" ? "top-5 left-1/2 -translate-x-1/2" :
          align === "top" ? "bottom-5 left-1/2 -translate-x-1/2" :
          align === "left" ? "right-5 top-1/2 -translate-y-1/2" :
          "left-5 top-1/2 -translate-y-1/2"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        {label}
      </div>
    </div>
  );
}

function CircularGauge({ value, unit, pct }: { value: string; unit: string; pct: number }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const clampedPct = Math.max(0, Math.min(1, pct));
  const dash = c * clampedPct;

  const isZero = clampedPct <= 0.001;
  const isLow = clampedPct <= 0.15 && !isZero;

  const strokeColor = isZero ? "#EF4444" : isLow ? "#F59E0B" : "#10B981";
  const textColor = isZero ? "text-red-400" : isLow ? "text-amber-400" : "text-emerald-400";
  const gradStart = isZero ? "#EF4444" : isLow ? "#F59E0B" : "#10B981";
  const gradMid = isZero ? "#F87171" : isLow ? "#FBBF24" : "#34D399";
  const gradEnd = isZero ? "#DC2626" : isLow ? "#D97706" : "#059669";

  return (
    <div className="relative w-[124px] h-[124px]">
      <svg viewBox="0 0 110 110" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="phoneGaugeGradDynamic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradStart} />
            <stop offset="50%" stopColor={gradMid} />
            <stop offset="100%" stopColor={gradEnd} />
          </linearGradient>
        </defs>
        <circle cx="55" cy="55" r={r} stroke="#1F2937" strokeWidth="10" />
        {dash > 0 && (
          <circle
            cx="55" cy="55" r={r}
            stroke={strokeColor} strokeWidth="14" strokeLinecap="round"
            strokeDasharray={`${dash} ${c}`}
            transform="rotate(-90 55 55)"
            opacity="0.25"
            style={{ filter: "blur(5px)" }}
          />
        )}
        {dash > 0 && (
          <circle
            cx="55" cy="55" r={r}
            stroke="url(#phoneGaugeGradDynamic)" strokeWidth="10" strokeLinecap="round"
            strokeDasharray={`${dash} ${c}`}
            transform="rotate(-90 55 55)"
            className="transition-all duration-300"
          />
        )}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-2xl font-black text-white tracking-tight tabular-nums">{value}</span>
        <span className={`text-[10px] font-extrabold ${textColor} tracking-wider uppercase`}>{unit}</span>
      </div>
    </div>
  );
}

// SCREEN 1: DASHBOARD (Authentic Real-App UI: Dual-Constraint Resolution)
export function Screen1Dashboard({ spotlight = true }: { spotlight?: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#0B1220] p-3.5 flex flex-col justify-between select-none text-left">
      <div className="space-y-3">
        {/* Top Header / Patient Profile Banner */}
        <div className="pb-2 border-b border-white/5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-bold text-white">Florida MMUR Active</p>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[9px] font-mono text-slate-400">FL-MMUR-882194</span>
              <span className="text-[8px] text-slate-500">•</span>
              <span className="text-[8px] text-emerald-400/90 font-medium">Card Exp: Nov 2026</span>
            </div>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
            SYNCED
          </span>
        </div>

        {/* Hero Featured Route Card (Smokable Flower) */}
        <div className="relative p-3 rounded-2xl bg-gradient-to-br from-[#131F33] to-[#0D1624] border border-white/10 shadow-lg">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-base">🌿</span>
              <div>
                <p className="text-xs font-bold text-white leading-tight">Smokable Flower</p>
                <p className="text-[8px] text-slate-400">35-Day Rolling Statutory Window</p>
              </div>
            </div>
            <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              75% Available
            </span>
          </div>

          <div className="flex items-center gap-3 my-1">
            <div className="relative shrink-0">
              <CircularGauge value="1.875" unit="OZ FLOWER" pct={0.75} />
              {spotlight && (
                <WhereToLookBeacon 
                  top="50%" 
                  left="50%" 
                  label="Look here: Live Usable Balance" 
                  align="bottom" 
                />
              )}
            </div>

            <div className="flex-1 space-y-1">
              <div>
                <p className="text-[8px] uppercase tracking-wider font-extrabold text-slate-400">Dispensable Today</p>
                <p className="text-lg font-black text-emerald-400 font-mono leading-tight">1.875 <span className="text-xs font-bold text-slate-300">oz</span></p>
              </div>

              <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[9px] text-slate-300 leading-tight">
                <span className="text-slate-400 font-mono font-medium">Usable:</span> <strong className="text-white">15</strong> eighths (<strong className="text-emerald-300">15.2</strong> Trulieve 3.5g)
              </div>
            </div>
          </div>
        </div>

        {/* Dual Constraint Comparison Cards */}
        <div className="space-y-1.5">
          <div className="bg-[#131F33] border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-slate-400 font-medium">Doctor 70-Day Order Cap</p>
              <p className="text-xs font-bold text-white">2.500 oz</p>
            </div>
            <span className="text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
              Authorized
            </span>
          </div>

          <div className="relative bg-emerald-950/30 border-2 border-emerald-500/60 rounded-xl p-2.5 flex items-center justify-between shadow-[0_0_12px_rgba(16,185,129,0.12)]">
            <div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <p className="text-[9px] text-emerald-300 font-bold">35-Day Rolling Limit</p>
              </div>
              <p className="text-xs font-black text-emerald-400">1.875 oz</p>
            </div>
            <span className="text-[8px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ✓ Binding Limit
            </span>
          </div>
        </div>
      </div>

      {/* Footer Dual Constraint Statutory Note */}
      <div className="mt-2 p-2 rounded-xl bg-[#111C2E] border border-white/5 text-[9px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1 font-mono text-[8px] text-emerald-400/90">
          min(2.500, 1.875) = 1.875 oz
        </span>
        <span className="text-[8px] text-slate-400 font-medium">Rule 64-4.224 Law</span>
      </div>
    </div>
  );
}

// SCREEN 2: RETURN SCHEDULE TIMELINE (Day T + 36 & Day T + 71)
export function Screen2Timeline({ spotlight = true }: { spotlight?: boolean }) {
  const drops = [
    {
      time: "Tomorrow, 6:42 PM",
      amount: "+0.500 oz",
      route: "Smokable Flower",
      status: "35-Day Return",
      highlight: true
    },
    {
      time: "Friday, Sep 12",
      amount: "+3,500 mg",
      route: "Inhalation (Vapes)",
      status: "70-Day Return",
      highlight: false
    },
    {
      time: "Monday, Sep 15",
      amount: "+0.250 oz",
      route: "Smokable Flower",
      status: "35-Day Return",
      highlight: false
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#0B1220] p-4 flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-left">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Predictive Forecast</p>
            <p className="text-xs font-bold text-white flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Next Returning Allotment
            </p>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
            35 & 70-DAY
          </span>
        </div>

        <div className="space-y-2.5 text-left">
          {drops.map((d, i) => (
            <div 
              key={i} 
              className={`relative p-2.5 rounded-xl border transition-all ${
                d.highlight 
                  ? "bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.15)]" 
                  : "bg-[#131F33] border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" /> {d.time}
                </span>
                <span className={`text-[9px] font-semibold px-1.5 py-0.2 rounded ${
                  d.highlight ? "bg-emerald-500/20 text-emerald-300" : "bg-white/5 text-slate-400"
                }`}>
                  {d.status}
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-black text-white">{d.amount}</span>
                <span className="text-[10px] font-medium text-emerald-400">{d.route}</span>
              </div>

              {d.highlight && spotlight && (
                <WhereToLookBeacon 
                  top="50%" 
                  left="50%" 
                  label="Look here: Day T + 36 Exact Return" 
                  align="bottom" 
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 p-2.5 rounded-lg bg-[#111C2E] border border-white/5 text-[9px] text-slate-400 flex items-center gap-2 text-left">
        <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>Smokable returns on Day 36 at 12:00 AM. Non-smokables return on Day 71.</span>
      </div>
    </div>
  );
}

// SCREEN 3: TRULIEVE 0.123 OZ VS STANDARD CONVERTER
export function Screen3Calculator({ spotlight = true }: { spotlight?: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#0B1220] p-4 flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-left">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Flower Converter</p>
            <p className="text-xs font-bold text-white flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-emerald-400" /> Trulieve vs Standard
            </p>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
            2 EIGHTHS
          </span>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-2 gap-2 text-left my-2">
          {/* Trulieve Card */}
          <div className="relative p-2.5 rounded-xl bg-emerald-950/40 border-2 border-emerald-500/70 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-black text-emerald-400">Trulieve</span>
              <span className="text-[8px] font-bold px-1 rounded bg-emerald-500/20 text-emerald-300">0.123 oz</span>
            </div>
            <p className="text-[8px] text-slate-400">Dispenses:</p>
            <p className="text-sm font-black text-white">0.246 oz</p>
            <div className="mt-2 pt-1.5 border-t border-emerald-500/20">
              <p className="text-[8px] text-slate-400">Balance Remaining:</p>
              <p className="text-xs font-bold text-emerald-400">1.629 oz</p>
            </div>

            {spotlight && (
              <WhereToLookBeacon 
                top="40%" 
                left="50%" 
                label="Trulieve: 0.123 oz/eighth" 
                align="bottom" 
              />
            )}
          </div>

          {/* Standard Dispensary Card */}
          <div className="p-2.5 rounded-xl bg-[#131F33] border border-white/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-slate-200">Other MMTCs</span>
              <span className="text-[8px] font-bold px-1 rounded bg-white/10 text-slate-400">0.125 oz</span>
            </div>
            <p className="text-[8px] text-slate-400">Dispenses:</p>
            <p className="text-sm font-bold text-slate-200">0.250 oz</p>
            <div className="mt-2 pt-1.5 border-t border-white/5">
              <p className="text-[8px] text-slate-400">Balance Remaining:</p>
              <p className="text-xs font-bold text-slate-300">1.625 oz</p>
            </div>
          </div>
        </div>

        {/* Advantage Banner */}
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-left">
          <div className="flex items-center justify-between text-[10px] font-bold text-emerald-300">
            <span>Trulieve Metric Advantage:</span>
            <span className="font-mono text-emerald-400">+0.004 oz Saved</span>
          </div>
          <p className="text-[8px] text-slate-400 mt-1">
            Trulieve calculates 3.5g / 28.3495g = 0.123 oz, preserving more of your 2.500 oz limit.
          </p>
        </div>
      </div>

      <div className="mt-2 p-2 rounded-lg bg-[#111C2E] border border-white/5 text-[9px] text-slate-400 flex items-center justify-between">
        <span>Min Flower Usable:</span>
        <span className="font-bold text-emerald-400 font-mono">0.123 oz threshold</span>
      </div>
    </div>
  );
}

// SCREEN 4: SMOKING'S OWN CAP + THE SHARED NON-SMOKING AGGREGATE POOL (Rule 64-4.224(4))
export function Screen4Routes({ spotlight = true }: { spotlight?: boolean }) {
  // Rule 64-4.224(4): "An aggregate 70-day supply limit of marijuana, other than marijuana in a
  // form for smoking, shall not exceed 24,500 mg of THC" — Inhalation, Oral, Edibles, Topical,
  // Sublingual, and Suppository all draw down ONE shared pool, not six independent ones. Only
  // Smoking (flower) has its own separate, unrelated 35-day cap. The per-route figures below are
  // each route's contribution toward that single combined total, not a separate cap of its own.
  const nonSmokingBreakdown = [
    { name: "Inhalation (Vapes)", used: 8300 },
    { name: "Oral", used: 5900 },
    { name: "Edibles", used: 2100 },
    { name: "Sublingual", used: 1900 },
  ];
  const aggregateCap = 24500;
  const aggregateUsed = nonSmokingBreakdown.reduce((sum, r) => sum + r.used, 0);
  const aggregatePct = Math.round((aggregateUsed / aggregateCap) * 100);

  return (
    <div className="relative w-full h-full bg-[#0B1220] p-4 flex flex-col justify-between select-none text-left">
      <div>
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Rule 64-4.224(4)</p>
            <p className="text-xs font-bold text-white flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> 1 Flower Cap + 1 Shared Pool
            </p>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
            AGGREGATE POOL
          </span>
        </div>

        <div className="space-y-2 mt-1">
          {/* Smoking: its own separate cap, unrelated to everything else */}
          <div className="p-2 rounded-xl border bg-[#131F33] border-white/5">
            <div className="flex items-center justify-between text-[10px] font-bold mb-1">
              <span className="text-slate-200">Smokable Flower</span>
              <span className="text-slate-300 font-mono">1.875 / 2.500 oz</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400" style={{ width: "75%" }} />
            </div>
          </div>

          {/* The one shared aggregate pool — this is what actually runs out for non-smoking routes */}
          <div className="relative p-2 rounded-xl border transition-all bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
            <div className="flex items-center justify-between text-[10px] font-bold mb-1">
              <span className="text-slate-200">Non-Smoking Aggregate</span>
              <span className={aggregatePct >= 100 ? "text-rose-400 font-mono" : "text-slate-300 font-mono"}>
                {aggregateUsed.toLocaleString()} / {aggregateCap.toLocaleString()} mg
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400"
                style={{ width: `${aggregatePct}%` }}
              />
            </div>
            <div className="mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[8px] text-slate-400 font-mono">
              {nonSmokingBreakdown.map((r) => (
                <span key={r.name}>{r.name}: {r.used.toLocaleString()}mg</span>
              ))}
            </div>

            {spotlight && (
              <WhereToLookBeacon
                top="50%"
                left="75%"
                label="Shared 70-Day Cap"
                align="left"
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-2 p-2 rounded-lg bg-[#111C2E] border border-white/5 text-[9px] text-slate-400 flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span>Vaping heavily does <strong>NOT</strong> touch your separate flower cap — but it DOES count against the shared non-smoking pool with your edibles and oral doses.</span>
      </div>
    </div>
  );
}

// SCREEN 5: ASK MARY (Voice AI Assistant)
export function Screen5Mary({ spotlight = true }: { spotlight?: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#0B1220] p-4 flex flex-col justify-between select-none text-left">
      <div>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Voice Assistant</p>
            <p className="text-xs font-bold text-white flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 text-emerald-400" /> Ask Mary (On-Device)
            </p>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
            100% PRIVATE
          </span>
        </div>

        {/* Chat Bubbles */}
        <div className="space-y-3 mt-2">
          {/* User query */}
          <div className="flex justify-end">
            <div className="max-w-[85%] bg-emerald-500 text-slate-950 font-bold text-[11px] px-3 py-2 rounded-2xl rounded-tr-sm shadow-md">
              &quot;Mary, how much flower do I have left right now?&quot;
            </div>
          </div>

          {/* Mary reply */}
          <div className="relative flex justify-start">
            <div className="max-w-[90%] bg-[#131F33] border border-emerald-500/40 text-slate-200 text-[11px] px-3 py-2 rounded-2xl rounded-tl-sm shadow-md space-y-1">
              <p>
                You have <span className="text-emerald-400 font-black">1.875 oz</span> of flower available today.
              </p>
              <p className="text-[10px] text-slate-400">
                Your next <span className="text-white font-bold">+0.500 oz</span> returns tomorrow at 6:42 PM.
              </p>
            </div>

            {spotlight && (
              <WhereToLookBeacon 
                top="50%" 
                left="50%" 
                label="Look here: Instant Voice Answer" 
                align="bottom" 
              />
            )}
          </div>
        </div>
      </div>

      {/* Voice Orb */}
      <div className="flex flex-col items-center justify-center my-auto pt-2">
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)]">
          <span className="absolute -inset-2 rounded-full bg-emerald-400/30 animate-ping" />
          <Mic className="w-6 h-6 text-slate-950" />
        </div>
        <p className="text-[10px] text-emerald-400 font-bold mt-2 animate-pulse">Mary is listening...</p>
        <p className="text-[8px] text-slate-500">Zero cloud audio • Processed on-device</p>
      </div>
    </div>
  );
}

// IN-PHONE BOTTOM NAVIGATION BAR
export function InPhoneNavBar({ 
  activeIndex, 
  onSelect 
}: { 
  activeIndex: number; 
  onSelect: (idx: number) => void;
}) {
  const tabs = [
    { label: "Home", icon: LayoutDashboard },
    { label: "Returns", icon: Clock },
    { label: "Calc", icon: Scale },
    { label: "Routes", icon: Layers },
    { label: "Mary", icon: Mic },
  ];

  return (
    <div className="w-full bg-[#070D18] border-t border-white/10 px-2 py-1.5 flex items-center justify-around z-20">
      {tabs.map((tab, idx) => {
        const Icon = tab.icon;
        const isActive = activeIndex === idx;
        return (
          <button
            key={tab.label}
            onClick={() => onSelect(idx)}
            className={`flex flex-col items-center gap-0.5 px-2 py-0.5 rounded-lg transition-all ${
              isActive ? "text-emerald-400 scale-105" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? "stroke-[2.5]" : "stroke-[1.5]"}`} />
            <span className={`text-[8px] ${isActive ? "font-bold" : "font-normal"}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Backwards-compatible aliases
export const Screen2Routes = Screen4Routes;
export const Screen3Timeline = Screen2Timeline;
export const Screen4Mary = Screen5Mary;
