"use client";

import Container from "@/components/ui/Container";
import { CAREER_BENEFITS } from "@/data/careerBenefits";
import { Award, Check } from "lucide-react";

export const CareerBenefits = () => {
  return (
    <section className="relative w-full overflow-hidden  border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Award className="size-3.5 text-sky-400" />
            <span>WHY WORK AT AMAZE</span>
          </div>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Grow With an Operation, <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Not Just a Job.
            </span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAREER_BENEFITS.map((benefit, i) => {
            const IconComponent = benefit.icon || Check;

            return (
              <div
                key={benefit.title}
                className="group relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl min-h-[240px]"
              >
                {/* Tactical Corner Crosshairs */}
                <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                  +
                </div>
                <div className="pointer-events-none absolute right-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                  +
                </div>
                <div className="pointer-events-none absolute bottom-1.5 left-1.5 font-mono text-[9px] text-sky-500/40">
                  +
                </div>
                <div className="pointer-events-none absolute bottom-1.5 right-1.5 font-mono text-[9px] text-sky-500/40">
                  +
                </div>

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-500/60 group-hover:bg-sky-500/20">
                      {typeof IconComponent === "function" ? (
                        <IconComponent className="size-5" />
                      ) : (
                        <Check className="size-5" />
                      )}
                    </div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                      BENEFIT // 0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white transition-colors group-hover:text-sky-300">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-3 font-mono text-[10px] text-slate-500">
                  STANDARD GOVERNANCE GUARANTEED
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CareerBenefits;
