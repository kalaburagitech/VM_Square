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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#0B132B]/95 backdrop-blur-md shadow-2xl border-b border-amber-500/30 py-3"
          : "bg-[#0B132B] shadow-lg border-b border-amber-500/20 py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Company Logo & Highlighted Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative p-1 rounded-xl bg-white/10 backdrop-blur-sm border border-amber-400/30 group-hover:border-amber-400 transition-all shadow-md group-hover:shadow-amber-500/20">
              <Image
                src="/logo.png"
                alt="VM SQUARE Logo"
                width={48}
                height={48}
                className="h-10 w-auto object-contain rounded-lg"
                priority
              />
            </div>
            <div>
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-white block leading-none">
                VM <span className="text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">SQUARE</span>
              </span>
              <span className="text-[0.65rem] md:text-[0.7rem] text-amber-300/90 uppercase tracking-widest font-semibold block mt-0.5">
                Security & Manpower
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-200 hover:text-amber-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <Button
              render={<Link href="/request-quote" />}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 border-0 transition-all transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors rounded-lg bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0B132B] border-t border-amber-500/30 shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-200 hover:text-amber-400 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            render={<Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)} />}
            className="mt-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold w-full shadow-lg"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}

