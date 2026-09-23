export const dynamic = "force-dynamic";
import Metadata from "next";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Clients | VM SQUARE Security Services",
  description: "Explore the companies, industrial hubs, commercial complexes, and communities that trust VM SQUARE for security and manpower solutions.",
};

const defaultClients = [
  { name: "Apex Tech Park", industry: "IT & Commercial", location: "Bengaluru" },
  { name: "Prestige Heights Community", industry: "Residential Township", location: "Bengaluru" },
  { name: "Karnataka Logistics Hub", industry: "Logistics & Warehousing", location: "Hosote" },
  { name: "SunRise Manufacturing Plant", industry: "Industrial & Manufacturing", location: "Peenya" },
  { name: "Grand Central Mall", industry: "Retail & Shopping", location: "Whitefield" },
  { name: "St. Joseph Educational Campus", industry: "Educational Institution", location: "Bengaluru" },
];

export default async function ClientsPage() {
  const dbClients = await db.client.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  }).catch(() => []);

  const clientList = dbClients.length > 0 ? dbClients : defaultClients;

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-vmdark text-white py-20 relative">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-semibold">
            <ShieldCheck className="h-4 w-4" />
            <span>TRUSTED PARTNERS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">OUR VALUED CLIENTS</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            We take pride in safeguarding premier corporate headquarters, industrial complexes, healthcare facilities, and residential townships across Karnataka.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientList.map((client: any, idx: number) => (
            <div key={client.id || idx} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-lg text-primary shrink-0">
                <Building2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-vmdark">{client.name}</h3>
                <p className="text-xs text-primary font-semibold mt-0.5">{client.industry || "Commercial Security"}</p>
                {client.location && <p className="text-xs text-muted-foreground mt-1">📍 {client.location}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white border-t text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold text-vmdark">Join Our Growing Network of Satisfied Clients</h2>
          <p className="text-muted-foreground text-base">
            Partner with VM SQUARE to receive dedicated 24/7 security supervision, vetted manpower, and reliable risk mitigation.
          </p>
          <div className="pt-2">
            <Button render={<Link href="/request-quote" />} size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
              Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
