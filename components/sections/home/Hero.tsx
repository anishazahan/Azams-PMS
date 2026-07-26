"use client";

import { useGSAP } from "@gsap/react";
import { Float, Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useRef, useState } from "react";
import * as THREE from "three";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

// --- Operational Modes Data ---
const OPERATIONAL_MODES = [
  {
    id: "mep",
    title: "MEP & Technical Ops",
    icon: Wrench,
    metric: "99.98% Uptime",
    status: "Active Monitoring",
    description:
      "HVAC, electrical grids, and mechanical health tracked with zero-downtime precision.",
    badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    id: "security",
    title: "Smart Security",
    icon: ShieldCheck,
    metric: "24/7 Live Patrol",
    status: "Perimeter Locked",
    description:
      "Multi-layered physical security combined with smart visitor authentication systems.",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: "housekeeping",
    title: "Precision Cleaning",
    icon: Sparkles,
    metric: "15,000+ Staff",
    status: "Audit Compliant",
    description:
      "Hospitality-grade mechanized sanitation and automated compliance scheduling.",
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];

// --- 3D Sharp Architectural Facility Component ---
function ArchitecturalBuilding({ activeMode }: { activeMode: string }) {
  const meshGroupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Precision subtle rotation on cursor movement
    meshGroupRef.current.rotation.y =
      Math.sin(t / 3) * 0.15 + state.pointer.x * 0.1;
    meshGroupRef.current.rotation.x =
      Math.cos(t / 3) * 0.04 - state.pointer.y * 0.05;
  });

  const modeColor =
    activeMode === "mep"
      ? "#38bdf8"
      : activeMode === "security"
        ? "#34d399"
        : "#c084fc";

  return (
    <group ref={meshGroupRef} position={[0, -0.4, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Main Sharp Glass Tower */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 3.8, 2.2]} />
          <meshPhysicalMaterial
            color={modeColor}
            transmission={0.88}
            opacity={0.95}
            transparent
            roughness={0.1}
            ior={1.4}
            thickness={1.5}
            specularIntensity={0.9}
          />
        </mesh>

        {/* Crisp Structural Wireframe Grid */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.22, 3.82, 2.22]} />
          <meshBasicMaterial
            color={modeColor}
            wireframe
            opacity={0.45}
            transparent
          />
        </mesh>

        {/* Secondary Architectural Block */}
        <mesh position={[1.35, -0.9, 0.75]}>
          <boxGeometry args={[1.2, 2, 1.2]} />
          <meshPhysicalMaterial
            color="#0f172a"
            roughness={0.2}
            metalness={0.85}
          />
        </mesh>

        {/* Real-Time Hotspot HTML Badge with sharp corners */}
        <Html position={[1.25, 1.35, 1.05]} distanceFactor={7}>
          <motion.div
            key={activeMode}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 rounded-sm border border-sky-500/40 bg-slate-950/90 px-3 py-1.5 text-xs font-mono text-white shadow-2xl backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
            </span>
            <span className="whitespace-nowrap text-[11px] uppercase tracking-wider text-slate-200">
              {activeMode} // NODE ACTIVE
            </span>
          </motion.div>
        </Html>
      </Float>
    </group>
  );
}

