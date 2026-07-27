"use client";

import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  Clock,
  Cpu,
  FileCheck2,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { useRef } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

export const TechGridSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(".bento-anim-item");
      if (elements.length === 0) return;

      gsap.from(elements, {
        y: 35,
        opacity: 0,
        stagger: 0.1,
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
      {/* Background Laser Mesh Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[35rem] -translate-x-1/2 -translate-y-1/2 bg-sky-600/10 blur-[180px]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="bento-anim-item mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Cpu className="size-3.5 text-sky-400" />
            <span>THE AMAZE TECH & COMPLIANCE STACK</span>
          </div>

          <h2 className="bento-anim-item text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Powered by IoT Telemetry & <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Real-Time Audit Intelligence.
            </span>
          </h2>

          <p className="bento-anim-item mt-4 font-mono text-sm leading-relaxed text-slate-400">
            {"// Modern property management demands more than manual logs. "}We
            combine automated sensor diagnostics, digital workforce attendance,
            and instantaneous escalation dispatch.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* Card 1: IoT Sensor Hub (Large 8 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bento-anim-item relative flex flex-col justify-between overflow-hidden rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-8"
          >
            <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>

            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-400">
                <Zap className="size-3.5" />
                <span>TELEMETRY & HARDWARE INTEGRATION</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                IoT Mechanical & Energy Diagnostics
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                Direct integration with chillers, diesel generators, and water
                treatment plants. Real-time power factor tracking and vibration
                anomaly alerts prevent critical equipment downtime.
              </p>
            </div>

            {/* Visual Simulated Graph */}
            <div className="mt-8 rounded-sm border border-slate-800 bg-slate-950/80 p-4 font-mono">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-[11px] text-slate-400">
                <span>CHILLER-PLANT-01 // FREQUENCY</span>
                <span className="text-emerald-400">NORMAL OPERATION</span>
              </div>
              <div className="mt-3 flex items-end gap-1.5 h-16">
                {[
                  40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 60, 80, 70, 85,
                ].map((val, index) => (
                  <div
                    key={`chiller-bar-${index}`}
                    style={{ height: `${val}%` }}
                    className="flex-1 rounded-xs bg-gradient-to-t from-sky-500/30 to-sky-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Shift Schedule Engine (4 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bento-anim-item relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-4"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-400">
                <Clock className="size-3.5" />
                <span>WORKFORCE SCHEDULING</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                15,000+ Staff Gateway
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Automated shift tracking and geolocation-verified attendance
                logging across every commercial site pan-India.
              </p>
            </div>

            <div className="mt-6 rounded-sm border border-slate-800 bg-slate-950/80 p-3.5 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>ACTIVE SHIFT SHIFT-A</span>
                <span className="text-sky-400">98.4% PRESENT</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-xs bg-slate-800">
                <div className="h-full w-[98.4%] bg-sky-400" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Live Incident Escalation (4 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bento-anim-item relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-4"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                <ShieldAlert className="size-3.5" />
                <span>INCIDENT PROTOCOL</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                &lt;15 Min Escalation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Automated SMS & WhatsApp dispatch triggers to security marshals
                and chief engineers upon physical or digital breaches.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-sm border border-slate-800 bg-slate-950/80 p-3.5 font-mono text-xs">
              <span className="text-slate-400">AVG RESOLUTION</span>
              <span className="font-bold text-emerald-400">12.4 MINS</span>
            </div>
          </motion.div>

          {/* Card 4: Compliance Scorecard (4 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bento-anim-item relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-4"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-400">
                <FileCheck2 className="size-3.5" />
                <span>STATUTORY COMPLIANCE</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Digital Audit Vault
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                100% PF, ESIC, minimum wage, and statutory safety documentation
                archived with instant client dashboard access.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-sm border border-slate-800 bg-slate-950/80 p-3.5 font-mono text-xs">
              <span className="text-slate-400">AUDIT SCORE</span>
              <span className="font-bold text-amber-400">100% COMPLIANT</span>
            </div>
          </motion.div>

          {/* Card 5: Real-time SLA Dashboard (4 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bento-anim-item relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8 lg:col-span-4"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-400">
                <Activity className="size-3.5" />
                <span>SLA PERFORMANCE</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Client Portal Access
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Transparent live dashboard for property managers showing daily
                task completion, chemical consumption, and gate logs.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400">
                Request demo login
              </span>
              <Button size="sm" variant="tactical" withArrow>
                View Portal
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
