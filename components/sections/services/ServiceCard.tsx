import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import IconBadge from "@/components/ui/IconBadge";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group glass glass-border flex h-full flex-col justify-between gap-8 rounded-3xl p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:bg-white/[0.05]"
    >
      <div className="flex items-start justify-between">
        <IconBadge icon={service.icon} size="lg" />
        <ArrowUpRight
          className="size-5 text-muted transition-all duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-300"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
      <div className="flex items-center justify-between border-t border-surface-border pt-5 font-mono text-xs uppercase tracking-wider text-primary-300">
        <span>{service.stat.value}</span>
        <span className="text-muted">{service.stat.label}</span>
      </div>
    </Link>
  );
}
