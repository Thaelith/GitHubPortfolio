"use client";

import { motion } from "framer-motion";

type Props = { featured?: boolean };

export function TenantKitVisual({ featured }: Props) {
  const maxW = featured ? "max-w-[520px]" : "max-w-[380px]";

  return (
    <motion.div
      className={`w-full ${maxW} p-3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="rounded border border-outline-variant bg-surface-lowest p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase text-primary">Tenants</span>
          <div className="flex items-center gap-1.5">
            <span className="h-5 w-5 flex items-center justify-center rounded border border-primary/40 bg-primary/10">
              <span className="text-[8px] font-mono text-primary">RB</span>
            </span>
            <span className="text-[10px] font-mono text-on-surface-variant/60">Active</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Alpha", "Beta", "Gamma", "Delta", "Epsilon", ""].map((name, i) =>
            name ? (
              <motion.div
                key={name}
                className="flex items-center justify-center rounded border border-outline-variant bg-surface-high px-2 py-2.5"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="text-[9px] font-mono text-on-surface-variant">
                  {name}
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="flex items-center justify-center rounded border border-dashed border-outline-variant/40 px-2 py-2.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-[11px] text-outline-variant/40">+</span>
              </motion.div>
            )
          )}
        </div>
        <div className="mt-4 flex items-center gap-4 border-t border-outline-variant pt-2.5 text-[10px] font-mono text-on-surface-variant/50">
          <span>Audit log: on</span>
          <span>Sessions: 3</span>
        </div>
      </div>
    </motion.div>
  );
}
