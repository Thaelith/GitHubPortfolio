"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(173,198,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(173,198,255,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        className="absolute -top-[40%] left-1/2 h-[140vh] w-[90vw] max-w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]"
        animate={{ opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
