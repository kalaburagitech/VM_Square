import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Camera, Play, ArrowRight } from "lucide-react";
import { galleryItems } from "@/lib/gallery-data";

// Featured highlight items showing verified images from gallery data
const highlightedMedia = [
  galleryItems.find((item) => item.id === "vmsquare-cmd-1") || galleryItems[0],
  galleryItems.find((item) => item.id === "vmsquare-courtyard-train") || galleryItems[1],
  galleryItems.find((item) => item.id === "vmsquare-fire-safety") || galleryItems[2],
  galleryItems.find((item) => item.id === "vmsquare-corp-2") || galleryItems[3],
].map((item) => ({
  id: item.id,
  title: item.title,
  category: item.category,
  type: item.mediaType,
  image: item.thumbnailUrl || item.url,
}));

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-24 bg-[#0B1E33] text-white relative overflow-hidden border-t border-b border-vmgold/20">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vmgold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
              <Camera className="h-4 w-4" />
              <span>Security In Action</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              MEDIA GALLERY <span className="text-vmgold">HIGHLIGHTS</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Explore real-time operational photos and videos of VM SQUARE uniformed personnel, command center monitoring, and site drills.
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

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightedMedia.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-xl hover:border-vmgold/60 transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity pointer-events-none" />

                {/* Video Play Badge */}
                {item.type === "VIDEO" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-12 w-12 rounded-full bg-vmgold text-vmdark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[0.68rem] font-bold px-2.5 py-1 rounded-full bg-slate-950/90 text-vmgold border border-vmgold/40 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-900/95">
                <h3 className="font-bold text-base text-white group-hover:text-vmgold transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-vmgold/90 inline-flex items-center gap-1 mt-2 group-hover:underline">
                  Open in Gallery <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
