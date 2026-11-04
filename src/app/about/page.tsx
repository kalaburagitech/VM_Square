import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
import { SITE_URL } from "@/lib/company-info";
import { absoluteUrl, pageJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const TITLE = "About VM SQUARE Security & Manpower Services, Bengaluru";
const DESCRIPTION =
  "VM SQUARE Security & Manpower Services Pvt. Ltd. is a Bengaluru-based company providing trained security personnel and facility support across Karnataka.";

export const metadata = pageMetadata({ title: TITLE, absoluteTitle: true, description: DESCRIPTION, path: "/about" });

const FOUNDER_PHOTO = "/images/about/drakshayani-founder-vm-square.jpg";
const FOUNDER_ALT = "Drakshayani, Founder and Managing Director of VM SQUARE Security & Manpower Services";

const jsonLd = pageJsonLd({
  name: TITLE,
  description: DESCRIPTION,
  path: "/about",
  crumbs: [{ name: "About", path: "/about" }],
  type: "AboutPage",
  // The founder appears only on this page; the organization node itself stays in the root layout
  extra: [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/about#founder`,
      name: "Drakshayani",
      jobTitle: "Founder & Managing Director",
      image: absoluteUrl(FOUNDER_PHOTO),
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
  ],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <JsonLd data={jsonLd} />
      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F6F8FB] text-[#0B1E33] py-8 md:py-10 relative overflow-hidden border-b border-slate-200">
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-[#B88219] border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-4 w-4" />
            <span>ABOUT OUR COMPANY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0B1E33]">
            ABOUT VM SQUARE SECURITY &amp; MANPOWER SERVICES
          </h1>

          <span className="mx-auto block h-1 w-16 rounded-full bg-vmgold" />

          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            VM SQUARE Security &amp; Manpower Services Pvt. Ltd. is a security and manpower company in Bengaluru, delivering disciplined guarding, electronic CCTV surveillance, and specialized facility management across Karnataka.
          </p>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-10 md:py-14 bg-white border-b border-slate-200" aria-labelledby="founders-vision">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Photograph: shown at its original 3:4 aspect ratio, never upscaled past its native size */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <figure className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[360px]">
                <span aria-hidden="true" className="pointer-events-none absolute -left-2 -top-2 h-12 w-12 rounded-tl-2xl border-l-4 border-t-4 border-vmgold" />
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-2xl border-b-4 border-r-4 border-vmgold" />
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/10">
                  <Image
                    src={FOUNDER_PHOTO}
                    alt={FOUNDER_ALT}
                    width={429}
                    height={571}
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 360px"
                    // Visible as soon as the page opens (largest element on mobile), so load it straight away
                    loading="eager"
                    fetchPriority="high"
                    className="h-auto w-full"
                  />
                </div>
              </figure>
            </div>

            {/* Vision content (wording supplied by the company; keep it verbatim) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-vmgold" />
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B88219]">
                    Leadership
                  </p>
                </div>
                <h2 id="founders-vision" className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B1E33]">
                  Founder&apos;s Vision
                </h2>
                <span className="block h-1 w-16 rounded-full bg-vmgold" />
              </div>

              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  Built on over 15 years of industry experience, VM Square was founded with a vision to bring greater accountability, professionalism and reliability to security and facility management services.
                </p>
                <p>
                  We believe in strong field leadership, trained manpower, timely response and genuine employee care.
                </p>
                <p>
                  Our goal is to build lasting client partnerships by delivering what matters most &ndash; dependable people and consistent service.
                </p>
              </div>

              {/* Signature statement */}
              <p className="rounded-r-xl border-l-4 border-vmgold bg-[#F6F8FB] px-5 py-4 text-lg md:text-xl font-extrabold tracking-tight text-[#0B1E33]">
                Committed to Service. <span className="text-[#B88219]">Driven by Trust.</span>
              </p>

              <div className="pt-1">
                <p className="text-xl font-extrabold text-[#0B1E33]">Drakshayani</p>
                <p className="text-sm font-bold uppercase tracking-wider text-[#B88219]">
                  Founder &amp; Managing Director
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How We Work: services covered and operating standards */}
      <section className="py-8 md:py-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-vmgold" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#B88219]">
                  What We Do
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1E33] leading-tight">
                How We Work
              </h2>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our work covers <Link href="/services/security-guard-services" className="font-semibold text-[#0B1E33] underline decoration-vmgold underline-offset-2 hover:text-[#B88219]">security guard services</Link>,{" "}
              <Link href="/services/industrial-security" className="font-semibold text-[#0B1E33] underline decoration-vmgold underline-offset-2 hover:text-[#B88219]">industrial security</Link>,{" "}
              <Link href="/services/apartment-security" className="font-semibold text-[#0B1E33] underline decoration-vmgold underline-offset-2 hover:text-[#B88219]">apartment and gated community security</Link>{" "}
              and <Link href="/services/housekeeping-facility-management" className="font-semibold text-[#0B1E33] underline decoration-vmgold underline-offset-2 hover:text-[#B88219]">housekeeping and facility management</Link>{" "}
              for sites in Bengaluru and across Karnataka.
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Whether safeguarding high-density corporate tech parks, securing heavy industrial factories, or managing gated residential communities, our operations are driven by formal Standard Operating Procedures (SOPs) and disciplined accountability.
            </p>

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