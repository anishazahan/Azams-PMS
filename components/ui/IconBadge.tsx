import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function IconBadge({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeMap = {
    sm: { wrap: "size-9 rounded-xl", icon: "size-4" },
    md: { wrap: "size-12 rounded-2xl", icon: "size-5" },
    lg: { wrap: "size-16 rounded-2xl", icon: "size-7" },
  } as const;

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-accent-500/10 text-primary-300 ring-1 ring-inset ring-white/10",
        sizeMap[size].wrap,
        className
      )}
    >
      <Icon className={sizeMap[size].icon} aria-hidden="true" />
    </div>
  );
}
