"use client";

import Container from "@/components/ui/Container";
import { Activity } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) => {
  return (
    <section className="relative w-full overflow-hidden border-b border-slate-800 bg-slate-950 pb-20 pt-36 sm:pb-28 sm:pt-44 mb-10">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[35rem] -translate-x-1/2 -translate-y-1/2 bg-sky-600/10 blur-[180px]" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Activity className="size-3.5 text-sky-400" />
            <span>{eyebrow}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="max-w-2xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
