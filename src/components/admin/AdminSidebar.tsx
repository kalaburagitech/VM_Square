"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Users, 
  Briefcase, 
  Building2, 
  Image as ImageIcon, 
  Settings,
  ShieldCheck,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { name: "Quote Requests", href: "/admin/quotes", icon: FileText },
  { name: "Career Apps", href: "/admin/careers", icon: Briefcase },
  { name: "Services", href: "/admin/services", icon: ShieldCheck },
  { name: "Industries", href: "/admin/industries", icon: Building2 },
  { name: "Clients", href: "/admin/clients", icon: Users },
  { name: "Testimonials", href: "/admin/testimonials", icon: Award },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-white h-full z-10">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/admin" className="flex items-center gap-2 font-bold text-lg text-primary tracking-tight">
          <ShieldCheck className="h-6 w-6" />
          VM SQUARE ADMIN
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
