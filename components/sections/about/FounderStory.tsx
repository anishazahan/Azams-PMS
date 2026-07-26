import { Anchor, ShieldCheck } from "lucide-react";
import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import GlassCard from "@/components/ui/GlassCard";

const badges = [
  { icon: Anchor, label: "Indian Navy Veteran" },
  { icon: ShieldCheck, label: "Certified Security Practitioner" },
];

export default function FounderStory() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-4xl border border-surface-border bg-gradient-to-br from-primary-500/15 via-surface to-accent-500/10">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
              />
              <span className="relative font-mono text-8xl font-semibold text-foreground/90">
                SA
              </span>
              <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3">
                {badges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="glass glass-border flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium text-foreground"
                  >
                    <Icon className="size-4 text-primary-300" aria-hidden="true" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow>Our founder</Eyebrow>
            </Reveal>
            <TextReveal
              as="h2"
              text="Built by a veteran, run like an operation."
              className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
            />
            <Reveal delay={0.15} className="flex flex-col gap-4 text-lg leading-relaxed text-muted">
              <p>
                Mr. Subhani Abdul founded {SITE.legalName} in {SITE.foundedYear}{" "}
                after a career in the Indian Navy, bringing military-grade
                discipline to a category most providers treated as an
                afterthought.
              </p>
              <p>
                As a Certified Security Practitioner, he built Amaze around a
                simple premise: every service — security, housekeeping,
                technical, landscaping — should be delivered in-house, to one
                documented standard, by people who are trained and
                accountable.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <GlassCard hover={false} className="p-6">
                <p className="text-sm italic leading-relaxed text-foreground/80">
                  &ldquo;A property is only as good as the people who run it
                  every day. We don&apos;t subcontract that responsibility —
                  we own it.&rdquo;
                </p>
                <p className="mt-3 text-xs font-medium text-muted">
                  Subhani Abdul, Founder — {SITE.legalName}
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
