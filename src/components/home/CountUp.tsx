"use client";

import { useLayoutEffect, useRef } from "react";

const DURATION_MS = 2000;

// Counts from 0 up to the stat's number the first time it scrolls into view.
// "800+" counts to 800 keeping "+", "24/7" counts to 24 keeping "/7".
// The server-rendered HTML holds the final value, so crawlers and no-JS visitors see real figures.
export function CountUp({ value }: { value: string }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  // Layout effect: the reset to 0 happens before the browser paints, so the final value never flashes
  useLayoutEffect(() => {
    const element = numberRef.current;
    const match = value.match(/^(\d+)(.*)$/);
    if (!element || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = Number(match[1]);
    const suffix = match[2];
    const show = (n: number) => {
      element.textContent = `${n}${suffix}`;
    };

    let frame = 0;
    show(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          show(Math.round((1 - Math.pow(1 - progress, 3)) * target)); // ease-out cubic
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      show(target);
    };
  }, [value]);

  return (
    <>
      <span ref={numberRef} aria-hidden="true">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