// --- Main Sharp Hero Component ---
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentMode = OPERATIONAL_MODES[activeTab];

  useGSAP(
    () => {
      gsap.to(textGroupRef.current, {
        y: -60,
        opacity: 0.15,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-slate-950 pt-28 pb-16 text-slate-100"
    >
      {/* PROFESSIONAL HIGH-TECH BACKDROP ENGINE */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b30_1px,transparent_1px),linear-gradient(to_bottom,#1e293b30_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Laser Gradient Beams */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[32rem] bg-sky-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 size-[28rem] bg-indigo-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* LEFT COLUMN: Hero Content */}
          <div
            ref={textGroupRef}
            className="flex flex-col items-start gap-6 lg:col-span-7"
          >
            {/* Live Metadata Pill (Sharp rounded-sm) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md"
            >
              <Activity className="size-3.5 animate-pulse text-sky-400" />
              <span>FACILITY INTELLIGENCE PLATFORM • EST. 2001</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Autonomous Scale. <br />
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Human Precision.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="max-w-xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Pan-India facility operations engineered for commercial,
              industrial, and high-density assets. Safeguard
              infrastructure, optimize MEP systems, and run high-grade
              operations across{" "}
              <span className="font-semibold text-white">20M+ sq. ft.</span>
            </motion.p>

            {/* Interactive Operational Mode Switcher (Sharp Architecture) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="w-full max-w-xl rounded-sm border border-slate-800 bg-slate-900/80 p-2 backdrop-blur-md"
            >
              <div className="grid grid-cols-3 gap-1.5">
                {OPERATIONAL_MODES.map((mode, index) => {
                  const Icon = mode.icon;
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveTab(index)}
                      className={`relative flex items-center justify-center gap-2 rounded-sm py-2.5 px-3 text-xs font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeHeroTabSharp"
                          className="absolute inset-0 rounded-sm bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-500/50"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      )}
                      <Icon
                        className={`size-4 relative z-10 ${isActive ? "text-sky-400" : ""}`}
                      />
                      <span className="relative z-10 hidden sm:inline font-mono uppercase text-[11px] tracking-wide">
                        {mode.title.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Mode Details Box (Sharp rounded-sm) */}
              <div className="mt-2.5 rounded-sm border border-slate-800/80 bg-slate-950/80 p-3.5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMode.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-sm px-2 py-0.5 text-[10px] font-mono font-semibold border ${currentMode.badgeColor}`}
                        >
                          {currentMode.status}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {currentMode.metric}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-300 leading-snug">
                        {currentMode.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Sharp Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                size="lg"
                className="group rounded-sm bg-sky-400 font-semibold text-slate-950 shadow-md shadow-sky-500/20 hover:bg-sky-300"
              >
                <span>Request Service Audit</span>
                <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-sm border-slate-800 bg-slate-900/60 text-slate-200 backdrop-blur-md hover:bg-slate-800"
              >
                Explore All Services
              </Button>
            </motion.div>

            {/* Metrics Bar with Clean Vertical Dividers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-4 grid w-full max-w-xl grid-cols-3 gap-4 border-t border-slate-800/80 pt-5 text-left"
            >
              <div className="border-r border-slate-800/80 pr-2">
                <h4 className="text-xl font-bold font-mono text-white sm:text-2xl">
                  20M+
                </h4>
                <p className="text-[11px] font-mono uppercase text-slate-400">
                  Sq. Ft. Pan-India
                </p>
              </div>
              <div className="border-r border-slate-800/80 pr-2">
                <h4 className="text-xl font-bold font-mono text-white sm:text-2xl">
                  15,000+
                </h4>
                <p className="text-[11px] font-mono uppercase text-slate-400">
                  Trained Experts
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold font-mono text-white sm:text-2xl">
                  23+ Yrs
                </h4>
                <p className="text-[11px] font-mono uppercase text-slate-400">
                  Proven Legacy
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Sharp 3D CAD Canvas Container */}
          <div className="relative h-[480px] w-full rounded-sm border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden sm:h-[580px] lg:col-span-5">
            {/* Tactical Architectural Corner Crosshairs */}
            <div className="absolute top-2 left-2 z-30 text-sky-500/40 font-mono text-[10px] pointer-events-none">
              +
            </div>
            <div className="absolute top-2 right-2 z-30 text-sky-500/40 font-mono text-[10px] pointer-events-none">
              +
            </div>
            <div className="absolute bottom-2 left-2 z-30 text-sky-500/40 font-mono text-[10px] pointer-events-none">
              +
            </div>
            <div className="absolute bottom-2 right-2 z-30 text-sky-500/40 font-mono text-[10px] pointer-events-none">
              +
            </div>

            {/* Top Left Floating HUD Badge (Sharp) */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-3 rounded-sm border border-slate-800 bg-slate-950/85 p-3 text-white backdrop-blur-md shadow-xl">
              <div className="rounded-sm bg-sky-500/20 p-2 text-sky-400 border border-sky-500/30">
                <Building2 className="size-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">
                  AMAZE PROPERTY ENGINE
                </p>
                <p className="text-[10px] font-mono text-slate-400">
                  3D ASSET MONITORING
                </p>
              </div>
            </div>

            {/* Bottom Right Sharp Status Badge */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2.5 rounded-sm border border-slate-800 bg-slate-950/85 px-3.5 py-2 text-white backdrop-blur-md shadow-xl">
              <CheckCircle2 className="size-3.5 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
                SYSTEM STATUS: 100% ONLINE
              </span>
            </div>

            {/* R3F WebGL Canvas */}
            <Canvas camera={{ position: [0, 0, 7.5], fov: 42 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} />
              <pointLight
                position={[-10, -10, -5]}
                color="#38bdf8"
                intensity={2}
              />

              <ArchitecturalBuilding activeMode={currentMode.id} />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.9}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 3}
              />
            </Canvas>
          </div>
        </div>
      </Container>
    </section>
  );
}
