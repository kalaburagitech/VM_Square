import Link from "next/link";
import { ShieldCheck, PhoneCall, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/services-data";

export const metadata = pageMetadata({
  title: "Security Guard & Facility Services in Bengaluru",
  description:
    "Manned guarding, corporate, industrial, residential and event security, CCTV and housekeeping services for sites in Bengaluru and across Karnataka.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Hero Header Banner */}
      <section className="bg-[#0B1E33] text-white py-12 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#12314D]/90 to-[#0B1E33] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CD9423]/20 text-[#CD9423] border border-[#CD9423]/40 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-4 w-4" />
            <span>EXCELLENCE IN PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            COMPREHENSIVE SECURITY &amp; MANPOWER SERVICES
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            From disciplined manned guarding to high-tech surveillance and integrated facility upkeep, VM SQUARE delivers professional protection across Karnataka.
          </p>

          <div className="pt-1 flex flex-wrap justify-center gap-3">
            <Link href="/request-quote">
              <Button className="bg-[#CD9423] hover:bg-[#B88219] text-[#0B1E33] font-extrabold px-7 py-3 rounded-xl shadow-lg border-0">
                Request a Site Quote
              </Button>
            </Link>
            <a href={COMPANY_INFO.phone.tel}>
              <Button variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-white/10 hover:text-white px-6 py-3 rounded-xl">
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

        {/* Heading-only cards: 4 + 3 centred on desktop, 2 per row on tablet, 1 on mobile */}
        <div className="flex flex-wrap justify-center gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col items-center text-center gap-4"
              >
                {/* Legacy Anchor Compatibility targets (invisible) */}
                {service.legacyIds?.map((legId) => (
                  <span key={legId} id={legId} className="absolute -top-28 left-0 block h-0 w-0" />
                ))}

                <div className="p-3.5 rounded-xl bg-[#12314D] text-[#CD9423] shrink-0">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#0A192B] leading-snug">
                  {service.title}
                </h3>
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
                  Police verification, background validation, physical conditioning, and fire safety drill training.
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
