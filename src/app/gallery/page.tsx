import { PublicGalleryGrid } from "@/components/gallery/PublicGalleryGrid";
import { galleryItems } from "@/lib/gallery-data";
import { Camera } from "lucide-react";

export const metadata = {
  title: "Media Gallery | VM SQUARE Security & Manpower Services",
  description: "Explore VM SQUARE in action. Browse images and videos of our security personnel, operational drills, training programs, and client deployments.",
};

export default function GalleryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-vmdark text-white py-20 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888000424-74742e47833a?auto=format&fit=crop&q=80&w=2000")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-vmdark via-vmdark/90 to-vmdark/80"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-semibold mx-auto">
            <Camera className="h-4 w-4" />
            <span>SECURITY IN ACTION</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            OUR MEDIA GALLERY
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Witness our trained security personnel, operational drills, technology integrations, and client site deployments across Karnataka.
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

