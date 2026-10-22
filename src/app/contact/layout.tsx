import { pageMetadata } from "@/lib/seo";

// page.tsx is a client component (interactive form) and cannot export metadata, so it lives here
export const metadata = pageMetadata({
  title: "Contact Us: Security Services Enquiry",
  description:
    "Call, WhatsApp or email VM SQUARE Security in Bengaluru on +91 80732 46094. Enquiries welcome from across Karnataka and India.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
