import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-primary-400 hover:text-white shadow-soft",
  secondary: "bg-primary-500 text-white hover:bg-primary-400 shadow-glow",
  outline:
    "border border-surface-border bg-white/[0.03] text-foreground hover:bg-white/[0.08] hover:border-white/20",
  ghost: "text-foreground hover:bg-white/[0.06]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

const base =
  "group/btn relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-premium focus-visible:outline-none active:scale-[0.97] whitespace-nowrap";

export default function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  href,
  external,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-premium group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href && external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
