import { Eye, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import IconBadge from "@/components/ui/IconBadge";

const cards = [
  {
    icon: Rocket,
    title: "Our Mission",
    description:
      "To deliver every layer of property management — security, housekeeping, technical, and beyond — through one accountable, in-house workforce trained to a single documented standard.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be India's most trusted integrated facility management partner, known for the discipline of our operations as much as the scale of our footprint.",
  },
];

export default function MissionVision() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <GlassCard className="h-full">
                <IconBadge icon={card.icon} size="lg" />
                <h3 className="mt-6 text-2xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {card.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
