"use client";

import { useCounter } from "@/hooks/useCounter";
import { formatNumber } from "@/lib/utils";

export default function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const { ref, value: animated } = useCounter(value);

  return (
    <div
      ref={ref}
      className="font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
    >
      {formatNumber(animated)}
      {suffix}
    </div>
  );
}
