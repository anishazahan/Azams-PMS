import { VALUES } from "@/data/values";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import IconBadge from "@/components/ui/IconBadge";

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Why Amaze"
            title="Discipline, not just headcount."
            description="Founded by a Certified Security Practitioner and Indian Navy veteran, Amaze runs every service line with structured SOPs — not informal judgement calls."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <IconBadge icon={value.icon} />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
