"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

import { SERVICES_DATA } from "@/constants/demoData";

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<number>(0);

  const activeService = SERVICES_DATA[selectedService];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(
        ".service-header-item",
      );
      if (elements.length === 0) return;

      gsap.from(elements, {
        y: 30,
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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="pointer-events-none absolute right-0 top-1/2 size-[30rem] -translate-y-1/2 bg-sky-600/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="service-header-item mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
              <span>FACILITY OPERATIONS CAPABILITY MATRIX</span>
            </div>

            <h2 className="service-header-item text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Engineered Execution Across <br />
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Every Property Layer.
              </span>
            </h2>
          </div>

          <p className="service-header-item max-w-md font-mono text-sm leading-relaxed text-slate-400">
            {"// SINGLE-POINT ACCOUNTABILITY: "}From technical MEP oversight to
            specialized sanitation, we run integrated operations backed by 23+
            years of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-span-5">
            {SERVICES_DATA.map((service, idx) => {
              const Icon = service.icon;
              const isActive = selectedService === idx;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(idx)}
                  className={`group relative flex items-center justify-between rounded-sm border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-sky-500/50 bg-slate-900/90 text-white shadow-lg"
                      : "border-slate-800/80 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:bg-slate-900/40 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeServiceIndicator"
                      className="absolute bottom-0 left-0 top-0 w-1 bg-sky-400 block"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}

                  <span className="flex items-center gap-3.5 pl-1">
                    <span
                      className={`rounded-sm p-2 transition-colors flex ${isActive ? "bg-sky-500/20 text-sky-400" : "bg-slate-800/50 text-slate-400 group-hover:text-slate-200"}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="block text-left">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {service.category}
                      </span>
                      <span className="block text-sm font-semibold tracking-wide">
                        {service.title}
                      </span>
                    </span>
                  </span>

                  <ChevronRight
                    className={`size-4 transition-transform duration-300 ${isActive ? "translate-x-1 text-sky-400" : "text-slate-600 group-hover:text-slate-400"}`}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-7">
            <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <span
                    className={`rounded-sm border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${activeService.tagColor}`}
                  >
                    {activeService.category} {"// SPECIFICATIONS"}
                  </span>
                  <span className="font-mono text-xs text-slate-500 uppercase">
                    AMAZE PMS STD-2026
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {activeService.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {activeService.summary}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 rounded-sm border border-slate-800/80 bg-slate-950/80 p-4">
                  {activeService.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-r border-slate-800/80 pr-2 last:border-none"
                    >
                      <p className="font-mono text-lg font-bold text-white sm:text-xl">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">
                    {"// OPERATIONAL SCOPE"}
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {activeService.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 rounded-sm border border-slate-800/50 bg-slate-950/40 p-2.5 text-xs text-slate-300"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-sky-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-5">
                  <div className="font-mono text-xs text-slate-400">
                    Need customized SLAs for your property?
                  </div>
                  <Button
                    size="sm"
                    className="rounded-sm bg-sky-400 font-semibold text-slate-950 hover:bg-sky-300"
                  >
                    <span>Configure Service SLA</span>
                    <ArrowUpRight className="ml-1 size-3.5" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
