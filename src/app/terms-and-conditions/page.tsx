import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | VM SQUARE Security Services",
  description: "Terms and conditions of service for VM SQUARE Security & Manpower Services Pvt. Ltd.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <section className="bg-[#0B132B] text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-4xl font-extrabold">Terms & Conditions</h1>
          <p className="text-slate-300 text-sm">Last Updated: September 2026</p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#0B132B]">1. Service Scope</h2>
          <p>
            VM SQUARE provides physical guarding, electronic surveillance, facility manpower, and risk management services under formal service level agreements (SLA).
          </p>

          <h2 className="text-xl font-bold text-[#0B132B]">2. Deployment & Compliance</h2>
          <p>
            All deployed personnel undergo background verification, orientation, and site SOP training. Deployment schedules and shift rotations are managed by VM SQUARE field supervisors.
          </p>

          <h2 className="text-xl font-bold text-[#0B132B]">3. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of Karnataka, India.
          </p>

          <div className="pt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0B132B] hover:text-amber-600">
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
