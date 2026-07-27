import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { Service } from "@/types";
import {
  Activity,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export const ServiceDetailHero = ({ service }: { service: Service }) => {
  const IconComponent = service.icon;

  return (
    <section className="relative w-full overflow-hidden border-b border-slate-800 bg-slate-950 pb-20 pt-36 sm:pb-24 sm:pt-44">
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Radial Glow */}
      <div className="pointer-events-none absolute -left-20 top-1/3 size-[30rem] bg-sky-600/10 blur-[160px]" />

      <Container className="relative z-10">
        {/* Breadcrumb Bar */}
        <div className="mb-8 flex items-center gap-2 font-mono text-xs text-slate-400">
          <Link
            href="/services"
            className="transition-colors hover:text-sky-400"
          >
            SERVICES
          </Link>
          <ChevronRight
            className="size-3.5 text-slate-600"
            aria-hidden="true"
          />
          <span className="text-sky-400 font-semibold uppercase">
            {service.shortName || service.name}
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Main Content */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md">
              <Activity className="size-3.5 text-sky-400" />
              <span>{service.tagline || "INTEGRATED PROPERTY CAPABILITY"}</span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {service.name}
            </h1>

            <p className="max-w-xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
              {service.heroDescription || service.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                href="/contact"
                size="lg"
                className="group rounded-sm bg-sky-400 font-semibold text-slate-950 hover:bg-sky-300"
              >
                <span>Deploy This Division</span>
                <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="rounded-sm border-slate-800 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
              >
                Explore All Divisions
              </Button>
            </div>
          </div>

          {/* Right Column: Telemetry Metric Box */}
          <div className="relative rounded-sm border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl lg:col-span-5">
            <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>
            <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] text-sky-500/40">
              +
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex size-16 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400">
                {IconComponent && typeof IconComponent === "function" ? (
                  <IconComponent className="size-8" />
                ) : (
                  <ShieldCheck className="size-8" />
                )}
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                {"// DIVISION BASELINE"}
              </span>
              <p className="mt-2 font-mono text-4xl font-extrabold text-white sm:text-5xl">
                {service.stat?.value || "99.9%"}
              </p>
              <p className="mt-2 font-mono text-xs uppercase text-sky-400">
                {service.stat?.label || "Target SLA Guarantee"}
              </p>

              <div className="mt-6 w-full border-t border-slate-800/80 pt-4 font-mono text-[11px] text-slate-500">
                STANDARDIZED SOP PROTOCOL VERIFIED
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
