import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flyward | Redefining Travel for a Modern World",
  description:
    "We manage travel end to end for individuals and businesses. As your travel partner, we take care of every detail, so you can focus on what really matters.",
  metadataBase: new URL("https://www.flyward.com"),
  openGraph: {
    title: "Flyward | Redefining Travel for a Modern World",
    description:
      "We manage travel end to end for individuals and businesses. As your travel partner, we take care of every detail.",
    type: "website",
    images: [
      "https://cdn.prod.website-files.com/697797a5e8e563920247d163/6983e7f6ccaebdfeaa43934a_d2ea27b2ba1bf2f7ca2ff165f5a3e580_og.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flyward | Redefining Travel for a Modern World",
    description:
      "We manage travel end to end for individuals and businesses.",
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/697797a5e8e563920247d163/6983e7c5ac59ad91661fed9f_favicon32.png",
    apple:
      "https://cdn.prod.website-files.com/697797a5e8e563920247d163/6983e7c7eac208d2692f91de_favicon256.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#fbf8f3] text-[#1a1611] antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LenisProvider>
          <div id="main">{children}</div>
        </LenisProvider>
        <div aria-hidden className="grain-overlay" />
      </body>
    </html>
  );
}
