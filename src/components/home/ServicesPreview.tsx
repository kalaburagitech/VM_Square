import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

export function ServicesPreview() {
  return (
    <section className="py-10 md:py-12 bg-[#F6F8FB] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6 text-center">
        <p className="text-xs font-bold tracking-wider text-vmgold uppercase">Core Security Capabilities</p>
        <h2 className="mt-1 text-2xl md:text-3xl font-extrabold text-vmdark">Comprehensive Protection Solutions</h2>
      </div>

      {/* Continuous right-to-left marquee of the same cards shown on /services */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#F6F8FB] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#F6F8FB] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1 ? true : undefined}>
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="pr-4">
                    <div className="w-56 h-full bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col items-center text-center gap-3">
                      <div className="p-3 rounded-xl bg-[#12314D] text-[#CD9423] shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-sm font-bold text-[#0A192B] leading-snug">{service.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-vmgold hover:bg-vmgold/90 text-vmdark px-6 py-3 rounded-xl font-extrabold text-sm transition-all shadow-md hover:shadow-lg"
        >
          <span>View All {SERVICES.length} Security Divisions</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
