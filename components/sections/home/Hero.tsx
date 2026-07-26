"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Sparkles, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { GridBackdrop, MeshBackdrop } from "@/components/ui/DecorativeBackground";
import { fadeIn } from "@/lib/motion";
import { SITE } from "@/constants/site";

gsap.registerPlugin(ScrollTrigger);

const floatingChips = [
  { icon: ShieldCheck, label: "24x7 Security", offset: "top-[18%] left-[6%] sm:left-[10%]" },
  { icon: Sparkles, label: "Housekeeping Excellence", offset: "top-[62%] left-[2%] sm:left-[4%]" },
  { icon: Wrench, label: "MEP & Technical Ops", offset: "top-[40%] right-[3%] sm:right-[6%]" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      gsap.to(orbARef.current, {
        yPercent: 35,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(orbBRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-36 sm:pt-40"
    >
      <GridBackdrop />
      <MeshBackdrop />

      <div
        ref={orbARef}
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 size-[26rem] rounded-full bg-primary-500/25 blur-[100px]"
      />
      <div
        ref={orbBRef}
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/3 size-[22rem] rounded-full bg-accent-500/20 blur-[110px]"
      />

      {floatingChips.map(({ icon: Icon, label, offset }, i) => (
        <Reveal
          key={label}
          variants={fadeIn}
          delay={0.9 + i * 0.15}
          className={`pointer-events-none absolute hidden animate-float items-center gap-2 rounded-full border border-surface-border bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-foreground/90 backdrop-blur-md md:flex ${offset}`}
        >
          <Icon className="size-4 text-primary-300" aria-hidden="true" />
          {label}
        </Reveal>
      ))}

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <Reveal>
            <Eyebrow>{SITE.legalName}</Eyebrow>
          </Reveal>

          <TextReveal
            as="h1"
            text="Property management, engineered for excellence."
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            delay={0.1}
          />

          <Reveal delay={0.5}>
            <p className="max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
              {SITE.tagline} From security to MEP, we run every layer of your
              property with 15,000+ trained professionals across{" "}
              <span className="text-foreground">20+ million sq. ft.</span>{" "}
              pan-India.
            </p>
          </Reveal>

          <Reveal delay={0.65} className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" withArrow>
              Get a service audit
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore services
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
