import { CLIENT_SECTORS } from "@/data/clients";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ClientSectorGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Who we serve"
          title="200+ partners across every property type."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENT_SECTORS.map((client, i) => (
            <Reveal
              key={client.name}
              delay={(i % 5) * 0.06}
              className="flex flex-col items-center gap-3 rounded-3xl border border-surface-border bg-white/[0.02] px-4 py-8 text-center transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 font-mono text-lg font-semibold text-primary-200">
                {client.name.charAt(0)}
              </span>
              <span className="text-sm font-medium text-foreground/90">
                {client.name}
              </span>
              <span className="text-xs text-muted">{client.sector}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
