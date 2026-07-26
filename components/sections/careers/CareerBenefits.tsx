import { CAREER_BENEFITS } from "@/data/careerBenefits";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import IconBadge from "@/components/ui/IconBadge";

export default function CareerBenefits() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why join Amaze"
          title="Grow with an operation, not just a job."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAREER_BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.08}>
              <GlassCard className="h-full">
                <IconBadge icon={benefit.icon} />
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
