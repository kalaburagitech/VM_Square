import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/seo";

// Visible breadcrumb trail; the matching BreadcrumbList JSON-LD comes from pageJsonLd()
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...crumbs];

  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm">
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-slate-500">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.path} className="inline-flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-[#0B1E33]">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path} className="inline-flex min-h-8 items-center hover:text-[#B88219] transition-colors">
                    {crumb.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 text-vmgold" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
