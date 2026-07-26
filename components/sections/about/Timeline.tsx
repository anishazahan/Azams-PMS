import { TIMELINE } from "@/data/timeline";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Timeline() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our journey"
          title="Two decades of compounding trust."
          align="center"
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/60 via-surface-border to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />
          <ol className="flex flex-col gap-12">
            {TIMELINE.map((item, i) => (
              <li key={item.year} className="relative">
                <Reveal
                  delay={i * 0.08}
                  className={`flex flex-col gap-2 pl-8 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  <span className="font-mono text-sm font-medium text-primary-300">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Reveal>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 size-4 rounded-full border-2 border-primary-400 bg-background sm:left-1/2 sm:-translate-x-1/2"
                />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
