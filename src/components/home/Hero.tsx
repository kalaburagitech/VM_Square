import { getImageProps } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_SRC = "/images/hero_background2.jpg";
const HERO_ALT = "VM SQUARE Security Personnel and Command Surveillance";

// 1x1 transparent GIF: lets each <picture> skip downloading on the breakpoint where it is hidden,
// so the hero photo is fetched exactly once per viewport (desktop backdrop OR mobile card).
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const common = {
  src: HERO_SRC,
  alt: HERO_ALT,
  fill: true,
  loading: "eager",
  fetchPriority: "high",
} as const;

const { props: desktopImg } = getImageProps({ ...common, sizes: "100vw" });
const { props: mobileImg } = getImageProps({
  ...common,
  sizes: "(max-width: 768px) 100vw, 95vw",
});

export function Hero() {
  return (
    <section className="relative min-h-[68vh] sm:min-h-[72vh] lg:min-h-[76vh] flex items-center bg-white text-[#0B1E33] overflow-hidden">
      {/* Large laptop/desktop (xl, 1280px+): Full-bleed Hero Image on the right with smooth fade to white on the left */}
      <div className="hidden xl:block absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source media="(max-width: 1279px)" srcSet={BLANK} />
          <img {...desktopImg} alt={HERO_ALT} className="object-cover object-right" />
        </picture>
        {/* Soft horizontal gradient so text is crisp on the left and the image is bright on the right */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white from-35% via-white/85 via-50% to-transparent to-85%"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          {/* Main heading: the badge line names the service and location, the tagline follows (same look as before) */}
          <h1 className="flex flex-col items-start gap-4 sm:gap-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-vmdark">
              <span className="flex h-2 w-2 rounded-full bg-vmgold animate-pulse" aria-hidden="true" />
              <span className="uppercase tracking-wider text-[11px] sm:text-xs">
                Security Agency in Bengaluru &bull; Security &amp; Manpower Services
              </span>
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight text-[#0B1E33]">
              Protecting People. Securing Places.{" "}
              <br className="hidden md:block" />
              <span className="text-vmgold">Supporting Businesses.</span>
            </span>
          </h1>

          {/* Gold accent bar */}
          <span className="block h-1 w-16 rounded-full bg-vmgold" />

          {/* Mobile & Tablet Dedicated Image Showcase (mobile, tablet and small laptops below 1280px) */}
          {/* The box uses the photo's own aspect ratio (2170x725) so the full image is shown uncropped
              at every width; the caption sits below the photo instead of covering it. */}
          <div className="block xl:hidden w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-[#0B1E33] my-3">
            <div className="relative w-full aspect-[2170/725]">
              <picture>
                <source media="(min-width: 1280px)" srcSet={BLANK} />
                <img {...mobileImg} alt={HERO_ALT} className="object-cover object-center" />
              </picture>
            </div>
            <div className="bg-white px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs font-black text-vmgold uppercase tracking-wider block">
                  On-Site Security Operations
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#0B1E33] truncate">
                  Verified Security Officers &amp; Patrol Units
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-vmgold/15 text-[#B88219]">
                Karnataka
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-medium">
            VM SQUARE Security &amp; Manpower Services is a Bengaluru-based security agency providing trained security guards, industrial and apartment security, event security and housekeeping staff across Karnataka. From corporate buildings and residential communities to factories and events, we help protect people, property and daily operations with disciplined personnel and professional supervision.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-vmgold hover:bg-vmgold-hover text-vmdark px-6 py-3 rounded-xl font-extrabold text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0B1E33] px-5 py-3 rounded-xl font-bold text-sm border border-slate-300 transition-all"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}