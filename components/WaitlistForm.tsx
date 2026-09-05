"use client";

import { useState } from "react";

// Netlify Forms: detected at build time from this static markup (the hidden
// form-name input + data-netlify attribute), then submitted via fetch so the
// page doesn't do a full reload. See Netlify's docs on submitting forms from
// a JS-rendered app for why the AJAX POST + hidden field pair is needed.
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // fetch() only rejects on a real network failure — a 404/500 response still
      // resolves, so status must be checked explicitly or a submission that never
      // actually reached Netlify's form handler (e.g. before the form was registered)
      // shows as a false "You're on the list" instead of surfacing the failure.
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "waitlist", email }),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="text-center">
        <p className="text-brand-emerald font-semibold text-lg">You&apos;re on the list. 🎉</p>
        <p className="text-slate-400 mt-1">We&apos;ll email you the moment AllotIQ is live.</p>
      </div>
    );
  }

  return (
    <form
      name="waitlist"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col sm:flex-row gap-3"
    >
      {/* Required by Netlify's static form detection */}
      <input type="hidden" name="form-name" value="waitlist" />
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 rounded-full bg-brand-charcoal border border-white/10 px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-emerald"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-6 py-3 rounded-full bg-brand-emerald text-brand-slate font-semibold hover:bg-brand-emerald/90 transition-colors disabled:opacity-60 whitespace-nowrap"
      >
        {status === "submitting" ? "Joining..." : "Notify Me"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400 sm:absolute sm:mt-14">Something went wrong — try again in a moment.</p>
      )}
    </form>
  );
}
