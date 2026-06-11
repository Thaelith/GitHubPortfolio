"use client";

import { motion } from "framer-motion";
import { EcoTrackerVisual } from "@/components/project-visuals/EcoTrackerVisual";
import { NineVisual } from "@/components/project-visuals/NineVisual";
import { ArchLensVisual } from "@/components/project-visuals/ArchLensVisual";
import { LinkRoomVisual } from "@/components/project-visuals/LinkRoomVisual";
import { QueueForgeVisual } from "@/components/project-visuals/QueueForgeVisual";
import { TenantKitVisual } from "@/components/project-visuals/TenantKitVisual";
import { NetworkRoutingVisual } from "@/components/project-visuals/NetworkRoutingVisual";
import { DefaultVisual } from "@/components/project-visuals/DefaultVisual";

type ProjectVisualProps = {
  title: string;
  featured?: boolean;
};

export function ProjectVisual({ title, featured }: ProjectVisualProps) {
  return (
    <motion.div
      className={`grid place-items-center overflow-hidden bg-surface-container ${
        featured ? "aspect-[16/9] md:aspect-auto" : "aspect-[16/7]"
      }`}
      layout
    >
      <div className="w-full h-full flex items-center justify-center">
        <VisualRouter title={title} featured={featured} />
      </div>
    </motion.div>
  );
}

function VisualRouter({ title, featured }: ProjectVisualProps) {
  const feat = featured ?? false;

  switch (title) {
    case "EcoTracker":
      return <EcoTrackerVisual featured={feat} />;
    case "99%":
      return <NineVisual featured={feat} />;
    case "ArchLens":
      return <ArchLensVisual featured={feat} />;
    case "LinkRoom-Desktop":
      return <LinkRoomVisual featured={feat} />;
    case "QueueForge":
      return <QueueForgeVisual featured={feat} />;
    case "TenantKit-Lite":
      return <TenantKitVisual featured={feat} />;
    case "CSE320-Congestion-Control-Routing":
      return <NetworkRoutingVisual featured={feat} />;
    default:
      return <DefaultVisual featured={feat} />;
  }
}
