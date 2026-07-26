"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

const word = {
  hidden: { opacity: 0, y: "0.6em", rotateX: 40 },
  show: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    transition: { duration: 0.7, ease: EASE_PREMIUM },
  },
};

export default function TextReveal({
  text,
  as = "span",
  className,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("[perspective:1000px]", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px 0px -60px 0px" }}
      variants={container}
      transition={{ delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          className="inline-block will-change-transform"
          aria-hidden="true"
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
