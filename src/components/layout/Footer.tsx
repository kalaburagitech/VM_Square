import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vmdark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-white block leading-none">
                  VM SQUARE
                </span>
                <span className="text-[0.65rem] text-gray-400 uppercase tracking-wider font-semibold">
                  Security & Manpower
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional Security & Manpower Solutions for Businesses, Communities & Industries. Delivering excellence through discipline and technology.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Industries We Serve", href: "/industries" },
                { name: "Careers", href: "/careers" },
                { name: "Blog & News", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 bg-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Core Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Manned Guarding", href: "/services/manned-guarding" },
                { name: "Corporate Security", href: "/services/corporate-security" },
                { name: "Industrial Security", href: "/services/industrial-security" },
                { name: "Facility Management", href: "/services/facility-management" },
                { name: "Electronic Security", href: "/services/electronic-security" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 bg-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>
                  123 Security Avenue, Business District, <br />
                  Metro City, 10001
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@vmsquare.com" className="hover:text-white transition-colors">info@vmsquare.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <Button render={<Link href="/request-quote" />} variant="outline" className="w-full border-gray-600 text-foreground hover:bg-white hover:text-vmdark transition-colors">
                Request a Free Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} VM SQUARE SECURITY & MANPOWER SERVICES. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
