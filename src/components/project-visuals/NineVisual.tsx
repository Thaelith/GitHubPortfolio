"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { featured?: boolean };

export function NineVisual({ featured }: Props) {
  const prefersReduced = useReducedMotion();
  const maxW = featured ? "max-w-[520px]" : "max-w-[360px]";

  return (
    <motion.div
      className={`w-full ${maxW} p-3 font-mono`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="rounded border border-outline-variant bg-surface-lowest p-5">
        <div className="mb-4 flex items-center gap-2 border-b border-outline-variant pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-tertiary" />
          <span className="h-2.5 w-2.5 rounded-full bg-tertiary/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-tertiary/30" />
          <span className="ml-2 text-[11px] uppercase text-on-surface-variant">calibration.exe</span>
        </div>
        <div className="mb-4 flex items-end justify-between">
          <motion.span
            className="text-5xl font-semibold text-on-surface"
            initial={{ scale: 0.8 }}
            animate={prefersReduced ? { scale: 1 } : { scale: [0.95, 1.02, 0.98] }}
            transition={prefersReduced ? { duration: 0.3 } : { duration: 2, repeat: Infinity }}
          >
            99
          </motion.span>
          <span className="pb-1 text-xl text-tertiary">%</span>
        </div>
        <div className="h-2.5 rounded-sm bg-outline-variant">
          <motion.div
            className="h-2.5 rounded-sm bg-tertiary"
            initial={{ width: "0%" }}
            whileInView={{ width: "99%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
        <div className="mt-4 text-[11px] uppercase tracking-[0.08em] text-tertiary/80">
          D̵O̸ ̵N̴O̶T̷ ̵T̶U̶R̸N̷ ̷O̵F̵F̶
        </div>
      </div>
    </motion.div>
  );
}
