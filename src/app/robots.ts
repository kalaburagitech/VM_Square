import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company-info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /thank-you is not blocked here so crawlers can read its noindex directive
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
