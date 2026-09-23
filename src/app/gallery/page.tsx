import { PublicGalleryGrid, GalleryMediaItem } from "@/components/gallery/PublicGalleryGrid";
import { Camera } from "lucide-react";

export const metadata = {
  title: "Media Gallery | VM SQUARE Security & Manpower Services",
  description: "Explore VM SQUARE in action. Browse images and videos of our security personnel, operational drills, training programs, and client deployments.",
};

const sampleGalleryItems: GalleryMediaItem[] = [
  {
    id: "vmsquare-cmd-1",
    title: "VM SQUARE 24/7 Command & Operations Control Room",
    description: "Multi-monitor real-time CCTV surveillance command center staffed by trained VM SQUARE personnel with active site security & telemetry monitoring.",
    mediaType: "IMAGE",
    url: "/images/command_center.jpg",
    thumbnailUrl: null,
    category: "Command Center",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "vmsquare-corp-2",
    title: "Corporate Office Tower Guard & Mobile Patrol Unit",
    description: "Uniformed VM SQUARE security officer equipped with radio headset stationed at corporate headquarters with branded mobile patrol vehicle.",
    mediaType: "IMAGE",
    url: "/images/corporate_guard.jpg",
    thumbnailUrl: null,
    category: "Corporate Security",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "vmsquare-guard-1",
    title: "Official VM SQUARE Uniformed Security Officer",
    description: "Standard duty deployment uniform featuring light blue shirt with embroidered chest logo, dark tie, shoulder epaulettes, and black VM SQUARE cap.",
    mediaType: "IMAGE",
    url: "/images/gallery/vmsquare_guard_front.jpg",
    thumbnailUrl: null,
    category: "Official Uniform",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "vmsquare-guard-2",
    title: "Night Facility Patrol & Perimeter Vigilance",
    description: "VM SQUARE security officer performing night inspection with branded uniform shirt, cap, radio headset, and flashlight.",
    mediaType: "IMAGE",
    url: "/images/gallery/vmsquare_patrol_guard.jpg",
    thumbnailUrl: null,
    category: "Site Patrol",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "ai-gallery-3",
    title: "Industrial Plant Perimeter Inspection",
    description: "Equipped security officer patrolling logistics bay and warehouse perimeter.",
    mediaType: "IMAGE",
    url: "/images/gallery/industrial_guard.jpg",
    thumbnailUrl: null,
    category: "Industrial Security",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "ai-video-1",
    title: "Rapid Emergency Response & Fire Drill Video",
    description: "Live operational video demonstration of security guard emergency protocols and squad response.",
    mediaType: "VIDEO",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "/images/gallery/industrial_guard.jpg",
    category: "Operations Video",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "ai-gallery-4",
    title: "Corporate Event Access Control & Crowd Management",
    description: "Event security team conducting credential scanner checks at high-level leadership summit entrance.",
    mediaType: "IMAGE",
    url: "/images/gallery/event_security.jpg",
    thumbnailUrl: null,
    category: "Event Security",
    isFeatured: false,
    isActive: true,
  },
  {
    id: "ai-gallery-5",
    title: "Night Perimeter Security Patrol Unit",
    description: "Dedicated night security response vehicle stationed for alarm response and commercial facility surveillance.",
    mediaType: "IMAGE",
    url: "/images/gallery/patrol_vehicle.jpg",
    thumbnailUrl: null,
    category: "Mobile Patrol",
    isFeatured: false,
    isActive: true,
  },
  {
    id: "ai-gallery-6",
    title: "VIP Executive Protection & Escort Detail",
    description: "Specialized close-protection officers providing secure transport and executive escort detail.",
    mediaType: "IMAGE",
    url: "/images/gallery/vip_protection.jpg",
    thumbnailUrl: null,
    category: "Executive Protection",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "ai-video-2",
    title: "Perimeter Security Escort & Patrol Inspection Video",
    description: "Video walkthrough of field supervisor audits and high-vigilance site inspection.",
    mediaType: "VIDEO",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailUrl: "/images/gallery/patrol_vehicle.jpg",
    category: "Operations Video",
    isFeatured: true,
    isActive: true,
  },
];

export default function GalleryPage() {


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
        <PublicGalleryGrid initialItems={sampleGalleryItems} />
      </section>
    </div>
  );
}

