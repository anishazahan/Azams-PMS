"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/constants/site";
import { Anchor, Award, Quote, ShieldCheck } from "lucide-react";
import Image from "next/image";

const BADGES = [
  { icon: Anchor, label: "Indian Navy Veteran" },
  { icon: ShieldCheck, label: "Certified Security Practitioner" },
];

export const FounderStory = () => {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 size-[30rem] -translate-y-1/2 bg-sky-600/10 blur-[160px]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Founder Profile Card with Blazer Image */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md flex-col justify-between overflow-hidden rounded-sm border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
              {/* Executive Image with Blazer */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                  alt="Subhani Abdul - Founder & Managing Director"
                  fill
                  priority
                  className="object-cover object-top opacity-85 transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/80" />
              </div>

              {/* Tactical Corner Markers */}
              <div className="pointer-events-none z-10 absolute left-2 top-2 font-mono text-[10px] text-sky-500/60">
                +
              </div>
              <div className="pointer-events-none z-10 absolute right-2 top-2 font-mono text-[10px] text-sky-500/60">
                +
              </div>
              <div className="pointer-events-none z-10 absolute bottom-2 left-2 font-mono text-[10px] text-sky-500/60">
                +
              </div>
              <div className="pointer-events-none z-10 absolute bottom-2 right-2 font-mono text-[10px] text-sky-500/60">
                +
              </div>

              {/* Top Header Badge */}
              <div className="relative z-10 flex items-center justify-between rounded-sm border border-slate-800/80 bg-slate-950/50 px-3 py-1.5 backdrop-blur-md">
                <div className="flex items-center gap-2 font-mono text-xs text-sky-400">
                  <Award className="size-4" />
                  <span>FOUNDER // GOVERNANCE</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  EST. {SITE.foundedYear}
                </span>
              </div>

              {/* Name & Role Text */}
              <div className="relative z-10 my-auto mt-auto flex flex-col items-start pb-4 pt-32">
                <p className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                  Subhani Abdul
                </p>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400 drop-shadow-sm">
                  Founder & Managing Director
                </p>
              </div>

              {/* Credential Badges */}
              <div className="relative z-10 flex flex-col gap-2 border-t border-slate-800/80 pt-3.5">
                {BADGES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-sm border border-slate-800/80 bg-slate-950/80 px-3.5 py-2 font-mono text-xs text-slate-200 backdrop-blur-md transition-colors hover:border-sky-500/40"
                  >
                    <Icon
                      className="size-4 shrink-0 text-sky-400"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Founder Narrative */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-sky-400 backdrop-blur-md w-fit">
                <Award className="size-3.5 text-sky-400" />
                <span>FOUNDER PEDIGREE</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Built by a Veteran. <br />
                <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Run Like an Operation.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={0.15}
              className="flex flex-col gap-4 text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              <p>
                Mr. Subhani Abdul founded{" "}
                <span className="font-semibold text-white">
                  {SITE.legalName}
                </span>{" "}
                in {SITE.foundedYear} after a career in the Indian Navy,
                bringing military-grade discipline to a category most providers
                treated as an afterthought.
              </p>
              <p>
                As a Certified Security Practitioner, he built Amaze around a
                simple premise: every service line — security, housekeeping,
                technical engineering, landscaping — should be delivered
                in-house to one documented Standard Operating Procedure (SOP),
                by people who are thoroughly trained and accountable.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="relative rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
                <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                  +
                </div>
                <div className="flex items-start gap-3">
                  <Quote className="size-6 shrink-0 text-sky-400" />
                  <div>
                    <p className="text-xs italic leading-relaxed text-slate-200 sm:text-sm">
                      &ldquo;A property is only as good as the people who run it
                      every day. We don&apos;t subcontract that responsibility —
                      we own it.&rdquo;
                    </p>
                    <p className="mt-3 font-mono text-xs font-semibold uppercase text-sky-400">
                      Subhani Abdul, Founder — {SITE.legalName}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderStory;
