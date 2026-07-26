import { Check } from "lucide-react";
import type { Service } from "@/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ServiceFeatures({ service }: { service: Service }) {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What's included"
          title="Scope of service"
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {service.features.map((feature, i) => (
            <Reveal
              key={feature}
              delay={(i % 6) * 0.06}
              className="flex items-center gap-3 rounded-2xl border border-surface-border bg-white/[0.02] px-5 py-4"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-300">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
              <span className="text-sm text-foreground/90">{feature}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
