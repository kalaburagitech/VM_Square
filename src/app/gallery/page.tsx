import type { Metadata } from "next";
import Image from "next/image";
import { PublicGalleryGrid } from "@/components/gallery/PublicGalleryGrid";
import { galleryItems } from "@/lib/gallery-data";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Operational Media Gallery | VM SQUARE Security Services",
  description:
    "Explore VM SQUARE in action: High-resolution operational photography and videos of uniformed security personnel, CCTV command center operations, training drills, and site deployments.",
  alternates: {
    canonical: "https://vmsquaresecurity.com/gallery",
  },
  openGraph: {
    title: "Media Gallery | VM SQUARE Security Services",
    description:
      "Witness real-time operational photos and videos of VM SQUARE uniformed personnel, command center monitoring, and facility drills.",
    url: "https://vmsquaresecurity.com/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      {/* Hero Header Banner */}
      <section className="relative bg-[#0B1E33] text-white py-20 lg:py-24 overflow-hidden">
        {/* Local operational image background with subtle blend */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero_background2.jpg"
            alt="VM SQUARE Operational Security Background"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-[80%_center] opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#0B1E33]/90 to-[#12314D]/80 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-bold uppercase tracking-wider mx-auto">
            <Camera className="h-4 w-4" />
            <span>SECURITY IN ACTION</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            OPERATIONAL MEDIA GALLERY
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Witness our trained security personnel, operational lineup formations, fire safety drills, electronic command monitoring, and client site deployments across Karnataka.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <PublicGalleryGrid initialItems={galleryItems} />
      </section>
    </div>
  );
}
