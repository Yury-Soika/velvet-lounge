import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velvet Lounge — Nightclub in Nocturne Bay",
  description:
    "Velvet Lounge is a premium nightclub experience in Nocturne Bay. VIP tables, signature cocktails, and late-night events in an intimate lounge atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Grammarly and similar extensions mutate <body> before hydration */}
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.18),transparent_55%)]" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
