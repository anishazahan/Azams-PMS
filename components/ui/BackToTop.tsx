"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "@/lib/lenis";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 560);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => scrollToTop()}
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 flex size-11 items-center justify-center rounded-sm border border-slate-800 bg-slate-950/90 text-sky-400 shadow-2xl backdrop-blur-xl transition-colors hover:border-sky-500/50 hover:bg-slate-900 sm:bottom-8 sm:right-8"
        >
          <span className="pointer-events-none absolute inset-0 rounded-sm border border-sky-500/20 animate-pulse" />
          <ArrowUp className="size-4" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
