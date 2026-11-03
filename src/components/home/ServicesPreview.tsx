"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

type Service = (typeof SERVICES)[number];

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState(false);
  const Icon = service.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Slide-up entrance, runs once on every screen size
    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          revealObserver.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    revealObserver.observe(el);

    // Mobile/tablet only: a row is "active" while it sits in the middle band of the screen
    const mq = window.matchMedia("(max-width: 1023px)");
    let activeObserver: IntersectionObserver | null = null;

    const setup = () => {
      activeObserver?.disconnect();
      activeObserver = null;
      if (!mq.matches) {
        setActive(false);
        return;
      }
      activeObserver = new IntersectionObserver(
        ([entry]) => setActive(entry.isIntersecting),
        { rootMargin: "-42% 0px -42% 0px" }
      );
      activeObserver.observe(el);
    };

    setup();
    mq.addEventListener("change", setup);

    return () => {
      revealObserver.disconnect();
      activeObserver?.disconnect();
      mq.removeEventListener("change", setup);
    };
  }, []);

  return (
    <li
      ref={ref}
      style={{ transitionDelay: revealed ? "0ms" : `${(index % 2) * 80}ms` }}
      className={`border-b border-slate-200 transition-all duration-700 ease-out ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <Link
        href={`/services#${service.id}`}
        data-active={active}
        className="group relative flex items-center gap-4 overflow-hidden px-4 py-5 md:px-6 md:py-6"
      >
        {/* Navy fill: sweeps in on hover (laptop), when centred (mobile/tablet), or on tap */}
        <span className="absolute inset-0 origin-left scale-x-0 bg-[#0B1E33] transition-transform duration-500 ease-out group-hover:scale-x-100 group-data-[active=true]:scale-x-100 group-active:scale-x-100" />

        <span className="relative z-10 w-12 shrink-0 text-3xl md:text-4xl font-extrabold tabular-nums text-slate-200 transition-colors duration-300 group-hover:text-vmgold group-data-[active=true]:text-vmgold group-active:text-vmgold">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="relative z-10 flex-1 text-base md:text-lg font-bold leading-snug text-[#0B1E33] transition-colors duration-300 group-hover:text-white group-data-[active=true]:text-white group-active:text-white">
          {service.title}
        </h3>

        <ArrowUpRight className="relative z-10 h-5 w-5 shrink-0 -translate-x-2 text-vmgold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100 group-active:translate-x-0 group-active:opacity-100" />

        <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-vmgold group-hover:text-[#0B1E33] group-data-[active=true]:rotate-[360deg] group-data-[active=true]:bg-vmgold group-data-[active=true]:text-[#0B1E33] group-active:rotate-[360deg] group-active:bg-vmgold group-active:text-[#0B1E33]">
          <Icon className="h-5 w-5" />
        </span>
      </Link>
    </li>
  );
}

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 border-t border-slate-200">
      {/* Soft gold glow in the corner */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-vmgold/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-vmgold" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88219]">
                Core Security Capabilities
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-[#0B1E33]">
              Comprehensive <span className="text-vmgold">Protection Solutions</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-slate-600">
              Every division is planned around your site and managed by supervisors who stay accountable.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-[#0B1E33] px-6 py-3 text-sm font-extrabold text-vmgold shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#12314D] hover:shadow-lg active:scale-95"
          >
            <span>View All {SERVICES.length} Divisions</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Service rows */}
        <ol className="grid grid-cols-1 gap-x-10 border-t-2 border-[#0B1E33] lg:grid-cols-2">
          {SERVICES.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}