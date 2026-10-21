import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Factory,
  Home,
  Truck,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Hotel,
  CheckCircle2,
  ArrowRight,
  Shield,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";

export const metadata: Metadata = {
  title: "Industries We Serve | VM SQUARE Security Services",
  description:
    "Sector-specific security deployments across Karnataka: Corporate tech parks, manufacturing plants, gated townships, logistics hubs, hospitals, educational campuses, and retail complexes.",
  alternates: {
    canonical: "https://vmsquaresecurity.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | VM SQUARE Security Services",
    description:
      "Tailored security protocols for corporate buildings, industrial facilities, healthcare campuses, and gated communities across South India.",
    url: "https://vmsquaresecurity.com/industries",
    type: "website",
  },
};

interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  protocols: string[];
  keyChallengesSolved: string;
}

const industriesList: IndustryItem[] = [
  {
    id: "corporate",
    name: "Corporate IT & Commercial Tech Parks",
    tagline: "Executive presence, electronic badge turnstiles, and confidential data protection.",
    icon: Building2,
    protocols: [
      "Access control barrier & visitor photo badging",
      "Confidential executive floor & server room guarding",
      "Emergency evacuation marshals and fire wardens",
      "Multi-tenant perimeter and parking traffic regulation",
    ],
    keyChallengesSolved: "Mitigates unauthorized visitor tailgating, intellectual property leakage, and parking bottlenecks.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing Plants & Heavy Industrial Estates",
    tagline: "Industrial safety compliance, gate passes, perimeter monitoring, and loss prevention.",
    icon: Factory,
    protocols: [
      "Weighbridge inspection & cargo manifest reconciliation",
      "Personal Protective Equipment (PPE) compliance checks at gate",
      "Perimeter fence night patrol with searchlights",
      "Daily worker frisking & theft deterrence measures",
    ],
    keyChallengesSolved: "Prevents raw material pilferage, unauthorized union protests, and industrial safety violations.",
  },
  {
    id: "residential",
    name: "Residential Townships & Gated Communities",
    tagline: "Friendly resident assistance, delivery screening, and tranquil perimeter vigil.",
    icon: Home,
    protocols: [
      "Gate management application logging & resident call confirmation",
      "Domestic staff, courier, and cab entry regulation",
      "Night patrols of clubhouse, pools, and basement parking",
      "Speed limit and traffic enforcement on township internal roads",
    ],
    keyChallengesSolved: "Ensures peace of mind for families, screens delivery personnel, and manages visitor parking disputes.",
  },
  {
    id: "logistics",
    name: "Logistics Hubs & Warehousing Facilities",
    tagline: "High-value asset safety, dispatch monitoring, and dock bay protection.",
    icon: Truck,
    protocols: [
      "Container seal inspection & dispatch logbook audits",
      "Loading dock CCTV surveillance & supervisor presence",
      "Driver alcohol/sobriety checks and gate clearance",
      "Perimeter intrusion detection & 24/7 gate post coverage",
    ],
    keyChallengesSolved: "Stops transit theft, prevents inventory damage, and maintains strict delivery tracking.",
  },
  {
    id: "healthcare",
    name: "Healthcare Facilities & Hospitals",
    tagline: "Compassionate, calm crowd management and emergency ward security.",
    icon: Stethoscope,
    protocols: [
      "24/7 Emergency / Casualty gate security officers",
      "Patient attendant pass verification & crowd de-escalation",
      "Ambulance bay clearance & rapid response protocols",
      "Strict restriction of pharmacy and medical store areas",
    ],
    keyChallengesSolved: "De-escalates agitated crowds, keeps emergency passages open, and secures sensitive pharmaceutical stocks.",
  },
  {
    id: "education",
    name: "Educational Institutions & Campuses",
    tagline: "Student safety, anti-bullying perimeter watch, and parent visitor verification.",
    icon: GraduationCap,
    protocols: [
      "Strict campus boundary patrol & student exit pass verification",
      "Parent / visitor ID recording & designated meeting zones",
      "School bus arrival/departure traffic direction & child safety",
      "Tobacco, contraband, and unauthorized vendor perimeter ban",
    ],
    keyChallengesSolved: "Prevents unauthorized outsiders from entering campus and ensures student transit safety.",
  },
  {
    id: "retail",
    name: "Retail Malls & Commercial Complexes",
    tagline: "High-footfall crowd control, customer assistance, and shoplifting prevention.",
    icon: ShoppingBag,
    protocols: [
      "Baggage screening & doorway metal detector scanning",
      "Floor security patrols deterring pickpocketing & shoplifting",
      "Lost child & missing belongings assistance coordination",
      "Fire lane and emergency exit path clearance audits",
    ],
    keyChallengesSolved: "Controls large weekend crowds, minimizes inventory shrinkage, and handles emergency evacuations.",
  },
  {
    id: "hospitality",
    name: "Hospitality Venues & Event Spaces",
    tagline: "Discreet VIP security, parking valet management, and guest comfort.",
    icon: Hotel,
    protocols: [
      "Discreet uniformed or plainclothes security deployment",
      "Banqueting hall access regulation for private functions",
      "Valet parking security and perimeter vehicle watch",
      "Key card access control for guest rooms and staff quarters",
    ],
    keyChallengesSolved: "Balances non-intrusive luxury guest hospitality with ironclad perimeter safety.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Hero Header Banner */}
      <section className="bg-[#0B1E33] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#12314D]/90 to-[#0B1E33] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CD9423]/20 text-[#CD9423] border border-[#CD9423]/40 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-4 w-4" />
            <span>SECTOR EXPERTISE</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            INDUSTRIES WE SECURE
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every sector faces distinct operational risks and statutory obligations. VM SQUARE designs custom Standard Operating Procedures (SOPs) engineered specifically for your facility type.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link href="/request-quote">
              <Button className="bg-[#CD9423] hover:bg-[#B88219] text-[#0B1E33] font-extrabold px-7 py-3 rounded-xl shadow-lg border-0">
                Get Sector-Specific Plan
              </Button>
            </Link>
            <Link href="/clients">
              <Button variant="outline" className="border-slate-600 text-white hover:bg-white/10 px-6 py-3 rounded-xl">
                Explore Valued Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Sector Directory Grid */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-[#CD9423]">
            Dedicated Protection Modules
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A192B]">
            Custom Protocols for Every Environment
          </h2>
          <p className="text-slate-600 text-base">
            Our security personnel undergo environment-specific training before deployment so they understand the exact SOPs of your domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesList.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-7 md:p-8 shadow-sm hover:shadow-xl hover:border-[#CD9423]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-[#12314D]/10 text-[#12314D] group-hover:bg-[#12314D] group-hover:text-[#CD9423] transition-colors shrink-0">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A192B] group-hover:text-[#12314D] transition-colors">
                        {industry.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 font-medium">
                        {industry.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Targeted Deployment SOPs:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {industry.protocols.map((protocol, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#CD9423] shrink-0 mt-0.5" />
                          <span>{protocol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-xs text-slate-600 bg-[#F6F8FB] p-3 rounded-xl border border-slate-200 leading-relaxed">
                    <strong className="text-slate-800">Operational Value:</strong> {industry.keyChallengesSolved}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/request-quote?industry=${encodeURIComponent(industry.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#12314D] group-hover:text-[#CD9423] transition-colors"
                  >
                    <span>Request Proposal for {industry.name.split(" ")[0]}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/services"
                    className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    View Services &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="bg-[#0B1E33] text-white py-16 border-t border-slate-800 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">Require a Specialized Security Assessment?</h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Our Senior Security Consultants conduct confidential physical site audits to evaluate vulnerabilities, recommend guard force requirements, and optimize surveillance points.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-[#CD9423] hover:bg-[#B88219] text-[#0B1E33] font-extrabold px-8 py-3 rounded-xl shadow-lg border-0">
                Book a Site Audit
              </Button>
            </Link>
            <a href={COMPANY_INFO.phone.tel}>
              <Button variant="outline" className="border-slate-600 text-white hover:bg-white/10 px-6 py-3 rounded-xl">
                <PhoneCall className="mr-2 h-4 w-4 text-[#CD9423]" />
                Call Operations: {COMPANY_INFO.phone.display}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
