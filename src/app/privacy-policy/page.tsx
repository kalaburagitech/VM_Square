import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How VM SQUARE Security & Manpower Services Pvt. Ltd. collects, uses and protects information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <section className="bg-vmdark text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
          <p className="text-slate-300 text-sm">Effective Date: September 2026</p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-vmdark">1. Information Collection</h2>
          <p>
            VM SQUARE Security & Manpower Services Pvt. Ltd. collects personal information (such as name, phone number, email address, and service details) solely for the purpose of providing security quotes, addressing inquiries, and managing client services.
          </p>

          <h2 className="text-xl font-bold text-vmdark">2. Data Usage & Confidentiality</h2>
          <p>
            We strictly protect client data, site surveillance information, and employee records. We do not sell, rent, or lease personal information to third parties.
          </p>

          <h2 className="text-xl font-bold text-vmdark">3. Contact & Compliance</h2>
          <p>
            If you have questions regarding our privacy practices, please contact our compliance desk at <a href="mailto:drakshayani@vmsquaresecurity.com" className="text-vmgold font-bold hover:underline">drakshayani@vmsquaresecurity.com</a>.
          </p>

          <div className="pt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-vmdark hover:text-vmgold">
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
