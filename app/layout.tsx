import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "AllotIQ — Florida Medical Marijuana Allotment Tracker";
const description =
  "Track your Florida 35-day flower rolling limits and 70-day non-smokable routes under Rule 64-4.224 with 100% on-device privacy. Zero subscriptions. Zero ads.";

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://allotiq.com"),
  title,
  description,
  keywords: [
    "Florida MMJ",
    "Florida Medical Marijuana",
    "MMUR Tracker",
    "OMMU",
    "35 Day Rolling Limit",
    "Florida Rule 64-4.224",
    "Trulieve Metric Eighth",
    "Doctor Recertification",
    "70 Day Non Smokable Routes",
    "AllotIQ",
  ],
  authors: [{ name: "AllotIQ" }],
  openGraph: {
    title,
    description,
    url: "https://allotiq.com",
    siteName: "AllotIQ",
    images: [{ url: "/AQIconLogo.png", width: 1024, height: 341, alt: "AllotIQ Logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@AllotIQ",
    images: ["/AQIconLogo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/AQIcon.png",
  },
  verification: {
    google: "8JncAWBoSfZu-v6n9SJjrxeHaltzPN3GCglubTFweIg",
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
