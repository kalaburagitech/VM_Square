interface StatItem {
  id: string;
  value: string;
  title: string;
}

const defaultStats: StatItem[] = [
  { id: "1", value: "1,500+", title: "Trained Personnel" },
  { id: "2", value: "500+", title: "Sites Secured" },
  { id: "3", value: "24/7", title: "Active Operations" },
  { id: "4", value: "15+", title: "Years Experience" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {defaultStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-vmnavy mb-2 tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-semibold uppercase tracking-wider">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
