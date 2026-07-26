"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JOBS } from "@/data/jobs";
import { EASE_PREMIUM } from "@/lib/motion";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import JobCard from "@/components/sections/careers/JobCard";

export default function JobListings() {
  const departments = useMemo(
    () => ["All", ...Array.from(new Set(JOBS.map((job) => job.department)))],
    []
  );
  const [active, setActive] = useState("All");

  const filteredJobs =
    active === "All" ? JOBS : JOBS.filter((job) => job.department === active);

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Open roles"
          title="Current opportunities"
          description={`${JOBS.length} open positions across our service lines.`}
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setActive(dept)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300",
                active === dept
                  ? "border-primary-400/50 bg-primary-500/15 text-foreground"
                  : "border-surface-border bg-white/[0.02] text-muted hover:text-foreground"
              )}
            >
              {dept}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE_PREMIUM }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredJobs.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted">
            No open roles in this department right now — check back soon.
          </p>
        )}
      </Container>
    </section>
  );
}
