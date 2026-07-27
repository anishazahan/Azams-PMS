"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CLIENT_SECTORS } from "@/data/clients";
import { Building2, ShieldCheck } from "lucide-react";

export const TrustBar = () => {
  const marqueeItems = [
    ...CLIENT_SECTORS,
    ...CLIENT_SECTORS,
    ...CLIENT_SECTORS,
  ];

  return (
    <section className="relative w-full overflow-hidden border-y border-slate-800 bg-slate-950 py-10 text-slate-100">
      {/* Background Laser Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />

      <Container className="relative z-10 mb-6">
        <Reveal className="flex items-center justify-center gap-2 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
          <ShieldCheck className="size-3.5 text-sky-400" />
          <span>TRUSTED ACROSS 200+ ENTERPRISE PROPERTIES PAN-INDIA</span>
        </Reveal>
      </Container>

      {/* INFINITE TACTICAL MARQUEE TRACK WITH HOVER PAUSE */}
      <div className="group relative w-full overflow-hidden border-y border-slate-800/80 bg-slate-900/40 py-3.5 backdrop-blur-md">
        {/* Left & Right Smooth Fade Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent" />

        {/* Moving Marquee Container (Pauses on Group Hover) */}
        <div className="flex w-max animate-marquee gap-4 sm:gap-6 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((client, idx) => (
            <div
              key={`client-sector-${client.name}-${idx}`}
              className="relative flex items-center gap-2.5 rounded-sm border border-slate-800/80 bg-slate-950/80 px-4 py-2 font-mono text-xs font-semibold text-slate-300 transition-colors hover:border-sky-500/50 hover:text-white"
            >
              {/* Tactical Corner Marker */}
              <div className="pointer-events-none absolute left-1 top-1 text-[8px] text-sky-500/30">
                +
              </div>

              <Building2 className="size-3.5 text-sky-400 transition-transform hover:scale-110" />
              <span className="uppercase tracking-wider">{client.name}</span>
              <span className="text-[10px] text-slate-500">
                ({client.sector || "SECTOR"})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
