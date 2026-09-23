import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-vmdark text-white overflow-hidden">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888000424-74742e47833a?auto=format&fit=crop&q=80&w=2000")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-vmdark via-vmdark/80 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 font-medium text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>ISO Certified Security Services</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            SECURITY THAT <br />
            <span className="text-vmgold">NEVER STANDS STILL</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Professional Security & Manpower Solutions for Businesses, Communities & Industries. We deliver excellence through discipline, training, and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button render={<Link href="/request-quote" />} size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-base h-14 px-8 rounded-md">
                REQUEST A QUOTE
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button render={<Link href="/contact" />} size="lg" variant="outline" className="border-gray-500 text-foreground hover:bg-white hover:text-vmdark font-semibold text-base h-14 px-8 rounded-md">
                TALK TO OUR TEAM
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-background"></div>
    </section>
  );
}
