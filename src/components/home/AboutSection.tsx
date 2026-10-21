import { ArrowRight, Shield, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 md:py-24 bg-vmlight text-vmnavy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs font-bold tracking-wider text-vmgold uppercase mb-3">
              About VM SQUARE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-vmdark tracking-tight leading-tight">
              Pioneering Security Solutions for the Modern Era
            </h2>
            <p className="text-base md:text-lg mb-8 text-slate-700 leading-relaxed">
              VM SQUARE Security &amp; Manpower Services Pvt. Ltd. is an established security and facility management agency based in Bengaluru. With disciplined personnel, 24/7 supervision, and structured Standard Operating Procedures, we provide comprehensive risk mitigation tailored to corporate, industrial, and residential premises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-vmnavy text-vmgold rounded-xl shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-vmdark mb-1 text-base">Disciplined Guard Force</h3>
                  <p className="text-xs sm:text-sm text-slate-600">Police-verified, conditioned, and fire drill trained operatives.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-vmnavy text-vmgold rounded-xl shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-vmdark mb-1 text-base">Tailored Site Protocols</h3>
                  <p className="text-xs sm:text-sm text-slate-600">Site-specific SOPs designed for your facility&apos;s unique risks.</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-vmgold hover:bg-vmgold/90 text-vmdark px-7 py-3.5 rounded-xl font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>Discover Our Company Profile</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image Content using Next.js Image */}
          <div className="relative h-[340px] sm:h-[440px] md:h-[480px] lg:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900">
            <Image
              src="/images/gallery/corporate_guard.jpg"
              alt="VM SQUARE Uniformed Corporate Security Officer on site deployment"
              fill
              className="object-cover object-[63%_25%] sm:object-[63%_center] group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/40 shadow-lg">
              <span className="text-xs font-bold text-vmgold uppercase tracking-wider block">
                Corporate Vigilance
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                Verified Security Officers &amp; Branded Mobile Patrol Units
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
