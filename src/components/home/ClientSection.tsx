import Image from "next/image";
import { Building2, MapPin } from "lucide-react";

interface ClientItem {
  name: string;
  location: string;
  // Optional logo in /public, e.g. "/images/clients/logos/acme.png"; a building icon is shown when absent
  logo?: string;
}

// Placeholder client entries (generic site types, no real company names).
// Replace with genuine clients only after they have agreed to be listed.
const clients: ClientItem[] = [
  { name: "IT Tech Park", location: "Bengaluru" },
  { name: "Gated Residential Community", location: "Bengaluru" },
  { name: "Logistics & Warehousing Facility", location: "Hoskote" },
  { name: "Manufacturing Plant", location: "Peenya" },
  { name: "Shopping Mall", location: "Whitefield" },
  { name: "Educational Campus", location: "Bengaluru" },
  { name: "Industrial Estate", location: "Bengaluru Outskirts" },
];

function ClientChip({ client }: { client: ClientItem }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
      <div className="relative h-10 w-10 shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden">
        {client.logo ? (
          <Image src={client.logo} alt={`${client.name} logo`} fill sizes="40px" className="object-contain p-1" />
        ) : (
          <Building2 className="h-5 w-5 text-vmnavy" />
        )}
      </div>
      <div className="whitespace-nowrap">
        <p className="text-sm font-bold text-white leading-tight">{client.name}</p>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
          <MapPin className="h-3 w-3 text-vmgold" />
          {client.location}
        </p>
      </div>
    </div>
  );
}

export function ClientSection() {
  return (
    <section className="py-10 md:py-12 bg-vmdark text-white border-y border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-vmgold">Our Clients</p>
        <h2 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight">Trusted By Businesses &amp; Communities</h2>
      </div>

      {/* Continuous right-to-left marquee: the list is rendered twice and shifted by -50% */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-vmdark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-vmdark to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1 ? true : undefined}>
              {clients.map((client) => (
                <div key={client.name} className="pr-4">
                  <ClientChip client={client} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
