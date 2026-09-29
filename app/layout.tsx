import type { Metadata } from "next";
import "./globals.css";
import AppPreferences from "@/src/i18n/provider";

export const metadata: Metadata = {
  title: "SKILL PATH — Build your future",
  description: "Your living skill passport. Discover careers, build your roadmap, and grow with purpose.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased"><AppPreferences>{children}</AppPreferences></body>
    </html>
  );
}
