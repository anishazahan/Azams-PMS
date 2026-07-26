import type { Metadata } from "next";
import { Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { GridBackdrop, MeshBackdrop } from "@/components/ui/DecorativeBackground";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-32">
      <GridBackdrop />
      <MeshBackdrop className="opacity-60" />
      <Container className="relative">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <span className="flex size-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 text-primary-300 ring-1 ring-inset ring-white/10">
            <Compass className="size-7" aria-hidden="true" />
          </span>
          <Eyebrow>404 error</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            This property isn&apos;t on our map.
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            The page you&apos;re looking for may have moved or no longer exists.
            Let&apos;s get you back to solid ground.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" size="lg" withArrow>
              Back to home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
