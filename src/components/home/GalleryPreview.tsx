
import Link from "next/link";
import Image from "next/image";
import { Camera, ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/gallery-data";

// First four gallery photos as homepage highlights
const highlightedImages = galleryImages.slice(0, 4);

export function GalleryPreview() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-[#F8FAFC] py-12 md:py-16">

      {/* Soft Background Decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end">

          <div className="max-w-2xl space-y-3">

            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D99A22]/30 bg-[#D99A22]/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#A96F0B]">
              <Camera className="h-4 w-4" />
              <span>Security in Action</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-extrabold tracking-tight text-[#102A43] md:text-3xl">
              MEDIA GALLERY{" "}
              <span className="text-[#D99A22]">
                HIGHLIGHTS
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Photos of VM SQUARE uniformed personnel, command
              center monitoring, and site drills.
            </p>
          </div>

          {/* View Gallery Link */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 shrink-0 self-start md:self-auto rounded-xl bg-[#102A43] hover:bg-[#183B5B] px-6 py-3 font-extrabold text-sm text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span>VIEW FULL GALLERY</span>
            <ArrowRight className="h-4 w-4 text-vmgold" />
          </Link>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {highlightedImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
