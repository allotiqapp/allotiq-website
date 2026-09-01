export function StylizedA({ className = "h-[1em] w-[0.9em]" }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 90 100" className="w-full h-full overflow-visible" fill="none">
        <g stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="miter">
          <path d="M 45 10 L 10 95 M 45 10 L 80 95" />
          <path d="M 45 35 L 24 85 M 45 35 L 66 85" />
          <path d="M 20 68 L 70 68" />
        </g>
      </svg>
    </span>
  );
}

export function GlowingGaugeO({ className = "w-10 h-10", fillPercent = 75 }: { className?: string; fillPercent?: number }) {
  const gradientId = "gaugeGradient";
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const dashLength = (fillPercent / 100) * circumference;

  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="60%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#6EE7B7" />
          </linearGradient>
        </defs>

        {/* Background track */}
        <circle cx="50" cy="50" r={radius} stroke="#1F2937" strokeWidth="18" strokeOpacity="0.8" />

        {/* Soft blurred glow behind the arc */}
        <circle
          cx="50" cy="50" r={radius}
          stroke="#10B981"
          strokeWidth="24"
          strokeLinecap="round"
          strokeDasharray={`${dashLength} ${circumference}`}
          transform="rotate(-90 50 50)"
          opacity="0.55"
          style={{ filter: "blur(6px)" }}
        />

        {/* Crisp gradient progress arc */}
        <circle
          cx="50" cy="50" r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={`${dashLength} ${circumference}`}
          transform="rotate(-90 50 50)"
        />
      </svg>
    </span>
  );
}

export function LogoWordmark({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center font-black tracking-tight uppercase leading-none ${className}`}>
      <StylizedA className="inline-block h-[0.95em] w-[0.88em] mr-[0.04em] -translate-y-[0.02em]" />
      <span className="text-white" style={{ fontSize: "1em" }}>LL</span>
      <GlowingGaugeO className="inline-block h-[0.9em] w-[0.9em] mx-[0.04em] -translate-y-[0.03em]" />
      <span className="text-white mr-[0.06em]" style={{ fontSize: "1em" }}>T</span>
      <span className="text-cyan-400 font-medium tracking-normal" style={{ fontSize: "1em" }}>IQ</span>
    </div>
  );
}
