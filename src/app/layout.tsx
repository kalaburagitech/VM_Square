import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { COMPANY_INFO } from "@/lib/company-info";

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
  metadataBase: new URL("https://vmsquaresecurity.com"),
  title: {
    default: "VM SQUARE SECURITY & MANPOWER SERVICES PVT. LTD.",
    template: "%s | VM SQUARE Security Services",
  },
  description:
    "ISO Certified Security & Manpower Solutions in Bengaluru & Karnataka. Professional manned guarding, corporate security, facility management, and industrial protection.",
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
  alternates: {
    canonical: "https://vmsquaresecurity.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vmsquaresecurity.com",
    title: "VM SQUARE SECURITY & MANPOWER SERVICES PVT. LTD.",
    description:
      "Professional Security & Facility Management Services across Karnataka. 24/7 Helpline & Rapid Response.",
    siteName: "VM SQUARE Security",
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
    title: "VM SQUARE SECURITY & MANPOWER SERVICES PVT. LTD.",
    description: "Professional Security & Facility Management Services across Karnataka. 24/7 Helpline & Rapid Response.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: COMPANY_INFO.name,
  alternateName: COMPANY_INFO.shortName,
  url: "https://vmsquaresecurity.com",
  logo: "https://vmsquaresecurity.com/logo-transparent.png",
  image: "https://vmsquaresecurity.com/images/hero_background2.jpg",
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
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Karnataka",
  },
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
