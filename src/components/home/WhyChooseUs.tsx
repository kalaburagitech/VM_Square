import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Video,
  Settings,
  Users,
  Handshake,
  Shield,
  Leaf,
  Headphones,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trained Manpower",
    description: "Skilled, disciplined and background-verified staff.",
  },
  {
    icon: Video,
    title: "Advanced Surveillance",
    description: "24/7 monitoring with modern technology.",
  },
  {
    icon: Settings,
    title: "Technology Driven",
    description: "Smart systems for real-time vigilance.",
  },
  {
    icon: Users,
    title: "Customized Solutions",
    description: "Tailored security for every industry & site.",
  },
  {
    icon: Handshake,
    title: "Reliable & Responsive",
    description: "Quick action when it matters most.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Protecting people, assets and reputation.",
  },
  {
    icon: Leaf,
    title: "Community Focused",
    description: "Building safer environments together.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here, whenever you need us.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-10 md:py-12 text-[#0B1E33]">
      <div className="container mx-auto px-4 md:px-6">

        <div className="relative min-h-[420px] overflow-hidden rounded-2xl md:rounded-3xl border border-vmgold/40 shadow-[0_20px_60px_-15px_rgba(11,30,51,0.25)] bg-white">

          {/* Background Image (kept clear and bright) */}
          <Image
            src="/images/why_choose_us_banner.jpg"
            alt="VM SQUARE Field Security Supervisor on site patrol"
            fill
            className="object-cover object-[20%_center] sm:object-[20%_center] md:object-[16%_center] lg:object-[15%_center]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
          />

          {/* Overlay: mobile = top-to-bottom fade, desktop = photo clear on left, white behind text on right */}
          <div
            className="
              absolute inset-0 pointer-events-none
              bg-gradient-to-b from-white/50 via-white/90 to-white
              md:bg-gradient-to-r md:from-transparent md:from-20% md:via-white/85 md:via-55% md:to-white md:to-100%
            "
          />

          {/* Main content */}
          <div className="relative z-10 flex min-h-[420px] flex-col justify-center">

            {/* Right content area */}
            <div className="ml-auto w-full max-w-[880px] px-6 py-8 md:px-10 lg:px-12">

              {/* Heading */}
              <div className="mb-5 text-center lg:text-left">

                <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start">
                  <span className="h-[2px] w-8 bg-vmgold" />
                  <span className="text-xs font-bold tracking-[0.25em] text-vmgold uppercase">
                    Why Choose VM SQUARE
                  </span>
                  <span className="h-[2px] w-8 bg-vmgold" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-[#0B1E33]">
                  Your Safety, <br />
                  <span className="text-vmgold">Our Priority</span>
                </h2>

                <p className="mx-auto mt-4 max-w-[620px] text-xs sm:text-sm leading-relaxed text-slate-700 lg:mx-0">
                  Disciplined security officers, rigorous background verification, and technology-driven supervision engineered for corporate towers, industrial estates, and gated townships across Karnataka.
                </p>

              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-3.5">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="
                        group
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        p-3.5
                        text-center
                        shadow-md
                        shadow-slate-900/5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-vmgold
                        hover:shadow-xl
                        hover:shadow-vmgold/20
                      "
                    >
                      <div className="mb-2 flex justify-center">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-vmgold/10 transition-colors duration-300 group-hover:bg-vmgold/20">
                          <Icon
                            className="
                              h-6
                              w-6
                              text-vmgold
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                            strokeWidth={1.8}
                          />
                        </span>
                      </div>

                      <h3 className="text-xs font-bold text-[#0B1E33] md:text-sm line-clamp-1">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-tight text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <Link
                  href="/request-quote"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-vmgold
                    hover:bg-vmgold/90
                    px-6
                    py-3.5
                    text-xs
                    sm:text-sm
                    font-extrabold
                    text-vmdark
                    shadow-xl
                    transition-all
                    hover:scale-[1.02]
                  "
                >
                  <span>GET A CUSTOMIZED SECURITY PLAN</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}