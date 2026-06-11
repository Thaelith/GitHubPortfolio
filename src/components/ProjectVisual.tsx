"use client";

import { motion } from "framer-motion";

type ProjectVisualProps = {
  title: string;
  featured?: boolean;
};

export function ProjectVisual({ title, featured }: ProjectVisualProps) {
  const visual = getVisual(title);

  return (
    <motion.div
      className={`grid place-items-center overflow-hidden bg-surface-container ${
        featured ? "aspect-[16/9] md:aspect-auto" : "aspect-[16/7]"
      }`}
      layout
    >
      <div className="w-full h-full flex items-center justify-center">
        {visual}
      </div>
    </motion.div>
  );
}

function getVisual(title: string) {
  switch (title) {
    case "EcoTracker":
      return <EcoTrackerVisual />;
    case "99%":
      return <NineVisual />;
    case "ArchLens":
      return <ArchLensVisual />;
    case "LinkRoom-Desktop":
      return <LinkRoomVisual />;
    case "QueueForge":
      return <QueueForgeVisual />;
    case "TenantKit-Lite":
      return <TenantKitVisual />;
    case "CSE320-Congestion-Control-Routing":
      return <NetworkRoutingVisual />;
    default:
      return <DefaultVisual />;
  }
}

function EcoTrackerVisual() {
  return (
    <motion.div
      className="w-full max-w-[380px] p-3"
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
          <div className="grid h-12 w-12 grid-cols-3 gap-px">
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

function NineVisual() {
  return (
    <motion.div
      className="w-full max-w-[360px] p-3 font-mono"
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
            animate={{ scale: [0.95, 1.02, 0.98] }}
            transition={{ duration: 2, repeat: Infinity }}
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

function ArchLensVisual() {
  const canvasW = 392;
  const canvasH = 192;

  const nodes = [
    { id: "client", label: "Client", left: "3%", top: "10%", width: 58, height: 30 },
    { id: "api", label: "API", left: "28%", top: "6%", width: 42, height: 30, selected: true },
    { id: "auth", label: "Auth", left: "18%", top: "42%", width: 44, height: 30 },
    { id: "db", label: "DB", left: "50%", top: "6%", width: 38, height: 30 },
    { id: "queue", label: "Queue", left: "46%", top: "42%", width: 48, height: 30 },
    { id: "worker", label: "Worker", left: "72%", top: "26%", width: 54, height: 30 },
    { id: "cache", label: "Cache", left: "68%", top: "56%", width: 50, height: 30 },
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
      className="w-full max-w-[480px] p-3"
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
                <marker id="arrow-small" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
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
                      markerEnd={isSelectedEdge ? "url(#arrow-small)" : undefined}
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
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
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

function LinkRoomVisual() {
  return (
    <motion.div
      className="w-full max-w-[380px] p-3"
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
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
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

function QueueForgeVisual() {
  return (
    <motion.div
      className="w-full max-w-[400px] p-3"
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

function TenantKitVisual() {
  return (
    <motion.div
      className="w-full max-w-[380px] p-3"
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

function NetworkRoutingVisual() {
  const canvasW = 360;
  const canvasH = 140;

  const nodes = [
    { id: "S", label: "S", cx: 18, cy: 35, r: 16 },
    { id: "R1", label: "R1", cx: 40, cy: 22, r: 16 },
    { id: "R2", label: "R2", cx: 18, cy: 70, r: 16 },
    { id: "R3", label: "R3", cx: 40, cy: 70, r: 16 },
    { id: "R4", label: "R4", cx: 68, cy: 22, r: 16 },
    { id: "D", label: "D", cx: 68, cy: 70, r: 16 },
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

  const chartPoints = "0,20 3,16 6,12 9,8 12,5 15,3 18,6 21,10 24,8 27,7 30,6 33,5 36,4.5";

  return (
    <motion.div
      className="w-full max-w-[480px] p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="overflow-hidden rounded border border-outline-variant bg-surface-lowest">
        <div className="flex items-center justify-between border-b border-outline-variant px-4 py-2.5">
          <div className="flex items-center gap-2">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-green-500/70"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
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
              <marker id="arrow-net" markerWidth="5" markerHeight="4" refX="4.5" refY="2" orient="auto">
                <polygon points="0,0 5,2 0,4" fill="#adc6ff" fillOpacity="0.6" />
              </marker>
              <marker id="arrow-dim" markerWidth="5" markerHeight="4" refX="4.5" refY="2" orient="auto">
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
                    markerEnd={isHighlighted ? "url(#arrow-net)" : "url(#arrow-dim)"}
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

            {highlightedEdges.map((edge, ei) => {
              const fromNode = nodes.find((n) => n.id === edge.from)!;
              const toNode = nodes.find((n) => n.id === edge.to)!;
              const midX = (fromNode.cx + toNode.cx) / 2;
              const midY = (fromNode.cy + toNode.cy) / 2;
              return (
                <motion.circle
                  key={`pkt-${edge.from}-${edge.to}`}
                  cx={midX + 3} cy={midY} r={2}
                  fill="#adc6ff" fillOpacity="0.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.9, 0.2] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: ei * 0.4 }}
                />
              );
            })}
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
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
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
                cx="36" cy="4.5" r="2" fill="#adc6ff" fillOpacity="0.8"
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

function DefaultVisual() {
  return (
    <div className="w-full max-w-[320px] p-3">
      <div className="grid aspect-video place-items-center rounded border border-outline-variant bg-surface-lowest">
        <div className="relative h-36 w-60 max-w-full">
          <div className="absolute left-4 top-3 h-11 w-22 rounded border border-primary/60 bg-primary/8" />
          <div className="absolute right-4 top-5 h-11 w-22 rounded border border-on-surface-variant/40 bg-surface-high" />
          <div className="absolute bottom-4 left-16 h-11 w-22 rounded border border-on-surface-variant/40 bg-surface-high" />
          <div className="absolute left-[84px] top-[50px] h-px w-14 rotate-[24deg] bg-primary/60" />
          <div className="absolute left-[70px] top-[50px] h-px w-14 -rotate-[35deg] bg-primary/60" />
        </div>
      </div>
    </div>
  );
}
