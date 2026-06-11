import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./Sections/Footer";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://real-waves-website.vercel.app"),
  title: {
    default: "RealWaves - Premium Non-Woven Bag Manufacturer",
    template: "%s | RealWaves",
  },
  description:
    "Leading manufacturer of eco-friendly, customizable non-woven bags in Central India. D-Cut, Loop Handle, U-Cut, Box Bags & BOPP laminated bags for businesses.",
  keywords: [
    "non woven bags",
    "non woven bag manufacturer",
    "carry bags",
    "eco friendly bags",
    "custom printed bags",
    "D-cut bags",
    "loop handle bags",
    "box bags",
    "non woven bags Raipur",
    "wholesale bags India",
  ],
  openGraph: {
    title: "RealWaves - Premium Non-Woven Bag Manufacturer",
    description:
      "Leading manufacturer of eco-friendly, customizable non-woven bags in Central India. Sustainable packaging solutions for businesses.",
    type: "website",
    siteName: "RealWaves",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RealWaves - Premium Non-Woven Bag Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RealWaves - Premium Non-Woven Bag Manufacturer",
    description:
      "Leading manufacturer of eco-friendly, customizable non-woven bags in Central India. Sustainable packaging solutions for businesses.",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://real-waves-website.vercel.app/#organization",
      name: "RealWaves",
      url: "https://real-waves-website.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://real-waves-website.vercel.app/logo.png",
      },
      description:
        "Leading manufacturer of eco-friendly, customizable non-woven bags in Central India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raipur",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9009990000",
        contactType: "sales",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://real-waves-website.vercel.app/#website",
      url: "https://real-waves-website.vercel.app",
      name: "RealWaves",
      publisher: {
        "@id": "https://real-waves-website.vercel.app/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://real-waves-website.vercel.app/products?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased font-body`}
      >
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
