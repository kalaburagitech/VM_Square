"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export interface GalleryMediaItem {
  id: string;
  title: string;
  description: string | null;
  mediaType: "IMAGE" | "VIDEO";
  url: string;
  thumbnailUrl: string | null;
  category: string;
  isFeatured: boolean;
  isActive: boolean;
}

export function PublicGalleryGrid({ initialItems }: { initialItems: GalleryMediaItem[] }) {
  const [selectedItem, setSelectedItem] = useState<GalleryMediaItem | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {initialItems.map((item) => (
          <div 
            key={item.id} 
            className="cursor-pointer group relative rounded-lg overflow-hidden border border-gray-200 aspect-video"
            onClick={() => setSelectedItem(item)}
          >
            <img 
              src={item.thumbnailUrl || item.url} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <h3 className="text-white font-medium truncate">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-black border-gray-800 text-white p-0 overflow-hidden">
          <DialogTitle className="sr-only">{selectedItem?.title}</DialogTitle>
          <DialogDescription className="sr-only">{selectedItem?.description}</DialogDescription>
          {selectedItem && (
            <div className="relative aspect-video">
              {selectedItem.mediaType === "IMAGE" ? (
                <img src={selectedItem.url} alt={selectedItem.title} className="w-full h-full object-contain" />
              ) : (
                <video src={selectedItem.url} controls className="w-full h-full object-contain" autoPlay />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h3 className="font-semibold text-lg">{selectedItem.title}</h3>
                {selectedItem.description && <p className="text-sm text-gray-300">{selectedItem.description}</p>}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
