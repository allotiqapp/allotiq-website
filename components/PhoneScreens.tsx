// Accurate recreations of the real app's screens (same color tokens as
// src/theme/colors.ts DarkColors) — not photos, but true to the actual UI —
// used as the phone mockup content in PhoneWalkthrough.tsx.

function TapRipple({ x, y }: { x: string; y: string }) {
  return (
    <div className="absolute pointer-events-none" style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}>
      <span className="absolute -inset-2 rounded-full bg-[#34D399]/40 animate-ping" />
      <span className="relative block w-3 h-3 rounded-full bg-[#6EE7B7] shadow-[0_0_10px_3px_rgba(110,231,183,0.7)]" />
    </div>
  );
}

function MiniGauge({ value, unit, pct }: { value: string; unit: string; pct: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const dash = c * pct;
  return (
    <div className="relative w-[110px] h-[110px]">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="miniGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r={r} stroke="#374151" strokeWidth="9" />
        <circle
          cx="50" cy="50" r={r}
          stroke="#10B981" strokeWidth="13" strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          transform="rotate(-90 50 50)"
          opacity="0.35"
          style={{ filter: "blur(4px)" }}
        />
        <circle
          cx="50" cy="50" r={r}
          stroke="url(#miniGaugeGrad)" strokeWidth="9" strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-extrabold text-white tabular-nums">{value}</span>
        <span className="text-[9px] font-bold text-[#9CA3AF] tracking-wide">{unit}</span>
      </div>
    </div>
  );
}

export function Screen1Dashboard() {
  return (
    <div className="relative w-full h-full bg-[#111827] p-4 pt-10 flex flex-col items-center">
      <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-3">Today&apos;s Allotment</p>
      <MiniGauge value="1.87" unit="OZ" pct={0.75} />
      <p className="text-[11px] text-[#9CA3AF] mt-2 mb-6">dispensable today</p>

      <div className="w-full space-y-2">
        <div className="flex justify-between items-center bg-[#1F2937] border border-[#374151] rounded-xl px-3 py-2">
          <span className="text-[11px] text-[#D1D5DB]">Doctor Order Cap</span>
          <span className="text-[12px] font-bold text-[#F9FAFB]">2.50 oz</span>
        </div>
        <div className="flex justify-between items-center bg-[#1F2937] border-2 border-[#10B981] rounded-xl px-3 py-2">
          <span className="text-[11px] text-[#D1D5DB]">35-Day Rolling Window</span>
          <span className="text-[12px] font-bold text-[#34D399]">1.87 oz</span>
        </div>
      </div>
      <p className="text-[9px] text-[#34D399] mt-2 text-center">✓ Rolling window is your binding limit</p>

      <TapRipple x="50%" y="34%" />
    </div>
  );
}

const ROUTES = [
  { icon: "🌿", name: "Smokable Flower", used: "1.87", cap: "2.50", unit: "oz", pct: 0.75 },
  { icon: "💨", name: "Inhalation", used: "18,200", cap: "24,500", unit: "mg", pct: 0.74 },
  { icon: "🍬", name: "Edibles", used: "2,100", cap: "4,200", unit: "mg", pct: 0.5 },
  { icon: "💊", name: "Oral", used: "9,800", cap: "14,000", unit: "mg", pct: 0.7 },
  { icon: "💧", name: "Sublingual", used: "13,300", cap: "13,300", unit: "mg", pct: 1 },
];

export function Screen2Routes() {
  return (
    <div className="relative w-full h-full bg-[#111827] p-4 pt-10">
      <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-3">Route Balances</p>
      <div className="space-y-2">
        {ROUTES.map((r) => (
          <div key={r.name} className="bg-[#1F2937] border border-[#374151] rounded-xl px-3 py-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-[#F9FAFB]">{r.icon} {r.name}</span>
              <span className={`text-[10px] font-bold ${r.pct >= 1 ? "text-[#F87171]" : "text-[#34D399]"}`}>
                {r.used}/{r.cap} {r.unit}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-[#374151] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${r.pct * 100}%`,
                  background: r.pct >= 1 ? "#F87171" : "linear-gradient(to right, #10B981, #6EE7B7)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <TapRipple x="50%" y="83%" />
    </div>
  );
}

const TIMELINE = [
  { when: "Tomorrow, 6:42 PM", amount: "+0.5 oz", route: "Flower" },
  { when: "In 4 days", amount: "+3,500 mg", route: "Edibles" },
  { when: "In 6 days", amount: "+1.2 oz", route: "Flower" },
];

export function Screen3Timeline() {
  return (
    <div className="relative w-full h-full bg-[#111827] p-4 pt-10">
      <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-4">Next Returning Allotment</p>
      <div className="relative pl-4 space-y-5">
        <div className="absolute left-[5px] top-1 bottom-1 w-px bg-[#374151]" />
        {TIMELINE.map((t, i) => (
          <div key={t.when} className="relative">
            <div
              className={`absolute -left-4 top-1 w-2.5 h-2.5 rounded-full ${
                i === 0 ? "bg-[#34D399] shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" : "bg-[#374151]"
              }`}
            />
            <p className="text-[10px] text-[#9CA3AF]">{t.when}</p>
            <p className="text-[12px] font-bold text-[#F9FAFB]">
              {t.amount} <span className="text-[#34D399]">{t.route}</span> returns
            </p>
          </div>
        ))}
      </div>
      <TapRipple x="22%" y="26%" />
    </div>
  );
}

export function Screen4Mary() {
  return (
    <div className="relative w-full h-full bg-[#111827] p-4 pt-10 flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-3 text-center">Ask Mary</p>
      <div className="flex-1 space-y-2">
        <div className="ml-auto max-w-[80%] bg-[#10B981] text-[#0B1220] text-[11px] font-semibold rounded-2xl rounded-tr-sm px-3 py-2">
          How much flower do I have left?
        </div>
        <div className="mr-auto max-w-[85%] bg-[#1F2937] border border-[#374151] text-[#F9FAFB] text-[11px] rounded-2xl rounded-tl-sm px-3 py-2">
          You have <span className="text-[#34D399] font-bold">1.87 oz</span> of flower dispensable today.
        </div>
      </div>
      <div className="relative flex justify-center pb-2">
        <div className="relative w-14 h-14 rounded-full bg-[#10B981] flex items-center justify-center shadow-[0_0_20px_4px_rgba(16,185,129,0.5)]">
          <span className="absolute inset-0 rounded-full bg-[#10B981]/40 animate-ping" />
          <span className="relative text-xl">🎙️</span>
        </div>
      </div>
    </div>
  );
}
