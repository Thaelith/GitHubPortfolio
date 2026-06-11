"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import {
  Smartphone, Monitor, Server, Gamepad2, Wrench,
} from "lucide-react";

type SkillCategory = {
  id: string;
  label: string;
  icon: typeof Smartphone;
  skills: string[];
  description: string;
  usedIn: string[];
};

const categories: SkillCategory[] = [
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    skills: ["Kotlin", "Java", "Android", "Firebase", "Firestore", "MVVM", "Gemini API"],
    description: "Android development is my primary focus. I build native apps with Kotlin and Java, following MVVM architecture patterns and integrating Firebase services for data, auth, and serverless logic.",
    usedIn: ["EcoTracker"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Flow", "Tauri", "Auth.js"],
    description: "Building clean, responsive web interfaces and desktop applications. Experienced with React ecosystems, TypeScript type systems, and component-driven design.",
    usedIn: ["ArchLens", "LinkRoom-Desktop", "TenantKit-Lite"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: ["Express", "Spring Boot", "PostgreSQL", "Prisma", "SQLite", "Docker", "Prometheus", "REST APIs", "SQL"],
    description: "Designing backend systems from REST APIs to distributed job queues. Comfortable with Java/Spring Boot and Node.js, database design, and containerized deployments.",
    usedIn: ["QueueForge", "LinkRoom-Desktop", "TenantKit-Lite"],
  },
  {
    id: "gamedev",
    label: "Game Dev",
    icon: Gamepad2,
    skills: ["Godot", "GDScript", "C#", "Game Design"],
    description: "Creating games with Godot Engine and GDScript. I approach game development with an engineering mindset — clear mechanics, purposeful interaction, and careful feedback design.",
    usedIn: ["99%"],
  },
  {
    id: "tools",
    label: "Tools / CS",
    icon: Wrench,
    skills: ["Git", "GitHub", "Python", "C", "Dijkstra", "Networking", "TCP Reno"],
    description: "Strong fundamentals in version control, algorithms, networking, and systems programming. These are the tools that support everything else I build.",
    usedIn: ["CSE320", "Multiple projects"],
  },
];

export function SkillMatrix() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <SectionTitle eyebrow="Technical Range" title="Skill Matrix" />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="subtle-panel rounded-lg p-4">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
                Domains
              </p>
              <div className="space-y-0.5">
                {categories.map((cat, i) => {
                  const Icon = cat.icon;
                  const isActive = cat.id === activeCategory;
                  return (
                    <motion.button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`focus-ring flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 border border-primary/40"
                          : "border border-transparent hover:border-outline-variant/50 hover:bg-surface-high"
                      }`}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                    >
                      <Icon
                        aria-hidden="true"
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? "text-primary" : "text-on-surface-variant"
                        }`}
                      />
                      <span
                        className={`font-mono text-xs ${
                          isActive ? "text-primary" : "text-on-surface-variant"
                        }`}
                      >
                        {cat.label}
                      </span>
                      <span className="ml-auto font-mono text-[10px] text-on-surface-variant/40">
                        {cat.skills.length}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="subtle-panel rounded-lg p-6"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-display text-lg font-semibold text-on-surface">{active.label}</h3>
                <p className="mt-2 max-w-[56ch] text-sm leading-6 text-on-surface-variant">
                  {active.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="inline-flex items-center rounded border border-primary/25 bg-primary/8 px-2.5 py-1 font-mono text-xs leading-none text-primary"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: i * 0.03 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                {active.usedIn.length > 0 ? (
                  <div className="mt-5 border-t border-outline-variant pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-surface-variant/50">
                      Used in
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {active.usedIn.map((project) => (
                        <span
                          key={project}
                          className="inline-flex items-center rounded border border-outline-variant bg-surface-container px-2 py-0.5 font-mono text-[10px] text-on-surface-variant/70"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
