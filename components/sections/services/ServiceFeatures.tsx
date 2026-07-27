import Container from "@/components/ui/Container";
import type { Service } from "@/types";
import { Check, SlidersHorizontal } from "lucide-react";

export const ServiceFeatures = ({ service }: { service: Service }) => {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <SlidersHorizontal className="size-3.5 text-sky-400" />
            <span>OPERATIONAL SCOPE</span>
          </div>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            What Is Included in <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              {service.name} Operations.
            </span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="group relative flex items-center gap-3.5 rounded-sm border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90"
            >
              <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[8px] text-sky-500/30">
                +
              </div>

              <div className="flex size-7 shrink-0 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/20 text-sky-400">
                <Check className="size-4" aria-hidden="true" />
              </div>

              <span className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
