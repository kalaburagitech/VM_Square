import type { ComponentType } from "react";
import { ShieldCheck, Building2, Factory, Home, Users, Wrench, Video } from "lucide-react";

export interface ServiceItem {
  // Anchor id on /services (old links such as /services#<id> still scroll to the right card)
  id: string;
  // Old anchor ids kept so earlier links still scroll to the right card
  legacyIds?: string[];
  // URL segment of the dedicated page: /services/<slug>
  slug: string;
  title: string;
  // Short label for footers and compact link lists
  shortTitle: string;
  icon: ComponentType<{ className?: string }>;
}

// Single source for the service divisions shown on /services, /services/<slug>, the homepage and the footer
export const SERVICES: ServiceItem[] = [
  {
    id: "manned-guarding",
    legacyIds: ["physical-security"],
    slug: "security-guard-services",
    title: "Manned Guarding & Access Control",
    shortTitle: "Security Guard Services",
    icon: ShieldCheck,
  },
  {
    id: "corporate-security",
    slug: "corporate-office-security",
    title: "Corporate Office & Tech Park Security",
    shortTitle: "Corporate & Office Security",
    icon: Building2,
  },
  {
    id: "industrial-security",
    slug: "industrial-security",
    title: "Industrial & Warehouse Facility Protection",
    shortTitle: "Industrial Security",
    icon: Factory,
  },
  {
    id: "residential-security",
    slug: "apartment-security",
    title: "Residential Township & Gated Community Security",
    shortTitle: "Apartment & Residential Security",
    icon: Home,
  },
  {
    id: "event-security",
    legacyIds: ["secure-transit"],
    slug: "event-security",
    title: "Corporate Event & VIP Escort Services",
    shortTitle: "Event & VIP Security",
    icon: Users,
  },
  {
    id: "facility-management",
    legacyIds: ["risk-assessment"],
    slug: "housekeeping-facility-management",
    title: "Integrated Facility Management & Housekeeping",
    shortTitle: "Housekeeping & Facility Management",
    icon: Wrench,
  },
  {
    id: "electronic-security",
    legacyIds: ["cyber-security"],
    slug: "cctv-surveillance",
    title: "Electronic CCTV Surveillance & Control Room",
    shortTitle: "CCTV Surveillance & Monitoring",
    icon: Video,
  },
];

export const serviceHref = (service: ServiceItem) => `/services/${service.slug}`;
