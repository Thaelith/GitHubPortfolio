"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
};

export function GlassPanel({ children, className = "", hover = false, delay = 0 }: GlassPanelProps) {
  return (
    <motion.div
      className={`subtle-panel rounded-lg ${hover ? "transition-colors duration-300 ease-out hover:border-primary hover:bg-surface-container" : ""} ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
