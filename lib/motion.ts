import type { Variants } from "framer-motion";

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// Variants intentionally hold only visual state (no per-variant transition)
// so the `transition` prop on the animating component remains the single
// source of truth for duration/ease/delay — see components/ui/Reveal.tsx.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1 },
};

export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" };
