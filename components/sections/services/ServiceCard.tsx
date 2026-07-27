import type { Service } from "@/types";
import { ArrowUpRight, Wrench } from "lucide-react";
import Link from "next/link";

export const ServiceCard = ({ service }: { service: Service }) => {
  const IconComponent = service.icon || Wrench;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col justify-between gap-6 rounded-sm border border-slate-800 bg-slate-900/60 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 outline-none"
    >
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
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex size-11 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-500/60 group-hover:bg-sky-500/20">
            {typeof IconComponent === "function" ? (
              <IconComponent className="size-5" />
            ) : (
              <Wrench className="size-5" />
            )}
          </div>
          <ArrowUpRight
            className="size-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-400"
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-sky-300">
          {service.name}
        </h3>

        <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-300">
          {service.description}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 font-mono text-xs uppercase tracking-wider">
        <span className="font-bold text-white">
          {service.stat?.value || "SLA Guaranteed"}
        </span>
        <span className="text-slate-400">
          {service.stat?.label || "Target Uptime"}
        </span>
      </div>
    </Link>
  );
};
