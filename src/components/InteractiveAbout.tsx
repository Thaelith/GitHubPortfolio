"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Cpu, Gamepad2, Monitor, Smartphone } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

type EngineeringTab = {
  id: string;
  label: string;
  icon: typeof Smartphone;
  title: string;
  content: string[];
};

const tabs: EngineeringTab[] = [
  {
    id: "mobile",
    label: "Mobile Engineering",
    icon: Smartphone,
    title: "Android & Mobile Development",
    content: [
      "Building native Android applications with Kotlin and Java, following MVVM architecture for maintainable and testable codebases.",
      "Integrating Firebase services — Firestore for real-time data, Authentication for user management, and Cloud Functions for serverless logic.",
      "Designing clean mobile interfaces that respect platform conventions while solving real user needs with practical, reliable features.",
      "Focused on barcode scanning, environmental impact estimation, and data-driven mobile experiences.",
    ],
  },
  {
    id: "game",
    label: "Game Systems",
    icon: Gamepad2,
    title: "Game Development & Interaction",
    content: [
      "Developing games with Godot Engine and GDScript, approaching mechanics and interaction design with an engineering mindset.",
      "Published 99% on itch.io — a hostile desktop calibration game that plays with player expectations and system UI conventions.",
      "Designing clear constraints, careful feedback loops, and purposeful implementation that prioritizes player experience.",
      "Exploring game systems as a medium for creative problem-solving and technical expression.",
    ],
  },
  {
    id: "software",
    label: "Practical Software",
    icon: Monitor,
    title: "Full-Stack & Tools",
    content: [
      "Building practical software tools including architecture diagram visualizers, desktop communication apps, and backend job queues.",
      "Working across the stack: React/Next.js frontends, Express/Spring Boot backends, PostgreSQL databases, and Docker containers.",
      "Applying systems thinking to software design — understanding tradeoffs between performance, complexity, and developer experience.",
      "Contributing to open-source projects with a focus on clean code, documentation, and maintainable architecture.",
    ],
  },
  {
    id: "focus",
    label: "Current Focus",
    icon: Cpu,
    title: "What I'm Working On Now",
    content: [
      "Deepening Android development expertise with Kotlin — exploring Jetpack Compose, advanced architecture patterns, and performance optimization.",
      "Expanding the EcoTracker mobile app with richer environmental data, gamification, and community features.",
      "Building ArchLens into a comprehensive system design visualization tool for software engineering teams.",
      "Seeking internship opportunities in Android development and software engineering where I can contribute to meaningful products.",
    ],
  },
];

export function InteractiveAbout() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <SectionTitle eyebrow="Profile" title="Engineering Profile" />

        <div className="grid gap-3 md:grid-cols-4">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`focus-ring group flex flex-col items-start gap-3 rounded-lg p-4 text-left transition-all duration-200 ${
                  isActive
                    ? "border border-primary/50 bg-primary/8 ring-1 ring-primary/10"
                    : "border border-outline-variant/40 bg-surface-low/60 hover:border-primary/30 hover:bg-surface-high"
                }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    aria-hidden="true"
                    className={`h-5 w-5 transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-on-surface-variant/70"
                    }`}
                  />
                  <span
                    className={`font-display text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
                {isActive ? (
                  <motion.div
                    className="h-0.5 w-10 rounded-full bg-primary"
                    layoutId="about-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                ) : (
                  <div className="h-0.5 w-10 rounded-full bg-transparent" />
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.div className="subtle-panel mt-4 rounded-lg p-6 md:p-8" layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-display text-xl font-semibold text-on-surface">
                {active.title}
              </h3>
              <div className="mt-4 max-w-[72ch] space-y-3.5 text-sm leading-7 text-on-surface-variant md:text-base">
                {active.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
