import { Briefcase, Clock, MapPin } from "lucide-react";
import type { JobListing } from "@/types";
import { SITE } from "@/constants/site";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function JobCard({ job }: { job: JobListing }) {
  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Application: ${job.title}`
  )}`;

  return (
    <GlassCard className="flex h-full flex-col justify-between gap-6">
      <div className="flex flex-col gap-3">
        <span className="w-fit rounded-full border border-surface-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-primary-300">
          {job.department}
        </span>
        <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{job.description}</p>
        <ul className="mt-1 flex flex-col gap-1.5">
          {job.responsibilities.slice(0, 2).map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 border-t border-surface-border pt-5">
        <div className="flex flex-wrap gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {job.type}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="size-3.5" aria-hidden="true" />
            {job.department}
          </span>
        </div>
        <Button href={mailtoHref} variant="outline" size="sm" className="w-fit">
          Apply now
        </Button>
      </div>
    </GlassCard>
  );
}
