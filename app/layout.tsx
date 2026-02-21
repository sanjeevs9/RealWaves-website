import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {Footer} from "./Sections/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealWaves - Premium Non-Woven Bag Manufacturer",
  description:
    "Leading manufacturer of eco-friendly, customizable non-woven bags in Central India. Sustainable packaging solutions for businesses.",
  // So link previews (Slack, iMessage, Facebook, etc.) show RealWaves, not "Create Next App"
  openGraph: {
    title: "RealWaves - Premium Non-Woven Bag Manufacturer",
    description:
      "Leading manufacturer of eco-friendly, customizable non-woven bags in Central India. Sustainable packaging solutions for businesses.",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
