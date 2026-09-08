import {
  PenLine,
  BellRing,
  RotateCcw,
  Mic,
  Leaf,
  FlaskConical,
  Heart,
  Tag,
  Fingerprint,
  Type,
  LayoutGrid,
  CalendarDays,
  HardDriveDownload,
  Users,
  FileText,
  ScanLine,
  Navigation,
  Orbit,
} from "lucide-react";

type Item = { icon: React.ElementType; title: string; body: string };

const TRACKING: Item[] = [
  {
    icon: PenLine,
    title: "Manual entry, no login required",
    body: "Prefer not to sync? Log every purchase by hand — dispensary, amount, and route — and AllotIQ tracks your limits exactly the same way.",
  },
  {
    icon: BellRing,
    title: "Renewal & return alerts",
    body: "Get warned before your doctor certification or state card expires, and choose exactly when you're alerted on return day: midnight rollover, 9 AM dispensary opening, or afternoon.",
  },
  {
    icon: RotateCcw,
    title: "Automatic return detection",
    body: "If a dispensary resyncs a purchase as returned, AllotIQ corrects your total on its own instead of double-counting it against your limit.",
  },
  {
    icon: Navigation,
    title: "Dispensary exit reminders",
    body: "An automatic geofenced alert triggers when departing an MMTC dispensary, prompting you to check your newly updated balance or snap your receipt.",
  },
];

const ASK_MARY: Item = {
  icon: Mic,
  title: "Hands-Free Voice via Siri & Google Assistant (Powered by Mary)",
  body: "Heading to the dispensary? Keep your hands on the wheel. Say \"Hey Siri, ask Mary how much flower I have\" or \"Hey Google, check my AllotIQ balance\" to hear your exact dispensable amount and return countdown through your car speakers or AirPods. Computed 100% on-device with zero cloud tracking.",
};

const KNOWLEDGE: Item[] = [
  {
    icon: Leaf,
    title: "Terpene journal",
    body: "A reference library covering 21 Florida-relevant terpenes, their aromas, and their reported therapeutic effects.",
  },
  {
    icon: FlaskConical,
    title: "COA lookup",
    body: "Pull up a product's real lab-tested Certificate of Analysis directly from certified Florida testing labs.",
  },
  {
    icon: Heart,
    title: "Favorite strains & restock alerts",
    body: "Save your favorite cultivars, record symptom relief ratings, and get notified when your strain returns to dispensary shelves.",
  },
  {
    icon: Orbit,
    title: "Terpene synergy wheel",
    body: "Explore how dominant terpenes pair together (like Myrcene + Caryophyllene) to produce clinically targeted entourage effects.",
  },
  {
    icon: Tag,
    title: "Discounts & first-time patient deals",
    body: "See standing first-time patient deals, veteran discounts, and card renewal credits across all Florida dispensaries.",
  },
];

const REAL_LIFE: Item[] = [
  {
    icon: ScanLine,
    title: "Receipt & jar QR scanner",
    body: "Snap a photo of your paper dispensary receipt or scan a jar's QR code to instantly match ledger entries and open official lab test PDFs.",
  },
  {
    icon: Fingerprint,
    title: "Face ID app lock",
    body: "The app itself is locked behind Face ID, Touch ID, or fingerprint — on top of your MMUR login living in your phone's secure hardware keychain.",
  },
  {
    icon: Type,
    title: "Big Text mode",
    body: "Bump every number and label up a size, built for patients who need it without digging through a settings menu.",
  },
  {
    icon: LayoutGrid,
    title: "Lock Screen & Home widgets",
    body: "Glance at your dispensable flower gauge or 35-day return countdown silently without unlocking your phone — perfect for dispensary waiting rooms.",
  },
  {
    icon: CalendarDays,
    title: "Calendar export",
    body: "Send your renewal deadlines and allotment return dates straight into Apple or Google Calendar.",
  },
  {
    icon: HardDriveDownload,
    title: "Backup & restore",
    body: "Export everything to an encrypted single file and restore it later — your data, portable and under your control.",
  },
  {
    icon: Users,
    title: "Caregiver support",
    body: "Registered caregivers can manage and switch between the patients they're authorized for.",
  },
  {
    icon: FileText,
    title: "Physician export",
    body: "Generate a clean PDF summary of your usage and symptom relief to bring to your next 210-day doctor recertification.",
  },
];

function FeatureCard({ icon: Icon, title, body }: Item) {
  return (
    <div className="p-6 rounded-2xl bg-brand-charcoal border border-white/5">
      <Icon className="w-7 h-7 text-brand-emerald mb-4" />
      <h4 className="text-base font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Everything the app does</h2>
      <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
        A full rundown, not just the highlights.
      </p>

      <div className="mb-14">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-emerald mb-5">Tracking & limits</h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {TRACKING.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="mb-14 p-8 rounded-3xl bg-gradient-to-br from-brand-emerald/15 via-[#132235] to-cyan-400/5 border border-brand-emerald/30 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-brand-emerald/20 border border-brand-emerald/40 flex items-center justify-center text-brand-emerald shrink-0 shadow-lg shadow-brand-emerald/10">
            <ASK_MARY.icon className="w-8 h-8" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30">
                True Hands-Free
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
                100% Offline & Private
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{ASK_MARY.title}</h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">{ASK_MARY.body}</p>
          </div>
        </div>

        {/* Voice Command Badges */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-auto shrink-0">
          <div className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 text-xs text-slate-200">
            <span className="text-sm">🍏</span>
            <span className="font-mono text-emerald-400 font-semibold">&ldquo;Hey Siri, ask Mary...&rdquo;</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 text-xs text-slate-200">
            <span className="text-sm">🤖</span>
            <span className="font-mono text-cyan-400 font-semibold">&ldquo;Hey Google, ask AllotIQ...&rdquo;</span>
          </div>
        </div>
      </div>

      <div className="mb-14">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-emerald mb-5">Product knowledge</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {KNOWLEDGE.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-emerald mb-5">Built for real life</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REAL_LIFE.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
