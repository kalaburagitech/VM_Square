"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Target } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-20 bg-vmlight text-vmnavy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-wider text-vmgold uppercase mb-3">
              About VM SQUARE
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-vmdark">
              Pioneering Security Solutions for the Modern Era
            </h3>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              We are a premier security firm dedicated to protecting assets, people, and data across multiple industries. With advanced technology and highly trained personnel, we provide comprehensive risk management tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-vmnavy text-vmgold rounded-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-vmdark mb-1">Advanced Protection</h4>
                  <p className="text-sm text-gray-600">State-of-the-art security measures.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-vmnavy text-vmgold rounded-lg">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-vmdark mb-1">Targeted Solutions</h4>
                  <p className="text-sm text-gray-600">Customized for your unique risks.</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 bg-vmgold text-vmdark px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
              Discover Our Story
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-vmdark/20 z-10"></div>
            {/* Placeholder image */}
            <div className="absolute inset-0 bg-slate-300 animate-pulse flex items-center justify-center">
              <span className="text-slate-500 font-medium">Corporate Security Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
