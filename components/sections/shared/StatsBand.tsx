"use client";

import Container from "@/components/ui/Container";
import { STATS } from "@/data/stats";
import { useEffect, useState } from "react";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return count;
};

const StatItemCard = ({
  value,
  suffix,
  label,
  icon: Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: any;
}) => {
  const count = useCountUp(value, 2000);

  return (
    <div className="group relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl">
      <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute right-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>

      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div className="flex size-10 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400">
          <Icon className="size-5" />
        </div>
        <span className="font-mono text-[10px] uppercase text-slate-500">
          LIVE METRIC
        </span>
      </div>

      <div className="mt-4">
        <h3 className="font-mono text-3xl font-extrabold text-white sm:text-4xl">
          {count.toLocaleString()}
          {suffix}
        </h3>
        <p className="mt-1.5 font-mono text-xs uppercase tracking-wide text-slate-400">
          {label}
        </p>
      </div>
    </div>
  );
};

export const StatsBand = () => {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-16 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatItemCard key={`stat-${i}`} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsBand;
