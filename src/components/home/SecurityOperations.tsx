"use client";

import { motion } from "framer-motion";
import { Search, ShieldAlert, Zap, Lock } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assess",
    description: "Comprehensive vulnerability and risk assessment of your current infrastructure."
  },
  {
    icon: ShieldAlert,
    title: "Plan",
    description: "Developing tailored security protocols and emergency response plans."
  },
  {
    icon: Zap,
    title: "Deploy",
    description: "Implementing advanced technology and dispatching trained personnel."
  },
  {
    icon: Lock,
    title: "Monitor",
    description: "24/7 continuous surveillance and real-time threat neutralization."
  }
];

export function SecurityOperations() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold tracking-wider text-vmnavy uppercase mb-3">
              Operational Methodology
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-vmdark">
              How We Secure Your World
            </h3>
            <p className="text-lg text-gray-600">
              Our proven four-step operational framework ensures no detail is overlooked and maximum protection is deployed efficiently.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform"
              >
                <div className="w-16 h-16 bg-vmnavy text-vmgold rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <step.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-vmdark mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
