"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Scale, 
  Mic, 
  ShieldCheck, 
  Layers, 
  Flame, 
  Smartphone, 
  Clock
} from "lucide-react";
import { 
  Screen1Dashboard, 
  Screen2Timeline, 
  Screen3Calculator, 
  Screen4Routes, 
  Screen5Mary, 
  InPhoneNavBar 
} from "./PhoneScreens";

type DeviceType = "iphone" | "samsung";

interface Scenario {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  statute: string;
  headline: string;
  description: string;
  whereToLook: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 0,
    title: "Can I Buy Flower Today?",
    subtitle: "Dual-Constraint Resolution",
    badge: "Most Common State Error",
    icon: Flame,
    color: "from-emerald-500 to-teal-400",
    statute: "Florida Rule 64-4.224 Invariant",
    headline: "Never Get Turned Away at the Dispensary",
    description: "Your doctor may have authorized 2.50 oz, but the state's 35-day rolling window is what the dispensary's register checks. AllotIQ automatically resolves the exact minimum between both constraints so your balance is always 100% accurate.",
    whereToLook: "Notice the glowing beacon on the 1.875 oz gauge and the green 'Binding Limit' badge below. That's your true legal limit today.",
  },
  {
    id: 1,
    title: "When Does My Limit Return?",
    subtitle: "Exact 35 & 70-Day Return Dates",
    badge: "Day T + 36 Countdown",
    icon: Clock,
    color: "from-amber-500 to-yellow-400",
    statute: "Statutory Rolling Window",
    headline: "Predict Exactly When Your Ounces Return",
    description: "Stop guessing when your flower returns. Every purchase drops off 35 days later at 12:00 AM EST (Day T + 36). AllotIQ calculates the exact date, time, and quantity returning to your available allotment.",
    whereToLook: "Look at the highlighted card: 'Tomorrow, 6:42 PM (+0.500 oz)'. As soon as that timestamp passes, your buying power increases.",
  },
  {
    id: 2,
    title: "Trulieve vs Standard Eighths",
    subtitle: "0.123 oz Metric Advantage",
    badge: "Save Your Allotment",
    icon: Scale,
    color: "from-cyan-500 to-blue-400",
    statute: "Trulieve Metric Eighth Rule",
    headline: "Keep More Flower With 0.123 oz Calculations",
    description: "Trulieve calculates eighths using the exact metric weight (3.5g / 28.3495g = 0.123 oz), while other dispensaries deduct a standard 0.125 oz. Buying two eighths at Trulieve saves you 0.004 oz, giving you extra room on your 2.500 oz limit.",
    whereToLook: "Look at the side-by-side cards: Trulieve leaves you with 1.629 oz remaining, compared to 1.625 oz at standard dispensaries.",
  },
  {
    id: 3,
    title: "Track Vapes & Edibles",
    subtitle: "Shared 70-Day Non-Smokable Pool",
    badge: "One Combined 24,500mg Cap",
    icon: Layers,
    color: "from-purple-500 to-indigo-400",
    statute: "Rule 64-4.224(4) Aggregate Cap",
    headline: "Vaping Does NOT Burn Your Flower Limit",
    description: "Smokable flower has its own separate 35-day cap, completely unaffected by anything else. But the other 6 routes — Inhalation, Oral, Edibles, Topical, Sublingual, and Suppository — are NOT independent of each other: Rule 64-4.224(4) binds all of them to one shared 24,500 mg aggregate limit per 70 days. Your doctor can authorize a different ceiling for each route, but everything you dispense across all 6 draws down the same combined pool.",
    whereToLook: "Look at the Non-Smoking Aggregate meter: that single combined total — not any one route's own bar — is what actually runs out.",
  },
  {
    id: 4,
    title: "Ask Mary, Siri & Google",
    subtitle: "Hands-Free Voice Shortcuts",
    badge: "Hey Siri / Google",
    icon: Mic,
    color: "from-emerald-400 to-cyan-400",
    statute: "100% On-Device Voice Engine",
    headline: "Zero-Touch in the Car: \"Hey Siri, Ask Mary...\"",
    description: "Heading to the dispensary? Keep your hands on the wheel. Say \"Hey Siri, ask Mary how much flower I have\" or \"Hey Google, check my AllotIQ balance\". Mary calculates your dual-constraint limits, upcoming drop-off dates, and doctor deadlines instantly through your car speakers—with zero cloud audio or tracking.",
    whereToLook: "Look at Mary's instant calculation reply. You can trigger this out loud via Siri or Google Assistant without even unlocking your phone.",
  },
];

