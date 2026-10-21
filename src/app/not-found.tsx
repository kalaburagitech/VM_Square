import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F6F8FB] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
        <div className="flex justify-center">
          <div className="bg-red-50 p-4 rounded-full border border-red-200">
            <ShieldAlert className="h-14 w-14 text-red-600" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-vmnavy">
          404 - Page Not Found
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The security dispatch or page you are looking for does not exist, has been archived, or was moved.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            render={<Link href="/" />}
            size="lg"
            className="w-full sm:w-auto bg-vmnavy hover:bg-vmdark text-white font-extrabold rounded-xl"
          >
            <ArrowLeft className="mr-2 h-4 w-4 text-vmgold" />
            Return to Homepage
          </Button>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-slate-300 text-slate-800 hover:bg-slate-50 font-bold rounded-xl"
          >
            Contact Desk
          </Button>
        </div>
      </div>
    </div>
  );
}
