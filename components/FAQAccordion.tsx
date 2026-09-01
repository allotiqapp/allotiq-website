"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ: { q: string; a: string }[] = [
  {
    q: "Is it legal to use an app to track my medical marijuana purchases?",
    a: "Yes. AllotIQ doesn't sell, distribute, or facilitate the purchase of cannabis — it's a personal calculator and record-keeping tool that operates entirely on data about purchases you've already legally made as a registered Florida patient or caregiver under Florida's medical marijuana law (Fla. Stat. § 381.986). Tracking your own already-legal activity isn't itself a regulated action.",
  },
  {
    q: "Does the app itself handle or facilitate anything illegal?",
    a: "No. AllotIQ never touches, transports, or facilitates a transaction involving cannabis itself — it only performs calculations on numbers (ounces, milligrams, dates) that you enter or sync from your own official state record. This isn't legal advice; if you have specific legal concerns, consult a licensed attorney.",
  },
  {
    q: "Could using this app get me in trouble with my doctor, the state, or law enforcement?",
    a: "No. AllotIQ never reports anything to your doctor, the state, or law enforcement. The only outbound connection it ever makes is reading your own data directly from the official Florida MMUR portal, using credentials you provide — nothing is ever submitted or sent anywhere by the app.",
  },
  {
    q: "Is my data private?",
    a: "Yes — full details in our Privacy Policy, but the short version: everything is stored on your own device, and we don't operate a server that holds your medical records. Florida's Digital Bill of Rights (Fla. Stat. § 501.701 et seq.) gives residents the right to access, correct, and delete data that businesses collect about them — rights AllotIQ's architecture already gives you by default, since your data never leaves your device in the first place.",
  },
  {
    q: "What happens to my data if I lose my phone?",
    a: "It stays protected. The app is locked behind Face ID, Touch ID, or fingerprint unlock, and your MMUR login is stored in your phone's secure hardware keychain, not as plain text.",
  },
  {
    q: "Could a data breach expose my information?",
    a: "Because AllotIQ has no central server or database, there's no single large-scale breach that could expose many patients' data at once. The worst case in a breach scenario is one physically compromised device — not a nationwide registry leak. Florida's breach-notification law (the Florida Information Protection Act, Fla. Stat. § 501.171) is built around businesses that hold centralized personal data; since AllotIQ never collects or stores your data on a server we control, there's no such repository for it to apply to.",
  },
  {
    q: "Is AllotIQ HIPAA compliant?",
    a: "HIPAA (45 C.F.R. Parts 160 and 164) generally applies to healthcare providers, insurers, and their contracted vendors — not standalone consumer apps like this one. Regardless of whether HIPAA technically applies, AllotIQ is built on an on-device-only architecture that meets a stricter privacy bar than HIPAA requires of a typical cloud-connected health app.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQ.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
            >
              <span className="text-base sm:text-lg font-semibold text-white">{item.q}</span>
              <ChevronDown
                className={`shrink-0 w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="text-slate-400 leading-relaxed px-5 pb-5 sm:px-6 sm:pb-6">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
