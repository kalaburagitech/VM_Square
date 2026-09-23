import Link from "next/link";
import Image from "next/image";
import { Building2, ShieldCheck, ArrowRight, CheckCircle2, Lock } from "lucide-react";

export const metadata = {
  title: "Our Clients & Facilities | VM SQUARE Security Services",
  description: "Explore the companies, industrial hubs, commercial complexes, and communities that trust VM SQUARE for 24/7 security and manpower solutions.",
};

const fullClientsList = [
  { name: "Apex Tech Park", industry: "IT & Commercial", location: "Bengaluru", serviceProvided: "Physical Guarding & Electronic Access Control" },
  { name: "Prestige Heights Community", industry: "Residential Township", location: "Bengaluru", serviceProvided: "24/7 Gatehouse & Perimeter Patrol" },
  { name: "Karnataka Logistics Hub", industry: "Logistics & Warehousing", location: "Hoskote", serviceProvided: "Cargo Protection & Warehouse Surveillance" },
  { name: "SunRise Manufacturing Plant", industry: "Industrial & Manufacturing", location: "Peenya", serviceProvided: "Industrial Access & Fire Safety Team" },
  { name: "Grand Central Mall", industry: "Retail & Shopping", location: "Whitefield", serviceProvided: "Crowd Control & Loss Prevention" },
  { name: "St. Joseph Educational Campus", industry: "Educational Institution", location: "Bengaluru", serviceProvided: "Campus Safety & Visitor Management" },
  { name: "Titan Industrial Estate", industry: "Industrial Park", location: "Border Hub", serviceProvided: "24/7 Gate Checkpoints & Vehicle Escort" },
  { name: "Embassy TechVillage", industry: "Corporate Tech Park", location: "Outer Ring Rd", serviceProvided: "CCTV Command Monitoring & Executive Protection" },
];

const facilityGalleries = [
  {
    title: "Secured Corporate Tech Headquarters",
    location: "Bengaluru Hub",
    imageUrl: "/images/clients/techpark_facility.jpg",
    servicesUsed: "Executive Access Control & 24/7 Perimeter Security",
  },
  {
    title: "Protected Gated Residential Township",
    location: "North Bengaluru",
    imageUrl: "/images/clients/township_facility.jpg",
    servicesUsed: "Concierge Security & Guarded Gate Barriers",
  },
];

export default function ClientsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-vmdark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-vmdark via-slate-900 to-vmdark opacity-90" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vmgold/20 text-vmgold border border-vmgold/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>CLIENT SECTION & PORTFOLIO</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">OUR VALUED CLIENTS</h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            VM SQUARE safeguards premier corporate headquarters, industrial complexes, healthcare facilities, and gated townships across South India.
          </p>
        </div>
      </section>

      {/* Featured Client Facilities (Images without Names) */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-vmdark mb-3">Secured Client Facilities</h2>
          <p className="text-slate-600">A glimpse into high-security locations protected 24/7 by VM SQUARE personnel and command operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilityGalleries.map((facility, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={facility.imageUrl}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-vmdark/90 border border-vmgold/60 px-3 py-1 rounded-full text-xs font-bold text-vmgold flex items-center gap-1.5 shadow-md">
                  <Lock className="h-3.5 w-3.5" />
                  <span>PROTECTED FACILITY</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-vmdark">{facility.title}</h3>
                  <span className="text-xs text-muted-foreground">📍 {facility.location}</span>
                </div>
                <p className="text-sm text-slate-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-vmgold shrink-0" />
                  <span>{facility.servicesUsed}</span>
                </p>
                <div className="pt-2">
                  <Link href="/services" className="inline-flex items-center text-xs font-bold text-vmdark hover:text-vmgold transition-colors">
                    View Related Services <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Client Directory */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-vmdark">Full Directory of Client Partners</h2>
            <p className="text-slate-600">Companies and hub management entities relying on VM SQUARE for enterprise security solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fullClientsList.map((client, idx) => (
              <div key={idx} className="bg-slate-50 hover:bg-slate-100 rounded-xl border p-5 transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-vmdark/10 p-2.5 rounded-lg text-vmdark group-hover:bg-vmdark group-hover:text-vmgold transition-colors shrink-0">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-vmdark line-clamp-1">{client.name}</h3>
                      <p className="text-xs text-vmgold font-semibold">{client.industry}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    <strong className="text-slate-700">Services:</strong> {client.serviceProvided}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-muted-foreground">
                  <span>📍 {client.location}</span>
                  <Link href="/services" className="text-vmdark font-semibold hover:text-vmgold flex items-center gap-1">
                    Services <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-slate-900 text-white border-t text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Join Our Growing Network of Satisfied Clients</h2>
          <p className="text-slate-300 text-base">
            Partner with VM SQUARE to receive dedicated 24/7 security supervision, vetted manpower, and reliable risk mitigation.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/request-quote" className="bg-vmgold hover:bg-vmgold/90 text-vmdark font-bold px-8 py-3 rounded-xl transition-all shadow-lg inline-flex items-center gap-2">
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-3 rounded-xl border border-slate-700 transition-all inline-flex items-center gap-2">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
