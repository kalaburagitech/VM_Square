import { ScanSearch, ClipboardList, Users, Eye } from "lucide-react";

const steps = [
  {
    icon: ScanSearch,
    title: "Assess",
    description: "Comprehensive vulnerability and risk assessment of your current infrastructure.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    description: "Developing tailored security protocols and emergency response plans.",
  },
  {
    icon: Users,
    title: "Deploy",
    description: "Implementing advanced technology and dispatching trained personnel.",
  },
  {
    icon: Eye,
    title: "Monitor",
    description: "24/7 continuous surveillance and real-time threat neutralization.",
  },
];
export function SecurityOperations() {
  return (
    <section className="border-t border-slate-200 bg-[#F6F8FB] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 bg-vmgold sm:w-10" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88219] sm:text-sm">
              Operational Methodology
            </p>
            <span className="h-[2px] w-6 bg-vmgold sm:w-10" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1E33] sm:text-4xl lg:text-5xl">
            How We Secure <span className="text-vmgold">Your World</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our proven four-step operational framework ensures no detail is overlooked and maximum protection is deployed efficiently.
          </p>
        </div>

        {/* Steps: vertical on mobile, 2 columns on tablet, 4 columns with a timeline on desktop */}
        <ol className="relative grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:grid-cols-4 lg:gap-x-8">
          {/* Mobile vertical line */}
          <span className="absolute bottom-10 left-8 top-10 w-px bg-gradient-to-b from-vmgold via-slate-300 to-slate-200 sm:left-10 md:hidden" />
          {/* Desktop horizontal line */}
          <span className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-vmgold via-slate-300 to-vmgold lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="group relative flex items-start gap-5 sm:gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B1E33] text-vmgold shadow-xl ring-4 ring-[#F6F8FB] transition-all duration-300 group-hover:scale-110 group-hover:bg-vmgold group-hover:text-[#0B1E33] sm:h-20 sm:w-20 lg:h-24 lg:w-24 lg:ring-8">
                    <Icon className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11" />
                  </span>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-vmgold text-xs font-extrabold text-[#0B1E33] ring-2 ring-[#F6F8FB] transition-colors duration-300 group-hover:bg-[#0B1E33] group-hover:text-vmgold sm:h-8 sm:w-8 sm:text-sm lg:h-9 lg:w-9 lg:text-base">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative min-w-0 flex-1 lg:mt-8 lg:flex-none">
                  <span className="pointer-events-none absolute -top-4 left-0 select-none text-7xl font-extrabold leading-none text-slate-200/70 sm:text-8xl lg:-top-10 lg:left-1/2 lg:-translate-x-1/2 lg:text-9xl">
                    0{index + 1}
                  </span>
                  <div className="relative">
                    <h3 className="text-xl font-extrabold text-[#0B1E33] transition-colors duration-300 group-hover:text-[#B88219] sm:text-2xl lg:text-3xl">
                      {step.title}
                    </h3>
                    <span className="mb-3 mt-3 block h-1 w-10 rounded-full bg-vmgold transition-all duration-300 group-hover:w-20 lg:mx-auto" />
                    <p className="text-base leading-relaxed text-slate-600 lg:mx-auto lg:max-w-[260px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}