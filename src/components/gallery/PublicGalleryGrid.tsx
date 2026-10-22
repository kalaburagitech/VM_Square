import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-data";

// Plain image grid: no lightbox, captions or filters
export function PublicGalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {images.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
