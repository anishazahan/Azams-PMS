"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CLIENT_SECTORS } from "@/data/clients";
import { Building2 } from "lucide-react";

export const ClientSectorGrid = () => {
  return (
    <section className="relative w-full overflow-hidden  border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Building2 className="size-3.5 text-sky-400" />
            <span>WHO WE SERVE</span>
          </div>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            200+ Client Partners <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Across Every Asset Class.
            </span>
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENT_SECTORS.map((client, i) => (
            <Reveal
              key={client.name}
              delay={(i % 5) * 0.06}
              className="group relative flex flex-col items-center justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl"
            >
              {/* Tactical Corner Crosshairs */}
              <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                +
              </div>
              <div className="pointer-events-none absolute right-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                +
              </div>

              <span className="flex size-12 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 font-mono text-lg font-bold text-sky-400 transition-colors group-hover:border-sky-500/60 group-hover:bg-sky-500/20">
                {client.name.charAt(0)}
              </span>

              <div className="mt-4 flex flex-col gap-1">
                <span className="text-sm font-bold text-white transition-colors group-hover:text-sky-300">
                  {client.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  {client.sector}
                </span>
              </div>

              <div className="mt-4 w-full border-t border-slate-800/80 pt-2 font-mono text-[9px] text-slate-500">
                VERIFIED SLA
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ClientSectorGrid;
