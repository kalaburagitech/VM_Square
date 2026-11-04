import type { Metadata } from "next";
import { SITE_URL } from "@/lib/company-info";

export const SITE_NAME = "VM SQUARE Security";

// 1200x630 crop of the homepage hero, sized for link previews (WhatsApp, LinkedIn, Facebook, X)
export const DEFAULT_OG_IMAGE = {
  url: "/images/og-vm-square-security.jpg",
  width: 1200,
  height: 630,
  alt: "VM SQUARE Security & Manpower Services officer at a commercial site in Bengaluru",
};

export interface OgImage {
  url: string;
  width?: number;
  height?: number;
  alt: string;
}

interface PageSeo {
  // Page title without the brand; the root layout template appends " | VM SQUARE"
  title: string;
  description: string;
  // Route path such as "/about" ("/" for the homepage)
  path: string;
  // Use the title exactly as given (no template), e.g. for the homepage
  absoluteTitle?: boolean;
  noIndex?: boolean;
  // Page-specific share image; defaults to DEFAULT_OG_IMAGE
  image?: OgImage;
}

export const absoluteUrl = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

// Builds per-page metadata. Next.js replaces (does not merge) openGraph/twitter objects
// from the layout, so every page gets the full set here, with its own canonical URL.
export function pageMetadata({ title, description, path, absoluteTitle, noIndex, image }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | VM SQUARE`;
  const url = absoluteUrl(path);
  const ogImage = image ?? DEFAULT_OG_IMAGE;

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
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

// WebPage + BreadcrumbList for an inner page. The organization and website nodes live in the
// root layout; these reference them by @id so there is one consistent entity graph.
export function pageJsonLd({
  name,
  description,
  path,
  crumbs,
  extra = [],
  type = "WebPage",
}: {
  // schema.org page type, e.g. "ContactPage" or "AboutPage"
  type?: string;
  name: string;
  description: string;
  path: string;
  // Trail after "Home", ending with the current page
  crumbs: Crumb[];
  // Additional nodes for this page (Service, FAQPage, ...)
  extra?: Record<string, unknown>[];
}) {
  const url = absoluteUrl(path);
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: trail.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      },
      ...extra,
    ],
  };
}

export function faqJsonLd(path: string, faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
