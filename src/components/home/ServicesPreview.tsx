"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, Users, Server } from "lucide-react";
import Link from "next/link";
import React from "react";

const services = [
  {
    id: "physical-security",
    title: "Physical Security",
    description: "Expert personnel and advanced access control to protect your physical assets.",
    icon: <Users size={32} className="text-vmgold" />
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Robust digital defenses against emerging threats and vulnerabilities.",
    icon: <Server size={32} className="text-vmgold" />
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    description: "Comprehensive evaluation of potential vulnerabilities in your operations.",
    icon: <ShieldCheck size={32} className="text-vmgold" />
  },
  {
    id: "secure-transit",
    title: "Secure Transit",
    description: "Armored transport and secure logistics for high-value assets.",
    icon: <Lock size={32} className="text-vmgold" />
  }
];

export function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-all group"
    >
      <div className="mb-6 p-4 bg-vmnavy/5 inline-block rounded-lg group-hover:bg-vmnavy transition-colors">
        {React.cloneElement(service.icon, { className: "group-hover:text-vmlight transition-colors text-vmgold" })}
      </div>
      <h3 className="text-xl font-bold text-vmdark mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 line-clamp-3">
        {service.description}
      </p>
      <Link href={`/services#${service.id}`} className="inline-flex items-center text-vmnavy font-semibold group-hover:text-vmgold transition-colors">
        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

export function ServicesPreview() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold tracking-wider text-vmnavy uppercase mb-3">
              Our Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-vmdark">
              Comprehensive Security Solutions
            </h3>
            <p className="text-lg text-gray-600">
              We deliver end-to-end security services tailored to mitigate risks and ensure operational continuity across all facets of your business.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 bg-vmnavy text-vmlight px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
