"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { featured?: boolean };

export function LinkRoomVisual({ featured }: Props) {
  const prefersReduced = useReducedMotion();
  const maxW = featured ? "max-w-[520px]" : "max-w-[380px]";

  return (
    <motion.div
      className={`w-full ${maxW} p-3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="rounded border border-outline-variant bg-surface-lowest p-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <span className="font-mono text-[11px] uppercase text-on-surface-variant">Online</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "general", active: true, count: 12 },
            { name: "dev-chat", active: true, count: 5 },
            { name: "voice-lounge", active: false, count: 3 },
          ].map((room) => (
            <div
              key={room.name}
              className={`flex items-center justify-between rounded px-3 py-2 font-mono text-[12px] ${
                room.active
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface-variant/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-on-surface-variant/50">#</span>
                {room.name}
              </div>
              <div className="flex items-center gap-1.5">
                {room.active ? (
                  <motion.span
                    className="block h-1.5 w-1.5 rounded-full bg-green-500/80"
                    animate={
                      prefersReduced
                        ? { opacity: 1 }
                        : { opacity: [0.6, 1, 0.6] }
                    }
                    transition={
                      prefersReduced
                        ? { duration: 0.3 }
                        : { duration: 2, repeat: Infinity }
                    }
                  />
                ) : null}
                <span className="text-on-surface-variant/40">{room.count}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-1.5 border-t border-outline-variant pt-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-7 w-7 rounded-full border border-outline-variant bg-surface-high flex items-center justify-center"
            >
              <span className="text-[9px] font-mono text-on-surface-variant">
                {String.fromCharCode(65 + i)}
              </span>
            </div>
          ))}
          <span className="ml-1 text-[11px] font-mono text-on-surface-variant/60">+5</span>
        </div>
      </div>
    </motion.div>
  );
}
