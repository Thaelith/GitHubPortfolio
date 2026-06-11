"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

const directionMap = {
  up: { y: 24, x: 0 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
};

export function MotionSection({ children, className = "", delay = 0, direction = "up" }: MotionSectionProps) {
  const offset = directionMap[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
