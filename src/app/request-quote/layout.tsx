import { pageMetadata } from "@/lib/seo";

// page.tsx is a client component (interactive form) and cannot export metadata, so it lives here
export const metadata = pageMetadata({
  title: "Request a Security Guard Quote",
  description:
    "Request a quote for security guards or facility services. Share your site, location and staffing needs; enquiries welcome from across India.",
  path: "/request-quote",
});

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
