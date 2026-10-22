import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Camera, ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/gallery-data";

// First four gallery photos as homepage highlights
const highlightedImages = galleryImages.slice(0, 4);

export function GalleryPreview() {
  return (
    <section className="py-10 md:py-12 bg-[#0B1E33] text-white relative overflow-hidden border-t border-b border-vmgold/20">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vmgold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
              <Camera className="h-4 w-4" />
              <span>Security In Action</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              MEDIA GALLERY <span className="text-vmgold">HIGHLIGHTS</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Photos of VM SQUARE uniformed personnel, command center monitoring, and site drills.
            </p>
          </div>

          <Button
            render={<Link href="/gallery" />}
            size="lg"
            className="bg-vmgold hover:bg-vmgold/90 text-vmdark font-extrabold shadow-md border-0 shrink-0 self-start md:self-auto rounded-xl"
          >
            <span>VIEW FULL GALLERY</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {highlightedImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-950 border border-slate-700/80 shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
