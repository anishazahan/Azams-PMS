"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  Bug, 
  Trees, 
  Waves, 
  ArrowUpRight, 
  Check, 
  ChevronRight
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: "mep",
    title: "MEP & Technical Operations",
    category: "ENGINEERING",
    icon: Wrench,
    summary: "Comprehensive mechanical, electrical, and plumbing engineering designed for zero operational downtime in high-density facilities.",
    stats: [
      { label: "SLA Compliance", value: "99.9%" },
      { label: "Response Time", value: "< 15 Mins" },
      { label: "Certified Engineers", value: "1,200+" },
    ],
    features: [
      "24/7 HVAC & Chiller Plant Management",
      "High-Voltage Electrical Grid & DG Set Audits",
      "Automated Water Treatment & Plumbing Diagnostics",
      "Predictive Maintenance via IoT Sensor Logging"
    ],
    tagColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "security",
    title: "Smart Security & Guarding",
    category: "PROTECTION",
    icon: ShieldCheck,
    summary: "Multi-layered physical security combined with digital visitor management systems and emergency protocols.",
    stats: [
      { label: "Active Guards", value: "5,000+" },
      { label: "Incident Rate", value: "< 0.01%" },
      { label: "Coverage", value: "24/7/365" },
    ],
    features: [
      "Ex-Servicemen & Trained Guard Deployment",
      "AI-Powered License Plate & Visitor Tracking",
      "Perimeter Surveillance & Emergency Quick Response",
      "Command Center Remote Incident Escalation"
    ],
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "housekeeping",
    title: "Precision Housekeeping",
    category: "SANITATION",
    icon: Sparkles,
    summary: "Hospitality-grade mechanized cleaning routines engineered for corporate headquarters, IT parks, and residential complexes.",
    stats: [
      { label: "Daily Sq. Ft.", value: "20M+" },
      { label: "Audit Rating", value: "4.9/5.0" },
      { label: "Eco-Chemicals", value: "100%" },
    ],
    features: [
      "Automated Floor Scrubbing & High-Reach Glazing",
      "Hospital-Grade Color-Coded Microfiber Systems",
      "Scheduled Deep Sanitization & Odor Control",
      "Waste Segregation & Green Compliance Audits"
    ],
    tagColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
  {
    id: "pest",
    title: "Eco Pest Management",
    category: "HYGIENE",
    icon: Bug,
    summary: "Scientific, non-toxic pest containment protocols targeted for commercial kitchens, server rooms, and public concourses.",
    stats: [
      { label: "Safety Rating", value: "100% Non-Toxic" },
      { label: "Compliance", value: "HACCP Approved" },
      { label: "Frequency", value: "Tailored SLAs" },
    ],
    features: [
      "Zero-Chemical Electronic Rodent Monitoring",
      "Termite & Wood Borer Eradication Guarantees",
      "Odourless Organic Gel Treatments",
      "Regular Bio-Audit Reports & Documentation"
    ],
    tagColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    id: "landscape",
    title: "Horticulture & Gardening",
    category: "ENVIRONMENT",
    icon: Trees,
    summary: "Architectural landscape management, indoor air-purifying plant installations, and automated drip irrigation systems.",
    stats: [
      { label: "Green Cover", value: "2.5M Sq. Ft." },
      { label: "Water Saved", value: "35% (Drip)" },
      { label: "Botanists", value: "85+ On-Roll" },
    ],
    features: [
      "Corporate Indoor Air Hygiene Greenery Solutions",
      "Automated Weather-Sensing Irrigation Networks",
      "Seasonal Floral Design & Lawn Turf Maintenance",
      "Soil Nutrient Diagnostics & Organic Composting"
    ],
    tagColor: "text-teal-400 border-teal-500/30 bg-teal-500/10",
  },
  {
    id: "pool",
    title: "Pool & Aquatic Care",
    category: "MAINTENANCE",
    icon: Waves,
    summary: "Precision chemical balancing, filtration overhaul, and life-safety oversight for residential and club pools.",
    stats: [
      { label: "pH Balance", value: "Automated" },
      { label: "Lifeguards", value: "Certified" },
      { label: "Clearance", value: "Daily Audits" },
    ],
    features: [
      "Automated Chlorine & pH Dosing Controllers",
      "Sand Filter Backwashing & Pump Overhauls",
      "Certified Lifeguard & Rescue Personnel Patrols",
      "Tile Scrubbing & Algae Prevention Regimens"
    ],
    tagColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<number>(0);

  const activeService = SERVICES_DATA[selectedService];

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      
      const elements = sectionRef.current.querySelectorAll(".service-header-item");
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
    { scope: sectionRef }
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
            // SINGLE-POINT ACCOUNTABILITY: From technical MEP oversight to specialized sanitation, we run integrated operations backed by 23+ years of expertise.[cite: 1]
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
                    <motion.div
                      layoutId="activeServiceIndicator"
                      className="absolute bottom-0 left-0 top-0 w-1 bg-sky-400"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}

                  <div className="flex items-center gap-3.5 pl-1">
                    <div className={`rounded-sm p-2 transition-colors ${isActive ? "bg-sky-500/20 text-sky-400" : "bg-slate-800/50 text-slate-400 group-hover:text-slate-200"}`}>
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">{service.category}</span>
                      <span className="text-sm font-semibold tracking-wide">{service.title}</span>
                    </div>
                  </div>

                  <ChevronRight className={`size-4 transition-transform duration-300 ${isActive ? "translate-x-1 text-sky-400" : "text-slate-600 group-hover:text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          <div className="relative rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-7">
            <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-sky-500/40">+</div>
            <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-sky-500/40">+</div>
            <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-sky-500/40">+</div>
            <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] text-sky-500/40">+</div>

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
                  <span className={`rounded-sm border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${activeService.tagColor}`}>
                    {activeService.category} // SPECIFICATIONS
                  </span>
                  <span className="font-mono text-xs text-slate-500 uppercase">AMAZE PMS STD-2026</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">{activeService.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {activeService.summary}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 rounded-sm border border-slate-800/80 bg-slate-950/80 p-4">
                  {activeService.stats.map((stat) => (
                    <div key={stat.label} className="border-r border-slate-800/80 pr-2 last:border-none">
                      <p className="font-mono text-lg font-bold text-white sm:text-xl">{stat.value}</p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">// OPERATIONAL SCOPE</h4>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {activeService.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 rounded-sm border border-slate-800/50 bg-slate-950/40 p-2.5 text-xs text-slate-300">
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
                  <Button size="sm" className="rounded-sm bg-sky-400 font-semibold text-slate-950 hover:bg-sky-300">
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
}