"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 border-slate-200 py-2.5"
          : "bg-white shadow-sm border-slate-200 py-3.5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Company Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="VM SQUARE Home">
            <Image
              src="/logo-transparent.png"
              alt="VM SQUARE Security & Manpower Services Logo"
              width={2688}
              height={570}
              sizes="(max-width: 640px) 150px, (max-width: 768px) 185px, 200px"
              className="h-8 sm:h-9 md:h-11 w-auto max-w-[150px] sm:max-w-[185px] md:max-w-none object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-vmgold after:transition-all after:duration-300 ${
                    active
                      ? "text-[#B88219] after:w-full"
                      : "text-[#0B1E33] hover:text-[#B88219] after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0B1E33] hover:bg-[#12314D] text-vmgold hover:text-vmgold font-extrabold text-sm px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#0B1E33] hover:text-[#B88219] transition-colors rounded-xl bg-slate-100 hover:bg-slate-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-slate-200 shadow-xl shadow-slate-900/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-4 border-t" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-semibold p-3 rounded-lg border-l-4 transition-colors ${
                  active
                    ? "text-[#B88219] bg-vmgold/10 border-vmgold"
                    : "text-[#0B1E33] border-transparent hover:text-[#B88219] hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center bg-[#0B1E33] hover:bg-[#12314D] text-vmgold hover:text-vmgold font-extrabold text-sm w-full shadow-md py-3 rounded-xl transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}