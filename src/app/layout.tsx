import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { COMPANY_INFO, SITE_URL } from "@/lib/company-info";
import { SITE_NAME } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Security & Manpower Services in Bengaluru | VM SQUARE",
    template: "%s | VM SQUARE",
  },
  description:
    "Bengaluru-based security guard, corporate, industrial and apartment security, and housekeeping services across Karnataka. Enquiries welcome from across India.",
  keywords: [
    "Security Services Bengaluru",
    "Security Guard Agency Bangalore",
    "Manpower Services Karnataka",
    "Corporate Security Guard",
    "Industrial Security Services",
    "VM SQUARE Security",
    "Facility Management Bangalore",
  ],
  authors: [{ name: "VM SQUARE SECURITY & MANPOWER SERVICES PVT. LTD." }],
  creator: "VM SQUARE",
  // No canonical or og:url here: child pages inherit them, so each page sets its own via pageMetadata()
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Security & Manpower Services in Bengaluru | VM SQUARE",
    description:
      "Bengaluru-based security guard, corporate, industrial and apartment security, and housekeeping services across Karnataka.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/hero_background2.jpg",
        width: 1200,
        height: 630,
        alt: "VM SQUARE Security & Manpower Personnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Manpower Services in Bengaluru | VM SQUARE",
    description: "Bengaluru-based security guard, corporate, industrial and apartment security, and housekeeping services across Karnataka.",
    images: ["/images/hero_background2.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo-icon-transparent.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo-icon-transparent.png",
    apple: "/logo-transparent.png",
  },
};

// Structured data uses only facts published in COMPANY_INFO (name, contact details, office address).
// Opening hours, ratings and certifications are intentionally omitted until verified.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SecurityService",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_INFO.name,
      alternateName: COMPANY_INFO.shortName,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-transparent.png`,
      image: `${SITE_URL}/images/hero_background2.jpg`,
      telephone: COMPANY_INFO.phone.raw,
      email: COMPANY_INFO.email.address,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${COMPANY_INFO.address.building}, ${COMPANY_INFO.address.street}`,
        addressLocality: COMPANY_INFO.address.city,
        addressRegion: COMPANY_INFO.address.state,
        postalCode: COMPANY_INFO.address.pincode,
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Bengaluru" },
        { "@type": "State", name: "Karnataka" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1 pt-[72px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
