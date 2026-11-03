import Link from "next/link";
import { Poppins } from "next/font/google";
import { PhoneCall, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/company-info";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/services-data";

const sectionFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <section className="bg-gradient-to-b from-white to-[#F6F8FB] text-[#0A192B] py-8 md:py-10 relative overflow-hidden border-b border-slate-200">
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CD9423]/20 text-[#CD9423] border border-[#CD9423]/40 text-xs font-bold uppercase tracking-wider">
            <Shield className="h-4 w-4" />
            <span>EXCELLENCE IN PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0A192B]">
            COMPREHENSIVE SECURITY &amp; MANPOWER SERVICES
          </h1>

          <div className="pt-1 flex flex-wrap justify-center gap-3">
            <Link href="/request-quote">
              <Button className="bg-[#CD9423] hover:bg-[#B88219] text-[#0B1E33] font-extrabold px-7 py-3 rounded-xl shadow-lg border-0">
                Request a Site Quote
              </Button>
            </Link>
            <a href={COMPANY_INFO.phone.tel}>
              <Button className="bg-[#0B1E33] hover:bg-[#12314D] text-white hover:text-white border-0 px-6 py-3 rounded-xl shadow-md">
                <PhoneCall className="mr-2 h-4 w-4 text-[#CD9423]" />
                Call Helpline: {COMPANY_INFO.phone.display}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Services Dossier Grid */}
      <section className="py-10 md:py-12 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
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
        <div className="flex flex-wrap justify-center gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="group scroll-mt-28 relative w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] cursor-pointer bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CD9423] hover:shadow-xl hover:shadow-[#CD9423]/15"
              >
                {/* Legacy Anchor Compatibility targets (invisible) */}
                {service.legacyIds?.map((legId) => (
                  <span key={legId} id={legId} className="absolute -top-28 left-0 block h-0 w-0" />
                ))}

                <div className="relative mb-1 shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#CD9423]/20 scale-125 transition-transform duration-300 group-hover:scale-150" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1E33] text-[#CD9423] ring-4 ring-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="text-base md:text-lg font-bold text-[#0A192B] leading-snug">
                  {service.title}
                </h3>

                <span className="h-[3px] w-8 rounded-full bg-[#CD9423] transition-all duration-300 group-hover:w-14" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Operational Assurance Banner - Trust Strip */}
      <section className={`${sectionFont.className} relative bg-white py-6 md:py-8 border-t border-slate-200`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-slate-200">

            <div className="group text-center md:px-10">
              <p className="text-4xl md:text-5xl font-bold tracking-tight text-[#CD9423] transition-transform duration-300 group-hover:scale-105">
                24/7
              </p>
              <h4 className="mt-1 text-base font-semibold uppercase tracking-wider text-[#0B1E33]">
                Operations Desk
              </h4>
              <p className="mx-auto mt-1.5 max-w-xs text-sm text-slate-600 leading-relaxed">
                Active monitoring with night patrol supervisors inspecting sites across Bengaluru.
              </p>
            </div>

            <div className="group text-center md:px-10">
              <p className="text-4xl md:text-5xl font-bold tracking-tight text-[#CD9423] transition-transform duration-300 group-hover:scale-105">
                Verified
              </p>
              <h4 className="mt-1 text-base font-semibold uppercase tracking-wider text-[#0B1E33]">
                Guard Force
              </h4>
              <p className="mx-auto mt-1.5 max-w-xs text-sm text-slate-600 leading-relaxed">
                Police verification, background checks, physical conditioning and fire safety drills.
              </p>
            </div>

            <div className="group text-center md:px-10">
              <p className="text-4xl md:text-5xl font-bold tracking-tight text-[#CD9423] transition-transform duration-300 group-hover:scale-105">
                Rapid
              </p>
              <h4 className="mt-1 text-base font-semibold uppercase tracking-wider text-[#0B1E33]">
                Deployment
              </h4>
              <p className="mx-auto mt-1.5 max-w-xs text-sm text-slate-600 leading-relaxed">
                Guard strength deployed on short notice for new facilities, events or site handovers.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}