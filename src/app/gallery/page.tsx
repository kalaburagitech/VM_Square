import Image from "next/image";
import { PublicGalleryGrid } from "@/components/gallery/PublicGalleryGrid";
import { galleryImages } from "@/lib/gallery-data";
import { Camera } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Photo Gallery: Security Operations",
  description:
    "Photos of VM SQUARE security personnel, CCTV monitoring, training drills and site deployments in Bengaluru and Karnataka.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      {/* Hero Header Banner */}
      <section className="relative bg-[#0B1E33] text-white py-12 md:py-14 overflow-hidden">
        {/* Local operational image background with subtle blend */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero_background2.jpg"
            alt="VM SQUARE Operational Security Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#0B1E33]/90 to-[#12314D]/80 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-bold uppercase tracking-wider mx-auto">
            <Camera className="h-4 w-4" />
            <span>SECURITY IN ACTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            OPERATIONAL MEDIA GALLERY
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Photos of our security personnel, training drills, fire safety exercises, command monitoring, and site deployments across Karnataka.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 container mx-auto px-4 md:px-6">
        <PublicGalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
