import { Building2, Factory, Home, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

const industries = [
  { id: "corporate", name: "Corporate & Tech Parks", icon: Building2, desc: "Turnstiles, badges & executive security" },
  { id: "manufacturing", name: "Manufacturing & Industrial", icon: Factory, desc: "Gate passes, weighbridges & safety" },
  { id: "residential", name: "Residential Townships", icon: Home, desc: "Visitor app sync & community safety" },
  { id: "logistics", name: "Logistics & Warehouses", icon: Truck, desc: "Cargo seal audits & loading bay vigil" },
];

export function IndustriesPreview() {
  return (
    <section className="py-20 md:py-24 bg-[#0B1E33] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E33] via-[#12314D]/40 to-[#0B1E33] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold tracking-wider text-vmgold uppercase">
              Sector Deployments
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Securing Every Industry Vertical
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Our specialized security protocols are adapted to meet strict statutory compliance and operational demands across different facility environments.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-vmgold hover:text-white font-extrabold text-sm transition-colors group"
            >
              <span>Explore All 8 Sectors</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.id}>
                <Link
                  href={`/industries#${industry.id}`}
                  className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-vmgold/50 transition-all duration-300 group block h-full"
                >
                  <div className="p-4 rounded-xl bg-vmgold/10 text-vmgold mb-4 group-hover:scale-110 group-hover:bg-vmgold group-hover:text-vmdark transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-vmgold transition-colors">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {industry.desc}
                  </p>
                  <span className="mt-4 text-xs font-semibold text-vmgold/90 group-hover:underline inline-flex items-center gap-1">
                    View Protocols &rarr;
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
