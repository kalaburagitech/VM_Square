import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ClientSection } from "@/components/home/ClientSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SecurityOperations } from "@/components/home/SecurityOperations";
import { TechnologyMonitoring } from "@/components/home/TechnologyMonitoring";
import { GalleryPreview } from "@/components/home/GalleryPreview";

export const metadata = pageMetadata({
  title: "Security & Manpower Services in Bengaluru | VM SQUARE",
  absoluteTitle: true,
  description:
    "Bengaluru-based security guard, corporate, industrial and apartment security, and housekeeping services across Karnataka. Enquiries welcome from across India.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <ClientSection />
      <AboutSection />
      <ServicesPreview />
      <WhyChooseUs />
      <SecurityOperations />
      <TechnologyMonitoring />
      <GalleryPreview />
    </div>
  );
}
