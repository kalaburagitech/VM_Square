import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Factory,
  Home,
  Users,
  Wrench,
  Video,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";

export const metadata: Metadata = {
  title: "Professional Security & Facility Services | VM SQUARE",
  description:
    "Comprehensive security services across Bengaluru and Karnataka: Manned guarding, corporate security, industrial protection, gated township security, event security, facility management, and CCTV surveillance.",
  alternates: {
    canonical: "https://vmsquaresecurity.com/services",
  },
  openGraph: {
    title: "Security & Facility Services | VM SQUARE Security Services",
    description:
      "Trained manned guarding, corporate protection, industrial security, and facility management across Karnataka. 24/7 supervision & rapid response.",
    url: "https://vmsquaresecurity.com/services",
    type: "website",
  },
};

interface ServiceItem {
  id: string;
  legacyIds?: string[];
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  bestFor: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "manned-guarding",
    legacyIds: ["physical-security"],
    title: "Manned Guarding & Access Control",
    shortDesc:
      "Disciplined, background-verified security guards stationed for strict access regulation, visitor logging, material in/out registers, and perimeter surveillance.",
    icon: ShieldCheck,
    deliverables: [
      "24/7 static post guarding and gatehouse operations",
      "Visitor credential verification & vehicle inspection",
      "Regular perimeter patrol rounds with time-stamped logs",
      "Daily shift briefing and supervisor audit inspections",
    ],
    bestFor: "Commercial buildings, gates, factories, tech parks, and residential entrances",
  },
  {
    id: "corporate-security",
    title: "Corporate Office & Tech Park Security",
    shortDesc:
      "Polished, tech-savvy security officers trained in executive hospitality, turnstile management, badge issuance, and emergency evacuation management.",
    icon: Building2,
    deliverables: [
      "Access control turnstiles & biometric badge enforcement",
      "Front desk executive concierge & visitor escort",
      "Confidential meeting room access monitoring",
      "Fire marshal coordination & emergency evacuation drills",
    ],
    bestFor: "IT tech parks, corporate headquarters, and multinational offices",
  },
  {
    id: "industrial-security",
    title: "Industrial & Warehouse Facility Protection",
    shortDesc:
      "High-vigilance physical security designed for heavy manufacturing plants, logistics warehouses, cargo loading bays, and raw material yards.",
    icon: Factory,
    deliverables: [
      "Weighbridge monitoring & freight entry/exit documentation",
      "Material inward/outward gate pass reconciliation",
      "Night perimeter patrol with high-beam illumination",
      "Perimeter fence breach and intrusion prevention",
    ],
    bestFor: "Manufacturing units, distribution warehouses, logistics parks, and industrial estates",
  },
  {
    id: "residential-security",
    title: "Residential Township & Gated Community Security",
    shortDesc:
      "Courteous yet firm community guarding focused on resident safety, visitor gate management, delivery boy screening, and perimeter tranquility.",
    icon: Home,
    deliverables: [
      "Gate management app / visitor verification protocols",
      "Clubhouse, parking lot, and children's play area patrols",
      "Traffic regulation and speed checks inside township roads",
      "Rapid assistance during domestic emergencies or power failures",
    ],
    bestFor: "Apartment complexes, villa enclaves, and gated residential townships",
  },
  {
    id: "event-security",
    legacyIds: ["secure-transit"],
    title: "Corporate Event & VIP Escort Services",
    shortDesc:
      "Specialized crowd control, queue management, credential scanner checks, and close protection officers for leadership summits, AGMs, and commercial expos.",
    icon: Users,
    deliverables: [
      "Entrance frisking, metal detector sweeps & bag scanning",
      "VIP dignitary escort detail & secure route planning",
      "Crowd dispersal & emergency corridor maintenance",
      "Coordination with local law enforcement & medical teams",
    ],
    bestFor: "Conferences, exhibitions, shareholder meetings, and private corporate events",
  },
  {
    id: "facility-management",
    legacyIds: ["risk-assessment"],
    title: "Integrated Facility Management & Housekeeping",
    shortDesc:
      "Complete soft services management to maintain pristine, hygienic, and compliant corporate facilities alongside physical guarding.",
    icon: Wrench,
    deliverables: [
      "Professional corporate housekeeping & sanitization squads",
      "Waste management & eco-friendly disposal procedures",
      "Restroom hygiene maintenance & supplies monitoring",
      "Pantry boy and office support staffing",
    ],
    bestFor: "Corporate offices, educational campuses, hospitals, and commercial malls",
  },
  {
    id: "electronic-security",
    legacyIds: ["cyber-security"],
    title: "Electronic CCTV Surveillance & Control Room",
    shortDesc:
      "Integration of video surveillance monitoring, alarm telemetry, motion detection systems, and central control room supervisor coordination.",
    icon: Video,
    deliverables: [
      "Continuous live CCTV wall monitoring & anomaly logging",
      "Automated alarm verification & guard dispatch",
      "Biometric access control maintenance & entry audits",
      "Incident footage extraction for investigation support",
    ],
    bestFor: "High-security campuses, data centers, server rooms, and commercial hubs",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Hero Header Banner */}
      <section className="bg-[#0B1E33] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#12314D]/90 to-[#0B1E33] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CD9423]/20 text-[#CD9423] border border-[#CD9423]/40 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-4 w-4" />
            <span>EXCELLENCE IN PROTECTION</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            COMPREHENSIVE SECURITY &amp; MANPOWER SERVICES
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From disciplined manned guarding to high-tech surveillance and integrated facility upkeep, VM SQUARE delivers certified protection across Karnataka.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link href="/request-quote">
              <Button className="bg-[#CD9423] hover:bg-[#B88219] text-[#0B1E33] font-extrabold px-7 py-3 rounded-xl shadow-lg border-0">
                Request a Site Quote
              </Button>
            </Link>
            <a href={COMPANY_INFO.phone.tel}>
              <Button variant="outline" className="border-slate-600 text-white hover:bg-white/10 px-6 py-3 rounded-xl">
                <PhoneCall className="mr-2 h-4 w-4 text-[#CD9423]" />
                Call Helpline: {COMPANY_INFO.phone.display}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Services Dossier Grid */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-[#CD9423]">
            Custom Tailored Deployments
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A192B]">
            Our Core Service Divisions
          </h2>
          <p className="text-slate-600 text-base">
            Every facility has unique risk profiles. Our security plans are custom-engineered following an initial on-site security audit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl hover:border-[#CD9423]/50 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Legacy Anchor Compatibility targets (invisible) */}
                {service.legacyIds?.map((legId) => (
                  <span key={legId} id={legId} className="absolute -top-28 left-0 block h-0 w-0" />
                ))}

                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3.5 rounded-xl bg-[#12314D]/10 text-[#12314D] group-hover:bg-[#12314D] group-hover:text-[#CD9423] transition-colors shrink-0">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      Division #{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0A192B] group-hover:text-[#12314D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Standard Operational Scope:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#CD9423] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-xs text-slate-500 bg-[#F6F8FB] p-3 rounded-xl border border-slate-200">
                    <strong className="text-slate-800">Recommended for:</strong> {service.bestFor}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/request-quote?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#12314D] group-hover:text-[#CD9423] transition-colors"
                  >
                    <span>Request Quote For This Service</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Speak with Field Officer &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Operational Assurance Banner */}
      <section className="bg-[#0B1E33] text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl text-[#CD9423] shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">24/7 Operations Desk</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Active monitoring desk with night patrol supervisors inspecting sites across Bengaluru around the clock.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl text-[#CD9423] shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Verified Guard Force</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  100% police verification, background validation, physical conditioning, and fire safety drill training.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl text-[#CD9423] shrink-0">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Rapid Deployment</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Equipped to deploy guard strength on short notice for newly acquired facilities, events, or site handovers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
