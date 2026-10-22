import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[68vh] sm:min-h-[72vh] flex items-center bg-[#0B1E33] text-white overflow-hidden">
      {/* Responsive Next.js Hero Image with High Priority (LCP optimized) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero_background2.jpg"
          alt="VM SQUARE Security Personnel and Command Surveillance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[82%_center] sm:object-[84%_center] md:object-[86%_center] lg:object-right"
        />
        {/* Adaptive Brand Navy Gradient Overlay: ensures text readability on mobile while preserving guards on right */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0B1E33]/95 via-[#0B1E33]/80 sm:via-[#0B1E33]/75 to-[#0B1E33]/30 sm:to-transparent sm:w-[75%] md:w-[68%] lg:w-[62%] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="max-w-3xl space-y-5">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-[#0B1E33]/90 text-vmgold border border-vmgold/40 font-bold text-[10px] sm:text-sm shadow-xl backdrop-blur-md">
            <Image
              src="/logo-icon-transparent.png"
              alt="VM SQUARE Icon"
              width={24}
              height={24}
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain rounded bg-white p-0.5"
            />
            <span className="uppercase tracking-wide sm:tracking-wider whitespace-nowrap">VM SQUARE | Security &amp; Manpower Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight text-white">
            Protecting People. Securing Places.{" "}
            <br className="hidden md:block" />
            <span className="text-vmgold drop-shadow-[0_0_20px_rgba(205,148,35,0.4)]">
              Supporting Businesses.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-medium">
            Reliable security and manpower solutions across Karnataka. From corporate buildings and residential communities to industrial facilities and events, we help protect people, property and daily operations with disciplined personnel and professional supervision.
          </p>

          {/* Call-to-action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 rounded-xl bg-vmgold hover:bg-vmgold-hover text-vmdark font-extrabold text-base shadow-2xl transition-all hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 rounded-xl border border-white/40 bg-white/5 hover:bg-white/10 hover:border-vmgold text-white font-bold text-base backdrop-blur-sm transition-all"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0B1E33] to-transparent pointer-events-none" />
    </section>
  );
}
