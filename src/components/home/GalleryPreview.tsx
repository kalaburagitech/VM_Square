import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Camera, Play, ArrowRight } from "lucide-react";

const highlightedMedia = [
  {
    id: "g1",
    title: "VM SQUARE 24/7 Command Center Operations",
    category: "Command Center",
    type: "IMAGE",
    image: "/images/command_center.jpg",
  },
  {
    id: "g2",
    title: "Corporate Office Tower Guard Patrol",
    category: "Corporate Security",
    type: "IMAGE",
    image: "/images/corporate_guard.jpg",
  },
  {
    id: "g3",
    title: "Night Facility Patrol Inspection",
    category: "Site Patrol",
    type: "IMAGE",
    image: "/images/gallery/vmsquare_patrol_guard.jpg",
  },
  {
    id: "g4",
    title: "Emergency Response & Fire Safety Drill",
    category: "Operations Video",
    type: "VIDEO",
    image: "/images/gallery/industrial_guard.jpg",
  },
];

export function GalleryPreview() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-b border-amber-500/20">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <Camera className="h-4 w-4" />
              <span>Security In Action</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              MEDIA GALLERY <span className="text-amber-400">HIGHLIGHTS</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Explore real-time operational photos and videos of VM SQUARE uniformed personnel, command center monitoring, and site drills.
            </p>
          </div>

          <Button
            render={<Link href="/gallery" />}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold shadow-lg shadow-amber-500/20 border-0 shrink-0 self-start md:self-auto"
          >
            VIEW FULL GALLERY <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightedMedia.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 shadow-xl hover:border-amber-400/60 transition-all duration-300 transform hover:-translate-y-1 block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>

                {/* Video Play Badge */}
                {item.type === "VIDEO" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[0.68rem] font-bold px-2.5 py-1 rounded-full bg-slate-900/90 text-amber-400 border border-amber-400/30 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-900/90">
                <h3 className="font-bold text-base text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-amber-400/90 inline-flex items-center gap-1 mt-2 group-hover:underline">
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
