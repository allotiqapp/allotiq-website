// Matches the dashboard's CircularProgress rings exactly: a muted dark track circle
// plus a glowing gradient-stroked progress arc (blurred glow layer + crisp arc on top),
// same construction as CircularProgressGauge.tsx in the app (SweepGradient + BlurMask).
export function GlowingGaugeO({ className = "w-10 h-10" }: { className?: string }) {
  const gradientId = "gaugeGradient";
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Background track */}
        <circle cx="50" cy="50" r="34" stroke="#374151" strokeWidth="18" />

        {/* Soft blurred glow behind the arc */}
        <circle
          cx="50" cy="50" r="34"
          stroke="#10B981"
          strokeWidth="24"
          strokeLinecap="round"
          strokeDasharray="139 214"
          transform="rotate(-90 50 50)"
          opacity="0.5"
          style={{ filter: "blur(6px)" }}
        />

        {/* Crisp gradient progress arc, matching the app's ring proportions */}
        <circle
          cx="50" cy="50" r="34"
          stroke={`url(#${gradientId})`}
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray="139 214"
          transform="rotate(-90 50 50)"
        />
      </svg>
    </span>
  );
}

export function LogoWordmark({ className = "h-8" }: { className?: string }) {
  // Real Inter type (the site's own font) instead of hand-drawn line art, so this
  // actually matches the brand mark's clean geometric wordmark instead of improvising
  // a different "neon interlocking" style for every letter.
  return (
    <div className={`flex items-center font-black tracking-tight uppercase leading-none ${className}`}>
      <span className="text-white" style={{ fontSize: "1em" }}>ALL</span>
      <GlowingGaugeO className="inline-block h-[0.9em] w-[0.9em] mx-[0.02em] -translate-y-[0.03em]" />
      <span className="text-white mr-[0.05em]" style={{ fontSize: "1em" }}>T</span>
      <span className="text-brand-emerald font-medium" style={{ fontSize: "1em" }}>IQ</span>
    </div>
  );
}
