"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery-data";

// Masonry columns keep every photo at its natural proportions (nothing cropped).
// 1 column on phones, 2 on tablets and laptops, 3 on large screens.
const GRID_SIZES = "(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw";

export function PublicGalleryGrid({ images }: { images: GalleryImage[] }) {
  // Index of the photo shown in the enlarged view, or null when it is closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="columns-1 sm:columns-2 xl:columns-3 gap-4 sm:gap-5 lg:gap-6">
        {images.map((image, index) => (
          <li key={image.src} className="mb-4 sm:mb-5 lg:mb-6 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View larger photo: ${image.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-md transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vmgold/60"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={GRID_SIZES}
                // The first photo is the largest element on screen when the page opens
                {...(index === 0 ? { loading: "eager", fetchPriority: "high" } : { loading: "lazy" })}
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1E33]/75 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <GalleryLightbox images={images} index={openIndex} onIndexChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </>
  );
}

function GalleryLightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: GalleryImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const image = images[index];
  const count = images.length;

  const show = useCallback((next: number) => onIndexChange((next + count) % count), [count, onIndexChange]);

  // Native modal <dialog>: traps focus, closes on Esc and returns focus to the photo that opened it.
  // The page behind is locked so it does not scroll while the photo is open.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Photo viewer"
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") show(index + 1);
        if (event.key === "ArrowLeft") show(index - 1);
      }}
      // Clicking the dark backdrop (outside the photo and controls) closes the viewer
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const deltaX = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(deltaX) > 50) show(deltaX < 0 ? index + 1 : index - 1);
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-[#06111d]/92 backdrop:backdrop-blur-sm"
    >
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3 px-3 pb-20 pt-16 sm:px-20 sm:py-14"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <figure className="flex max-h-full max-w-full flex-col items-center gap-3">
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 640px) 100vw, 90vw"
            loading="eager"
            className="h-auto max-h-[calc(100dvh-12rem)] sm:max-h-[calc(100dvh-9rem)] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          />
          <figcaption className="max-w-2xl text-center text-sm text-slate-200">
            {image.alt}
            <span className="ml-2 text-slate-400">
              {index + 1} / {count}
            </span>
          </figcaption>
        </figure>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vmgold/60"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => show(index - 1)}
        aria-label="Previous photo"
        className="absolute bottom-4 left-[calc(50%-3.5rem)] flex h-11 w-11 sm:bottom-auto sm:left-4 sm:top-1/2 sm:-translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-vmgold hover:text-[#0B1E33] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vmgold/60 sm:h-12 sm:w-12"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => show(index + 1)}
        aria-label="Next photo"
        className="absolute bottom-4 right-[calc(50%-3.5rem)] flex h-11 w-11 sm:bottom-auto sm:right-4 sm:top-1/2 sm:-translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-vmgold hover:text-[#0B1E33] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vmgold/60 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </dialog>
  );
}
