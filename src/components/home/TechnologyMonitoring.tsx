"use client";

import { motion } from "framer-motion";
import { Cpu, Activity, Video, Radio } from "lucide-react";

export function TechnologyMonitoring() {
  return (
    <section className="py-24 bg-vmnavy text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vmgold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold tracking-wider text-vmgold uppercase mb-3">
              Advanced Technology
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              24/7 Command & Control
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our state-of-the-art Operations Center utilizes artificial intelligence, real-time telemetry, and advanced surveillance systems to predict and prevent security breaches before they occur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 border border-white/20 p-4 rounded-lg backdrop-blur-sm">
                <Video className="text-vmgold mb-3" size={28} />
                <h4 className="font-semibold mb-1">Smart Surveillance</h4>
                <p className="text-sm text-gray-400">AI-powered facial recognition and anomaly detection.</p>
              </div>
              <div className="bg-white/10 border border-white/20 p-4 rounded-lg backdrop-blur-sm">
                <Activity className="text-vmgold mb-3" size={28} />
                <h4 className="font-semibold mb-1">Real-time Telemetry</h4>
                <p className="text-sm text-gray-400">Instant alerts from IoT sensors across your facilities.</p>
              </div>
              <div className="bg-white/10 border border-white/20 p-4 rounded-lg backdrop-blur-sm">
                <Cpu className="text-vmgold mb-3" size={28} />
                <h4 className="font-semibold mb-1">AI Analytics</h4>
                <p className="text-sm text-gray-400">Predictive threat modeling and pattern analysis.</p>
              </div>
              <div className="bg-white/10 border border-white/20 p-4 rounded-lg backdrop-blur-sm">
                <Radio className="text-vmgold mb-3" size={28} />
                <h4 className="font-semibold mb-1">Rapid Comm</h4>
                <p className="text-sm text-gray-400">Encrypted communications with field operatives.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Placeholder image for Command Center */}
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
              <span className="text-slate-400 font-medium">Command Center Image Placeholder</span>
            </div>
            
            {/* Overlay UI elements simulating tech */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-vmgold/30 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-mono text-green-400">SYSTEMS NOMINAL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
