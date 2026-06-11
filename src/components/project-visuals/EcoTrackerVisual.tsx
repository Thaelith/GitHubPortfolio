"use client";

import { motion } from "framer-motion";

type Props = { featured?: boolean };

export function EcoTrackerVisual({ featured }: Props) {
  const maxW = featured ? "max-w-[520px]" : "max-w-[380px]";

  return (
    <motion.div
      className={`w-full ${maxW} p-3`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-lg border border-outline-variant bg-surface-lowest p-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-tertiary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-tertiary">
            SCAN
          </span>
        </div>
        <div className="mb-4 flex items-center gap-4 rounded border border-outline-variant bg-surface-low p-4">
          <div className="grid h-12 w-12 grid-cols-3 gap-px shrink-0">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={
                  i % 2 === 0
                    ? "bg-primary/70"
                    : "bg-on-surface-variant/20"
                }
              />
            ))}
          </div>
          <div className="flex-1">
            <div className="h-2 w-24 rounded-sm bg-primary/70" />
            <div className="mt-2 h-2 w-32 rounded-sm bg-on-surface-variant/25" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
            <span>CO2 Impact</span>
            <span className="text-tertiary">2.4 kg</span>
          </div>
          <div className="h-2 rounded-sm bg-outline-variant">
            <motion.div
              className="h-full w-[62%] rounded-sm bg-tertiary"
              initial={{ width: "0%" }}
              whileInView={{ width: "62%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-on-surface-variant">Level 4</span>
            <motion.span
              className="text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              +120 XP
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
