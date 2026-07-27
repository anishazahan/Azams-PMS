"use client";

import { useGSAP } from "@gsap/react";
import { Float, Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Building2, CheckCircle2, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import { OPERATIONAL_MODES } from "@/constants/demoData";

gsap.registerPlugin(ScrollTrigger);

// --- 1. COUNT-UP ANIMATION HOOK ---
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad calculation
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return count;
}

// Sub-component for individual metric counter
function CounterItem({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const count = useCountUp(end, 2200);

  return (
    <div>
      <h4 className="font-mono text-xl font-bold text-white sm:text-2xl">
        {count.toLocaleString()}
        {suffix}
      </h4>
      <p className="font-mono text-[11px] uppercase text-slate-400">{label}</p>
    </div>
  );
}

// --- 2. TRUE 3D ROTATING REALISTIC PROPERTY CANVAS ---
function Realistic3DPropertyCard({ activeMode }: { activeMode: string }) {
  const meshGroupRef = useRef<THREE.Group>(null!);
  const texture = useLoader(
    THREE.TextureLoader,
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  );

  useFrame((state) => {
    if (!meshGroupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Continuous 3D rotation & floating tilt
    meshGroupRef.current.rotation.y =
      Math.sin(t / 2) * 0.35 + state.pointer.x * 0.2;
    meshGroupRef.current.rotation.x =
      Math.cos(t / 2) * 0.15 - state.pointer.y * 0.1;
  });

  const modeColor =
    activeMode === "mep"
      ? "#38bdf8"
      : activeMode === "security"
        ? "#34d399"
        : "#c084fc";

  return (
    <group ref={meshGroupRef} position={[0, -0.1, 0]}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Main 3D Textured Property Panel */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.4, 4.8, 0.25]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.2}
            metalness={0.4}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Glowing 3D Outer Wireframe Glass Border */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.45, 4.85, 0.28]} />
          <meshBasicMaterial
            color={modeColor}
            wireframe
            opacity={0.6}
            transparent
          />
        </mesh>

        {/* Floating Hotspot HTML Tag attached to 3D Space */}
        <Html position={[0, 0, 0.2]} distanceFactor={6} center>
          <motion.div
            key={activeMode}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none flex items-center gap-2 rounded-sm border border-sky-400/60 bg-slate-950/90 px-3.5 py-2 font-mono text-xs text-white shadow-2xl backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
            </span>
            <span className="whitespace-nowrap uppercase tracking-wider text-slate-200">
              {activeMode} {"// 3D NODE ACTIVE"}
            </span>
          </motion.div>
        </Html>
      </Float>
    </group>
  );
}

