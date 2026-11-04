import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company-info";
import { SERVICES, serviceHref } from "@/lib/services-data";

// Public, indexable, canonical routes only. Keep this list in sync when pages are added or removed.
// lastModified / changeFrequency / priority are omitted on purpose: we have no accurate values for them.
const routes = [
  "/",
  "/about",
  "/services",
  ...SERVICES.map(serviceHref),
  "/gallery",
  "/why-choose-us",
  "/contact",
  "/request-quote",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
  }));
}
