import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
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
      <section className="bg-gradient-to-b from-white to-[#F6F8FB] text-[#0B1E33] py-8 md:py-10 relative overflow-hidden border-b border-slate-200">
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-[#B88219] border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-4 w-4" />
            <span>ABOUT OUR COMPANY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0B1E33]">
            ABOUT VM SQUARE
          </h1>

          <span className="mx-auto block h-1 w-16 rounded-full bg-vmgold" />

          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            VM SQUARE Security &amp; Manpower Services Pvt. Ltd. delivers disciplined guarding, electronic CCTV surveillance, and specialized facility management across Karnataka.
          </p>
        </div>
      </section>

      {/* Main Company Story & Mission */}
      <section className="py-8 md:py-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-vmgold" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#B88219]">
                  Our Corporate Identity
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1E33] leading-tight">
                Pioneering Professional Security &amp; Manpower Solutions
              </h2>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Founded in Bengaluru, <strong className="text-[#0B1E33]">VM SQUARE SECURITY &amp; MANPOWER SERVICES PVT. LTD.</strong> was established to bridge the gap between traditional security guarding and modern enterprise risk management. We combine strictly vetted security personnel with proactive supervisor audits, robust gatehouse registers, and 24/7 command operations.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Whether safeguarding high-density corporate tech parks, securing heavy industrial factories, or managing gated residential communities, our operations are driven by formal Standard Operating Procedures (SOPs) and disciplined accountability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="group bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-vmgold hover:shadow-lg hover:shadow-vmgold/15">
                <div className="flex items-center gap-2.5 text-[#0B1E33] font-bold">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold transition-transform duration-300 group-hover:scale-110">
                    <Target className="h-4 w-4" />
                  </span>
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide absolute safety, asset protection, and operational peace of mind to our clients through thoroughly vetted personnel and technology-driven vigilance.
                </p>
              </div>

              <div className="group bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2 transition-all duration-300 hover:-translate-y-1 hover:border-vmgold hover:shadow-lg hover:shadow-vmgold/15">
                <div className="flex items-center gap-2.5 text-[#0B1E33] font-bold">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold transition-transform duration-300 group-hover:scale-110">
                    <Award className="h-4 w-4" />
                  </span>
                  <span>Quality Standards</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured operational protocols with background verification, regular drills, shift briefings, and time-stamped perimeter patrol logs.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[260px] sm:h-[340px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-200 bg-white group">
              <Image
                src="/images/gallery/courtyard_training.jpg"
                alt="VM SQUARE Security Personnel Drill and Lineup Formation Training"
                fill
                className="object-cover object-[center_18%] sm:object-[center_20%] md:object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 45vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border-l-4 border-vmgold shadow-lg">
                <span className="text-xs font-bold text-[#B88219] uppercase tracking-wider block">
                  Disciplined Training
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#0B1E33] mt-0.5">
                  Daily formation lineups, physical conditioning, and gate procedures
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Training & Operational Facilities In Action */}
      <section className="py-8 md:py-10 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-6 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#B88219]">
              Operational Readiness
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1E33]">
              Prepared for Every Eventuality
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              From fire emergencies to perimeter breach response, our personnel are trained through practical field simulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg shadow-slate-900/10 border border-slate-200 bg-white group">
              <Image
                src="/images/gallery/fire_safety_train.jpg"
                alt="VM SQUARE Live Fire Safety and Emergency Evacuation Training"
                fill
                className="object-cover object-[50%_35%] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-vmgold uppercase tracking-wider block">
                  Emergency Readiness
                </span>
                <h3 className="text-base md:text-lg font-bold">Fire Extinguisher &amp; Evacuation Drills</h3>
                <p className="text-xs text-slate-200 mt-1">
                  Hands-on safety conditioning ensuring guards react decisively during fire or crisis incidents.
                </p>
              </div>
            </div>

            <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg shadow-slate-900/10 border border-slate-200 bg-white group">
              <Image
                src="/images/gallery/command_center.jpg"
                alt="VM SQUARE 24/7 Operations Monitoring Command Wall"
                fill
                className="object-cover object-[45%_center] group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-vmgold uppercase tracking-wider block">
                  Command Integration
                </span>
                <h3 className="text-base md:text-lg font-bold">24/7 Central Operations Control</h3>
                <p className="text-xs text-slate-200 mt-1">
                  Supervisory coordination, telemetry monitoring, and rapid mobile unit dispatch across Bengaluru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-10 md:py-14 bg-[#0B1E33] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#12314D] to-[#0B1E33] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-bold uppercase tracking-wider">
            Ready to Partner With Us?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Deploy Disciplined Protection For Your Facility
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Contact our 24/7 security operations desk for customized risk mitigation, physical guarding, and electronic surveillance across Karnataka.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-vmgold hover:bg-vmgold-hover text-vmdark px-6 py-3 rounded-xl font-extrabold text-sm shadow-lg transition-all hover:scale-[1.02]"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl font-bold text-sm border border-white/20 transition-all"
            >
              <span>Contact Operations Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}