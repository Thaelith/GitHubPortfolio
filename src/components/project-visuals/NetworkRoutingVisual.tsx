"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = { featured?: boolean };

export function NetworkRoutingVisual({ featured }: Props) {
  const prefersReduced = useReducedMotion();
  const maxW = featured ? "max-w-[580px]" : "max-w-[480px]";
  const canvasW = featured ? 440 : 360;
  const canvasH = featured ? 155 : 140;

  const nodes = [
    { id: "S", label: "S", cx: 18, cy: 38, r: 16 },
    { id: "R1", label: "R1", cx: 40, cy: 24, r: 16 },
    { id: "R2", label: "R2", cx: 18, cy: 72, r: 16 },
    { id: "R3", label: "R3", cx: 40, cy: 72, r: 16 },
    { id: "R4", label: "R4", cx: 70, cy: 24, r: 16 },
    { id: "D", label: "D", cx: 70, cy: 72, r: 16 },
  ];

  const allEdges = [
    { from: "S", to: "R1", w: 3 },
    { from: "S", to: "R2", w: 5 },
    { from: "R1", to: "R4", w: 2 },
    { from: "R2", to: "R3", w: 7 },
    { from: "R3", to: "D", w: 1 },
    { from: "R4", to: "D", w: 4 },
    { from: "R1", to: "R3", w: 2 },
    { from: "R2", to: "R1", w: 6 },
  ];

  const shortestPath = ["S", "R1", "R3", "D"];
  const highlightedEdges = allEdges.filter(
    (e) =>
      shortestPath.includes(e.from) &&
      shortestPath.includes(e.to) &&
      Math.abs(shortestPath.indexOf(e.from) - shortestPath.indexOf(e.to)) === 1
  );

  const chartPoints = featured
    ? "0,22 4,17 8,12 12,8 16,5 20,3 24,7 28,11 32,9 36,8 40,7 44,6 48,5"
    : "0,20 3,16 6,12 9,8 12,5 15,3 18,6 21,10 24,8 27,7 30,6 33,5 36,4.5";

  const pktDot = (edge: { from: string; to: string }, ei: number) => {
    const fromNode = nodes.find((n) => n.id === edge.from)!;
    const toNode = nodes.find((n) => n.id === edge.to)!;
    const midX = (fromNode.cx + toNode.cx) / 2;
    const midY = (fromNode.cy + toNode.cy) / 2;
    return (
      <motion.circle
        key={`pkt-${edge.from}-${edge.to}`}
        cx={midX + 3} cy={midY} r={2}
        fill="#adc6ff" fillOpacity="0.8"
        animate={
          prefersReduced
            ? { opacity: 0.7 }
            : { opacity: [0.2, 0.9, 0.2] }
        }
        transition={
          prefersReduced
            ? { duration: 0.3 }
            : { duration: 1.8, repeat: Infinity, delay: ei * 0.4 }
        }
      />
    );
  };

  return (
    <motion.div
      className={`w-full ${maxW} p-3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="overflow-hidden rounded border border-outline-variant bg-surface-lowest">
        <div className="flex items-center justify-between border-b border-outline-variant px-4 py-2.5">
          <div className="flex items-center gap-2">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-green-500/70"
              animate={
                prefersReduced
                  ? { opacity: 1 }
                  : { opacity: [0.5, 1, 0.5] }
              }
              transition={
                prefersReduced
                  ? { duration: 0.3 }
                  : { duration: 1.5, repeat: Infinity }
              }
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-on-surface-variant/60">
              Network Simulator
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[9px] text-on-surface-variant/40">
            <span>TCP Reno</span>
            <span>Dijkstra</span>
          </div>
        </div>

        <div
          className="relative border-b border-outline-variant"
          style={{ height: canvasH }}
        >
          <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${canvasW} ${canvasH}`}>
            <defs>
              <marker id="arrow-net-n" markerWidth="5" markerHeight="4" refX="4.5" refY="2" orient="auto">
                <polygon points="0,0 5,2 0,4" fill="#adc6ff" fillOpacity="0.6" />
              </marker>
              <marker id="arrow-dim-n" markerWidth="5" markerHeight="4" refX="4.5" refY="2" orient="auto">
                <polygon points="0,0 5,2 0,4" fill="#424754" fillOpacity="0.5" />
              </marker>
            </defs>

            {allEdges.map((edge) => {
              const fromNode = nodes.find((n) => n.id === edge.from)!;
              const toNode = nodes.find((n) => n.id === edge.to)!;
              const isHighlighted = highlightedEdges.some(
                (he) =>
                  (he.from === edge.from && he.to === edge.to) ||
                  (he.from === edge.to && he.to === edge.from)
              );

              const adjX = fromNode.cx + (toNode.cx - fromNode.cx) * 0.22;
              const adjY = fromNode.cy + (toNode.cy - fromNode.cy) * 0.22;
              const adjTX = fromNode.cx + (toNode.cx - fromNode.cx) * 0.78;
              const adjTY = fromNode.cy + (toNode.cy - fromNode.cy) * 0.78;

              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <motion.line
                    x1={adjX} y1={adjY}
                    x2={adjTX} y2={adjTY}
                    stroke={isHighlighted ? "#adc6ff" : "#424754"}
                    strokeOpacity={isHighlighted ? 0.5 : 0.3}
                    strokeWidth={isHighlighted ? 1.6 : 1}
                    strokeDasharray={isHighlighted ? undefined : "3 2"}
                    markerEnd={isHighlighted ? "url(#arrow-net-n)" : "url(#arrow-dim-n)"}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                  <motion.text
                    x={(adjX + adjTX) / 2 + 2}
                    y={(adjY + adjTY) / 2 - 4}
                    className={isHighlighted ? "fill-primary/70 font-mono text-[8px]" : "fill-on-surface-variant/35 font-mono text-[8px]"}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {edge.w}
                  </motion.text>
                </g>
              );
            })}

            {highlightedEdges.map((edge, ei) => pktDot(edge, ei))}
          </svg>

          {nodes.map((node, i) => {
            const onPath = shortestPath.includes(node.id);
            const isSource = node.id === "S";
            const isDest = node.id === "D";
            return (
              <motion.div
                key={node.id}
                className={`absolute flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[9px] leading-none ${
                  isSource
                    ? "border-green-500/60 bg-green-500/12 text-green-400"
                    : isDest
                      ? "border-tertiary/60 bg-tertiary/12 text-tertiary"
                      : onPath
                        ? "border-primary/60 bg-primary/15 text-primary"
                        : "border-outline-variant bg-surface-high text-on-surface-variant"
                }`}
                style={{
                  left: `${(node.cx / canvasW) * 100}%`,
                  top: `${(node.cy / canvasH) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 250 }}
              >
                {onPath && !isSource && !isDest ? (
                  <motion.span
                    animate={
                      prefersReduced
                        ? { opacity: 1 }
                        : { opacity: [0.6, 1, 0.6] }
                    }
                    transition={
                      prefersReduced
                        ? { duration: 0.3 }
                        : { duration: 2, repeat: Infinity, delay: i * 0.2 }
                    }
                  >
                    {node.label}
                  </motion.span>
                ) : (
                  node.label
                )}
              </motion.div>
            );
          })}

        </div>

        <div className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-primary/70">
                Congestion Window (cwnd)
              </span>
            </div>
            <svg className="h-7 w-full overflow-visible" viewBox="0 0 100 28" preserveAspectRatio="none">
              <motion.polyline
                fill="none"
                stroke="#adc6ff"
                strokeOpacity="0.7"
                strokeWidth="1.2"
                points={chartPoints}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.circle
                cx={featured ? "48" : "36"} cy="5" r="2"
                fill="#adc6ff" fillOpacity="0.8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              />
            </svg>
          </div>
          <div className="space-y-1 text-right">
            <div className="font-mono text-[8px] text-primary/60">path locked</div>
            <div className="font-mono text-[8px] text-tertiary/60">cwnd active</div>
            <div className="font-mono text-[8px] text-green-400/50">flow ok</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
