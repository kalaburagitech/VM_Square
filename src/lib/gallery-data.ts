export interface GalleryImage {
  src: string;
  // Describes the photo for screen readers and image search; also shown as the caption in the enlarged view
  alt: string;
  // Intrinsic pixel size of the source file. Lets each photo keep its natural proportions
  // (no cropping) and reserves its space before it loads (no layout shift).
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/command_center.jpg", alt: "VM SQUARE CCTV command center operations", width: 1536, height: 1024 },
  { src: "/images/gallery/courtyard_training.jpg", alt: "Security personnel drill and formation training", width: 1672, height: 941 },
  { src: "/images/gallery/fire_safety_train.jpg", alt: "Fire safety and emergency evacuation training drill", width: 1536, height: 1024 },
  { src: "/images/gallery/corporate_guard.jpg", alt: "VM SQUARE security officer with a radio outside a corporate office", width: 1674, height: 940 },
  { src: "/images/gallery/vmsquare_patrol_guard.jpg", alt: "VM SQUARE security officer on night patrol", width: 1536, height: 1024 },
  { src: "/images/gallery/vmsquare_guard_front.jpg", alt: "VM SQUARE uniformed security officer on duty in a building lobby", width: 1451, height: 1084 },
  { src: "/images/gallery/guard_image.jpg", alt: "VM SQUARE security officer uniform, ID card, cap badge and radio details", width: 1536, height: 1024 },
  { src: "/images/gallery/industrial_guard.jpg", alt: "Security officer patrolling an industrial warehouse", width: 1200, height: 896 },
  { src: "/images/gallery/event_security.jpg", alt: "VM SQUARE event security team managing access control at a corporate event entrance", width: 1451, height: 1084 },
  { src: "/images/gallery/patrol_vehicle.jpg", alt: "Night security patrol vehicle", width: 1200, height: 896 },
  { src: "/images/gallery/vip_protection.jpg", alt: "Executive protection and escort", width: 1200, height: 896 },
  { src: "/images/gallery/cctv_monitoring.jpg", alt: "CCTV video wall monitoring", width: 1451, height: 1084 },
];
