"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  ChevronDown,
  ChevronUp,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useRef, useState } from "react";

import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: "dlf-cybercity",
    author: "Vikramjit Sharma",
    role: "VP - Infrastructure & Asset Mgmt",
    company: "DLF CyberCity Towers",
    propertyType: "Grade-A Commercial Park",
    location: "Gurugram, NCR",
    avatarInitial: "VS",
    rating: 5,
    auditScore: "99.8% SLA Score",
    quote:
      "Amaze PMS completely transformed our facility operations across 2.4 Million Sq. Ft. Their MEP predictive maintenance reduced our chiller downtime to virtually zero during peak summer months.",
    keyMetrics: [
      { label: "Chiller Downtime", value: "0.00%" },
      { label: "Energy Optimization", value: "-14.2%" },
      { label: "Audit Rating", value: "A+ Grade" },
    ],
    tagColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "godrej-properties",
    author: "Ananya Deshmukh",
    role: "Head of Facility Operations",
    company: "Godrej Living",
    propertyType: "Luxury Residential Township",
    location: "Mumbai, Maharashtra",
    avatarInitial: "AD",
    rating: 5,
    auditScore: "4.95/5.0 Resident CSAT",
    quote:
      "Managing 200+ security personnel and mechanized housekeeping across a 180-acre estate requires discipline. Amaze PMS's digital shift tracking gave us complete visibility and accountability.",
    keyMetrics: [
      { label: "Resident CSAT", value: "4.95 / 5" },
      { label: "Gate Response", value: "< 45 Secs" },
      { label: "Staff Retention", value: "94%" },
    ],
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "embassy-park",
    author: "Rajesh K. Nair",
    role: "Director - Corporate Real Estate",
    company: "Embassy TechVillage",
    propertyType: "Enterprise IT Campus",
    location: "Bengaluru, Karnataka",
    avatarInitial: "RN",
    rating: 5,
    auditScore: "100% Statutory Compliant",
    quote:
      "When hosting Fortune 500 tech clients, facility compliance is non-negotiable. Amaze PMS provides instant digital access to every labor, PF, and safety audit document without delay.",
    keyMetrics: [
      { label: "Statutory Audit", value: "100% Compliant" },
      { label: "Helpdesk SLA", value: "99.4%" },
      { label: "Daily Footfall", value: "28K People" },
    ],
    tagColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const currentTestimonial = TESTIMONIALS[activeIndex];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(
        ".testimonial-anim-item",
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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100"
    >
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-0 top-1/2 size-[32rem] -translate-y-1/2 bg-sky-600/10 blur-[170px]" />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <div className="testimonial-anim-item mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Quote className="size-3.5 text-sky-400" />
            <span>EXECUTIVE ENDORSEMENTS & SLA AUDITS</span>
          </div>

          <h2 className="testimonial-anim-item text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Validated by Enterprise <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Infrastructure Leaders.
            </span>
          </h2>

          <p className="testimonial-anim-item mt-4 font-mono text-sm leading-relaxed text-slate-400">
            // Real-world performance feedback from directors and vice
            presidents managing India’s largest commercial real estate assets.
          </p>
        </div>

        {/* Layout: Vertical Deck Selector + Telemetry Inspector */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Vertical Interactive Wheel Controls */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span className="font-mono text-xs text-slate-400 uppercase">
                // EXECUTIVE TESTIMONIAL DECK
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="rounded-sm border border-slate-800 bg-slate-900 p-1.5 text-slate-300 hover:border-slate-700 hover:text-white"
                  aria-label="Previous Testimonial"
                >
                  <ChevronUp className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-sm border border-slate-800 bg-slate-900 p-1.5 text-slate-300 hover:border-slate-700 hover:text-white"
                  aria-label="Next Testimonial"
                >
                  <ChevronDown className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {TESTIMONIALS.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative flex items-center justify-between rounded-sm border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-sky-500/50 bg-slate-900/90 text-white shadow-lg"
                        : "border-slate-800/80 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTestimonialBar"
                        className="absolute bottom-0 left-0 top-0 w-1 bg-sky-400"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}

                    <div className="flex items-center gap-3.5 pl-1">
                      <div
                        className={`flex size-9 items-center justify-center rounded-sm font-mono text-xs font-bold ${isActive ? "bg-sky-400 text-slate-950" : "bg-slate-800 text-slate-300"}`}
                      >
                        {item.avatarInitial}
                      </div>
                      <div>
                        <span className="block text-sm font-semibold tracking-wide text-white">
                          {item.author}
                        </span>
                        <span className="block font-mono text-[10px] text-slate-400">
                          {item.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 font-mono text-xs text-sky-400">
                      <Star className="size-3 fill-sky-400 text-sky-400" />
                      <span>{item.rating}.0</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sharp Telemetry Quote Card */}
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
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                {/* Header Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <span
                    className={`rounded-sm border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${currentTestimonial.tagColor}`}
                  >
                    {currentTestimonial.auditScore}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <Building2 className="size-3.5 text-sky-400" />
                    <span>{currentTestimonial.location}</span>
                  </div>
                </div>

                {/* Main Quote Block */}
                <blockquote className="relative">
                  <p className="text-base font-medium leading-relaxed text-slate-200 sm:text-lg">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {currentTestimonial.author}
                    </h4>
                    <p className="font-mono text-xs text-slate-400">
                      {currentTestimonial.role} —{" "}
                      <span className="text-slate-300">
                        {currentTestimonial.company}
                      </span>
                    </p>
                  </div>
                </div>

                {/* SLA Verified Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 rounded-sm border border-slate-800/80 bg-slate-950/80 p-4">
                  {currentTestimonial.keyMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border-r border-slate-800/80 pr-2 last:border-none"
                    >
                      <p className="font-mono text-lg font-bold text-white sm:text-xl">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase text-slate-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <ShieldCheck className="size-4 text-emerald-400" />
                  <span>
                    Audit certified by Amaze PMS Quality Assurance Division
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
