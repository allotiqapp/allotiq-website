"use client";

import { useState, useId } from "react";
import { Calculator, Calendar, ArrowRight, Info, CheckCircle, Scale, Sparkles, Building2, Store } from "lucide-react";

type Mode = "return-date" | "converter";

const OZ_PRESETS = [
  { label: "2.500 oz (Full Cap)", val: 2.5 },
  { label: "1.000 oz (Ounce)", val: 1.0 },
  { label: "0.500 oz (Half)", val: 0.5 },
  { label: "0.250 oz (Quarter)", val: 0.25 },
  { label: "0.123 oz (Metric 1/8)", val: 0.123 },
];

export default function RollingCalculator() {
  const [mode, setMode] = useState<Mode>("converter");

  // Mode 1: Return Date Predictor State
  const [purchaseDate, setPurchaseDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  // Mode 2: Flower Allotment Converter State
  const [availableOz, setAvailableOz] = useState<number>(2.5);

  const dateInputId = useId();
  const converterInputId = useId();

  const getRelativeDate = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split("T")[0];
  };

  // Return date math for any offset
  const computeOffsetDate = (offset: number) => {
    if (!purchaseDate) return null;
    const [year, month, day] = purchaseDate.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    date.setUTCDate(date.getUTCDate() + offset);

    return date.toLocaleDateString("en-US", {
      timeZone: "UTC",
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const flower35ReturnString = computeOffsetDate(36);
  const medical70ReturnString = computeOffsetDate(71);

  // Converter Math: Trulieve (0.123 Step Ladder) vs Standard MMTCs (0.125 Step Ladder)
  const gramsTotal = Math.max(0, availableOz * 28.3495);

  // Trulieve calculations (exact step multiples: 0.123, 0.246, 0.492, 0.984)
  const truEighths = Math.max(0, Math.floor(availableOz / 0.123));
  const truEighthsLeftover = Math.max(0, availableOz - truEighths * 0.123);

  const truQuarters = Math.max(0, Math.floor(availableOz / 0.246));
  const truQuartersLeftover = Math.max(0, availableOz - truQuarters * 0.246);

  const truHalves = Math.max(0, Math.floor(availableOz / 0.492));
  const truHalvesLeftover = Math.max(0, availableOz - truHalves * 0.492);

  const truOunces = Math.max(0, Math.floor(availableOz / 0.984));
  const truOuncesLeftover = Math.max(0, availableOz - truOunces * 0.984);

  // Standard MMTC calculations (exact fractional multiples: 0.125, 0.250, 0.500, 1.000)
  const stdEighths = Math.max(0, Math.floor(availableOz / 0.125));
  const stdEighthsLeftover = Math.max(0, availableOz - stdEighths * 0.125);

  const stdQuarters = Math.max(0, Math.floor(availableOz / 0.25));
  const stdQuartersLeftover = Math.max(0, availableOz - stdQuarters * 0.25);

  const stdHalves = Math.max(0, Math.floor(availableOz / 0.5));
  const stdHalvesLeftover = Math.max(0, availableOz - stdHalves * 0.5);

  const stdOunces = Math.max(0, Math.floor(availableOz / 1.0));
  const stdOuncesLeftover = Math.max(0, availableOz - stdOunces * 1.0);

  const preRolls = Math.max(0, Math.floor(availableOz / 0.035));
  const preRollsLeftover = Math.max(0, availableOz - preRolls * 0.035);

  const hasTrulieveAdvantage = truEighths > stdEighths;

  const COMPARISON_ROWS = [
    {
      size: "1 Eighth (3.5g)",
      truCost: "0.123 oz",
      truMax: truEighths,
      truLeftover: truEighthsLeftover.toFixed(3),
      stdCost: "0.125 oz",
      stdMax: stdEighths,
      stdLeftover: stdEighthsLeftover.toFixed(3),
      advantage: truEighths > stdEighths ? `+${truEighths - stdEighths} jar at Trulieve` : null,
    },
    {
      size: "Quarter / 2 Jars (7.0g)",
      truCost: "0.246 oz",
      truMax: truQuarters,
      truLeftover: truQuartersLeftover.toFixed(3),
      stdCost: "0.250 oz",
      stdMax: stdQuarters,
      stdLeftover: stdQuartersLeftover.toFixed(3),
      advantage: truQuarters > stdQuarters ? `+${truQuarters - stdQuarters} quarter at Trulieve` : null,
    },
    {
      size: "Half Ounce / 4 Jars (14.0g)",
      truCost: "0.492 oz",
      truMax: truHalves,
      truLeftover: truHalvesLeftover.toFixed(3),
      stdCost: "0.500 oz",
      stdMax: stdHalves,
      stdLeftover: stdHalvesLeftover.toFixed(3),
      advantage: truHalves > stdHalves ? `+${truHalves - stdHalves} half oz at Trulieve` : null,
    },
    {
      size: "Full Ounce / 8 Jars (28.0g)",
      truCost: "0.984 oz",
      truMax: truOunces,
      truLeftover: truOuncesLeftover.toFixed(3),
      stdCost: "1.000 oz",
      stdMax: stdOunces,
      stdLeftover: stdOuncesLeftover.toFixed(3),
      advantage: truOunces > stdOunces ? `+${truOunces - stdOunces} oz at Trulieve` : null,
    },
    {
      size: "1g Pre-Roll (~1.0g)",
      truCost: "~0.035 oz",
      truMax: preRolls,
      truLeftover: preRollsLeftover.toFixed(3),
      stdCost: "~0.035 oz",
      stdMax: preRolls,
      stdLeftover: preRollsLeftover.toFixed(3),
      advantage: null,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto scroll-mt-24" id="calculator">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-4">
          <Calculator className="w-4 h-4" />
          <span>Florida Rule 64-4.224 Tools</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Florida MMJ Allotment Engine & Converter
        </h2>
        <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Calculate exact 35/70-day return dates or compare your buying power side-by-side between Trulieve (0.123 oz) and standard dispensaries without exceeding your limit.{" "}
          <strong className="text-brand-emerald font-semibold">The App does all this automatically!</strong>
        </p>

        {/* Master Mode Switcher Tabs */}
        <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-brand-charcoal border border-white/10 shadow-lg">
          <button
            type="button"
            onClick={() => setMode("converter")}
            className={`flex items-center gap-2 py-2 px-4 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mode === "converter"
                ? "bg-brand-emerald text-brand-slate shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Side-by-Side Flower Converter</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("return-date")}
            className={`flex items-center gap-2 py-2 px-4 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mode === "return-date"
                ? "bg-brand-emerald text-brand-slate shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>35 & 70-Day Return Dates</span>
          </button>
        </div>
      </div>

      {mode === "return-date" ? (
        /* MODE 1: RETURN DATE PREDICTOR */
        <div className="rounded-3xl bg-brand-charcoal border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Inputs Column */}
            <div className="space-y-5">
              <div>
                <label htmlFor={dateInputId} className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-emerald" />
                  Purchase Date
                </label>
                <input
                  id={dateInputId}
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  className="w-full rounded-xl bg-brand-slate border border-white/10 px-4 py-3.5 text-white text-base focus:outline-none focus:border-brand-emerald"
                />
              </div>

              {/* Quick Date Presets */}
              <div>
                <span className="block text-xs text-slate-500 mb-2">Quick Date Jump:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setPurchaseDate(getRelativeDate(0))}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                      purchaseDate === getRelativeDate(0)
                        ? "bg-brand-emerald/15 border-brand-emerald text-brand-emerald font-semibold"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => setPurchaseDate(getRelativeDate(-1))}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                      purchaseDate === getRelativeDate(-1)
                        ? "bg-brand-emerald/15 border-brand-emerald text-brand-emerald font-semibold"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    Yesterday
                  </button>
                  <button
                    type="button"
                    onClick={() => setPurchaseDate(getRelativeDate(-7))}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                      purchaseDate === getRelativeDate(-7)
                        ? "bg-brand-emerald/15 border-brand-emerald text-brand-emerald font-semibold"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    1 Week Ago
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-1.5">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Statutory Rolling Calculation</span>
                </div>
                <p className="leading-relaxed">
                  Under Florida Rule 64-4.224, whatever amount you dispensed on this date returns in full to your active balance on the exact day after the rolling period ends at 12:00 AM EST.{" "}
                  <a href="/35-day-rule" className="text-cyan-400 underline underline-offset-2 hover:text-white">How the rolling window actually counts.</a>
                </p>
              </div>
            </div>

            {/* Results Card */}
            <div className="rounded-2xl bg-brand-slate/90 border border-brand-emerald/20 p-6 flex flex-col justify-between h-full relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-brand-emerald text-xs font-semibold uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4" />
                    <span>Calculation Results</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    Rule 64-4.224
                  </span>
                </div>

                {/* Result 1: 35-Day Smokable Flower */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/25 border border-brand-emerald/20">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
                      Smokable Flower
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-brand-emerald/15 text-brand-emerald border border-brand-emerald/30">
                      35-Day Window
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mt-1">
                    Returns To Your Balance On:
                  </span>
                  <div className="mt-1.5 flex items-center gap-2.5">
                    <ArrowRight className="w-5 h-5 text-brand-emerald shrink-0" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-emerald-300">
                      {flower35ReturnString || "Select a date"}
                    </span>
                  </div>
                  <span className="mt-1.5 block text-xs text-slate-400">
                    Day T + 36 at 12:00 AM EST (Smokable Flower)
                  </span>
                </div>

                {/* Result 2: 70-Day All Other Routes */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/25 border border-cyan-500/20 mt-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      Everything Else (All Other Routes)
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                      70-Day Window
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mt-1">
                    Returns To Your Balance On:
                  </span>
                  <div className="mt-1.5 flex items-center gap-2.5">
                    <ArrowRight className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {medical70ReturnString || "Select a date"}
                    </span>
                  </div>
                  <span className="mt-1.5 block text-xs text-slate-400">
                    Day T + 71 at 12:00 AM EST (Inhalation, Edibles, Oral, Topical, Sublingual)
                  </span>
                </div>
                {/* Automatic Tracking Callout */}
                <div className="mt-3.5 p-3.5 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-start gap-2.5 text-xs">
                  <Sparkles className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong className="text-white block font-semibold mb-0.5">
                      ⚡ 1-Tap Sync & Customizable Return Alerts:
                    </strong>
                    <span className="text-slate-300">
                      AllotIQ syncs your real state MMUR dispensations with 1 tap and notifies you when ounces return — right at midnight (12:01 AM), 9:00 AM dispensary opening, or whatever custom alert time fits your day.
                    </span>
                    <div className="mt-1.5">
                      <a href="/#demo" className="text-brand-emerald font-bold hover:underline">
                        See returning allotment queue on phone ➔
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-xs text-slate-400">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Florida non-smokable routes have independent rolling limits—dispensing in Inhalation or Edibles does not reduce your Smokable Flower or Oral balance.
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* MODE 2: SIDE-BY-SIDE FLOWER CONVERTER */
        <div className="rounded-3xl bg-brand-charcoal border border-white/10 p-6 sm:p-8 shadow-2xl space-y-8">
          {/* Top Balance Input */}
          <div>
            <label
              htmlFor={converterInputId}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2"
            >
              <Scale className="w-4 h-4 text-brand-emerald" />
              Enter Your Available Flower Balance (OZ)
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id={converterInputId}
                type="number"
                step="0.001"
                min="0"
                max="4.0"
                value={availableOz}
                onChange={(e) => setAvailableOz(parseFloat(e.target.value) || 0)}
                placeholder="e.g. 2.500"
                className="w-full sm:w-64 rounded-xl bg-brand-slate border border-white/10 px-4 py-3 text-white text-lg font-bold focus:outline-none focus:border-brand-emerald tabular-nums"
              />
              <div className="flex flex-wrap gap-2 items-center">
                {OZ_PRESETS.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setAvailableOz(p.val)}
                    className={`text-xs px-3 py-2 rounded-lg border transition-colors ${
                      availableOz === p.val
                        ? "bg-brand-emerald/20 border-brand-emerald text-brand-emerald font-semibold"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Trulieve Advantage Alert Banner */}
          {hasTrulieveAdvantage ? (
            <div className="p-4 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-start gap-3.5 text-xs sm:text-sm text-brand-emerald">
              <Sparkles className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <strong className="font-semibold text-white text-sm sm:text-base">
                    Trulieve 0.123 oz Advantage Detected:
                  </strong>
                  <span className="px-2 py-0.5 rounded-full bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/40 text-[10px] font-bold uppercase tracking-wider">
                    ⚡ Auto-Tracked in App
                  </span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  With <span className="font-bold underline text-white">{availableOz} oz</span> available, you can buy{" "}
                  <span className="font-bold text-white bg-brand-emerald/20 px-1.5 py-0.5 rounded">
                    {truEighths} eighths
                  </span>{" "}
                  at Trulieve, but only <span className="font-bold text-white">{stdEighths} eighths</span> at standard dispensaries. Trulieve gives you +{truEighths - stdEighths} extra jar without going over!
                </p>
                
                {/* Automation highlight */}
                <div className="mt-3 pt-2.5 border-t border-brand-emerald/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-emerald-300 text-xs font-medium">
                    💡 <strong>AllotIQ tracks this automatically:</strong> The app knows exactly which dispensary you&apos;re visiting and converts your remaining ounces into exact eighths in real time — zero mental math at the register.
                  </p>
                  <a
                    href="/#demo"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-emerald-300 underline underline-offset-2 shrink-0 transition-colors"
                  >
                    See live phone screen ➔
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
              <div>
                <span>Total Available Flower: <strong className="text-white">{gramsTotal.toFixed(2)} grams</strong></span>
                <span className="text-slate-500 ml-2">(28.3495g per legal ounce)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="text-[11px] font-semibold">⚡ AllotIQ auto-converts this in real-time</span>
                <a href="/#demo" className="text-slate-400 hover:text-white font-semibold underline underline-offset-2">See demo ➔</a>
              </div>
            </div>
          )}

          {/* Side-by-Side Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-brand-slate shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="py-3.5 px-4 text-slate-300 font-semibold uppercase tracking-wider">
                    Product
                  </th>
                  {/* Trulieve Column Header */}
                  <th className="py-3.5 px-4 bg-brand-emerald/5 border-l border-r border-brand-emerald/20 text-brand-emerald font-bold">
                    <div className="flex items-center gap-1.5">
                      <Store className="w-4 h-4" />
                      <span>Trulieve (0.123 Math)</span>
                    </div>
                  </th>
                  {/* Standard MMTC Column Header */}
                  <th className="py-3.5 px-4 text-cyan-400 font-bold">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>Other MMTCs (0.125 Math)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.size} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      <div className="leading-tight">
                        <span>{row.size}</span>
                        {row.advantage && (
                          <span className="block mt-1 text-[10px] text-brand-emerald font-bold">
                            ✓ {row.advantage}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Trulieve Cell */}
                    <td className="py-4 px-4 bg-brand-emerald/[0.02] border-l border-r border-brand-emerald/10">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <span className="text-base sm:text-lg font-extrabold text-white tabular-nums">
                          {row.truMax} <span className="text-xs font-normal text-slate-400">units</span>
                        </span>
                        <span className="text-[11px] text-brand-emerald font-semibold tabular-nums">
                          {row.truCost} each
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 block tabular-nums">
                        {row.truLeftover} oz leftover
                      </span>
                    </td>

                    {/* Standard MMTC Cell */}
                    <td className="py-4 px-4">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <span className="text-base sm:text-lg font-extrabold text-white tabular-nums">
                          {row.stdMax} <span className="text-xs font-normal text-slate-400">units</span>
                        </span>
                        <span className="text-[11px] text-cyan-400 font-semibold tabular-nums">
                          {row.stdCost} each
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 block tabular-nums">
                        {row.stdLeftover} oz leftover
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trulieve vs Standard Math Note */}
          <div className="p-4 rounded-2xl bg-brand-slate/80 border border-white/10 flex items-start gap-3.5">
            <Sparkles className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed space-y-2">
              <p>
                <strong className="text-brand-emerald">Why the difference?</strong> Trulieve calculates eighths using exact metric conversion (3.5g ÷ 28.3495g = <strong className="text-white">0.123 oz</strong>), whereas most other Florida MMTCs deduct standard fractions (<strong className="text-white">0.125 oz</strong>). When purchasing a full ounce (8 jars), Trulieve only deducts <strong className="text-brand-emerald">0.984 oz</strong> from your MMUR allotment — leaving <strong className="text-brand-emerald">0.016 oz</strong> of extra statutory buffer.{" "}
                <a href="/trulieve-eighth" className="text-brand-emerald underline underline-offset-2 hover:text-white">Full breakdown here.</a>
              </p>
              <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-emerald-400 font-medium">
                <span>📱 <strong>No mental math needed at the counter:</strong> AllotIQ automatically converts your usable balance into exact eighths for both Trulieve and standard MMTCs right on your dashboard and lock screen.</span>
                <a href="/#waitlist" className="text-white hover:text-brand-emerald font-bold underline underline-offset-2 shrink-0">Get AllotIQ ➔</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
