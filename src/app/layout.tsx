import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { COMPANY_INFO, SITE_URL } from "@/lib/company-info";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Security Agency in Bengaluru & Karnataka | VM SQUARE",
    template: "%s | VM SQUARE",
  },
  description:
    "Bengaluru-based security and manpower company: trained security guards, industrial, office and apartment security, and housekeeping across Karnataka.",
  applicationName: SITE_NAME,
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
    title: "Security Agency in Bengaluru & Karnataka | VM SQUARE",
    description:
      "Bengaluru-based security and manpower company: trained security guards, industrial, office and apartment security, and housekeeping across Karnataka.",
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Agency in Bengaluru & Karnataka | VM SQUARE",
    description:
      "Bengaluru-based security and manpower company: trained security guards, industrial, office and apartment security, and housekeeping across Karnataka.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  // Favicon comes from src/app/icon.png (file convention); a small dedicated apple-touch icon avoids
  // shipping the 2688px wordmark to iOS home screens.
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

// Structured data uses only facts published in COMPANY_INFO (name, contact details, office address).
// Opening hours, ratings and certifications are intentionally omitted until verified.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // "SecurityService" is not a schema.org type, so search engines ignored it; LocalBusiness is the valid type
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_INFO.name,
      alternateName: COMPANY_INFO.shortName,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-transparent.png`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
      description:
        "Bengaluru-based security and manpower company providing security guards, corporate, industrial and residential security, event security, CCTV monitoring, housekeeping and facility management across Karnataka.",
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
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.phone.raw,
        email: COMPANY_INFO.email.address,
        contactType: "customer service",
        areaServed: "IN",
      },
      hasMap: COMPANY_INFO.address.googleMapsUrl,
      // Add the company's official profile URLs here (Google Business Profile, LinkedIn, Facebook, ...)
      // once confirmed; leave empty rather than guessing.
      ...(COMPANY_INFO.socialProfiles.length > 0
        ? { sameAs: COMPANY_INFO.socialProfiles.map((profile) => profile.url) }
        : {}),
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
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={jsonLd} />
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
