import { CLIENT_SECTORS } from "@/data/clients";
import Container from "@/components/ui/Container";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";

export default function TrustBar() {
  return (
    <section className="relative border-y border-surface-border py-12">
      <Container>
        <Reveal className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Trusted across 200+ properties, pan-India
        </Reveal>
      </Container>
      <Marquee>
        {CLIENT_SECTORS.map((client) => (
          <span
            key={client.name}
            className="flex items-center gap-2 rounded-full border border-surface-border bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-muted"
          >
            {client.name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
