import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import SplashLoader from "@/components/SplashLoader";
import CookieBanner from "@/components/CookieBanner";
import MobileBottomBar from "@/components/MobileBottomBar";
import { SITE_INFO } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    default: "P Selvam | Certified Electrician & CCTV Installation Swindon",
    template: "%s | P Selvam Electrical & CCTV",
  },
  description:
    "P SELVAM LTD (Company No. 17510506) provides certified domestic & commercial electrical wiring, 4K CCTV systems, fire-rated LED lighting & sockets across Swindon, Wiltshire, Gloucestershire, Oxfordshire & Berkshire.",
  keywords: [
    "CCTV installation Swindon",
    "electrician Swindon",
    "CCTV repair Swindon",
    "light fitting installation Swindon",
    "fuse board replacement Swindon",
    "consumer unit upgrade",
    "emergency electrician Swindon",
    "4K CCTV Wiltshire",
    "outdoor sockets Swindon",
  ],
  authors: [{ name: SITE_INFO.companyName }],
  creator: SITE_INFO.companyName,
  publisher: SITE_INFO.companyName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_INFO.url,
    title: "P Selvam | Electrical & 4K CCTV Installation Swindon",
    description:
      "Precision domestic and commercial electrical contracting, 4K ColorVu CCTV systems, and architectural LED lighting in Swindon and surrounding regions.",
    siteName: SITE_INFO.companyName,
    images: [
      {
        url: `${SITE_INFO.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "P SELVAM LTD Electrical and CCTV Systems Swindon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P Selvam | Electrical & CCTV Specialists Swindon",
    description: "Certified electricians & 4K smart CCTV installers in Swindon, Wiltshire and surrounding counties.",
    images: [`${SITE_INFO.url}/og-image.png`],
  },
  alternates: {
    canonical: SITE_INFO.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_INFO.url}/#organization`,
        name: SITE_INFO.companyName,
        legalName: SITE_INFO.companyName,
        alternateName: `${SITE_INFO.brandName} Electrical & CCTV`,
        url: SITE_INFO.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_INFO.url}/logo.png`,
          caption: `${SITE_INFO.companyName} Official Logo`,
          width: 512,
          height: 512,
        },
        image: `${SITE_INFO.url}/logo.png`,
        telephone: SITE_INFO.phone,
        email: SITE_INFO.email,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE_INFO.phone,
            contactType: "customer service",
            areaServed: "GB",
            availableLanguage: "English",
          },
        ],
      },
      {
        "@type": ["Electrician", "LocalBusiness"],
        "@id": `${SITE_INFO.url}/#business`,
        name: SITE_INFO.companyName,
        legalName: SITE_INFO.companyName,
        alternateName: `${SITE_INFO.brandName} Electrical & CCTV`,
        url: SITE_INFO.url,
        logo: `${SITE_INFO.url}/logo.png`,
        image: `${SITE_INFO.url}/logo.png`,
        telephone: SITE_INFO.phone,
        email: SITE_INFO.email,
        description:
          "Professional certified electrical services, 4K CCTV camera installation, consumer unit replacements, LED lighting, and outdoor power across Swindon and surrounding counties.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "91A Faringdon Road",
          addressLocality: "Swindon",
          addressRegion: "Wiltshire",
          postalCode: "SN1 5DH",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.5606,
          longitude: -1.7891,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "10:00",
            closes: "16:00",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Swindon" },
          { "@type": "AdministrativeArea", name: "Wiltshire" },
          { "@type": "AdministrativeArea", name: "Gloucestershire" },
          { "@type": "AdministrativeArea", name: "Oxfordshire" },
          { "@type": "AdministrativeArea", name: "Berkshire" },
        ],
        priceRange: "££",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        currenciesAccepted: "GBP",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_INFO.url}/#website`,
        url: SITE_INFO.url,
        name: `${SITE_INFO.brandName} Electrical & CCTV`,
        publisher: {
          "@id": `${SITE_INFO.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en-GB" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1F6FEB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Full-screen 2s Splash Screen with animated logo */}
        <SplashLoader />

        {/* Sticky Top Navbar with Mega Menu */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Multi-column Navy Footer */}
        <Footer />

        {/* Floating WhatsApp and Sticky Bottom Bar for Mobile */}
        <MobileBottomBar />

        {/* UK GDPR / PECR Cookie Banner & Modal */}
        <CookieBanner />
      </body>
    </html>
  );
}
