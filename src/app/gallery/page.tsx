import { PublicGalleryGrid } from "@/components/gallery/PublicGalleryGrid";
import { galleryImages } from "@/lib/gallery-data";
import { Camera } from "lucide-react";
import Link from "next/link";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const TITLE = "Photo Gallery: Security Guards & Operations";
const DESCRIPTION =
  "Photos of VM SQUARE security personnel, CCTV monitoring, fire-safety training drills and site deployments in Bengaluru and Karnataka.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/gallery" });

const jsonLd = pageJsonLd({
  name: TITLE,
  description: DESCRIPTION,
  path: "/gallery",
  crumbs: [{ name: "Gallery", path: "/gallery" }],
});

export default function GalleryPage() {
  return (
    <div className="bg-[#F6F8FB] min-h-screen">
      <JsonLd data={jsonLd} />
      {/* Hero Header Banner */}
      <section className="relative bg-gradient-to-b from-white to-[#F6F8FB] text-[#0B1E33] py-6 md:py-8 overflow-hidden border-b border-slate-200">
        {/* Gold accent line on top */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-vmgold to-transparent" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/15 text-[#B88219] border border-vmgold/40 text-xs font-bold uppercase tracking-wider mx-auto">
            <Camera className="h-4 w-4" />
            <span>SECURITY IN ACTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0B1E33]">
            SECURITY OPERATIONS PHOTO GALLERY
          </h1>

          <span className="mx-auto block h-1 w-16 rounded-full bg-vmgold" />

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Photos of our security personnel, training drills, fire safety exercises, command monitoring, and site deployments across Karnataka. Tap any photo to view it larger.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-10 mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-8">
        <PublicGalleryGrid images={galleryImages} />

        <p className="mt-8 text-center text-sm md:text-base text-slate-600">
          Looking for security for your site?{" "}
          <Link href="/services" className="font-semibold text-[#0B1E33] underline decoration-vmgold underline-offset-2 hover:text-[#B88219]">
            Explore our services
          </Link>{" "}
          or{" "}
          <Link href="/request-quote" className="font-semibold text-[#0B1E33] underline decoration-vmgold underline-offset-2 hover:text-[#B88219]">
            request a quote
          </Link>
          .
        </p>
      </section>
    </div>
  );
}