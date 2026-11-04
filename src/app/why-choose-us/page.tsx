import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SecurityOperations } from "@/components/home/SecurityOperations";
import { TechnologyMonitoring } from "@/components/home/TechnologyMonitoring";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const TITLE = "Why Choose VM SQUARE: Trained & Verified Security Guards";
const DESCRIPTION =
  "How VM SQUARE screens, trains and supervises security personnel for commercial, industrial and residential sites in Bengaluru and Karnataka.";

export const metadata = pageMetadata({ title: TITLE, absoluteTitle: true, description: DESCRIPTION, path: "/why-choose-us" });

const jsonLd = pageJsonLd({
  name: TITLE,
  description: DESCRIPTION,
  path: "/why-choose-us",
  crumbs: [{ name: "Why Choose Us", path: "/why-choose-us" }],
});

export default function WhyChooseUsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={jsonLd} />
      {/* Hero */}
      <section className="bg-white text-vmdark py-20 relative overflow-hidden border-b border-slate-200">
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-semibold">
            <Shield className="h-4 w-4" />
            <span>EXCELLENCE & DISCIPLINE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-vmdark">WHY CHOOSE VM SQUARE SECURITY</h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Police-verified, trained security guards, supervised shifts and a 24/7 operations desk for sites in Bengaluru and across Karnataka.
          </p>
        </div>
      </section>

      <WhyChooseUs />
      <SecurityOperations />
      <TechnologyMonitoring />

      {/* CTA */}
      <section className="py-16 bg-white text-vmdark text-center border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold text-vmdark">Ready to Elevate Your Security Standard?</h2>
          <p className="text-slate-600 text-base">
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