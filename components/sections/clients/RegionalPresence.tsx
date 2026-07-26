import { MapPin } from "lucide-react";
import { REGIONS } from "@/data/clients";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function RegionalPresence() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pan-India presence"
          title="Where we operate"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {REGIONS.map((region, i) => (
            <Reveal key={region.state} delay={i * 0.08}>
              <GlassCard className="h-full">
                <MapPin className="size-5 text-primary-300" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {region.state}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {region.cities.join(", ")}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
