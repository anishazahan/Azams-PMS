"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function useCounter(target: number, duration = 1800) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration]);

  return { ref, value };
}
