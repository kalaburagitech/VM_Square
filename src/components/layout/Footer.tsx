import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/company-info";

const services = [
  { name: "Manned Guarding", href: "/services#manned-guarding" },
  { name: "Corporate Security", href: "/services#corporate-security" },
  { name: "Industrial Security", href: "/services#industrial-security" },
  { name: "Residential Security", href: "/services#residential-security" },
  { name: "Event Security", href: "/services#event-security" },
  { name: "Facility Management", href: "/services#facility-management" },
  { name: "Electronic Security", href: "/services#electronic-security" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Media Gallery", href: "/gallery" },
  { name: "Request a Quote", href: "/request-quote" },
  { name: "Contact Us", href: "/contact" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#0B1E33]">
        {children}
      </h3>
      <span className="mt-2 block h-[3px] w-10 rounded-full bg-vmgold" />
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-slate-600 hover:text-[#B88219] transition-colors"
    >
      <ChevronRight className="h-3.5 w-3.5 text-vmgold transition-transform duration-200 group-hover:translate-x-0.5" />
      <span>{children}</span>
    </Link>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "LinkedIn",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#0B1E33] border-t-4 border-vmgold">
      <div className="container mx-auto px-4 md:px-6 pt-10 pb-8">
        {/* Responsive Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">

          {/* 1. Company Info & Social Media */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center shrink-0" aria-label="VM SQUARE Home">
              <Image
                src="/logo-transparent.png"
                alt="VM SQUARE Security & Manpower Services Logo"
                width={2688}
                height={570}
                sizes="(max-width: 640px) 150px, (max-width: 768px) 185px, 188px"
                className="h-9 sm:h-10 md:h-11 w-auto max-w-[170px] sm:max-w-[200px] md:max-w-none object-contain"
                loading="lazy"
              />
            </Link>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              VM SQUARE Security &amp; Manpower Services Pvt. Ltd. 
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
  Complete security and manpower solutions for offices, industries and residential communities, delivered by verified, well-trained professionals.
</p>
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-vmgold hover:text-[#0B1E33] hover:shadow-lg hover:shadow-vmgold/30"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <FooterLink href={service.href}>{service.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Information */}
          <div className="col-span-2 md:col-span-1">
            <FooterHeading>Contact Info</FooterHeading>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-vmgold/10 text-vmgold">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="text-slate-600 leading-relaxed block">
                  <span>{COMPANY_INFO.address.building},</span><br />
                  <span>{COMPANY_INFO.address.street},</span><br />
                  <span>{COMPANY_INFO.address.area}</span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-vmgold/10 text-vmgold">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={COMPANY_INFO.phone.tel}
                  className="font-bold text-[#0B1E33] hover:text-[#B88219] transition-colors"
                  title="Call 24/7 Helpline"
                >
                  {COMPANY_INFO.phone.display}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <a
                  href={COMPANY_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0B1E33] hover:text-emerald-600 transition-colors"
                  title="Chat with us on WhatsApp"
                >
                  {COMPANY_INFO.whatsapp.display} (WhatsApp)
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-vmgold/10 text-vmgold">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={COMPANY_INFO.email.mailto}
                  className="font-medium text-slate-600 hover:text-[#B88219] transition-colors break-all"
                >
                  {COMPANY_INFO.email.address}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-3 text-xs text-slate-500 text-center lg:text-left">
          <p>
            &copy; {currentYear}{" "}
            <strong className="text-[#0B1E33] font-bold">
              VM SQUARE SECURITY &amp; MANPOWER SERVICES PVT. LTD.
            </strong>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <Link href="/privacy-policy" className="hover:text-[#B88219] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#B88219] transition-colors">
              Terms &amp; Conditions
            </Link>

            {/* Developer credit */}
            <a
              href="https://kalaburagitech.com/"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-1.5 rounded-full border border-vmgold/40 bg-white px-3 py-1.5 text-slate-600 shadow-sm transition-all hover:border-vmgold hover:shadow-md"
              title="Visit Kalaburagi Tech (opens in a new tab)"
            >
              <span>Developed by</span>{" "}
              <span className="font-bold text-[#B88219]">Kalaburagi Tech</span>
              <ExternalLink className="h-3 w-3 text-vmgold group-hover:text-[#B88219]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}