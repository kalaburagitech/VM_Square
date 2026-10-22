import { CountUp } from "@/components/home/CountUp";

interface StatItem {
  id: string;
  value: string;
  title: string;
}

// Figures confirmed by the company (October 2026)
const defaultStats: StatItem[] = [
  { id: "1", value: "800+", title: "Trained Personnel" },
  { id: "2", value: "50+", title: "Sites Secured" },
  { id: "3", value: "24/7", title: "Active Operations" },
];

export function StatsSection() {
  return (
    <section className="py-8 md:py-10 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 gap-4 md:gap-12 text-center max-w-4xl mx-auto">
          {defaultStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center p-2 sm:p-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-vmnavy mb-2 tracking-tight tabular-nums">
                <CountUp value={stat.value} />
              </div>
              <p className="text-[11px] sm:text-sm md:text-base text-slate-600 font-semibold uppercase tracking-wider">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
