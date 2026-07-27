import { ClientShowcase } from "@/components/sections/home/ClientShowcase";
import { ContactCTA } from "@/components/sections/home/ContactCTA";
import { Hero } from "@/components/sections/home/Hero";
import { PanIndiaOps } from "@/components/sections/home/PanIndiaOps";
import { PinnedShowcase } from "@/components/sections/home/PinnedShowcase";
import { ServicesSection } from "@/components/sections/home/Services";
import { TechGridSection } from "@/components/sections/home/TechGridSection";
import { TestimonialSection } from "@/components/sections/home/TestimonialsPreview";
import TrustBar from "@/components/sections/home/TrustBar";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/shared/ProcessSteps";
import StatsBand from "@/components/sections/shared/StatsBand";

export default function HomePage() {
  return (
    <>
      {/* Hook */}
      <Hero />

      {/* Immediate trust signal */}
      <TrustBar />

      {/* WHAT we do: fast visual overview, then interactive deep-dive */}
      <PinnedShowcase />
      <ServicesSection />

      {/* Proof of scale, then proof of reach */}
      <StatsBand />
      <PanIndiaOps />

      {/* HOW we deliver it: technology & compliance backbone */}
      <TechGridSection />

      {/* Client proof: case studies + logos */}
      <ClientShowcase />

      {/* How engagement starts, then why us */}
      <ProcessSteps />
      <WhyChooseUs />

      {/* Social proof, then convert */}
      <TestimonialSection />
      <ContactCTA />
    </>
  );
}