// --- 3. DENSE ENHANCED PARTICLES FIELD ---
function FocusedParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 450;

  const [positions] = useState(() => {
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      values[i] = (Math.random() - 0.5) * 16;
      values[i + 1] = (Math.random() - 0.5) * 16;
      values[i + 2] = (Math.random() - 0.5) * 12;
    }
    return values;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.04;
    pointsRef.current.rotation.x = Math.sin(t * 0.03) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#38bdf8"
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// --- MAIN HERO COMPONENT ---
export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentMode = OPERATIONAL_MODES[activeTab] || OPERATIONAL_MODES[0];

  useGSAP(
    () => {
      if (!textGroupRef.current || !heroRef.current) return;

      gsap.to(textGroupRef.current, {
        y: -50,
        opacity: 0.2,
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
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-slate-950 pb-16 pt-28 text-slate-100"
    >
      {/* Laser Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b25_1px,transparent_1px),linear-gradient(to_bottom,#1e293b25_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Focusable Ambient WebGL Particle Canvas */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={1} />
          <FocusedParticleField />
        </Canvas>
      </div>

      {/* Radial Gradient Lights */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[32rem] bg-sky-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 size-[28rem] bg-indigo-600/15 blur-[140px]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* LEFT COLUMN: Hero Typography */}
          <div
            ref={textGroupRef}
            className="flex flex-col items-start gap-6 lg:col-span-7"
          >
            {/* Live Metadata Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md"
            >
              <Activity className="size-3.5 animate-pulse text-sky-400" />
              <span>FACILITY INTELLIGENCE PLATFORM • EST. 2001</span>
            </motion.div>

            {/* Main Title */}
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
              industrial, and high-density assets. Safeguard infrastructure,
              optimize MEP systems, and run high-grade operations across{" "}
              <span className="font-semibold text-white">20M+ sq. ft.</span>
            </motion.p>

            {/* Operational Mode Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="w-full max-w-xl rounded-sm border border-slate-800 bg-slate-900/80 p-2 backdrop-blur-md"
            >
              <div className="grid grid-cols-3 gap-1.5">
                {OPERATIONAL_MODES.map((mode, index) => {
                  const Icon = mode.icon || Wrench;
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setActiveTab(index)}
                      className={`relative flex items-center justify-center gap-2 rounded-sm px-3 py-2.5 text-xs font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeHeroTabSharp"
                          className="absolute inset-0 rounded-sm border border-sky-500/50 bg-gradient-to-r from-sky-500/20 to-indigo-500/20"
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
                      <span className="relative z-10 hidden font-mono text-[11px] uppercase tracking-wide sm:inline">
                        {mode.title.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mode Details */}
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
                          className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] font-semibold ${currentMode.badgeColor}`}
                        >
                          {currentMode.status}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          {currentMode.metric}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-snug text-slate-300">
                        {currentMode.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton>
                <Button size="lg" variant="tactical" withArrow>
                  Request Service Audit
                </Button>
              </MagneticButton>

              <Button
                variant="outline"
                size="lg"
                className="rounded-sm border-slate-800 bg-slate-900/60 text-slate-200 backdrop-blur-md hover:bg-slate-800"
              >
                Explore All Services
              </Button>
            </motion.div>

            {/* REAL ANIMATED COUNT-UP STATS BAR */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-4 grid w-full max-w-xl grid-cols-3 gap-4 border-t border-slate-800/80 pt-5 text-left"
            >
              <div className="border-r border-slate-800/80 pr-2">
                <CounterItem end={20} suffix="M+" label="Sq. Ft. Pan-India" />
              </div>
              <div className="border-r border-slate-800/80 pr-2">
                <CounterItem end={15000} suffix="+" label="Trained Experts" />
              </div>
              <div>
                <CounterItem end={23} suffix="+ Yrs" label="Proven Legacy" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Real 3D Rotating Mesh Canvas with Textures */}
          <div className="relative h-[480px] w-full overflow-hidden rounded-sm border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl sm:h-[580px] lg:col-span-5">
            {/* Tactical Corner Crosshairs */}
            <div className="pointer-events-none absolute left-2 top-2 z-30 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute right-2 top-2 z-30 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-2 left-2 z-30 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-2 right-2 z-30 font-mono text-[10px] text-sky-500/40">
              +
            </div>

            {/* Top Left Floating HUD Badge */}
            <div className="absolute left-4 top-4 z-20 flex items-center gap-3 rounded-sm border border-slate-800 bg-slate-950/85 p-3 text-white backdrop-blur-md shadow-xl">
              <div className="rounded-sm border border-sky-500/30 bg-sky-500/20 p-2 text-sky-400">
                <Building2 className="size-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">
                  AMAZE PROPERTY ENGINE
                </p>
                <p className="font-mono text-[10px] text-slate-400">
                  3D ASSET MONITORING
                </p>
              </div>
            </div>

            {/* Bottom Right Status Badge */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2.5 rounded-sm border border-slate-800 bg-slate-950/85 px-3.5 py-2 text-white backdrop-blur-md shadow-xl">
              <CheckCircle2 className="size-3.5 text-emerald-400" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                SYSTEM STATUS: 100% ONLINE
              </span>
            </div>

            {/* Three.js R3F 3D Interactive WebGL Stage */}
            <Canvas camera={{ position: [0, 0, 7.5], fov: 42 }}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <pointLight
                position={[-10, -10, -5]}
                color="#38bdf8"
                intensity={3}
              />

              <Realistic3DPropertyCard activeMode={currentMode.id} />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={1.2}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
              />
            </Canvas>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
