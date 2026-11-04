import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, PhoneCall, ScanSearch, ClipboardList, Users, Eye } from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/lib/company-info";
import { faqJsonLd, pageJsonLd, pageMetadata, absoluteUrl } from "@/lib/seo";
import { SERVICES, serviceHref } from "@/lib/services-data";
import { SERVICE_PAGES, getServicePage } from "@/lib/service-pages";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FaqSection } from "@/components/seo/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";

// Only the service pages defined in SERVICE_PAGES exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${page.slug}`,
    image: page.image
      ? { url: page.image.src, width: page.image.width, height: page.image.height, alt: page.image.alt }
      : undefined,
  });
}

// Same four-step method described on the homepage ("How We Secure Your World")
const steps = [
  { icon: ScanSearch, title: "Assess", text: "We review your site, entry points, timings and risks." },
  { icon: ClipboardList, title: "Plan", text: "We agree staff strength, shifts and site instructions with you." },
  { icon: Users, title: "Deploy", text: "Verified, trained personnel are briefed and posted to your site." },
  { icon: Eye, title: "Monitor", text: "Supervisors and our 24/7 operations desk keep standards in check." },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const service = SERVICES.find((item) => item.slug === slug);
  if (!page || !service) notFound();

  const path = serviceHref(service);
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: service.shortTitle, path },
  ];
  const related = page.related
    .map((relatedSlug) => SERVICES.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined);
  const Icon = service.icon;

  const jsonLd = pageJsonLd({
    name: page.metaTitle,
    description: page.metaDescription,
    path,
    crumbs,
    extra: [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name: page.h1,
        serviceType: service.shortTitle,
        description: page.metaDescription,
        url: absoluteUrl(path),
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Bengaluru" },
          { "@type": "State", name: "Karnataka" },
        ],
        ...(page.image ? { image: absoluteUrl(page.image.src) } : {}),
      },
      faqJsonLd(path, page.faqs),
    ],
  });

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <JsonLd data={jsonLd} />

      {/* Hero Header Banner */}
      <section className="bg-gradient-to-b from-white to-[#F6F8FB] text-[#0B1E33] py-8 md:py-10 relative overflow-hidden border-b border-slate-200">
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl space-y-3">
          <Breadcrumbs crumbs={crumbs} />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vmgold/20 text-[#B88219] border border-vmgold/40 text-xs font-bold uppercase tracking-wider">
            <Icon className="h-4 w-4" />
            <span>{page.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#0B1E33]">
            {page.h1}
          </h1>

          <span className="mx-auto block h-1 w-16 rounded-full bg-vmgold" />

          <div className="pt-1 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-vmgold hover:bg-vmgold-hover text-vmdark px-6 py-3 rounded-xl font-extrabold text-sm shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={COMPANY_INFO.phone.tel}
              className="inline-flex items-center gap-2 bg-[#0B1E33] hover:bg-[#12314D] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <PhoneCall className="h-4 w-4 text-vmgold" />
              <span>Call {COMPANY_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 md:py-10 container mx-auto px-4 md:px-6">
        <div className={`grid grid-cols-1 gap-6 lg:gap-10 items-center ${page.image ? "lg:grid-cols-12" : ""}`}>
          <div className={`space-y-4 ${page.image ? "lg:col-span-7" : "max-w-3xl mx-auto"}`}>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-vmgold" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#B88219]">Service Overview</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1E33] leading-tight">{service.title}</h2>
            {page.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-slate-600 text-sm md:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {page.image && (
            <div className="lg:col-span-5">
              <div className="relative h-[260px] sm:h-[340px] lg:h-[380px] w-full rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-200 bg-slate-900">
                <Image
                  src={page.image.src}
                  alt={page.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What the service covers */}
      <section className="py-8 md:py-10 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1E33] text-center mb-6">{page.coversHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.covers.map((item) => (
              <div
                key={item.title}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-vmgold hover:shadow-lg hover:shadow-vmgold/15"
              >
                <h3 className="font-bold text-[#0B1E33] text-base mb-1.5">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for + how it works */}
      <section className="py-8 md:py-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0B1E33] mb-4">{page.suitableHeading}</h2>
            <ul className="space-y-2.5">
              {page.suitableFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base text-slate-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-vmgold mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-[#0B1E33] mb-4">How it works</h2>
            <ol className="space-y-3">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <li key={step.title} className="flex items-start gap-3.5 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold">
                      <StepIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0B1E33] text-sm md:text-base">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-sm text-slate-600">{step.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <FaqSection faqs={page.faqs} />

      {/* Related services */}
      <section className="py-8 md:py-10 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#0B1E33] text-center mb-5">Related Services</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={serviceHref(item)}
                  className="group inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-[#0B1E33] shadow-sm transition-all hover:border-vmgold hover:text-[#B88219]"
                >
                  <span>{item.shortTitle}</span>
                  <ArrowRight className="h-4 w-4 text-vmgold transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#0B1E33] px-4 py-2.5 rounded-xl text-sm font-bold text-vmgold shadow-sm transition-all hover:bg-[#12314D]"
              >
                All Services
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom CTA Banner (same style as the About page) */}
      <section className="py-10 md:py-14 bg-[#0B1E33] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#12314D] to-[#0B1E33] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Get a Quote for {service.shortTitle}
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Share your site type, location, number of personnel and shift timings. Our team will confirm the requirement and send you a quotation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-vmgold hover:bg-vmgold-hover text-vmdark px-6 py-3 rounded-xl font-extrabold text-sm shadow-lg transition-all hover:scale-[1.02]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={COMPANY_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-3 rounded-xl font-bold text-sm border border-white/20 transition-all"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
