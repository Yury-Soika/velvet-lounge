import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://velvet.plex.ee'),
  title: "Velvet Lounge — Interactive Hospitality Concept by Plex",
  description: "A fictional, interactive hospitality website concept by Plex demonstrating premium art direction, responsive content and a reservation journey.",
  openGraph: {
    type: 'website',
    url: 'https://velvet.plex.ee',
    title: 'Velvet Lounge — Interactive Hospitality Concept by Plex',
    description: 'A fictional hospitality website concept demonstrating premium art direction, responsive content and a reservation journey.',
    images: [{ url: '/og-image-v2.png', width: 1200, height: 630, alt: 'Velvet Lounge interactive concept by Plex' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velvet Lounge — Interactive Hospitality Concept by Plex',
    description: 'A fictional hospitality website concept demonstrating premium art direction, responsive content and a reservation journey.',
    images: ['/og-image-v2.png'],
  },
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
        className="antialiased bg-background text-foreground"
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.18),transparent_55%)]" />
          </div>
          <div id="main-content" tabIndex={-1}>{children}</div>
        </div>
      </body>
    </html>
  );
}
