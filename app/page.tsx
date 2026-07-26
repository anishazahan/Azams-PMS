import Hero from "@/components/sections/home/Hero";
import TrustBar from "@/components/sections/home/TrustBar";
import PinnedShowcase from "@/components/sections/home/PinnedShowcase";
import StatsBand from "@/components/sections/shared/StatsBand";
import ProcessSteps from "@/components/sections/shared/ProcessSteps";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import TestimonialsPreview from "@/components/sections/home/TestimonialsPreview";
import CTASection from "@/components/sections/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PinnedShowcase />
      <StatsBand />
      <ProcessSteps />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
