import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-red-100 p-4 rounded-full">
            <ShieldAlert className="h-16 w-16 text-red-600" />
          </div>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-vmnavy">404 - Page Not Found</h2>
        <p className="text-muted-foreground text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4 flex justify-center">
          <Button render={<Link href="/" />} size="lg" className="w-full sm:w-auto">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
