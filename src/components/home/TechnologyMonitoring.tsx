import { Cpu, Activity, Video, Radio } from "lucide-react";
import Image from "next/image";

export function TechnologyMonitoring() {
  return (
    <section className="py-20 md:py-24 bg-[#0B1E33] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vmgold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-wider text-vmgold uppercase">
              Electronic Vigilance
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              24/7 Command &amp; Control Operations
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-6 leading-relaxed">
              Our central operations monitoring desk coordinates multi-monitor CCTV video feeds, electronic access alarms, and night supervisor patrol checkpoints to maintain real-time situational awareness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:border-vmgold/40 transition-colors">
                <Video className="text-vmgold mb-3" size={26} />
                <h3 className="font-bold text-sm text-white mb-1">CCTV Video Wall</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Live multi-camera site surveillance and incident review.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:border-vmgold/40 transition-colors">
                <Activity className="text-vmgold mb-3" size={26} />
                <h3 className="font-bold text-sm text-white mb-1">Telemetry Monitoring</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Gate logs, intrusion sensor checks, and patrol verification.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:border-vmgold/40 transition-colors">
                <Cpu className="text-vmgold mb-3" size={26} />
                <h3 className="font-bold text-sm text-white mb-1">Access Control</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Biometric badges, turnstile records, and visitor tracking.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm hover:border-vmgold/40 transition-colors">
                <Radio className="text-vmgold mb-3" size={26} />
                <h3 className="font-bold text-sm text-white mb-1">Rapid Dispatch</h3>
                <p className="text-xs text-slate-300 leading-relaxed">Direct wireless radio communication with site supervisors.</p>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[460px] lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-950">
            <Image
              src="/images/gallery/command_center.jpg"
              alt="VM SQUARE 24/7 Command & Control Center CCTV Video Wall"
              fill
              className="object-cover object-[45%_center] sm:object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

            {/* Overlay UI element - Positioned at top-left so it never covers the VM SQUARE logo in the photo's top right */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-vmgold/40 flex items-center gap-2 sm:gap-2.5 shadow-lg z-10">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-bold tracking-wider">COMMAND MONITORING</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
