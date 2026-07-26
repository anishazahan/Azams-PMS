import type { Metadata } from "next";
import PageHero from "@/components/sections/shared/PageHero";
import StatsBand from "@/components/sections/shared/StatsBand";
import ClientSectorGrid from "@/components/sections/clients/ClientSectorGrid";
import RegionalPresence from "@/components/sections/clients/RegionalPresence";
import { TestimonialSection } from "@/components/sections/home/TestimonialsPreview";
import CTASection from "@/components/sections/shared/CTASection";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "200+ client partners across commercial, residential, retail, and industrial properties, spanning 20+ million sq. ft. pan-India.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by 200+ properties, pan-India."
        description="From IT parks to residential townships, our client partnerships span every property type and scale."
      />
      <StatsBand />
      <ClientSectorGrid />
      <RegionalPresence />
      <TestimonialSection />
      <CTASection
        title="Join 200+ properties running on Amaze."
        description="Let's discuss how an integrated service model can simplify your facility operations."
      />
    </>
  );
}
