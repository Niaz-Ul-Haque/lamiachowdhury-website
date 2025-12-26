import type { Metadata } from "next";
import { Cormorant, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lamiachowdhury.com"),
  title: {
    default: "Lamia Chowdhury | Toronto Real Estate Agent | GTA Realtor",
    template: "%s | Lamia Chowdhury - Toronto Realtor",
  },
  description:
    "Lamia Chowdhury is a trusted Toronto real estate agent helping buyers and sellers across the GTA. Data-driven guidance for first-time buyers, move-up buyers, and sellers in Toronto, Scarborough, North York, and beyond.",
  keywords: [
    "Toronto real estate agent",
    "GTA realtor",
    "Toronto homes for sale",
    "buy home Toronto",
    "sell home Toronto",
    "first-time home buyer Toronto",
    "Scarborough real estate",
    "North York realtor",
    "Century 21 Toronto",
    "Toronto condo",
    "GTA home buyer",
    "Toronto market updates",
  ],
  authors: [{ name: "Lamia Chowdhury" }],
  creator: "Lamia Chowdhury",
  publisher: "Lamia Chowdhury",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://lamiachowdhury.com",
    siteName: "Lamia Chowdhury - Toronto Real Estate",
    title: "Lamia Chowdhury | Toronto Real Estate Agent | GTA Realtor",
    description:
      "Your trusted Toronto real estate agent. Data-driven guidance for buying and selling homes across the GTA.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lamia Chowdhury - Toronto Real Estate Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamia Chowdhury | Toronto Real Estate Agent",
    description:
      "Your trusted Toronto real estate agent. Data-driven guidance for buying and selling homes across the GTA.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://lamiachowdhury.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
