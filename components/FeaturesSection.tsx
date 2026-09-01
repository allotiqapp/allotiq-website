import {
  PenLine,
  BellRing,
  RotateCcw,
  Mic,
  Leaf,
  FlaskConical,
  Sparkles,
  Tag,
  Fingerprint,
  Type,
  LayoutGrid,
  MapPin,
  CalendarDays,
  HardDriveDownload,
  Users,
  FileText,
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
    title: "Renewal alerts",
    body: "A banner warns you before your doctor's certification or state card expires, in the right order, so you never get caught with an expired card.",
  },
  {
    icon: RotateCcw,
    title: "Automatic return detection",
    body: "If a dispensary resyncs a purchase as returned, AllotIQ corrects your total on its own instead of double-counting it against your limit.",
  },
];

const ASK_MARY: Item = {
  icon: Mic,
  title: "Ask Mary",
  body: "A hands-free, on-device voice assistant — ask what you have left on any route, what a terpene does, or where the nearest discount is, out loud, without typing.",
};

const KNOWLEDGE: Item[] = [
  {
    icon: Leaf,
    title: "Terpene journal",
    body: "A reference library covering 21 Florida-relevant terpenes, their aromas, and their reported effects.",
  },
  {
    icon: FlaskConical,
    title: "COA lookup",
    body: "Pull up a product's real lab-tested Certificate of Analysis directly from your dispensary's own records.",
  },
  {
    icon: Sparkles,
    title: "Strain finder",
    body: "Match strains against what you're looking for, backed by real product data instead of guesswork.",
  },
  {
    icon: Tag,
    title: "Discounts & delivery",
    body: "See which of Florida's licensed dispensaries offer standing discounts or delivery, in one place.",
  },
];

const REAL_LIFE: Item[] = [
  {
    icon: Fingerprint,
    title: "Face ID app lock",
    body: "The app itself is locked behind Face ID, Touch ID, or fingerprint — on top of your MMUR login living in your phone's secure keychain, not plain text.",
  },
  {
    icon: Type,
    title: "Big Text mode",
    body: "Bump every number and label up a size, built for patients who need it without digging through a settings menu.",
  },
  {
    icon: LayoutGrid,
    title: "Home screen widget",
    body: "Check your dispensable amount at a glance, without opening the app.",
  },
  {
    icon: MapPin,
    title: "Nearby dispensary finder",
    body: "See which licensed Florida dispensaries are closest to you right now.",
  },
  {
    icon: CalendarDays,
    title: "Calendar export",
    body: "Send your renewal and roll-off dates straight into your phone's calendar app.",
  },
  {
    icon: HardDriveDownload,
    title: "Backup & restore",
    body: "Export everything to a single file and restore it later — your data, portable and under your control.",
  },
  {
    icon: Users,
    title: "Caregiver support",
    body: "Registered caregivers can manage and switch between the patients they're authorized for.",
  },
  {
    icon: FileText,
    title: "Physician export",
    body: "Generate a clean PDF summary of your usage to bring to your next doctor's visit.",
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

      <div className="mb-14 p-8 rounded-3xl bg-gradient-to-br from-brand-emerald/10 to-cyan-400/5 border border-brand-emerald/20 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <ASK_MARY.icon className="w-12 h-12 text-brand-emerald shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{ASK_MARY.title}</h3>
          <p className="text-slate-400 leading-relaxed">{ASK_MARY.body}</p>
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
