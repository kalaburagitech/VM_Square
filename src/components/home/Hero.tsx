import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center bg-[#07132B] text-white overflow-hidden pt-20">
      {/* User's Exact New Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url("/images/hero_background2.png")' }}
      ></div>

      {/* Subtle gradient overlay on left only for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07132B]/90 via-[#07132B]/60 to-transparent md:w-[65%] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 lg:py-24">
        <div className="max-w-2xl space-y-6">
          {/* ISO Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 text-amber-400 border border-amber-500/50 font-semibold text-xs sm:text-sm shadow-xl backdrop-blur-md">
            <Image
              src="/logo.png"
              alt="VM SQUARE Logo"
              width={24}
              height={24}
              className="h-6 w-auto object-contain rounded"
            />
            <span>ISO Certified Security & Manpower Services</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
            SECURITY THAT <br />
            <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">NEVER STANDS STILL</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
            Premier Security & Manpower Solutions for Corporate Buildings, Industrial Hubs & Gated Communities across Karnataka. Disciplined personnel, 24/7 supervision & technology-driven vigilance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/request-quote" className="inline-block">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base h-14 px-8 rounded-xl shadow-2xl border-0 transform hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                REQUEST A FREE QUOTE <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" className="inline-block">
              <Button size="lg" variant="outline" className="border-amber-400 text-white hover:bg-white hover:text-slate-950 font-bold text-base h-14 px-8 rounded-xl backdrop-blur-md transform hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                TALK TO OUR TEAM
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
}



