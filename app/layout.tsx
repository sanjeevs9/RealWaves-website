import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./Sections/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, SITE_NAME, LEGAL_NAME, BUSINESS, DEFAULT_OPEN_GRAPH } from "./site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Non-Woven Bag Manufacturer in Raipur | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "RealWaves Packs is a non-woven bag manufacturer in Raipur, Chhattisgarh. D-Cut, U-Cut, Loop Handle, Box and BOPP laminated bags with custom printing for businesses across India.",
  keywords: [
    "non woven bags",
    "non woven bag manufacturer",
    "non woven bag manufacturer in Raipur",
    "carry bags",
    "eco friendly bags",
    "custom printed bags",
    "D-cut bags",
    "loop handle bags",
    "box bags",
    "non woven bags Raipur",
    "wholesale bags India",
  ],
  openGraph: DEFAULT_OPEN_GRAPH,
  twitter: {
    card: "summary",
  },
  // No site-wide canonical here: every page sets its own via `alternates`,
  // otherwise child pages inherit "/" and look like duplicates of the homepage.
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
      legalName: LEGAL_NAME,
      alternateName: BUSINESS.alternateNames,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      description:
        "Manufacturer of eco-friendly, custom printed non-woven bags in Raipur, Chhattisgarh: D-Cut, U-Cut, Loop Handle, Box and BOPP laminated bags.",
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      foundingDate: BUSINESS.foundingYear,
      address: {
        "@type": "PostalAddress",
        ...BUSINESS.address,
      },
      geo: {
        "@type": "GeoCoordinates",
        ...BUSINESS.geo,
      },
      hasMap: `https://www.google.com/maps?q=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}`,
      areaServed: { "@type": "Country", name: "India" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: BUSINESS.telephone,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
        {
          "@type": "ContactPoint",
          telephone: BUSINESS.altTelephone,
          contactType: "sales",
          areaServed: "IN",
        },
      ],
      sameAs: BUSINESS.sameAs,
      // Product/Offer nodes are left out on purpose: without prices Google reports them
      // as invalid Product items. Add them once real prices are published.
      knowsAbout: ["Non-woven bags", "D-cut bags", "U-cut bags", "Loop handle bags", "Box bags", "BOPP laminated bags", "Custom printed carry bags"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: {
        "@id": `${SITE_URL}/#business`,
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
