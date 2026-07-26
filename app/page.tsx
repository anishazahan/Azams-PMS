import ClientShowcase from "@/components/sections/home/ClientShowcase";
import ContactCTA from "@/components/sections/home/ContactCTA";
import Hero from "@/components/sections/home/Hero";
import PanIndiaOps from "@/components/sections/home/PanIndiaOps";
import PinnedShowcase from "@/components/sections/home/PinnedShowcase";
import ServicesSection from "@/components/sections/home/Services";
import TechGridSection from "@/components/sections/home/TechGridSection";
import TestimonialSection from "@/components/sections/home/TestimonialsPreview";
import TrustBar from "@/components/sections/home/TrustBar";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import CTASection from "@/components/sections/shared/CTASection";
import ProcessSteps from "@/components/sections/shared/ProcessSteps";
import StatsBand from "@/components/sections/shared/StatsBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <PanIndiaOps />
      <PinnedShowcase />
      <TechGridSection />
      <StatsBand />
      <ClientShowcase />

      <ProcessSteps />
      <WhyChooseUs />
      <div className="bg-red-500">
        <ContactCTA />
      </div>
      <TestimonialSection />
      <CTASection />
    </>
  );
}
