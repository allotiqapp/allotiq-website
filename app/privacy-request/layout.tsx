import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Access & Deletion Request — AllotIQ",
  description:
    "Submit a request to access, correct, or delete your AllotIQ data, or ask a privacy question, under Florida's Digital Bill of Rights.",
};

export default function PrivacyRequestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
