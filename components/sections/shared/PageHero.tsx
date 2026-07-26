import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import { MeshBackdrop, GridBackdrop } from "@/components/ui/DecorativeBackground";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <GridBackdrop />
      <MeshBackdrop className="opacity-70" />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <TextReveal
            as="h1"
            text={title}
            className="text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          />
          {description && (
            <Reveal delay={0.2}>
              <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
                {description}
              </p>
            </Reveal>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
