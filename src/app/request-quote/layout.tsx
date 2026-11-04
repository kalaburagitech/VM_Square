import { pageJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

const TITLE = "Request a Quote for Security Guards & Manpower";
const DESCRIPTION =
  "Request a quote for security guards, housekeeping or facility management staff in Bengaluru and Karnataka. Share your site, location and staffing needs.";

// page.tsx is a client component (interactive form) and cannot export metadata, so it lives here
export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/request-quote" });

const jsonLd = pageJsonLd({
  name: TITLE,
  description: DESCRIPTION,
  path: "/request-quote",
  crumbs: [{ name: "Request a Quote", path: "/request-quote" }],
});

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
