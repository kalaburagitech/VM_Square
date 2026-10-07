import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ClientSection } from "@/components/home/ClientSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SecurityOperations } from "@/components/home/SecurityOperations";
import { TechnologyMonitoring } from "@/components/home/TechnologyMonitoring";
import { GalleryPreview } from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <ClientSection />
      <AboutSection />
      <ServicesPreview />
      <IndustriesPreview />
      <WhyChooseUs />
      <SecurityOperations />
      <TechnologyMonitoring />
      <GalleryPreview />
    </div>
  );
}


