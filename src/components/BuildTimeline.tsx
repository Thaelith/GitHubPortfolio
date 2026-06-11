"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { Code, Gamepad2, GraduationCap, Layers, Rocket } from "lucide-react";

type Milestone = {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const milestones: Milestone[] = [
  {
    year: "Foundation",
    title: "Computer Engineering",
    description: "Building core engineering foundations — data structures, algorithms, systems programming, and software design principles. Learning to think in systems.",
    icon: GraduationCap,
  },
  {
    year: "Mobile Arc",
    title: "Android Development",
    description: "Focused development on native Android applications with Kotlin and Java. Adopting MVVM architecture, Firebase integration, and clean mobile design patterns.",
    icon: SmartphoneIcon,
  },
  {
    year: "EcoTracker",
    title: "EcoTracker Mobile App",
    description: "Built a barcode-scanning environmental impact app. Combined Android development with Firebase, product databases, and AI-assisted logic for real-world impact estimation.",
    icon: Code,
  },
  {
    year: "99%",
    title: "99% Game Release",
    description: "Published a hostile desktop calibration game on itch.io using Godot. Explored psychological tension through system UI conventions and player expectation subversion.",
    icon: Gamepad2,
  },
  {
    year: "Expansion",
    title: "Architecture & Backend",
    description: "Built ArchLens (interactive system design visualizer), QueueForge (distributed job queue), and LinkRoom-Desktop (Tauri communication app). Broadened into full-stack, SaaS, and backend systems.",
    icon: Layers,
  },
  {
    year: "Now",
    title: "Portfolio & Internship",
    description: "Seeking Android development and software engineering internships. Continuing to deepen mobile expertise, build tools, and contribute to meaningful software projects.",
    icon: Rocket,
  },
];

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

export function BuildTimeline() {
  return (
    <section id="timeline" className="section-shell">
      <div className="container-shell">
        <SectionTitle eyebrow="Developer Journey" title="Build Timeline" />

        <div className="relative">
          <div className="absolute left-[20px] top-3 bottom-3 w-px bg-outline-variant/70 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              const isLeft = i % 2 === 0;
              const isLast = i === milestones.length - 1;

              return (
                <motion.div
                  key={milestone.title}
                  className={`relative flex flex-col gap-6 md:flex-row md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div
                      className={`subtle-panel rounded-lg p-5 md:p-6 ${
                        isLast
                          ? "border-primary/50 bg-surface-container"
                          : "bg-surface-lowest"
                      }`}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                          isLast ? "text-primary" : "text-primary/70"
                        }`}>
                          {milestone.year}
                        </span>
                        {isLast ? (
                          <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        ) : null}
                      </div>
                      <h3 className="font-display text-base font-semibold text-on-surface">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        isLast
                          ? "border-primary bg-primary/15 text-primary"
                          : "border-outline-variant bg-surface-low text-on-surface-variant"
                      }`}
                      whileInView={{ scale: [0.8, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.15 }}
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 md:px-8" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
