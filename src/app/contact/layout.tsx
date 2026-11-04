import { pageJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const TITLE = "Contact VM SQUARE Security Agency in Bengaluru";
const DESCRIPTION =
  "Contact VM SQUARE Security & Manpower Services, Kasturinagar, Bengaluru. Call or WhatsApp +91 80732 46094 for security and manpower enquiries in Karnataka.";

// page.tsx is a client component (interactive form) and cannot export metadata, so it lives here
export const metadata = pageMetadata({ title: TITLE, absoluteTitle: true, description: DESCRIPTION, path: "/contact" });

const jsonLd = pageJsonLd({
  name: TITLE,
  description: DESCRIPTION,
  path: "/contact",
  crumbs: [{ name: "Contact", path: "/contact" }],
  type: "ContactPage",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
