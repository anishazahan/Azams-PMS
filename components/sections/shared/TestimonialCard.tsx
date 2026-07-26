import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import GlassCard from "@/components/ui/GlassCard";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <GlassCard className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <Quote className="size-8 text-primary-400/60" aria-hidden="true" />
        <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-accent-400 text-accent-400" aria-hidden="true" />
          ))}
        </div>
      </div>
      <p className="flex-1 text-[15px] leading-relaxed text-foreground/90">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-surface-border pt-5">
        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/20 text-sm font-semibold text-foreground">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
