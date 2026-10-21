import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center bg-[#0B1E33] text-white overflow-hidden pt-20">
      {/* Responsive Next.js Hero Image with High Priority (LCP optimized) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero_background2.jpg"
          alt="VM SQUARE Security Personnel and Command Surveillance"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[82%_center] sm:object-[84%_center] md:object-[86%_center] lg:object-right"
        />
        {/* Adaptive Brand Navy Gradient Overlay: ensures text readability on mobile while preserving guards on right */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0B1E33]/95 via-[#0B1E33]/80 sm:via-[#0B1E33]/75 to-[#0B1E33]/30 sm:to-transparent sm:w-[75%] md:w-[68%] lg:w-[62%] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 lg:py-24">
        <div className="max-w-2xl space-y-6">
          {/* ISO Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0B1E33]/90 text-vmgold border border-vmgold/40 font-bold text-xs sm:text-sm shadow-xl backdrop-blur-md">
            <Image
              src="/logo-icon-transparent.png"
              alt="VM SQUARE Icon"
              width={24}
              height={24}
              className="h-6 w-6 object-contain rounded bg-white p-0.5"
            />
            <span>ISO Certified Security &amp; Manpower Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white">
            SECURITY THAT <br />
            <span className="text-vmgold drop-shadow-[0_0_20px_rgba(205,148,35,0.4)]">
              NEVER STANDS STILL
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
            Premier Security &amp; Manpower Solutions for Corporate Buildings, Industrial Hubs &amp; Gated Communities across Karnataka. Disciplined personnel, 24/7 supervision &amp; technology-driven vigilance.
          </p>

          {/* Unified Action Button */}
          <div className="pt-4">
            <Link href="/contact" className="inline-block">
              <Button
                size="lg"
                className="bg-vmgold hover:bg-vmgold-hover text-vmdark font-extrabold text-base h-14 px-9 rounded-xl shadow-2xl border-0 transform hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <span>CONTACT US FOR A FREE QUOTE</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0B1E33] to-transparent pointer-events-none" />
    </section>
  );
}
