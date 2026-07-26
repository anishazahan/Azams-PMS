import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Service } from "@/types";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Button from "@/components/ui/Button";
import IconBadge from "@/components/ui/IconBadge";
import { GridBackdrop, MeshBackdrop } from "@/components/ui/DecorativeBackground";

export default function ServiceDetailHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pb-24 sm:pt-48">
      <GridBackdrop />
      <MeshBackdrop className="opacity-60" />
      <Container className="relative">
        <Reveal className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/services" className="hover:text-foreground">
            Services
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="text-foreground">{service.shortName}</span>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow>{service.tagline}</Eyebrow>
            </Reveal>
            <TextReveal
              as="h1"
              text={service.name}
              className="text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
            />
            <Reveal delay={0.2}>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                {service.heroDescription}
              </p>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg" withArrow>
                Request this service
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View all services
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="glass glass-border flex flex-col items-center gap-6 rounded-4xl p-10 text-center">
              <IconBadge icon={service.icon} size="lg" />
              <div>
                <p className="font-mono text-4xl font-semibold text-foreground">
                  {service.stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{service.stat.label}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
