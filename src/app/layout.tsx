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
  title: "Drashti Tours Mumbai | Honeymoon & Holiday Travel",
  description:
    "Mumbai travel agency since 2012. Honeymoon packages, holidays, corporate hotel bookings, visas and flights. Call +91 88796 67506.",
  metadataBase: new URL("https://www.facebook.com/drashtitoursandtravels"),
  openGraph: {
    title: "Drashti Tours And Travels | Mumbai",
    description:
      "Honeymoon packages, holidays, corporate hotel bookings, visas and flights from Mumbai since 2012.",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/27099922/pexels-photo-27099922.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Overwater villas in the Maldives booked by Drashti Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drashti Tours And Travels | Mumbai",
    description:
      "Honeymoon, holiday and corporate travel from Mumbai since 2012.",
    images: [
      "https://images.pexels.com/photos/27099922/pexels-photo-27099922.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=630",
    ],
  },
  icons: {
    icon: "/drashti-logo.jpg",
    apple: "/drashti-logo.jpg",
  },
};

export const viewport = {
  themeColor: "#fbf8f3",
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      name: "Drashti Tours And Travels",
      description:
        "Mumbai travel agency since 2012. Honeymoon packages, holidays, corporate hotel bookings, visa services and flight bookings.",
      telephone: "+91 88796 67506",
      email: "drashti.tours@gmail.com",
      foundingDate: "2012",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kandivali West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400067",
        addressCountry: "IN",
      },
      areaServed: ["Mumbai", "India"],
      sameAs: [
        "https://www.instagram.com/drashtitours",
        "https://www.facebook.com/drashtitoursandtravels",
      ],
    },
    {
      "@type": "WebSite",
      name: "Drashti Tours And Travels",
      url: "https://www.facebook.com/drashtitoursandtravels",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </head>
      <body className="min-h-screen bg-[#fbf8f3] text-[#1a1611] antialiased">
        <LenisProvider>
          <div id="main">{children}</div>
        </LenisProvider>
        <div aria-hidden className="grain-overlay" />
      </body>
    </html>
  );
}
