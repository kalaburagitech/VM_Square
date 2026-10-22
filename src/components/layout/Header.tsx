"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B1E33]/95 backdrop-blur-md shadow-xl border-b border-vmgold/30 py-3"
          : "bg-[#0B1E33] shadow-md border-b border-vmgold/20 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Company Logo & Highlighted Branding */}
          <Link href="/" className="flex items-center group shrink-0" aria-label="VM SQUARE Home">
            <div className="relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white shadow-md border border-slate-200/80 group-hover:border-vmgold/60 transition-all flex items-center justify-center shrink-0">
              <Image
                src="/logo-transparent.png"
                alt="VM SQUARE Security & Manpower Services Logo"
                width={2688}
                height={570}
                sizes="(max-width: 640px) 145px, (max-width: 768px) 180px, 190px"
                className="h-7 sm:h-8 md:h-10 w-auto max-w-[145px] sm:max-w-[180px] md:max-w-none object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-vmgold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-vmgold after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}

            <Button
              render={<Link href="/contact" />}
              className="bg-vmgold hover:bg-vmgold/90 text-vmdark font-extrabold text-sm px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg border-0 transition-all transform hover:-translate-y-0.5"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-vmgold transition-colors rounded-xl bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0B1E33] border-t border-vmgold/20 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-2.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-200 hover:text-vmgold p-2.5 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            render={<Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} />}
            className="mt-2 bg-vmgold hover:bg-vmgold/90 text-vmdark font-extrabold w-full shadow-md py-3 rounded-xl"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
