import { cn } from "@/lib/utils";

export function MeshBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-mesh-hero",
        className
      )}
    />
  );
}

export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]",
        className
      )}
    />
  );
}

export function FloatingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl animate-float",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}
