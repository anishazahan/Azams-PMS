import { STATS } from "@/data/stats";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function StatsBand() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="glass glass-border grid grid-cols-2 gap-10 rounded-4xl p-10 sm:p-14 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-3">
                <stat.icon className="size-5 text-primary-300" aria-hidden="true" />
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
