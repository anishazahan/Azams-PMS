"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Building2,
  Calculator,
  Factory,
  Home,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";

import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

import { PROPERTY_TYPES, SQFT_RANGES } from "@/constants/demoData";

export const ContactCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedType, setSelectedType] = useState(PROPERTY_TYPES[0].id);
  const [selectedSize, setSelectedSize] = useState(SQFT_RANGES[1]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".cta-anim-item", {
        y: 40,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for the assignment
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden border-t border-slate-800 bg-slate-950 py-32 text-slate-100"
    >
      {/* Deep Laser Gradient Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 bg-sky-600/10 blur-[180px]" />

      <Container className="relative z-10 mx-auto max-w-5xl">
        {/* Conversion Hub Layout */}
        <div className="relative rounded-sm border border-slate-800 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute left-3 top-3 font-mono text-[10px] text-sky-500/40">
            +
          </div>
          <div className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] text-sky-500/40">
            +
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-sky-500/40">
            +
          </div>
          <div className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-sky-500/40">
            +
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Content: Value Proposition */}
            <div className="flex flex-col justify-center">
              <div className="cta-anim-item mb-5 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md w-fit">
                <Calculator className="size-3.5" />
                <span>FACILITY AUDIT CONFIGURATOR</span>
              </div>

              <h2 className="cta-anim-item text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Ready to upgrade your <br />
                <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  facility SLA baseline?
                </span>
              </h2>

              <p className="cta-anim-item mt-5 text-balance text-sm leading-relaxed text-slate-300">
                Request a comprehensive zero-cost technical audit of your
                property. Our engineering and security teams will evaluate your
                current MEP infrastructure, security protocols, and operational
                expenditures.
              </p>

              <div className="cta-anim-item mt-8 flex flex-col gap-4 border-t border-slate-800/80 pt-6">
                <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                  <ShieldCheck className="size-4 text-emerald-400" />
                  <span>ISO 9001:2015 & OHSAS Certified Operations</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                  <ShieldCheck className="size-4 text-emerald-400" />
                  <span>Guaranteed SLA Uptime Metrics</span>
                </div>
              </div>
            </div>

            {/* Right Content: Interactive Form Configurator */}
            <div className="cta-anim-item relative rounded-sm border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Property Type Selection */}
                <div>
                  <label className="mb-3 block font-mono text-xs uppercase tracking-wider text-slate-400">
                    {"// Select Property Asset Class"}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {PROPERTY_TYPES.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`flex flex-col items-center justify-center gap-2 rounded-sm border p-3 transition-all duration-300 ${
                            isSelected
                              ? "border-sky-500 bg-sky-500/10 text-sky-400"
                              : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          <Icon className="size-4" />
                          <span className="text-center font-mono text-[10px] uppercase leading-tight">
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sq Ft Selection */}
                <div>
                  <label className="mb-3 block font-mono text-xs uppercase tracking-wider text-slate-400">
                    {"// Estimated Coverage Area"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SQFT_RANGES.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setSelectedSize(range)}
                        className={`rounded-sm border px-3 py-1.5 font-mono text-[11px] transition-all duration-300 ${
                          selectedSize === range
                            ? "border-sky-500 bg-sky-500/10 text-sky-400"
                            : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Corporate Name"
                    className="w-full rounded-sm border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-sky-500 focus:bg-slate-900 focus:ring-1 focus:ring-sky-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    className="w-full rounded-sm border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-sky-500 focus:bg-slate-900 focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-sm bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-sky-300 disabled:opacity-70"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="font-mono text-xs uppercase"
                      >
                        Processing Request...
                      </motion.span>
                    ) : (
                      <motion.div
                        key="submit"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <span>Initiate Technical Audit</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
