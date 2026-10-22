import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SecurityOperations } from "@/components/home/SecurityOperations";
import { TechnologyMonitoring } from "@/components/home/TechnologyMonitoring";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why Choose Our Security Services",
  description:
    "How VM SQUARE screens, trains and supervises security personnel for commercial, industrial and residential sites in Bengaluru and Karnataka.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-vmdark text-white py-20 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-semibold">
            <Shield className="h-4 w-4" />
            <span>EXCELLENCE & DISCIPLINE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">WHY CHOOSE VM SQUARE</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Delivering robust security standards, rigorously trained manpower, and modern technology integration to safeguard what matters most.
          </p>
        </div>
      </section>

      <WhyChooseUs />
      <SecurityOperations />
      <TechnologyMonitoring />

      {/* CTA */}
      <section className="py-16 bg-vmdark text-white text-center border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Ready to Elevate Your Security Standard?</h2>
          <p className="text-slate-300 text-base">
            Contact our expert team today to schedule a comprehensive site risk assessment and receive a customized security proposal.
          </p>
          <div className="flex justify-center pt-2">
            <Button render={<Link href="/contact" />} size="lg" className="bg-vmgold hover:bg-vmgold-hover text-vmdark font-extrabold px-8 rounded-xl shadow-xl transition-all">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
