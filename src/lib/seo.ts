import type { Metadata } from "next";
import { SITE_URL } from "@/lib/company-info";

export const SITE_NAME = "VM SQUARE Security";

const DEFAULT_OG_IMAGE = {
  url: "/images/hero_background2.jpg",
  width: 1200,
  height: 630,
  alt: "VM SQUARE Security & Manpower Services personnel",
};

interface PageSeo {
  // Page title without the brand; the root layout template appends " | VM SQUARE"
  title: string;
  description: string;
  // Route path such as "/about" ("/" for the homepage)
  path: string;
  // Use the title exactly as given (no template), e.g. for the homepage
  absoluteTitle?: boolean;
  noIndex?: boolean;
}

// Builds per-page metadata. Next.js replaces (does not merge) openGraph/twitter objects
// from the layout, so every page gets the full set here, with its own canonical URL.
export function pageMetadata({ title, description, path, absoluteTitle, noIndex }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | VM SQUARE`;
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: noIndex ? undefined : { canonical: url },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url,
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
