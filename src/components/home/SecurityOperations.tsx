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
    <section className="py-20 md:py-24 bg-[#F6F8FB] border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-wider text-vmgold uppercase">
              Operational Methodology
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-vmdark">
              How We Secure Your World
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Our proven four-step operational framework ensures no detail is overlooked and maximum protection is deployed efficiently.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-slate-200/80 relative group hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-vmnavy text-vmgold rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-vmdark mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
