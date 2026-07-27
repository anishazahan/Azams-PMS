import ContactCTA from "@/components/sections/home/ContactCTA";
import { ServiceCard } from "@/components/sections/services/ServiceCard";
import PageHero from "@/components/sections/shared/PageHero";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";
import type { Metadata } from "next";

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

      <section className="relative  pb-24 sm:pb-32 bg-slate-950 pt-10">
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
      <ContactCTA
        eyebrow="MULTI-SERVICE SLA DEPLOYMENT"
        title={
          <>
            Need an integrated multi-service <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              contract for your facility?
            </span>
          </>
        }
        description="Bundle MEP engineering, security guarding, and mechanized housekeeping under a single-point accountable agreement with customized SLAs."
      />
    </>
  );
}
