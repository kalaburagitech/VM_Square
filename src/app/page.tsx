import { pageMetadata, faqJsonLd, absoluteUrl } from "@/lib/seo";
import { SITE_URL } from "@/lib/company-info";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ClientSection } from "@/components/home/ClientSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SecurityOperations } from "@/components/home/SecurityOperations";
import { TechnologyMonitoring } from "@/components/home/TechnologyMonitoring";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FaqSection, type FaqItem } from "@/components/seo/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";

const TITLE = "Security Agency in Bengaluru & Karnataka | VM SQUARE";
const DESCRIPTION =
  "Bengaluru-based security and manpower company: trained security guards, industrial, office and apartment security, and housekeeping across Karnataka.";

export const metadata = pageMetadata({
  title: TITLE,
  absoluteTitle: true,
  description: DESCRIPTION,
  path: "/",
});

const homeFaqs: FaqItem[] = [
  {
    question: "What services does VM SQUARE provide?",
    answer:
      "We provide security guards (manned guarding and access control), corporate office and tech park security, industrial and warehouse security, apartment and gated community security, event and VIP escort security, CCTV surveillance and control-room monitoring, and housekeeping and facility management staff.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Our office is in Kasturinagar, Bengaluru, and we deploy staff to sites in Bengaluru and across Karnataka. Enquiries from other parts of India are welcome; share your site location and we will confirm whether we can serve it.",
  },
  {
    question: "Are your security guards verified and trained?",
    answer:
      "Yes. Guards are police-verified and background-checked before deployment, and are trained in gate procedures, physical fitness and fire-safety drills. Supervisors and our 24/7 operations desk oversee every site.",
  },
  {
    question: "Can I get both security guards and housekeeping staff from VM SQUARE?",
    answer:
      "Yes. We supply security and housekeeping manpower, so sites that need both can manage them through one company.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Fill in the Request a Quote form, call or WhatsApp +91 80732 46094, or email drakshayani@vmsquaresecurity.com. Tell us the site type, location, number of personnel and shift timings, and our team will get back to you.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: absoluteUrl("/"),
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    faqJsonLd("/", homeFaqs),
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={jsonLd} />
      <Hero />
      <StatsSection />
      <ClientSection />
      <AboutSection />
      <ServicesPreview />
      <WhyChooseUs />
      <SecurityOperations />
      <TechnologyMonitoring />
      <GalleryPreview />
      <FaqSection faqs={homeFaqs} heading="Security & Manpower Services: Common Questions" eyebrow="FAQ" />
    </div>
  );
}
