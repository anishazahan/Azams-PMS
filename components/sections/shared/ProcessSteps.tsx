"use client";

import Container from "@/components/ui/Container";
import IconBadge from "@/components/ui/IconBadge";
import { PROCESS_STEPS } from "@/data/process";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, ArrowRight } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ProcessSteps = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements =
        sectionRef.current.querySelectorAll(".process-anim-item");
      if (elements.length === 0) return;

      gsap.from(elements, {
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100"
    >
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient Radial Accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[35rem] -translate-x-1/2 -translate-y-1/2 bg-sky-600/10 blur-[180px]" />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="process-anim-item mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
              <Activity className="size-3.5 text-sky-400" />
              <span>ONBOARDING & DEPLOYMENT PROTOCOL</span>
            </div>

            <h2 className="process-anim-item text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              From Technical Audit to <br />
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Accountable Operations.
              </span>
            </h2>
          </div>

          <p className="process-anim-item max-w-md font-mono text-sm leading-relaxed text-slate-400">
            {"// STRUCTURED TRANSITION: "}A calibrated onboarding workflow that
            deploys trained staff, configures IoT monitoring, and initiates SLAs
            within weeks.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Laser Line for Desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-6 right-6 top-10 hidden h-[1px] bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0 lg:block"
          />

          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step || `step-${i}`}
              className="process-anim-item group relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl"
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
                {/* Step Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-500/60 group-hover:bg-sky-500/20">
                    <IconBadge icon={step.icon} />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
                    PHASE {"//"} {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-sky-300">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>

              {/* Step Footer Indicator */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 font-mono text-[10px] text-slate-500">
                <span>DEPLOYMENT STAGE</span>
                <ArrowRight className="size-3.5 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-sky-400" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
