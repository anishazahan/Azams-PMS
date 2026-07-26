import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { MeshBackdrop } from "@/components/ui/DecorativeBackground";

export default function CTASection({
  title = "Ready to upgrade your facility operations?",
  description = "Tell us about your property and we'll design a service blueprint within 48 hours.",
  primaryLabel = "Talk to our team",
  primaryHref = "/contact",
  secondaryLabel = "Explore services",
  secondaryHref = "/services",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-4xl border border-surface-border bg-surface-elevated px-8 py-16 text-center sm:px-16 sm:py-24">
          <MeshBackdrop />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <TextReveal
              as="h2"
              text={title}
              className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
            />
            <Reveal delay={0.15}>
              <p className="text-lg text-muted">{description}</p>
            </Reveal>
            <Reveal delay={0.25} className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <Button href={primaryHref} variant="secondary" size="lg" withArrow>
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="outline" size="lg">
                {secondaryLabel}
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
