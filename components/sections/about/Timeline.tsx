"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { TIMELINE } from "@/data/timeline";
import { Clock } from "lucide-react";

export const Timeline = () => {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Clock className="size-3.5 text-sky-400" />
            <span>OPERATIONAL JOURNEY</span>
          </div>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Two Decades of Compounding Trust.
          </h2>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative mx-auto max-w-4xl">
          {/* Laser Center Line */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[11px] top-2 w-[2px] bg-gradient-to-b from-sky-500 via-slate-800 to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />

          <ol className="flex flex-col gap-12">
            {TIMELINE.map((item, i) => (
              <li key={item.year} className="relative">
                <Reveal
                  delay={i * 0.08}
                  className={`flex flex-col gap-2 pl-10 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  <div className="group relative rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl">
                    <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[8px] text-sky-500/30">
                      +
                    </div>

                    <span className="font-mono text-xl font-extrabold text-sky-400">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-white transition-colors group-hover:text-sky-300">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </Reveal>

                {/* Glowing Node Marker */}
                <span
                  aria-hidden="true"
                  className="absolute left-[3px] top-6 size-4 rounded-full border-2 border-sky-400 bg-slate-950 shadow-[0_0_10px_#38bdf8] sm:left-1/2 sm:-translate-x-1/2"
                />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
