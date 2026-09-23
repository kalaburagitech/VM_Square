"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Video,
  Settings,
  Users,
  Handshake,
  Shield,
  Leaf,
  Headphones,
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
    <section className="w-full bg-slate-950 py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1660px] px-0 md:px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[500px] overflow-hidden rounded-none md:rounded-[24px] border border-amber-500/30 shadow-2xl"
        >

          {/* Background Image */}
          <img
            src="/images/why_choose_us_banner.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark overlay on right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950/75" />

          {/* Main content */}
          <div className="relative z-10 flex min-h-[500px] flex-col">

            {/* Right content area */}
            <div className="ml-auto w-full max-w-[900px] px-6 py-10 md:px-10 lg:px-14">

              {/* Heading */}
              <div className="mb-7 text-center lg:text-left">

                <div className="mb-3 flex items-center justify-center gap-4 lg:justify-start">
                  <span className="h-[2px] w-12 bg-amber-500" />

                  <span className="text-xs font-bold tracking-[0.3em] text-amber-400">
                    WHY CHOOSE US
                  </span>

                  <span className="h-[2px] w-12 bg-amber-500" />
                </div>

                <h2 className="font-serif text-4xl font-bold uppercase leading-none text-white md:text-5xl lg:text-6xl">
                  Your Safety
                </h2>

                <h2 className="font-serif text-4xl font-bold uppercase leading-none text-amber-400 md:text-5xl lg:text-6xl">
                  Our Priority
                </h2>

                <p className="mx-auto mt-4 max-w-[600px] text-sm leading-relaxed text-slate-200 lg:mx-0">
                  Advanced security solutions, trusted manpower
                  <br className="hidden md:block" />
                  and technology-driven vigilance for a safer tomorrow.
                </p>

              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                      }}
                      className="
                        group
                        rounded-xl
                        border
                        border-cyan-400/40
                        bg-slate-900/60
                        p-3
                        text-center
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-amber-400
                        hover:bg-slate-900/80
                        hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]
                        md:p-4
                      "
                    >

                      {/* Icon */}
                      <div className="mb-2 flex justify-center">
                        <Icon
                          className="
                            h-8
                            w-8
                            text-amber-400
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xs font-bold text-white md:text-sm">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1 text-[10px] leading-tight text-slate-300 md:text-[11px]">
                        {feature.description}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>
        </motion.div>

      </div>
      <div className="mt-6 flex justify-center lg:justify-start">
        <Link
          href="/request-quote"
          className="
      inline-flex
      items-center
      gap-2
      rounded-lg
      bg-amber-500
      px-6
      py-3
      text-sm
      font-extrabold
      text-slate-950
      shadow-lg
      transition-all
      hover:bg-amber-400
      hover:scale-105
    "
        >
          GET A CUSTOMIZED SECURITY PLAN
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}