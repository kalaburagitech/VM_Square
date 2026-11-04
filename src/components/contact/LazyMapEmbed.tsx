"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

// The Google Maps embed downloads ~470 KB of third-party JavaScript. Browsers start loading
// `loading="lazy"` iframes well before they are on screen, so on this page the map was always
// fetched during page load. This mounts the iframe only when the visitor scrolls near it.
export function LazyMapEmbed({ src, title, directionsUrl }: { src: string; title: string; directionsUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[300px] sm:h-[360px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
      {visible ? (
        <iframe
          title={title}
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        // Placeholder until the map loads; also gives a direct link if the embed is blocked
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full flex-col items-center justify-center gap-2 text-sm font-bold text-[#0B1E33] hover:text-[#B88219]"
        >
          <MapPin className="h-8 w-8 text-vmgold" aria-hidden="true" />
          Open location in Google Maps
        </a>
      )}
    </div>
  );
}
