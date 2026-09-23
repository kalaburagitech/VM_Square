"use client";

import { motion } from "framer-motion";
import { Building2, Plane, GraduationCap, Stethoscope } from "lucide-react";
import Link from "next/link";

const industries = [
  { name: "Corporate", icon: Building2 },
  { name: "Aviation", icon: Plane },
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: Stethoscope },
];

export function IndustriesPreview() {
  return (
    <section className="py-24 bg-vmdark text-vmlight relative">
      <div className="absolute inset-0 bg-vmnavy/90 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-semibold tracking-wider text-vmgold uppercase mb-3">
              Industries We Serve
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Securing Every Sector
            </h3>
            <p className="text-gray-300 text-lg">
              Our specialized security protocols are adapted to meet the strict compliance and unique operational demands of various industries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/industries" className="text-vmgold hover:text-white font-semibold flex items-center gap-2 transition-colors">
              Explore All Industries
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <industry.icon size={40} className="text-vmgold mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold">{industry.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
