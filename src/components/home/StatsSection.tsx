"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  title: string;
}

const defaultStats: StatItem[] = [
  { id: "1", value: 1500, suffix: "+", title: "Trained Personnel" },
  { id: "2", value: 500, suffix: "+", title: "Sites Secured" },
  { id: "3", value: 24, suffix: "/7", title: "Active Operations" },
  { id: "4", value: 15, suffix: "+", title: "Years Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 2;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-vmnavy mb-2">
      {count}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {defaultStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center p-4">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
