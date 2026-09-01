import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "AllotIQ - Medical Allowance Tracker";
const description = "Track your 35-day and 70-day rolling state limits with perfect precision and 100% on-device privacy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://allotiq.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://allotiq.com",
    siteName: "AllotIQ",
    images: [{ url: "/icon.png", width: 382, height: 345, alt: "AllotIQ" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@AllotIQ",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
