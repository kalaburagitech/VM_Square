export const dynamic = "force-dynamic";
import Metadata from "next";
import { db } from "@/lib/db";
import { PublicGalleryGrid, GalleryMediaItem } from "@/components/gallery/PublicGalleryGrid";
import { Camera, ShieldCheck, Video as VideoIcon } from "lucide-react";

export const metadata = {
  title: "Media Gallery | VM SQUARE Security & Manpower Services",
  description: "Explore VM SQUARE in action. Browse images and videos of our security personnel, operational drills, training programs, and client deployments.",
};

const sampleGalleryItems: GalleryMediaItem[] = [
  {
    id: "sample-1",
    title: "Manned Guarding Briefing Session",
    description: "Daily operational briefing and equipment inspection for security guards before shift deployment.",
    mediaType: "IMAGE",
    url: "https://images.unsplash.com/photo-1541888000424-74742e47833a?auto=format&fit=crop&q=80&w=1200",
    thumbnailUrl: null,
    category: "Security Personnel",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "sample-2",
    title: "Fire Safety & Emergency Response Drill",
    description: "Hands-on fire extinguisher training and emergency evacuation drill conducted for site supervisors.",
    mediaType: "IMAGE",
    url: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=1200",
    thumbnailUrl: null,
    category: "Training",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "sample-3",
    title: "24/7 Command Center Monitoring",
    description: "High-definition CCTV and electronic surveillance monitoring operating around the clock.",
    mediaType: "IMAGE",
    url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",
    thumbnailUrl: null,
    category: "Operations",
    isFeatured: false,
    isActive: true,
  },
  {
    id: "sample-4",
    title: "Industrial Site Patrol Demonstration",
    description: "Mobile security patrol conducting night perimeter security checks at an industrial manufacturing plant.",
    mediaType: "VIDEO",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=1200",
    category: "Operations",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "sample-5",
    title: "Corporate Event Access Control",
    description: "Specialized event security team managing VIP access control and crowd management.",
    mediaType: "IMAGE",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    thumbnailUrl: null,
    category: "Events",
    isFeatured: false,
    isActive: true,
  },
  {
    id: "sample-6",
    title: "VM SQUARE Field Officers Squad",
    description: "Our senior field officers and supervisors dedicated to quality assurance and client site audits.",
    mediaType: "IMAGE",
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
    thumbnailUrl: null,
    category: "Team",
    isFeatured: true,
    isActive: true,
  },
];

export default async function GalleryPage() {
  const dbItems = await db.galleryImage.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  }).catch(() => []);

  const galleryItems: GalleryMediaItem[] =
    dbItems.length > 0
      ? dbItems.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description || null,
          mediaType: item.mediaType || "IMAGE",
          url: item.url,
          thumbnailUrl: item.thumbnailUrl || null,
          category: item.category || "Operations",
          isFeatured: item.isFeatured || false,
          isActive: item.isActive ?? true,
        }))
      : sampleGalleryItems;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-vmdark text-white py-20 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888000424-74742e47833a?auto=format&fit=crop&q=80&w=2000")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-vmdark via-vmdark/90 to-vmdark/80"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-semibold mx-auto">
            <Camera className="h-4 w-4" />
            <span>SECURITY IN ACTION</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            OUR MEDIA GALLERY
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Witness our trained security personnel, operational drills, technology integrations, and client site deployments across Karnataka.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <PublicGalleryGrid initialItems={galleryItems} />
      </section>
    </div>
  );
}
