"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/data/services";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/sections/services/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const track = trackRef.current;
      if (!track || prefersReducedMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const distance = track.scrollWidth - window.innerWidth;
        if (distance <= 0) return;

        const tween = gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.scrollTrigger?.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="mb-14 flex flex-col gap-5 lg:mb-16">
          <Reveal>
            <Eyebrow>What we run</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Eight service lines. One accountable partner.
            </h2>
          </Reveal>
        </div>
      </Container>

      <div className="overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:pb-0">
        <div
          ref={trackRef}
          className="flex w-max gap-6 px-6 will-change-transform sm:px-8 lg:px-10 lg:[padding-left:max(2.5rem,calc((100vw-1280px)/2+2.5rem))]"
        >
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 0.06}
              className="w-[19rem] shrink-0 sm:w-[22rem]"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
