import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  Users,
  Target,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";

export const metadata: Metadata = {
  title: "About Us | VM SQUARE Security & Manpower Services",
  description:
    "Learn about VM SQUARE Security & Manpower Services Pvt. Ltd.: ISO-certified guarding, trained personnel, 24/7 operational vigilance, and customized security management based in Bengaluru, Karnataka.",
  alternates: {
    canonical: "https://vmsquaresecurity.com/about",
  },
  openGraph: {
    title: "About VM SQUARE Security Services",
    description:
      "Disciplined manned guarding, electronic surveillance, and integrated facility management across Karnataka. 24/7 supervision & verified personnel.",
    url: "https://vmsquaresecurity.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Hero Header Banner */}
      <section className="bg-[#0B1E33] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#12314D]/90 to-[#0B1E33] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-4 w-4" />
            <span>ABOUT OUR COMPANY</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            ABOUT VM SQUARE
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            VM SQUARE Security &amp; Manpower Services Pvt. Ltd. delivers disciplined guarding, electronic CCTV surveillance, and specialized facility management across Karnataka.
          </p>
        </div>
      </section>

      {/* Main Company Story & Mission */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-vmgold">
                Our Corporate Identity
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A192B] leading-tight">
                Pioneering Professional Security &amp; Manpower Solutions
              </h2>
            </div>

            <p className="text-slate-700 text-base leading-relaxed">
              Founded in Bengaluru, <strong>VM SQUARE SECURITY &amp; MANPOWER SERVICES PVT. LTD.</strong> was established to bridge the gap between traditional security guarding and modern enterprise risk management. We combine strictly vetted security personnel with proactive supervisor audits, robust gatehouse registers, and 24/7 command operations.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              Whether safeguarding high-density corporate tech parks, securing heavy industrial factories, or managing gated residential communities, our operations are driven by formal Standard Operating Procedures (SOPs) and disciplined accountability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2.5 text-vmnavy font-bold">
                  <Target className="h-5 w-5 text-vmgold" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide absolute safety, asset protection, and operational peace of mind to our clients through thoroughly vetted personnel and technology-driven vigilance.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2.5 text-vmnavy font-bold">
                  <Award className="h-5 w-5 text-vmgold" />
                  <span>Quality Standards</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ISO-certified operational protocols with rigorous background verification, regular drills, shift briefings, and time-stamped perimeter patrol logs.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[320px] sm:h-[440px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              <Image
                src="/images/gallery/courtyard_training.jpg"
                alt="VM SQUARE Security Personnel Drill and Lineup Formation Training"
                fill
                className="object-cover object-[center_18%] sm:object-[center_20%] md:object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 45vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg">
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

      {/* Operational Methodology Pillars */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-vmgold">
              The VM SQUARE Advantage
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A192B]">
              Core Pillars of Our Security Delivery
            </h2>
            <p className="text-slate-600 text-base">
              Every guard deployment is backed by structured recruitment, mandatory background screening, and multi-tier field supervisor audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F8FB] p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="p-3.5 bg-vmnavy text-vmgold rounded-xl w-fit">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0A192B]">100% Background Verified</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All candidates undergo residential checks, identity verification, criminal record screening, and previous employer validation before induction into our security force.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-vmgold" /> Police verification records
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-vmgold" /> Aadhaar &amp; address authentication
                </li>
              </ul>
            </div>

            <div className="bg-[#F6F8FB] p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="p-3.5 bg-vmnavy text-vmgold rounded-xl w-fit">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0A192B]">Comprehensive Training</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Guards receive intensive training in gatehouse documentation, fire extinguisher operation, crowd management, visitor hospitality, and emergency evacuation drills.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-vmgold" /> Live fire drill conditioning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-vmgold" /> Visitor app &amp; register maintenance
                </li>
              </ul>
            </div>

            <div className="bg-[#F6F8FB] p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="p-3.5 bg-vmnavy text-vmgold rounded-xl w-fit">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0A192B]">24/7 Field Supervision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated Field Officers and Mobile Patrol Units conduct unannounced day and night surprise visits to inspect guard turnout, alertness, and register accuracy.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-vmgold" /> Night surprise inspection rounds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-vmgold" /> Prompt reliever / replacement support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Operational Facilities In Action */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-vmgold">
            Operational Readiness
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A192B]">
            Prepared for Every Eventuality
          </h2>
          <p className="text-slate-600 text-base">
            From fire emergencies to perimeter breach response, our personnel are trained through practical field simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <Image
              src="/images/gallery/fire_safety_train.jpg"
              alt="VM SQUARE Live Fire Safety and Emergency Evacuation Training"
              fill
              className="object-cover object-[50%_35%] group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs font-bold text-vmgold uppercase tracking-wider block">
                Emergency Readiness
              </span>
              <h3 className="text-lg font-bold">Fire Extinguisher &amp; Evacuation Drills</h3>
              <p className="text-xs text-slate-300 mt-1">
                Hands-on safety conditioning ensuring guards react decisively during fire or crisis incidents.
              </p>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <Image
              src="/images/gallery/command_center.jpg"
              alt="VM SQUARE 24/7 Operations Monitoring Command Wall"
              fill
              className="object-cover object-[45%_center] group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs font-bold text-vmgold uppercase tracking-wider block">
                Command Integration
              </span>
              <h3 className="text-lg font-bold">24/7 Central Operations Control</h3>
              <p className="text-xs text-slate-300 mt-1">
                Supervisory coordination, telemetry monitoring, and rapid mobile unit dispatch across Bengaluru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Head Office & Operations Desk Details */}
      <section className="py-16 bg-[#0B1E33] text-white border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vmgold/20 text-vmgold text-xs font-bold uppercase">
                <Building2 className="h-4 w-4" />
                <span>Head Office &amp; Operations Center</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Our administrative headquarters and operations dispatch are located in Bengaluru, servicing clients across Karnataka.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-vmgold shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address.full}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-vmgold shrink-0" />
                  <a href={COMPANY_INFO.phone.tel} className="hover:text-vmgold font-bold">
                    {COMPANY_INFO.phone.display} (24/7 Helpline)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-vmgold shrink-0" />
                  <a href={COMPANY_INFO.email.mailto} className="hover:text-vmgold">
                    {COMPANY_INFO.email.address}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 p-7 rounded-2xl space-y-5 text-center">
              <h3 className="text-xl font-bold text-white">Ready to Discuss Your Site Security?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our field operations team to arrange a physical risk inspection and custom security proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/request-quote">
                  <Button className="w-full sm:w-auto bg-vmgold hover:bg-vmgold/90 text-vmdark font-extrabold px-6 py-3 rounded-xl shadow-md border-0">
                    Request Site Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto border-slate-600 text-white hover:bg-white/10 px-6 py-3 rounded-xl">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
