import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vmsquaresecurity.com"),
  title: {
    default: "VM SQUARE SECURITY & MANPOWER SERVICES PVT. LTD.",
    template: "%s | VM SQUARE Security Services",
  },
  description: "ISO Certified Security & Manpower Solutions in Bengaluru & Karnataka. Professional manned guarding, corporate security, facility management, and industrial protection.",
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
    description: "Professional Security & Facility Management Services across Karnataka. 24/7 Helpline & Rapid Response.",
    siteName: "VM SQUARE Security",
  },
  icons: {
    icon: [
      { url: "/logo-icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo-icon.png",
    apple: "/logo.png",
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
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
