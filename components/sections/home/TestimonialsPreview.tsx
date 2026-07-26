import { TESTIMONIALS } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/sections/shared/TestimonialCard";

export default function TestimonialsPreview() {
  const featured = TESTIMONIALS.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Client voices"
            title="Facility leaders trust the follow-through."
          />
          <Reveal delay={0.15}>
            <Button href="/testimonials" variant="outline" withArrow>
              Read all testimonials
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
