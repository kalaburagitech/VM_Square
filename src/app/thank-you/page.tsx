import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-xl shadow-sm border">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-vmnavy">Thank You!</h1>
        <p className="text-muted-foreground text-lg">
          Your request has been received. Our team will review your requirements and get back to you shortly.
        </p>
        <div className="pt-4">
          <Button render={<Link href="/" />} className="w-full">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
