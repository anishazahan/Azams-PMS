"use client";

import { JobCard } from "@/components/sections/careers/JobCard";
import Container from "@/components/ui/Container";
import { JOBS } from "@/data/jobs";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useMemo, useState } from "react";

export const JobListings = () => {
  const departments = useMemo(
    () => ["All", ...Array.from(new Set(JOBS.map((job) => job.department)))],
    [],
  );
  const [active, setActive] = useState("All");

  const filteredJobs =
    active === "All" ? JOBS : JOBS.filter((job) => job.department === active);

  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Briefcase className="size-3.5 text-sky-400" />
            <span>ACTIVE RECRUITMENT GRID</span>
          </div>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Current Opportunities.
          </h2>

          <p className="mt-3 font-mono text-xs text-slate-400">
            // {JOBS.length} open positions across pan-India commercial &
            industrial sites.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setActive(dept)}
              className={`rounded-sm border px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                active === dept
                  ? "border-sky-500 bg-sky-500/10 text-sky-400"
                  : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Filtered Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredJobs.length === 0 && (
          <p className="mt-10 text-center font-mono text-xs text-slate-500">
            // No active openings in this department currently — submit your CV
            below.
          </p>
        )}
      </Container>
    </section>
  );
};

export default JobListings;
