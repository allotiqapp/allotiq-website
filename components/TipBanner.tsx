import Link from "next/link";
import { Coffee, ArrowRight } from "lucide-react";

export default function TipBanner() {
  return (
    <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-5">
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
          <Coffee className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
            Like this tool? <span className="text-amber-300 font-medium">Tip the Developer!</span>
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            Voluntary tip jar · 100% ad-free & private · <span className="text-slate-500">Not payment for the app</span>
          </p>
        </div>
      </div>
      <Link
        href="/tip"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-all shrink-0 group"
      >
        <span>Tip the Developer</span>
        <Coffee className="w-3.5 h-3.5 group-hover:scale-110 transition-transform text-amber-400" />
        <ArrowRight className="w-3.5 h-3.5 text-amber-400/70 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
