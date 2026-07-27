"use client";

import Container from "@/components/ui/Container";
import { useGSAP } from "@gsap/react";
import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { Activity } from "lucide-react";
import { useRef, type ReactNode } from "react";
import * as THREE from "three";

gsap.registerPlugin();

// --- Sub-Component: Floating 3D Geometric Architectural Grid ---
const FloatingHeroNodes = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.05;
    groupRef.current.rotation.x = Math.sin(t * 0.03) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Main Floating Wireframe Icosahedron */}
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[3.8, 1]} />
          <meshBasicMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Outer Rotating Lattice */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[5.2, 2]} />
          <meshBasicMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.06}
          />
        </mesh>
      </Float>
    </group>
  );
};

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  border?: boolean;
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  children,
  border,
}: PageHeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP Smooth Cascade Animation from Top
  useGSAP(
    () => {
      if (!contentRef.current) return;

      const items = contentRef.current.querySelectorAll(".hero-cascade-item");
      if (items.length === 0) return;

      gsap.fromTo(
        items,
        {
          y: -40,
          opacity: 0,
          filter: "blur(3px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
        },
      );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className={`relative mb-10 w-full overflow-hidden   border-slate-800 bg-slate-950 pb-20 pt-36 sm:pb-28 sm:pt-44 ${border && "border-b"}`}
    >
      {/* 1. Tactical Laser Grid Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={1} />
          <FloatingHeroNodes />
        </Canvas>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[35rem] -translate-x-1/2 -translate-y-1/2 bg-sky-600/10 blur-[20px]" />

      <Container className="relative z-10">
        <div
          ref={contentRef}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          {/* Eyebrow Badge */}
          <div className="hero-cascade-item inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-sky-400 backdrop-blur-none">
            <Activity className="size-3.5 animate-pulse text-sky-400" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="hero-cascade-item text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>

          {description && (
            <p className="hero-cascade-item max-w-2xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>
          )}

          {children && (
            <div className="hero-cascade-item w-full pt-2">{children}</div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
