import { ServiceCard } from "@/components/sections/services/ServiceCard";
import Container from "@/components/ui/Container";
import { SERVICES } from "@/data/services";
import { SlidersHorizontal } from "lucide-react";

export const RelatedServices = ({ currentSlug }: { currentSlug: string }) => {
  const related = SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100 sm:py-32">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <SlidersHorizontal className="size-3.5 text-sky-400" />
            <span>CROSS-DIVISION INTEGRATION</span>
          </div>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Related Property Services.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};
