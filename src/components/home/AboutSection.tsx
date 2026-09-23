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
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group"
          >
            <img
              src="/images/corporate_guard.jpg"
              alt="VM SQUARE Corporate Security Officer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Corporate Vigilance</span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">Verified Security Officers & Branded Patrol Units</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
