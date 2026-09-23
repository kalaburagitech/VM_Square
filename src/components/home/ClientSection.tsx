"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Building2, ExternalLink, ArrowRight, CheckCircle2, Lock } from "lucide-react";

interface ClientNamedItem {
  type: "company";
  id: string;
  name: string;
  industry: string;
  location: string;
  badge: string;
  iconBg: string;
}

interface ClientImageItem {
  type: "image";
  id: string;
  imageUrl: string;
  altText: string;
  tagline: string;
  location: string;
}

type MarqueeItem = ClientNamedItem | ClientImageItem;

const marqueeItems: MarqueeItem[] = [
  {
    type: "company",
    id: "apex-tech",
    name: "Apex Tech Park",
    industry: "IT & Commercial",
    location: "Bengaluru",
    badge: "24/7 Gate & CCTV Patrol",
    iconBg: "bg-blue-600/10 text-blue-600 border-blue-200",
  },
  {
    type: "image",
    id: "site-img-1",
    imageUrl: "/images/clients/techpark_facility.jpg",
    altText: "Secured Client Corporate Facility",
    tagline: "Corporate Tech Headquarters",
    location: "Karnataka Hub",
  },
  {
    type: "company",
    id: "prestige-heights",
    name: "Prestige Heights Community",
    industry: "Residential Township",
    location: "Bengaluru",
    badge: "Gated Guard & Patrol",
    iconBg: "bg-amber-600/10 text-amber-600 border-amber-200",
  },
  {
    type: "company",
    id: "karnataka-logistics",
    name: "Karnataka Logistics Hub",
    industry: "Logistics & Warehousing",
    location: "Hoskote",
    badge: "Perimeter & Cargo Protection",
    iconBg: "bg-emerald-600/10 text-emerald-600 border-emerald-200",
  },
  {
    type: "image",
    id: "site-img-2",
    imageUrl: "/images/clients/township_facility.jpg",
    altText: "Secured Client Gated Community Site",
    tagline: "Gated Residential Township",
    location: "Bengaluru Region",
  },
  {
    type: "company",
    id: "sunrise-mfg",
    name: "SunRise Manufacturing Plant",
    industry: "Industrial & Manufacturing",
    location: "Peenya",
    badge: "Industrial Access Control",
    iconBg: "bg-indigo-600/10 text-indigo-600 border-indigo-200",
  },
  {
    type: "company",
    id: "grand-central",
    name: "Grand Central Mall",
    industry: "Retail & Commercial",
    location: "Whitefield",
    badge: "Crowd & Loss Prevention",
    iconBg: "bg-purple-600/10 text-purple-600 border-purple-200",
  },
  {
    type: "company",
    id: "st-joseph",
    name: "St. Joseph Educational Campus",
    industry: "Educational Institution",
    location: "Bengaluru",
    badge: "Campus Safety Team",
    iconBg: "bg-rose-600/10 text-rose-600 border-rose-200",
  },
  {
    type: "company",
    id: "titan-industrial",
    name: "Titan Industrial Park",
    industry: "Industrial Estate",
    location: "Dharmapuri Border",
    badge: "Heavy Asset Security",
    iconBg: "bg-teal-600/10 text-teal-600 border-teal-200",
  },
];

export function ClientSection() {
  // Duplicate array twice to ensure seamless continuous 60fps infinite marquee loop
  const duplicatedList = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-vmgold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vmgold/15 text-vmgold border border-vmgold/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>CLIENT SECTION</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Trusted Security Partner For Leading Enterprises
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Safeguarding premier corporate headquarters, industrial parks, logistics hubs, and gated townships across South India.
          </p>
        </motion.div>
      </div>

      {/* Right to Left Continuous Scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient Fades on Left & Right Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-left flex items-center gap-6">
          {duplicatedList.map((item, index) => {
            if (item.type === "company") {
              return (
                <Link
                  key={`${item.id}-${index}`}
                  href="/clients"
                  className="group shrink-0 w-[300px] md:w-[340px] bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-vmgold/50 rounded-2xl p-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1 block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${item.iconBg} shrink-0`}>
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base md:text-lg group-hover:text-vmgold transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium">{item.industry}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1">
                      📍 {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-vmgold font-medium bg-vmgold/10 px-2 py-0.5 rounded-md text-[11px]">
                      <CheckCircle2 className="h-3 w-3" /> {item.badge}
                    </span>
                  </div>
                </Link>
              );
            } else {
              // Client Image Card WITHOUT company name as specifically requested
              return (
                <Link
                  key={`${item.id}-${index}`}
                  href="/services"
                  className="group shrink-0 w-[320px] md:w-[360px] bg-slate-800/90 hover:bg-slate-800 border border-vmgold/40 hover:border-vmgold rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-1 block relative"
                >
                  <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.altText}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-vmdark/90 backdrop-blur-md border border-vmgold/50 px-2.5 py-1 rounded-full text-[11px] font-bold text-vmgold flex items-center gap-1.5 shadow-md">
                      <Lock className="h-3 w-3 text-vmgold" />
                      <span>SECURED CLIENT SITE</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/90 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                        {item.tagline}
                      </p>
                      <p className="text-xs text-slate-400">📍 {item.location}</p>
                    </div>
                    <div className="text-xs font-semibold text-vmgold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>View Services</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>

      {/* Action Footer linking to /clients and /services */}
      <div className="container mx-auto px-4 mt-12 text-center relative z-10">
        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 bg-vmgold hover:bg-vmgold/90 text-vmdark px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore Full Client Portfolio</span>
            <ExternalLink className="h-4 w-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:border-slate-500"
          >
            <span>View Security Services</span>
            <ArrowRight className="h-4 w-4 text-vmgold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