export default function InteractiveDemoPhone() {
  const [device, setDevice] = useState<DeviceType>("iphone");
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const current = SCENARIOS[activeScenario];

  return (
    <section id="demo" className="relative py-24 px-6 max-w-7xl mx-auto scroll-mt-20 select-none">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-xs font-bold tracking-wide uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Interactive Test-Drive
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Test-Drive AllotIQ on Screen
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-400">
          Pick your phone frame, tap a dispensary scenario, and watch the animated pointers show you 
          <strong className="text-slate-200"> exactly where to look</strong> and how Florida&apos;s statutory limits work.
        </p>

        {/* Device Switcher Controls */}
        <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-brand-charcoal border border-white/10 shadow-xl">
          <button
            onClick={() => setDevice("iphone")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
              device === "iphone"
                ? "bg-brand-emerald text-slate-950 shadow-lg shadow-brand-emerald/30 scale-[1.02]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.58.67-1.08 1.75-.95 2.78 1.01.08 2.03-.53 2.65-1.28z" />
            </svg>
            Apple iPhone 16 Pro
          </button>

          <button
            onClick={() => setDevice("samsung")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 ${
              device === "samsung"
                ? "bg-brand-emerald text-slate-950 shadow-lg shadow-brand-emerald/30 scale-[1.02]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            Samsung Galaxy S24
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
        
        {/* Left Column: Action Buttons & Context Breakdown (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4 text-left order-2 lg:order-1">
          <p className="text-xs uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
            Select a Dispensary Scenario:
          </p>

          {/* 5 Scenario Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {SCENARIOS.map((scen, idx) => {
              const Icon = scen.icon;
              const isActive = activeScenario === idx;
              return (
                <button
                  key={scen.id}
                  onClick={() => setActiveScenario(idx)}
                  className={`relative p-3.5 rounded-2xl border text-left transition-all duration-200 group ${
                    isActive
                      ? "bg-[#162234] border-brand-emerald shadow-lg shadow-brand-emerald/10 ring-1 ring-brand-emerald/50"
                      : "bg-brand-charcoal/80 border-white/5 hover:border-white/20 hover:bg-brand-charcoal"
                  } ${idx === 4 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-brand-emerald text-slate-950" : "bg-white/5 text-slate-300 group-hover:text-white"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30" : "bg-white/5 text-slate-400"
                    }`}>
                      {scen.badge}
                    </span>
                  </div>

                  <p className={`text-xs font-bold leading-snug ${isActive ? "text-white" : "text-slate-200"}`}>
                    {scen.title}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {scen.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Scenario Detailed Explainer Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 p-5 rounded-3xl bg-gradient-to-br from-[#131F33] to-[#0D1624] border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-emerald" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-emerald">
                    {current.statute}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  Scenario {current.id + 1} of 5
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {current.headline}
              </h3>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                {current.description}
              </p>

              {/* Where to Look Callout Box */}
              <div className="p-3 rounded-2xl bg-emerald-950/40 border border-brand-emerald/40 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-brand-emerald text-slate-950 flex items-center justify-center shrink-0 mt-0.5 font-black text-[11px]">
                  👆
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-emerald uppercase tracking-wider">
                    Where to look on the phone:
                  </p>
                  <p className="text-xs text-emerald-200 mt-0.5">
                    {current.whereToLook}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: The Realistic Phone Chassis (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
          
          {/* Phone Frame Container */}
          <div 
            className={`relative w-[290px] sm:w-[310px] md:w-[330px] h-[610px] sm:h-[650px] bg-[#070D18] overflow-hidden transition-all duration-300 ${
              device === "iphone"
                ? "rounded-[3rem] border-[7px] border-[#2A313E] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] ring-1 ring-white/10"
                : "rounded-[2rem] border-[6px] border-[#323946] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] ring-1 ring-white/10"
            }`}
          >
            {/* Top Device Hardware Element */}
            {device === "iphone" ? (
              <>
                {/* iPhone Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#111] border border-slate-800" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* iPhone Status Bar */}
                <div className="absolute top-1.5 inset-x-0 px-6 flex items-center justify-between text-[10px] font-bold text-white z-30 pointer-events-none">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px]">5G</span>
                    {/* Battery */}
                    <div className="w-4 h-2 rounded-sm border border-white flex items-center p-0.5">
                      <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Samsung Punch-Hole Camera */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full z-40 border border-slate-700/60 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16202E]" />
                </div>

                {/* Samsung Status Bar */}
                <div className="absolute top-1.5 inset-x-0 px-4 flex items-center justify-between text-[10px] font-bold text-slate-300 z-30 pointer-events-none">
                  <span className="font-mono">10:00</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold">5G</span>
                    <span className="text-[9px]">98%</span>
                    <div className="w-3.5 h-2 rounded-2xs border border-slate-300 flex items-center p-0.2">
                      <div className="w-full h-full bg-emerald-400" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Screen Content Area (Height accounts for status bar and bottom nav) */}
            <div className="relative w-full h-[calc(100%-52px)] pt-9 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScenario}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full"
                >
                  {activeScenario === 0 && <Screen1Dashboard spotlight={true} />}
                  {activeScenario === 1 && <Screen2Timeline spotlight={true} />}
                  {activeScenario === 2 && <Screen3Calculator spotlight={true} />}
                  {activeScenario === 3 && <Screen4Routes spotlight={true} />}
                  {activeScenario === 4 && <Screen5Mary spotlight={true} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive Bottom In-Phone Navigation Bar */}
            <InPhoneNavBar 
              activeIndex={activeScenario} 
              onSelect={(idx) => setActiveScenario(idx)} 
            />

            {/* Bottom Hardware Indicator */}
            {device === "iphone" ? (
              <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none z-30">
                <div className="w-28 h-1 bg-white/40 rounded-full" />
              </div>
            ) : (
              <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none z-30">
                <div className="w-20 h-0.5 bg-slate-500 rounded-full" />
              </div>
            )}
          </div>

          <p className="mt-3 text-[11px] text-slate-500 text-center flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Tap scenarios on the left or tap the phone&apos;s bottom tabs directly!
          </p>
        </div>

      </div>
    </section>
  );
}
