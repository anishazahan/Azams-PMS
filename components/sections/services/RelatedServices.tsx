import { SERVICES } from "@/data/services";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/sections/services/ServiceCard";

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const related = SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Explore more" title="Related services" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
