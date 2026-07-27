import Container from "@/components/ui/Container";
import type { Service } from "@/types";
import { Layers } from "lucide-react";

export const ServiceDeliverables = ({ service }: { service: Service }) => {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Layers className="size-3.5 text-sky-400" />
            <span>EXECUTION PROTOCOL</span>
          </div>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            What You Can Expect.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {service.deliverables.map((item, i) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl"
            >
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
                <span className="font-mono text-xs font-semibold text-sky-400">
                  STAGE // 0{i + 1}
                </span>

                <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-sky-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-800/80 pt-3 font-mono text-[10px] text-slate-500">
                DELIVERABLE SPECIFICATION VERIFIED
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
