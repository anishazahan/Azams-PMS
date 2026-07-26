import type { Service } from "@/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function ServiceDeliverables({ service }: { service: Service }) {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it runs"
          title="What you can expect"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {service.deliverables.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <GlassCard className="h-full">
                <span className="font-mono text-sm text-primary-300">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
