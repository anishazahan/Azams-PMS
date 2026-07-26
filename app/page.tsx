import Hero from "@/components/sections/home/Hero";
import PinnedShowcase from "@/components/sections/home/PinnedShowcase";
import ServicesSection from "@/components/sections/home/Services";
import TestimonialsPreview from "@/components/sections/home/TestimonialsPreview";
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
      <ServicesSection /> <PinnedShowcase />
      <StatsBand />
      <ProcessSteps />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
