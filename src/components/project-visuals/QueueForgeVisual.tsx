"use client";

import { motion } from "framer-motion";

type Props = { featured?: boolean };

export function QueueForgeVisual({ featured }: Props) {
  const maxW = featured ? "max-w-[540px]" : "max-w-[400px]";

  return (
    <motion.div
      className={`w-full ${maxW} p-3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="rounded border border-outline-variant bg-surface-lowest p-5">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-mono text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500/70" />
            Workers: 4
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary/70" />
            Queue: 7
          </span>
        </div>
        <div className="space-y-2 mb-4">
          {[
            { id: "J-1042", status: "running", w: 2, p: 65 },
            { id: "J-1041", status: "running", w: 1, p: 30 },
            { id: "J-1040", status: "pending", w: 0, p: 0 },
            { id: "J-1039", status: "complete", w: 0, p: 100 },
          ].map((job) => (
            <div key={job.id} className="flex items-center gap-2 text-[11px] font-mono">
              <span className="w-16 text-on-surface-variant">{job.id}</span>
              <span
                className={`w-16 text-[10px] ${
                  job.status === "running"
                    ? "text-primary"
                    : job.status === "complete"
                      ? "text-green-500/60"
                      : "text-on-surface-variant/50"
                }`}
              >
                {job.status}
              </span>
              <div className="flex-1 h-1.5 rounded-sm bg-outline-variant">
                <motion.div
                  className="h-full rounded-sm bg-primary/70"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${job.p}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 border-t border-outline-variant pt-2.5 text-[10px] font-mono text-on-surface-variant/60">
          <span>Retry: 0</span>
          <span>DLQ: 1</span>
          <span>Avg: 234ms</span>
        </div>
      </div>
    </motion.div>
  );
}
