"use client";

import { SITE } from "@/constants/site";
import type { JobListing } from "@/types";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";

export const JobCard = ({ job }: { job: JobListing }) => {
  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Application: ${job.title}`,
  )}`;

  return (
    <div className="group relative flex h-full flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl">
      {/* Tactical Corner Crosshairs */}
      <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute right-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute bottom-1.5 left-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>
      <div className="pointer-events-none absolute bottom-1.5 right-1.5 font-mono text-[9px] text-sky-500/40">
        +
      </div>

      <div>
        {/* Department Badge */}
        <div className="mb-4 flex items-center justify-between border-b border-slate-800/80 pb-3">
          <span className="rounded-sm border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase text-sky-400">
            {job.department}
          </span>
          <span className="font-mono text-[10px] text-slate-500">
            REF // APMS-2026
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-300">
          {job.title}
        </h3>

        <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
          {job.description}
        </p>

        {/* Responsibilities */}
        {job.responsibilities && job.responsibilities.length > 0 && (
          <ul className="mt-4 flex flex-col gap-2 border-t border-slate-800/80 pt-3">
            {job.responsibilities.slice(0, 2).map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[11px] text-slate-300"
              >
                <CheckCircle2 className="size-3.5 shrink-0 text-sky-400" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Card Footer Details */}
      <div className="mt-6 flex flex-col gap-4 border-t border-slate-800/80 pt-4">
        <div className="flex flex-wrap gap-3 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5 text-sky-400" />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5 text-sky-400" />
            {job.type}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="size-3.5 text-sky-400" />
            {job.department}
          </span>
        </div>

        <a
          href={mailtoHref}
          className="group/btn flex items-center justify-between rounded-sm border border-sky-500/40 bg-sky-500/10 px-4 py-2 font-mono text-xs text-sky-400 transition-colors hover:bg-sky-500/20 hover:text-white"
        >
          <span>APPLY NOW</span>
          <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export default JobCard;
