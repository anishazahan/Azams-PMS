import { MapPin } from "lucide-react";
import { SITE } from "@/constants/site";
import Reveal from "@/components/ui/Reveal";
import { fadeIn } from "@/lib/motion";

export default function MapPanel() {
  return (
    <Reveal variants={fadeIn} className="h-full">
      <div className="relative h-full min-h-[22rem] w-full overflow-hidden rounded-4xl border border-surface-border bg-surface-elevated">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_20%,transparent_85%)]"
        />
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-40"
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
              <stop offset="0%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <span className="relative flex size-4 items-center justify-center">
            <span className="absolute size-4 animate-ping rounded-full bg-primary-400/60" />
            <span className="relative size-2.5 rounded-full bg-primary-300" />
          </span>
        </div>

        <div className="absolute inset-x-6 bottom-6 flex items-start gap-3 rounded-2xl border border-surface-border bg-background/70 p-4 backdrop-blur-md">
          <MapPin className="mt-0.5 size-5 shrink-0 text-primary-300" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {SITE.address.line1}
            </p>
            <p className="text-xs text-muted">
              {SITE.address.line2}, {SITE.address.city} {SITE.address.postalCode}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
