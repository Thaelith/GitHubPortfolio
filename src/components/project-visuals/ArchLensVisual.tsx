"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { featured?: boolean };

export function ArchLensVisual({ featured }: Props) {
  const prefersReduced = useReducedMotion();
  const maxW = featured ? "max-w-[580px]" : "max-w-[480px]";
  const canvasW = featured ? 480 : 392;
  const canvasH = featured ? 210 : 192;

  const nodes = [
    { id: "client", label: "Client", left: "3%", top: "10%", width: 58, height: 30 },
    { id: "api", label: "API", left: "28%", top: "6%", width: 42, height: 30, selected: true },
    { id: "auth", label: "Auth", left: "18%", top: "42%", width: 44, height: 30 },
    { id: "db", label: "DB", left: "52%", top: "6%", width: 38, height: 30 },
    { id: "queue", label: "Queue", left: "46%", top: "42%", width: 48, height: 30 },
    { id: "worker", label: "Worker", left: "72%", top: "26%", width: 54, height: 30 },
    { id: "cache", label: "Cache", left: "68%", top: "58%", width: 50, height: 30 },
  ];

  const edges = [
    { from: "client", to: "api", label: "HTTPS" },
    { from: "api", to: "auth", label: "JWT" },
    { from: "api", to: "db", label: "SQL" },
    { from: "api", to: "queue", label: "push" },
    { from: "queue", to: "worker", label: "pull" },
    { from: "worker", to: "cache", label: "R/W" },
    { from: "auth", to: "db", label: "" },
  ];

  return (
    <motion.div
      className={`w-full ${maxW} p-3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="overflow-hidden rounded border border-outline-variant bg-surface-lowest">
        <div className="flex items-center gap-2 border-b border-outline-variant px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-on-surface-variant/30" />
          <span className="h-2 w-2 rounded-full bg-on-surface-variant/30" />
          <span className="h-2 w-2 rounded-full bg-primary/40" />
          <span className="ml-1 font-mono text-[10px] uppercase tracking-[0.08em] text-on-surface-variant/60">
            archlens — system design
          </span>
        </div>

        <div className="grid grid-cols-[1fr_72px]">
          <div
            className="relative"
            style={{
              height: canvasH,
              backgroundImage:
                "radial-gradient(circle, rgba(173,198,255,0.04) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <svg className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
              <defs>
                <marker id="arrow-small-a" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
                  <polygon points="0,0 6,2.5 0,5" fill="#adc6ff" fillOpacity="0.5" />
                </marker>
              </defs>
              {edges.map((edge) => {
                const fromNode = nodes.find((n) => n.id === edge.from)!;
                const toNode = nodes.find((n) => n.id === edge.to)!;
                const fx = parseFloat(fromNode.left) / 100 * canvasW + fromNode.width / 2;
                const fy = parseFloat(fromNode.top) / 100 * canvasH + fromNode.height / 2;
                const tx = parseFloat(toNode.left) / 100 * canvasW + toNode.width / 2;
                const ty = parseFloat(toNode.top) / 100 * canvasH + toNode.height / 2;
                const key = `${edge.from}-${edge.to}`;
                const isSelectedEdge =
                  (fromNode.selected || toNode.selected) &&
                  (edge.from === "api" || edge.to === "api");
                return (
                  <g key={key}>
                    <motion.line
                      x1={fx} y1={fy} x2={tx} y2={ty}
                      stroke={isSelectedEdge ? "#adc6ff" : "#424754"}
                      strokeOpacity={isSelectedEdge ? 0.6 : 0.35}
                      strokeWidth={isSelectedEdge ? 1.5 : 1}
                      markerEnd={isSelectedEdge ? "url(#arrow-small-a)" : undefined}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                    {edge.label ? (
                      <motion.text
                        x={(fx + tx) / 2 + 4}
                        y={(fy + ty) / 2 - 4}
                        className="fill-on-surface-variant/50 font-mono text-[8px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                      >
                        {edge.label}
                      </motion.text>
                    ) : null}
                  </g>
                );
              })}
            </svg>

            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                className={`absolute flex items-center justify-center rounded border font-mono text-[10px] leading-none ${
                  node.selected
                    ? "border-primary bg-primary/12 text-primary ring-1 ring-primary/15"
                    : "border-outline-variant bg-surface-high text-on-surface-variant"
                }`}
                style={{
                  left: node.left,
                  top: node.top,
                  width: node.width,
                  height: node.height,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 250 }}
                whileHover={node.selected ? { scale: 1.08, borderColor: "#adc6ff" } : { scale: 1.05 }}
              >
                {node.selected ? (
                  <motion.span
                    animate={
                      prefersReduced
                        ? { opacity: 1 }
                        : { opacity: [0.6, 1, 0.6] }
                    }
                    transition={
                      prefersReduced
                        ? { duration: 0.3 }
                        : { duration: 2.5, repeat: Infinity }
                    }
                  >
                    {node.label}
                  </motion.span>
                ) : (
                  node.label
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-l border-outline-variant bg-surface-low/60 px-2.5 py-2.5"
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-on-surface-variant/50 mb-2.5">
              Inspector
            </p>
            <div className="space-y-2">
              <div>
                <span className="font-mono text-[8px] text-on-surface-variant/40">type</span>
                <div className="font-mono text-[9px] text-primary">service</div>
              </div>
              <div>
                <span className="font-mono text-[8px] text-on-surface-variant/40">status</span>
                <div className="font-mono text-[9px] text-green-400/60">stable</div>
              </div>
              <div>
                <span className="font-mono text-[8px] text-on-surface-variant/40">links</span>
                <div className="font-mono text-[9px] text-on-surface-variant/60">4</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
