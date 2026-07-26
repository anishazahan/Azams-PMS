import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass glass-border rounded-3xl p-8",
        hover &&
          "transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:bg-white/[0.05]",
        className
      )}
    >
      {children}
    </div>
  );
}
