"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_PREMIUM } from "@/lib/motion";

// Next.js remounts `template.tsx` on every navigation (unlike layout.tsx,
// which persists), so this is the supported place for a per-route enter
// transition without disturbing the persistent Header/Footer.
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}
