export interface GalleryImage {
  src: string;
  // Not displayed; describes the photo for screen readers and image search
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/command_center.jpg", alt: "VM SQUARE CCTV command center operations" },
  { src: "/images/gallery/courtyard_training.jpg", alt: "Security personnel drill and formation training" },
  { src: "/images/gallery/fire_safety_train.jpg", alt: "Fire safety and emergency evacuation training drill" },
  { src: "/images/gallery/corporate_guard.jpg", alt: "Security officer at a corporate office" },
  { src: "/images/gallery/vmsquare_patrol_guard.jpg", alt: "VM SQUARE security officer on night patrol" },
  { src: "/images/gallery/vmsquare_guard_front.jpg", alt: "VM SQUARE uniformed security officer" },
  { src: "/images/gallery/guard_image.jpg", alt: "Security officer at a site access gate" },
  { src: "/images/gallery/industrial_guard.jpg", alt: "Security officer patrolling an industrial warehouse" },
  { src: "/images/gallery/event_security.jpg", alt: "Event security team at an entrance" },
  { src: "/images/gallery/patrol_vehicle.jpg", alt: "Night security patrol vehicle" },
  { src: "/images/gallery/vip_protection.jpg", alt: "Executive protection and escort" },
  { src: "/images/gallery/cctv_monitoring.jpg", alt: "CCTV video wall monitoring" },
];
