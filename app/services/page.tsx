import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/shared/PageHero";
import ServiceCard from "@/components/sections/services/ServiceCard";
import ProcessSteps from "@/components/sections/shared/ProcessSteps";
import CTASection from "@/components/sections/shared/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Security, housekeeping, technical (MEP), landscaping, pest control, help desk, parking, and facility & utility management — delivered in-house across every property we manage.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every service line, one accountable team."
        description="From security to swimming pool maintenance, our in-house teams deliver eight integrated service lines to a single documented standard."
      />

      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSteps />
      <CTASection
        title="Not sure which services you need?"
        description="Share your property details and we'll recommend the right service mix during a free audit."
      />
    </>
  );
}
