"use client";

import React from "react";

export default function FormulaReveal() {
  return (
    <div
      aria-label="Brand name equation: Allotment + IQ ="
      className="relative mb-6 sm:mb-8 inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl backdrop-blur-md text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono tracking-tight select-none"
    >
      <span className="text-slate-100 font-extrabold tracking-wide">Allotment</span>
      <span className="text-brand-emerald font-black text-2xl sm:text-3xl md:text-4xl">+</span>
      <span className="text-cyan-400 font-extrabold tracking-wide">IQ</span>
      <span className="text-brand-emerald font-black text-2xl sm:text-3xl md:text-4xl">=</span>
    </div>
  );
}
