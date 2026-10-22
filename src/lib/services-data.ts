import type { ComponentType } from "react";
import { ShieldCheck, Building2, Factory, Home, Users, Wrench, Video } from "lucide-react";

export interface ServiceItem {
  // Anchor id on /services (footer links use /services#<id>)
  id: string;
  // Old anchor ids kept so earlier links still scroll to the right card
  legacyIds?: string[];
  title: string;
  icon: ComponentType<{ className?: string }>;
}

// Single source for the service divisions shown on /services and the homepage
export const SERVICES: ServiceItem[] = [
  { id: "manned-guarding", legacyIds: ["physical-security"], title: "Manned Guarding & Access Control", icon: ShieldCheck },
  { id: "corporate-security", title: "Corporate Office & Tech Park Security", icon: Building2 },
  { id: "industrial-security", title: "Industrial & Warehouse Facility Protection", icon: Factory },
  { id: "residential-security", title: "Residential Township & Gated Community Security", icon: Home },
  { id: "event-security", legacyIds: ["secure-transit"], title: "Corporate Event & VIP Escort Services", icon: Users },
  { id: "facility-management", legacyIds: ["risk-assessment"], title: "Integrated Facility Management & Housekeeping", icon: Wrench },
  { id: "electronic-security", legacyIds: ["cyber-security"], title: "Electronic CCTV Surveillance & Control Room", icon: Video },
];
