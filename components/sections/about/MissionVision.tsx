"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Eye, Rocket } from "lucide-react";

const CARDS = [
  {
    icon: Rocket,
    tag: "MISSION // 01",
    title: "Our Mission",
    description:
      "To deliver every layer of property management — security, housekeeping, technical MEP, and beyond — through one accountable, in-house workforce trained to a single documented standard.",
  },
  {
    icon: Eye,
    tag: "VISION // 02",
    title: "Our Vision",
    description:
      "To be India's most trusted integrated facility management partner, known for the discipline of our operations as much as the scale of our nationwide footprint.",
  },
];

export const MissionVision = () => {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl">
                  {/* Tactical Corner Crosshairs */}
                  <div className="pointer-events-none absolute left-2 top-2 font-mono text-[9px] text-sky-500/40">
                    +
                  </div>
                  <div className="pointer-events-none absolute right-2 top-2 font-mono text-[9px] text-sky-500/40">
                    +
                  </div>
                  <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[9px] text-sky-500/40">
                    +
                  </div>
                  <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[9px] text-sky-500/40">
                    +
                  </div>

                  <div>
                    <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
                      <div className="flex size-11 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-500/60 group-hover:bg-sky-500/20">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-500">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-sky-300">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-slate-800/80 pt-4 font-mono text-[10px] text-slate-500">
                    CORE GOVERNANCE PRINCIPLE
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
