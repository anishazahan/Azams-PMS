"use client";

import Container from "@/components/ui/Container";
import { SERVICES } from "@/data/services";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check, SlidersHorizontal, Wrench } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const PinnedShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
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
    { scope: sectionRef },
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32"
    >
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 size-[35rem] -translate-y-1/2 bg-sky-600/10 blur-[180px]" />

      <Container className="relative z-10 mb-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
              <SlidersHorizontal className="size-3.5 text-sky-400" />
              <span>INTEGRATED FACILITY CAPABILITIES</span>
            </div>

            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Eight Specialized Divisions. <br />
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                One Accountable Infrastructure Partner.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs leading-relaxed text-slate-400">
            {"// SCROLL HORIZONTALLY TO EXPLORE: "}Standardized operating
            procedures across every layer of commercial & residential property
            management.
          </p>
        </div>
      </Container>

      {/* Horizontal Pinning Canvas Track */}
      <div className="relative z-10 overflow-x-auto pb-6 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:pb-0">
        <div
          ref={trackRef}
          className="flex w-max gap-6 px-6 will-change-transform sm:px-8 lg:px-10 lg:[padding-left:max(2.5rem,calc((100vw-1280px)/2+2.5rem))]"
        >
          {SERVICES.map((service, i) => {
            const IconComponent = service.icon || Wrench;
            const targetHref = `/services/${service.slug}`;

            return (
              <Link
                key={service.slug || `service-${i}`}
                href={targetHref}
                className="block outline-none"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="group relative flex h-[420px] w-[20rem] shrink-0 flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/70 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 sm:w-[23rem]"
                >
                  {/* Tactical Corner Crosshairs */}
                  <div className="pointer-events-none absolute left-2 top-2 font-mono text-[9px] text-sky-500/40">
                    +
                  </div>
                  <div className="pointer-events-none absolute right-2 top-2 font-mono text-[9px] text-sky-500/40">
                    +
                  </div>
                  <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[9px] text-sky-500/40">
                    +
                  </div>
                  <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[9px] text-sky-500/40">
                    +
                  </div>

                  {/* Top Content */}
                  <div>
                    <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
                      <div className="flex size-11 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-500/60 group-hover:bg-sky-500/20">
                        {typeof IconComponent === "function" ? (
                          <IconComponent className="size-5" />
                        ) : (
                          <Wrench className="size-5" />
                        )}
                      </div>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                        SERVICE // 0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-300">
                      {service.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-300">
                      {service.description ||
                        "Enterprise-grade execution tailored for high-density commercial towers and residential complexes."}
                    </p>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    {service.features && service.features.length > 0 && (
                      <div className="mb-6 flex flex-col gap-2 border-t border-slate-800/80 pt-4">
                        {service.features
                          .slice(0, 2)
                          .map((item: string, idx: number) => (
                            <div
                              key={`hl-${idx}`}
                              className="flex items-center gap-2 text-[11px] text-slate-300"
                            >
                              <Check className="size-3.5 shrink-0 text-sky-400" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 font-mono text-xs text-slate-400">
                      <span className="uppercase text-[10px] tracking-wider text-slate-500">
                        VIEW DIVISION
                      </span>
                      <div className="flex items-center gap-1 text-sky-400 transition-transform group-hover:translate-x-1">
                        <span className="text-[11px] font-semibold">
                          Inspect
                        </span>
                        <ArrowUpRight className="size-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
