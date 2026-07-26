"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_PREMIUM, fadeUp, viewportOnce } from "@/lib/motion";

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  variants = fadeUp,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: "div" | "span" | "li";
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay, duration, ease: EASE_PREMIUM }}
    >
      {children}
    </MotionTag>
  );
}
