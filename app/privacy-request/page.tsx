"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoWordmark } from "@/components/LogoWordmark";

const REQUEST_TYPES = [
  "Access my data",
  "Delete my data",
  "Opt out of sale/sharing (not applicable — we don't sell or share data)",
  "Correct my data",
  "General privacy question",
];

export default function PrivacyRequestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState(REQUEST_TYPES[0]);
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Privacy Request: ${requestType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRequest type: ${requestType}\n\nDetails:\n${details}`
    );
    window.location.href = `mailto:privacy@allotiq.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30">
      <nav className="w-full flex items-center justify-between gap-2 px-4 sm:px-8 py-3 sm:py-4 border-b border-white/5">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl overflow-hidden shadow-lg shadow-brand-emerald/20 flex-shrink-0 relative">
            <img src="/icon.png" alt="AllotIQ Icon" className="w-full h-full object-cover" />
          </div>
          <LogoWordmark className="text-4xl sm:text-5xl" />
        </Link>
        <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
          ← Back to Privacy Policy
        </Link>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Submit a Privacy Request</h1>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Use this form to request access to, deletion of, or correction of your personal
          information, or to ask a general privacy question. Submitting this form opens your
          email app with a pre-filled message to{" "}
          <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">
            privacy@allotiq.com
          </a>{" "}
          — nothing is sent until you send that email yourself.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-brand-charcoal border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-emerald"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-brand-charcoal border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-emerald"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Request type</label>
            <select
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              className="w-full rounded-xl bg-brand-charcoal border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand-emerald"
            >
              {REQUEST_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Details</label>
            <textarea
              rows={5}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full rounded-xl bg-brand-charcoal border border-white/10 px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-emerald resize-none"
              placeholder="Tell us more about your request..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-brand-emerald text-brand-slate font-semibold hover:bg-brand-emerald/90 transition-colors"
          >
            Continue in Email App
          </button>
        </form>
      </div>

      <footer className="border-t border-white/5 py-12 px-6 text-center text-slate-500">
        <p>Made for Florida Patients (Rule 64-4.224)</p>
      </footer>
    </main>
  );
}
