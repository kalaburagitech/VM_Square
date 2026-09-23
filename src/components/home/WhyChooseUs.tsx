"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    "Over 20 years of industry experience",
    "Highly trained and certified security personnel",
    "24/7 advanced command and control center",
    "Customized risk management strategies",
    "State-of-the-art technological integration",
    "Rapid incident response teams"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-vmnavy/10 z-10"></div>
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
              <span className="text-slate-500 font-medium">Why Choose Us Image Placeholder</span>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl z-20 shadow-lg border border-white/20">
              <div className="text-4xl font-bold text-vmnavy mb-2">100%</div>
              <div className="text-gray-700 font-medium">Commitment to Client Safety</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-semibold tracking-wider text-vmgold uppercase mb-3">
              The VM SQUARE Advantage
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-vmdark">
              Why Partner With Us?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We don't just provide security; we provide peace of mind. Our proactive approach ensures that potential threats are identified and neutralized before they impact your operations.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-vmgold shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
