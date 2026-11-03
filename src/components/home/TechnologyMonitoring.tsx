import { Cpu, Activity, Video, Radio } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Video,
    title: "CCTV Video Wall",
    description: "Live multi-camera site surveillance and incident review.",
  },
  {
    icon: Activity,
    title: "Site Monitoring",
    description: "Gate logs, intrusion sensor checks and patrol verification.",
  },
  {
    icon: Cpu,
    title: "Access Control",
    description: "Access management, entry records and visitor tracking.",
  },
  {
    icon: Radio,
    title: "Rapid Dispatch",
    description: "Direct wireless radio communication with site supervisors.",
  },
];

export function TechnologyMonitoring() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 border-t border-slate-200">
      <div className="mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-12">
       <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-vmgold" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#B88219]">
                Electronic Vigilance
              </p>
            </div>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#0B1E33] md:text-4xl">
              24/7 Command &amp; Control
              <span className="block text-vmgold">Operations</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              Our central operations monitoring desk coordinates CCTV surveillance,
              electronic access monitoring and supervisor patrol checkpoints to
              support real-time situational awareness.
            </p>

            {/* Feature list: no cards, just lines */}
            <div className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group relative border-t border-slate-200 py-4 transition-colors hover:border-vmgold"
                  >
                    <span className="absolute -top-px left-0 h-[2px] w-0 bg-vmgold transition-all duration-300 group-hover:w-full" />

                    <div className="flex items-center gap-3">
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="shrink-0 text-vmgold transition-transform duration-300 group-hover:scale-110"
                      />
                      <h3 className="text-base font-bold text-[#0B1E33]">
                        {feature.title}
                      </h3>
                      <span className="ml-auto text-xs font-bold tracking-widest text-slate-300 transition-colors group-hover:text-vmgold">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-1.5 pl-[34px] text-xs leading-6 text-slate-600 md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Gold corner accents */}
            <span className="pointer-events-none absolute -left-2 -top-2 h-12 w-12 rounded-tl-2xl border-l-4 border-t-4 border-vmgold" />
            <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-2xl border-b-4 border-r-4 border-vmgold" />

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
              {/* Full image, natural ratio, nothing cropped or covered */}
              <Image
                src="/images/gallery/command_center.jpg"
                alt="VM SQUARE command and control center"
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full"
              />

              {/* Caption bar below the image */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t-4 border-vmgold bg-white px-4 py-3 sm:px-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#B88219]">
                    Security Operations
                  </p>
                  <h3 className="text-base font-extrabold text-[#0B1E33] sm:text-lg">
                    Always Alert. Always Prepared.
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-[#0B1E33] sm:text-xs">
                    COMMAND MONITORING
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}