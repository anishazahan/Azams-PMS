import { PROCESS_STEPS } from "@/data/process";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import IconBadge from "@/components/ui/IconBadge";

export default function ProcessSteps() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="From audit to accountable operations."
          description="A structured onboarding process that gets a new site fully staffed, supervised, and reporting within weeks — not months."
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent lg:block"
          />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <IconBadge icon={step.icon} />
                <span className="font-mono text-sm text-muted">{step.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
