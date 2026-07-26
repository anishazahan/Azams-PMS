"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ArrowUpRight,
  Building2,
  Layers,
  MapPin,
  Radio,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

import { REGIONAL_HUBS, HOTSPOTS } from "@/constants/demoData";

export const PanIndiaOps = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeView, setActiveView] = useState<"nodes" | "blueprint">("nodes");
  const [selectedHub, setSelectedHub] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<string>("hvac");

  const currentHub = REGIONAL_HUBS[selectedHub];
  const currentHotspot =
    HOTSPOTS.find((h) => h.id === activeHotspot) || HOTSPOTS[0];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(".pan-anim-item");
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
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100"
    >
      {/* Background Grid Accent */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-0 top-1/3 size-[32rem] bg-indigo-600/10 blur-[160px]" />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="pan-anim-item mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
              <MapPin className="size-3.5 text-sky-400" />
              <span>NATIONAL FOOTPRINT & INFRASTRUCTURE MATRIX</span>
            </div>

            <h2 className="pan-anim-item text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              20M+ Sq. Ft. Managed Across <br />
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Pan-India Operational Hubs.
              </span>
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="pan-anim-item flex items-center rounded-sm border border-slate-800 bg-slate-900/80 p-1.5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveView("nodes")}
              className={`flex items-center gap-2 rounded-sm px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                activeView === "nodes"
                  ? "bg-sky-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <MapPin className="size-3.5" />
              <span>Regional Hubs</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView("blueprint")}
              className={`flex items-center gap-2 rounded-sm px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                activeView === "blueprint"
                  ? "bg-sky-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Layers className="size-3.5" />
              <span>Asset Blueprint</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Container */}
        <AnimatePresence mode="wait">
          {activeView === "nodes" ? (
            /* VIEW A: Regional Hub Matrix */
            <motion.div
              key="nodes-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12"
            >
              {/* Region Selector Buttons */}
              <div className="flex flex-col gap-2.5 lg:col-span-4">
                {REGIONAL_HUBS.map((hub, idx) => {
                  const isActive = selectedHub === idx;
                  return (
                    <button
                      key={hub.id}
                      type="button"
                      onClick={() => setSelectedHub(idx)}
                      className={`group relative flex items-center justify-between rounded-sm border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-sky-500/50 bg-slate-900/90 text-white shadow-lg"
                          : "border-slate-800/80 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeHubIndicator"
                          className="absolute bottom-0 left-0 top-0 w-1 bg-sky-400 block"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      )}
                      <span className="block">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          {hub.region}
                        </span>
                        <span className="text-sm font-semibold tracking-wide">
                          {hub.primaryHub}
                        </span>
                      </span>
                      <span className="font-mono text-xs text-sky-400">
                        {hub.sqft}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Regional Telemetry Display */}
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

                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <span
                      className={`rounded-sm border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${currentHub.accent}`}
                    >
                      {currentHub.status}
                    </span>
                    <span className="font-mono text-xs text-slate-500 uppercase">
                      NODE REF: IND-{currentHub.id.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {currentHub.primaryHub}
                    </h3>
                    <p className="mt-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                      Primary Coverage Focus:{" "}
                      <span className="text-slate-200">
                        {currentHub.keyClients}
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 rounded-sm border border-slate-800/80 bg-slate-950/80 p-4">
                    <div>
                      <p className="font-mono text-2xl font-bold text-white">
                        {currentHub.sqft}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase text-slate-400">
                        Total Area Under Management
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-bold text-white">
                        {currentHub.workforce}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase text-slate-400">
                        Deployed Field Operations
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">
                      {"// ACTIVE METROPOLITAN NODES"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentHub.activeNodes.map((city) => (
                        <span
                          key={city}
                          className="flex items-center gap-1.5 rounded-sm border border-slate-800 bg-slate-950/60 px-3 py-1.5 font-mono text-xs text-slate-300"
                        >
                          <Activity className="size-3 text-sky-400" />
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-5">
                    <span className="font-mono text-xs text-slate-400">
                      Request regional site deployment feasibility report?
                    </span>
                    <Button
                      size="sm"
                      className="rounded-sm bg-sky-400 font-semibold text-slate-950 hover:bg-sky-300"
                    >
                      <span>Request Feasibility Study</span>
                      <ArrowUpRight className="ml-1 size-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* VIEW B: Interactive Property Hotspot Blueprint */
            <motion.div
              key="blueprint-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12"
            >
              {/* Interactive Building Blueprint Canvas */}
              <div className="relative min-h-[380px] w-full rounded-sm border border-slate-800 bg-slate-950/90 p-6 backdrop-blur-xl lg:col-span-7">
                <div className="pointer-events-none absolute left-3 top-3 font-mono text-[10px] text-slate-500">
                  {"// PROPERTY ASSET BLUEPRINT"}
                </div>

                {/* Abstract Architectural Blueprint SVG */}
                <svg
                  className="absolute inset-0 h-full w-full p-8 opacity-25"
                  viewBox="0 0 400 300"
                  fill="none"
                >
                  <path
                    d="M50 250V50H350V250H50Z"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M120 250V100H280V250"
                    stroke="#38bdf8"
                    strokeWidth="1"
                  />
                  <line
                    x1="50"
                    y1="120"
                    x2="350"
                    y2="120"
                    stroke="#38bdf8"
                    strokeWidth="1"
                  />
                  <line
                    x1="50"
                    y1="180"
                    x2="350"
                    y2="180"
                    stroke="#38bdf8"
                    strokeWidth="1"
                  />
                </svg>

                {/* Hotspot Pins */}
                {HOTSPOTS.map((hotspot) => {
                  const isActive = activeHotspot === hotspot.id;
                  const Icon = hotspot.icon;
                  return (
                    <button
                      key={hotspot.id}
                      type="button"
                      onClick={() => setActiveHotspot(hotspot.id)}
                      style={{ left: hotspot.x, top: hotspot.y }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                        isActive
                          ? "scale-125 z-20"
                          : "scale-100 z-10 hover:scale-110"
                      }`}
                    >
                      <span className="relative flex size-8 items-center justify-center rounded-sm border border-sky-400/50 bg-slate-950 shadow-lg">
                        {isActive && (
                          <span className="absolute -inset-1 animate-ping rounded-sm bg-sky-400/30" />
                        )}
                        <Icon
                          className={`size-4 ${isActive ? "text-sky-400" : "text-slate-400"}`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Hotspot Detailed Status Display */}
              <div className="flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-5">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-400">
                    <Building2 className="size-3.5" />
                    <span>HOTSPOT DIAGNOSTICS</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {currentHotspot.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {currentHotspot.detail}
                  </p>

                  <div className="mt-6 rounded-sm border border-slate-800 bg-slate-950/80 p-4">
                    <p className="font-mono text-xs uppercase text-slate-400">
                      Live Status Metric
                    </p>
                    <p className="mt-1 font-mono text-xl font-bold text-sky-400">
                      {currentHotspot.metric}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4 font-mono text-xs text-slate-400">
                  Click blueprint pins to inspect sub-system status.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
