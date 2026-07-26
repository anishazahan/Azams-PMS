import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex gap-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
