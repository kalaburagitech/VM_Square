import Image from "next/image";
import {
  Building2,
  Target,
  MapPin,
  Phone,
  Mail,
  Shield,
  Award,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/company-info";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Our Security & Manpower Company",
  description:
    "VM SQUARE Security & Manpower Services Pvt. Ltd. is a Bengaluru-based provider of trained security personnel and facility support across Karnataka.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Hero Header Banner */}
      <section className="bg-[#0B1E33] text-white py-12 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#12314D]/90 to-[#0B1E33] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-4 w-4" />
            <span>ABOUT OUR COMPANY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            ABOUT VM SQUARE
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            VM SQUARE Security &amp; Manpower Services Pvt. Ltd. delivers disciplined guarding, electronic CCTV surveillance, and specialized facility management across Karnataka.
          </p>
        </div>
      </section>

      {/* Main Company Story & Mission */}
      <section className="py-12 md:py-14 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <p className="text-xs font-bold uppercase tracking-wider text-vmgold">
                Our Corporate Identity
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A192B] leading-tight">
                Pioneering Professional Security &amp; Manpower Solutions
              </h2>
            </div>

            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              Founded in Bengaluru, <strong>VM SQUARE SECURITY &amp; MANPOWER SERVICES PVT. LTD.</strong> was established to bridge the gap between traditional security guarding and modern enterprise risk management. We combine strictly vetted security personnel with proactive supervisor audits, robust gatehouse registers, and 24/7 command operations.
            </p>

            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              Whether safeguarding high-density corporate tech parks, securing heavy industrial factories, or managing gated residential communities, our operations are driven by formal Standard Operating Procedures (SOPs) and disciplined accountability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2.5 text-vmnavy font-bold">
                  <Target className="h-5 w-5 text-vmgold" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide absolute safety, asset protection, and operational peace of mind to our clients through thoroughly vetted personnel and technology-driven vigilance.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2.5 text-vmnavy font-bold">
                  <Award className="h-5 w-5 text-vmgold" />
                  <span>Quality Standards</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured operational protocols with background verification, regular drills, shift briefings, and time-stamped perimeter patrol logs.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              <Image
                src="/images/gallery/courtyard_training.jpg"
                alt="VM SQUARE Security Personnel Drill and Lineup Formation Training"
                fill
                className="object-cover object-[center_18%] sm:object-[center_20%] md:object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 45vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-lg">
                <span className="text-xs font-bold text-vmgold uppercase tracking-wider block">
                  Disciplined Training
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                  Daily formation lineups, physical conditioning, and gate procedures
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Training & Operational Facilities In Action */}
      <section className="py-12 md:py-14 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-vmgold">
              Operational Readiness
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A192B]">
              Prepared for Every Eventuality
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              From fire emergencies to perimeter breach response, our personnel are trained through practical field simulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <Image
                src="/images/gallery/fire_safety_train.jpg"
                alt="VM SQUARE Live Fire Safety and Emergency Evacuation Training"
                fill
                className="object-cover object-[50%_35%] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-vmgold uppercase tracking-wider block">
                  Emergency Readiness
                </span>
                <h3 className="text-base md:text-lg font-bold">Fire Extinguisher &amp; Evacuation Drills</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Hands-on safety conditioning ensuring guards react decisively during fire or crisis incidents.
                </p>
              </div>
            </div>

            <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <Image
                src="/images/gallery/command_center.jpg"
                alt="VM SQUARE 24/7 Operations Monitoring Command Wall"
                fill
                className="object-cover object-[45%_center] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-vmgold uppercase tracking-wider block">
                  Command Integration
                </span>
                <h3 className="text-base md:text-lg font-bold">24/7 Central Operations Control</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Supervisory coordination, telemetry monitoring, and rapid mobile unit dispatch across Bengaluru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head Office & Operations Desk Details */}
      <section className="py-10 md:py-12 bg-[#0B1E33] text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vmgold/20 text-vmgold text-xs font-bold uppercase">
            <Building2 className="h-4 w-4" />
            <span>Head Office &amp; Operations Center</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white">
            {COMPANY_INFO.name}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our administrative headquarters and operations dispatch are located in Bengaluru, servicing clients across Karnataka.
          </p>

          <div className="pt-2 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-start gap-2 max-w-md text-left">
              <MapPin className="h-5 w-5 text-vmgold shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address.full}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-vmgold shrink-0" />
              <a href={COMPANY_INFO.phone.tel} className="hover:text-vmgold font-bold">
                {COMPANY_INFO.phone.display} (24/7 Helpline)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-vmgold shrink-0" />
              <a href={COMPANY_INFO.email.mailto} className="hover:text-vmgold break-all">
                {COMPANY_INFO.email.address}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
