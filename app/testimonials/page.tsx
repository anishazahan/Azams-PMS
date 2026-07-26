import type { Metadata } from "next";
import { TESTIMONIALS } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/shared/PageHero";
import TestimonialCard from "@/components/sections/shared/TestimonialCard";
import StatsBand from "@/components/sections/shared/StatsBand";
import CTASection from "@/components/sections/shared/CTASection";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from facility directors, operations heads, and property managers who trust Amaze PMS with their properties.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client voices"
        title="What our partners say."
        description="Real feedback from the facility leaders who work with our security, housekeeping, and technical teams every day."
      />

      <section className="relative pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <Reveal key={testimonial.id} delay={(i % 3) * 0.08}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <StatsBand />
      <CTASection />
    </>
  );
}
