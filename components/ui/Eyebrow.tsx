import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-surface-border bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-primary-300",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-accent-400" aria-hidden="true" />
      {children}
    </span>
  );
}
