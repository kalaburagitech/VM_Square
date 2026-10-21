import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Thank You | VM SQUARE Security Services",
  description: "Your inquiry or quote request has been received by VM SQUARE Security & Manpower Services Pvt. Ltd.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-slate-200">
        <div className="flex justify-center">
          <div className="p-3 bg-emerald-50 rounded-full border border-emerald-200">
            <CheckCircle className="h-16 w-16 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-vmdark">Thank You!</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Your request has been received by our command operations desk. Our team will review your requirements and reach out to you shortly.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button render={<Link href="/" />} className="w-full bg-vmgold hover:bg-vmgold-hover text-vmdark font-bold rounded-xl shadow-md">
            <span>Return to Homepage</span>
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
