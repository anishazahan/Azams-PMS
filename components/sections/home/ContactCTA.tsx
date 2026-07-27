"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { PROPERTY_TYPES, SQFT_RANGES } from "@/constants/demoData";

gsap.registerPlugin(ScrollTrigger);

interface ContactCTAProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}

export const ContactCTA = ({
  eyebrow = "FACILITY AUDIT CONFIGURATOR",
  title,
  description = "Request a comprehensive zero-cost technical audit of your property. Our engineering and security teams will evaluate your current MEP infrastructure, security protocols, and operational expenditures.",
}: ContactCTAProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedType, setSelectedType] = useState(PROPERTY_TYPES[0].id);
  const [selectedSize, setSelectedSize] = useState(SQFT_RANGES[1]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(".cta-anim-item");
      if (elements.length === 0) return;

      gsap.from(elements, {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  // Default title fallback if no title prop is passed
  const defaultTitle = (
    <>
      Ready to upgrade your <br className="hidden sm:inline" />
      <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
        facility SLA baseline?
      </span>
    </>
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden border-t border-slate-800 bg-slate-950 py-12 sm:py-20 md:py-32 text-slate-100"
    >
      {/* Deep Laser Gradient Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[20rem] sm:size-[40rem] -translate-x-1/2 -translate-y-1/2 bg-sky-600/10 blur-[120px] sm:blur-[180px]" />

      <Container className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        {/* Conversion Hub Layout */}
        <div className="relative rounded-sm border border-slate-800 bg-slate-900/60 p-4 sm:p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          {/* Tactical Corner Crosshairs */}
          <div className="pointer-events-none absolute left-2 top-2 font-mono text-[9px] text-sky-500/40 sm:left-3 sm:top-3 sm:text-[10px]">
            +
          </div>
          <div className="pointer-events-none absolute right-2 top-2 font-mono text-[9px] text-sky-500/40 sm:right-3 sm:top-3 sm:text-[10px]">
            +
          </div>
          <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[9px] text-sky-500/40 sm:bottom-3 sm:left-3 sm:text-[10px]">
            +
          </div>
          <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[9px] text-sky-500/40 sm:bottom-3 sm:right-3 sm:text-[10px]">
            +
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content: Dynamic Value Proposition */}
            <div className="flex flex-col justify-center">
              <div className="cta-anim-item mb-4 sm:mb-5 inline-flex w-fit items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-sky-400 backdrop-blur-md">
                <Calculator className="size-3.5 shrink-0" />
                <span className="truncate">{eyebrow}</span>
              </div>

              <h2 className="cta-anim-item text-balance text-2xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title || defaultTitle}
              </h2>

              <p className="cta-anim-item mt-3 sm:mt-5 text-balance text-xs sm:text-sm leading-relaxed text-slate-300">
                {description}
              </p>

              <div className="cta-anim-item mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 border-t border-slate-800/80 pt-5 sm:pt-6">
                <div className="flex items-center gap-2.5 sm:gap-3 font-mono text-[11px] sm:text-xs text-slate-400">
                  <ShieldCheck className="size-4 shrink-0 text-emerald-400" />
                  <span>ISO 9001:2015 & OHSAS Certified Operations</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 font-mono text-[11px] sm:text-xs text-slate-400">
                  <ShieldCheck className="size-4 shrink-0 text-emerald-400" />
                  <span>Guaranteed SLA Uptime Metrics</span>
                </div>
              </div>
            </div>

            {/* Right Content: Interactive Form Configurator */}
            <div className="cta-anim-item relative rounded-sm border border-slate-800/80 bg-slate-950/80 p-4 sm:p-6 md:p-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 sm:gap-6"
              >
                {/* Property Type Selection (Stacked on Mobile, 3 cols on sm+) */}
                <div>
                  <label className="mb-2.5 block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slate-400">
                    {"// Select Property Asset Class"}
                  </label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {PROPERTY_TYPES.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`flex min-h-[44px] items-center justify-start sm:justify-center gap-2.5 sm:flex-col sm:gap-2 rounded-sm border p-2.5 sm:p-3 transition-all duration-300 outline-none ${
                            isSelected
                              ? "border-sky-500 bg-sky-500/10 text-sky-400"
                              : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          <Icon className="size-4 shrink-0" />
                          <span className="truncate text-left sm:text-center font-mono text-[10px] uppercase leading-tight">
                            {type.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sq Ft Selection */}
                <div>
                  <label className="mb-2.5 block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slate-400">
                    {"// Estimated Coverage Area"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SQFT_RANGES.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setSelectedSize(range)}
                        className={`min-h-[38px] flex-1 sm:flex-initial rounded-sm border px-3 py-1.5 font-mono text-[10px] sm:text-[11px] transition-all duration-300 outline-none ${
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
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Corporate Name"
                    className="w-full rounded-sm border border-slate-800 bg-slate-900/50 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-sky-500 focus:bg-slate-900 focus:ring-1 focus:ring-sky-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    className="w-full rounded-sm border border-slate-800 bg-slate-900/50 px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-sky-500 focus:bg-slate-900 focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="tactical"
                  className="min-h-[46px] w-full overflow-hidden"
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
                      <motion.span
                        key="submit"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-xs sm:text-sm font-semibold">
                          Initiate Technical Audit
                        </span>
                        <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
