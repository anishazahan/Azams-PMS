"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

import { CLIENT_LOGOS, CASE_STUDIES } from "@/constants/demoData";

export const ClientShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCase, setActiveCase] = useState<number>(0);

  const currentCase = CASE_STUDIES[activeCase];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(
        ".showcase-anim-item",
      );
      if (elements.length === 0) return;

      gsap.from(elements, {
        y: 35,
        opacity: 0,
        stagger: 0.12,
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
      id="clients"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100"
    >
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute right-0 top-1/3 size-[30rem] bg-sky-600/10 blur-[160px]" />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <div className="showcase-anim-item mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Award className="size-3.5 text-sky-400" />
            <span>ENTERPRISE PROOF & CASE STUDIES</span>
          </div>

          <h2 className="showcase-anim-item text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Trusted by India’s Premier <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Real Estate & Corporate Giants.
            </span>
          </h2>

          <p className="showcase-anim-item mt-4 font-mono text-sm leading-relaxed text-slate-400">
            {"// Over 23+ years of continuous service excellence across 20M+ sq. ft. of Grade-A commercial and residential infrastructure."}
          </p>
        </div>
      </Container>

      {/* INFINITE DUAL-DIRECTION MARQUEE */}
      <div className="showcase-anim-item relative mb-20 w-full overflow-hidden border-y border-slate-800/80 bg-slate-900/40 py-4 backdrop-blur-md">
        {/* Left/Right Gradient Mask for Marquee */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

        {/* Marquee Track 1 (Left Direction) */}
        <div className="flex w-max animate-marquee gap-8">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`client-m1-${idx}`}
              className="flex items-center gap-2 rounded-sm border border-slate-800/80 bg-slate-950/80 px-5 py-2.5 font-mono text-xs font-semibold text-slate-300 backdrop-blur-sm"
            >
              <Building2 className="size-3.5 text-sky-400" />
              <span>{client.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE CASE STUDY SECTION */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Case Selector Buttons */}
          <div className="flex flex-col gap-2.5 lg:col-span-4">
            {CASE_STUDIES.map((cs, idx) => {
              const isActive = activeCase === idx;
              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => setActiveCase(idx)}
                  className={`group relative flex items-center justify-between rounded-sm border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-sky-500/50 bg-slate-900/90 text-white shadow-lg"
                      : "border-slate-800/80 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCaseIndicator"
                      className="absolute bottom-0 left-0 top-0 w-1 bg-sky-400"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                      {cs.category}
                    </span>
                    <span className="text-sm font-semibold tracking-wide">
                      {cs.location}
                    </span>
                  </div>
                  <TrendingUp
                    className={`size-4 transition-transform duration-300 ${isActive ? "text-sky-400" : "text-slate-600"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Case Details Display */}
          <div className="relative rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-8">
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
                key={currentCase.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <span
                    className={`rounded-sm border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${currentCase.tagColor}`}
                  >
                    {currentCase.category} {"// CASE STUDY"}
                  </span>
                  <span className="font-mono text-xs text-slate-500 uppercase">
                    {currentCase.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {currentCase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {currentCase.summary}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 rounded-sm border border-slate-800/80 bg-slate-950/80 p-4">
                  {currentCase.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="border-r border-slate-800/80 pr-2 last:border-none"
                    >
                      <p className="font-mono text-lg font-bold text-white sm:text-xl">
                        {m.value}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase text-slate-400">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-5">
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    <span>Verified Client SLA Audit Verified</span>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-sm bg-sky-400 font-semibold text-slate-950 hover:bg-sky-300"
                  >
                    <span>Download Case Study PDF</span>
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
}
