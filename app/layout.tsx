import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TawkChat from "./components/TawkChat";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SkyHold – Flight Reservations for Visa Applications",
  description:
    "Get official flight reservations for visa applications. Embassy-ready PDF delivered fast. Trusted by thousands of travellers worldwide.",
  keywords:
    "flight reservation, dummy ticket, visa application, embassy, Schengen visa, onward travel proof",
  openGraph: {
    title: "SkyHold – Flight Reservations for Visa Applications",
    description:
      "Get official flight reservations for visa applications. Embassy-ready PDF delivered fast.",
    url: "https://skyhold.vercel.app",
    siteName: "SkyHold",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TawkChat />
      </body>
    </html>
  );
}