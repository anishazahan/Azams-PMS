"use client";

import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/constants/site";
import { fadeIn } from "@/lib/motion";
import { MapPin, Navigation } from "lucide-react";

export const MapPanel = () => {
  return (
    <Reveal variants={fadeIn} className="h-full">
      <div className="group relative flex h-full min-h-[24rem] w-full flex-col justify-between overflow-hidden rounded-sm border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
        {/* Tactical Laser Grid Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b25_1px,transparent_1px),linear-gradient(to_bottom,#1e293b25_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_30%,transparent_90%)]"
        />

        {/* Tactical Corner Crosshairs */}
        <div className="pointer-events-none absolute left-2 top-2 z-10 font-mono text-[10px] text-sky-500/40">
          +
        </div>
        <div className="pointer-events-none absolute right-2 top-2 z-10 font-mono text-[10px] text-sky-500/40">
          +
        </div>
        <div className="pointer-events-none absolute bottom-2 left-2 z-10 font-mono text-[10px] text-sky-500/40">
          +
        </div>
        <div className="pointer-events-none absolute bottom-2 right-2 z-10 font-mono text-[10px] text-sky-500/40">
          +
        </div>

        {/* Top Header Tag */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400">
            <Navigation className="size-3.5" />
            <span>COMMAND NODE // HQ GEOLOCATION</span>
          </div>
          <span className="font-mono text-[9px] text-emerald-400">
            ACTIVE PING
          </span>
        </div>

        {/* Animated Cyber Route SVG & Target Radar Ping */}
        <div className="relative my-auto flex items-center justify-center py-10">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-30"
            viewBox="0 0 400 400"
            fill="none"
          >
            <path
              d="M20 320 C 100 300, 140 200, 210 190 S 320 120, 380 60"
              stroke="url(#route)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            <defs>
              <linearGradient id="route" x1="0" y1="0" x2="400" y2="400">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glowing Radar Target Target Reticle */}
          <div className="relative flex items-center justify-center">
            <span className="absolute size-10 animate-ping rounded-full bg-sky-500/20" />
            <span className="absolute size-6 animate-pulse rounded-full border border-sky-400/60 bg-sky-500/10" />
            <span className="relative size-3 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
          </div>
        </div>

        {/* Bottom Address Card Overlay */}
        <div className="relative z-10 flex items-start gap-3 rounded-sm border border-slate-800 bg-slate-950/80 p-4 backdrop-blur-md transition-colors group-hover:border-sky-500/40">
          <MapPin
            className="mt-0.5 size-4 shrink-0 text-sky-400"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            <p className="font-mono text-xs font-semibold text-white">
              {SITE.address.line1}
            </p>
            <p className="font-sans text-xs text-slate-400">
              {SITE.address.line2}, {SITE.address.city}{" "}
              {SITE.address.postalCode}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default MapPanel;
