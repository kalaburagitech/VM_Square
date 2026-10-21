import { ArrowRight, ShieldCheck, Building2, Factory, Video } from "lucide-react";
import Link from "next/link";
import React from "react";

const services = [
  {
    id: "manned-guarding",
    title: "Manned Guarding",
    description: "Disciplined, background-verified personnel stationed for gatehouse control, visitor checks, and perimeter surveillance.",
    icon: <ShieldCheck size={32} className="text-vmgold" />
  },
  {
    id: "corporate-security",
    title: "Corporate Security",
    description: "Executive concierge guards, turnstile access badges, and confidential boardroom security for IT tech parks and offices.",
    icon: <Building2 size={32} className="text-vmgold" />
  },
  {
    id: "industrial-security",
    title: "Industrial Protection",
    description: "Rigorous perimeter vigilance, material gate pass checks, and weighbridge security for plants and logistics warehouses.",
    icon: <Factory size={32} className="text-vmgold" />
  },
  {
    id: "electronic-security",
    title: "Electronic Surveillance",
    description: "24/7 CCTV wall monitoring, alarm telemetry integration, and central command control room supervisor dispatch.",
    icon: <Video size={32} className="text-vmgold" />
  }
];

export function ServiceCard({ service }: { service: typeof services[0]; index?: number }) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-7 hover:shadow-xl hover:border-vmgold/50 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="mb-6 p-4 bg-vmnavy/5 inline-block rounded-xl group-hover:bg-vmnavy transition-colors">
          {React.cloneElement(service.icon, { className: "group-hover:text-vmgold transition-colors text-vmnavy" })}
        </div>
        <h3 className="text-xl font-bold text-vmdark mb-3 group-hover:text-vmnavy transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>
      <Link
        href={`/services#${service.id}`}
        className="inline-flex items-center text-sm font-bold text-vmnavy group-hover:text-vmgold transition-colors pt-2"
      >
        <span>Explore Service Details</span>
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-24 bg-[#F6F8FB] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-wider text-vmgold uppercase">
              Core Security Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-vmdark">
              Comprehensive Protection Solutions
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              We deploy disciplined manpower, modern technology, and rigorous supervision tailored to safeguard your people, facilities, and assets across Karnataka.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-vmgold hover:bg-vmgold/90 text-vmdark px-8 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span>View All 7 Security Divisions</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
