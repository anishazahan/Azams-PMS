import ContactCTA from "@/components/sections/home/ContactCTA";
import PageHero from "@/components/sections/shared/PageHero";
import StatsBand from "@/components/sections/shared/StatsBand";
import TestimonialCard from "@/components/sections/shared/TestimonialCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/data/testimonials";
import type { Metadata } from "next";

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
      <ContactCTA
        eyebrow="VERIFIED SLA PERFORMANCE"
        title={
          <>
            Want to benchmark your property <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              against enterprise standards?
            </span>
          </>
        }
        description="Schedule a technical facility walkthrough with our quality assurance team to evaluate your current service provider's performance and SLA metrics."
      />
    </>
  );
}
