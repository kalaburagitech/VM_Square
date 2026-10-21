"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Play, Maximize2, ShieldCheck, Flame, Video as VideoIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryMediaItem {
  id: string;
  title: string;
  description: string | null;
  mediaType: "IMAGE" | "VIDEO";
  url: string;
  thumbnailUrl?: string | null;
  category: string;
  isFeatured?: boolean;
  isActive?: boolean;
}

export function PublicGalleryGrid({ initialItems }: { initialItems: GalleryMediaItem[] }) {
  const [selectedItem, setSelectedItem] = useState<GalleryMediaItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", ...Array.from(new Set(initialItems.map((item) => item.category)))];

  const filteredItems = activeCategory === "ALL" 
    ? initialItems 
    : initialItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((category) => {
          const count = category === "ALL" 
            ? initialItems.length 
            : initialItems.filter((item) => item.category === category).length;
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-vmgold text-vmdark shadow-lg scale-105"
                  : "bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60"
              }`}
            >
              <span>{category}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  isActive ? "bg-vmdark text-vmgold" : "bg-slate-800 text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Gallery Cards */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredItems.map((item) => {
            const displayImg = item.thumbnailUrl || item.url;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-vmgold/60 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={displayImg}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-950/90 text-vmgold border border-vmgold/30 backdrop-blur-md shadow-md">
                      {item.category.includes("Fire") || item.title.includes("Fire") ? (
                        <Flame className="h-3 w-3 text-vmgold" />
                      ) : item.mediaType === "VIDEO" ? (
                        <VideoIcon className="h-3 w-3 text-vmgold" />
                      ) : (
                        <ShieldCheck className="h-3 w-3 text-vmgold" />
                      )}
                      <span>{item.category}</span>
                    </span>
                  </div>

                  {/* Expand / View Hint on Hover */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="h-8 w-8 rounded-full bg-slate-950/90 text-vmgold flex items-center justify-center border border-vmgold/40 shadow-lg">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Video Play Badge */}
                  {item.mediaType === "VIDEO" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="h-14 w-14 rounded-full bg-vmgold text-vmdark flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-slate-900/95 border-t border-slate-800">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-vmgold transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-vmgold/90 font-medium">
                    <span className="flex items-center gap-1 group-hover:underline">
                      Click to expand
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                      {item.mediaType}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Dialog Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-[#0B1E33] border border-vmgold/40 text-white p-0 overflow-hidden shadow-2xl rounded-2xl">
          <DialogTitle className="sr-only">{selectedItem?.title || "Gallery Media"}</DialogTitle>
          <DialogDescription className="sr-only">
            {selectedItem?.description || "High resolution media view"}
          </DialogDescription>

          {selectedItem && (
            <div className="flex flex-col">
              {/* Media Display Area with Responsive Height */}
              <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] max-h-[600px] bg-black flex items-center justify-center overflow-hidden">
                {selectedItem.mediaType === "IMAGE" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedItem.url}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
                      priority
                    />
                  </div>
                ) : (
                  <video
                    src={selectedItem.url}
                    controls
                    className="w-full h-full object-contain"
                    autoPlay
                  />
                )}
              </div>

              {/* Media Details Footer */}
              <div className="p-5 sm:p-6 bg-slate-900/95 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-vmgold/20 text-vmgold border border-vmgold/40">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono uppercase">
                    &bull; {selectedItem.mediaType}
                  </span>
                </div>

                <h3 className="font-extrabold text-lg sm:text-xl text-white">
                  {selectedItem.title}
                </h3>

                {selectedItem.description && (
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {selectedItem.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
