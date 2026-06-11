"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play, ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects, type Project } from "@/data/projects";

function statusBadge(status: string | undefined) {
  if (!status) return null;
  const map: Record<string, { label: string; className: string }> = {
    "in-progress": { label: "In Progress", className: "border-tertiary/40 bg-tertiary/10 text-tertiary" },
    complete: { label: "Complete", className: "border-green-500/30 bg-green-500/10 text-green-400" },
    maintained: { label: "Maintained", className: "border-primary/30 bg-primary/10 text-primary" },
  };
  const s = map[status];
  if (!s) return null;
  return (
    <span className={`inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[10px] leading-none ${s.className}`}>
      {s.label}
    </span>
  );
}

export function ProjectMissionControl() {
  const [selected, setSelected] = useState<Project>(projects[0]);
  const isGame = selected.title === "99%";

  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <SectionTitle eyebrow="Selected Work" title="Project Mission Control" />

        <div className="hidden md:grid md:grid-cols-12 md:gap-5">
          <motion.div className="subtle-panel col-span-4 flex flex-col rounded-lg p-4" layout>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
              Mission Index
            </p>
            <div className="space-y-0.5">
              {projects.map((p, i) => {
                const isActive = selected.title === p.title;
                return (
                  <motion.button
                    key={p.title}
                    type="button"
                    onClick={() => setSelected(p)}
                    className={`focus-ring w-full rounded-md px-3 py-2.5 text-left transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 border border-primary/40"
                        : "border border-transparent hover:border-outline-variant/50 hover:bg-surface-high"
                    }`}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-display text-sm font-semibold truncate transition-colors duration-200 ${
                          isActive ? "text-primary" : "text-on-surface-variant"
                        }`}
                      >
                        {p.title}
                      </span>
                      <span
                        className={`font-mono text-[10px] shrink-0 transition-colors duration-200 ${
                          isActive ? "text-primary/60" : "text-on-surface-variant/40"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-[10px] text-on-surface-variant/60 truncate">
                      {p.type}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <div className="col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.title}
                className="subtle-panel overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="min-h-[240px] md:min-h-[260px]">
                  <ProjectVisual title={selected.title} featured />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-mono text-xs uppercase tracking-[0.08em] text-primary">
                          {selected.type}
                        </p>
                        {statusBadge(selected.status)}
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-on-surface">
                        {selected.title}
                      </h3>
                    </div>
                  </div>
                  <p className="max-w-[60ch] text-sm leading-6 text-on-surface-variant">
                    {selected.description}
                  </p>
                  {selected.highlights ? (
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {selected.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <ArrowUpRight className="h-3 w-3 shrink-0 text-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {selected.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded border border-outline-variant bg-surface-high px-2 py-1 font-mono text-xs leading-none text-on-surface-variant"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {selected.githubUrl ? (
                      <a
                        href={selected.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded border border-outline-variant bg-surface-container px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.04em] text-on-surface transition-colors duration-200 hover:border-primary hover:bg-surface-high"
                      >
                        <Github aria-hidden="true" className="h-4 w-4" />
                        GitHub
                      </a>
                    ) : null}
                    {selected.demoUrl ? (
                      <a
                        href={selected.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded border border-outline-variant bg-surface-container px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.04em] text-on-surface transition-colors duration-200 hover:border-primary hover:bg-surface-high"
                      >
                        {isGame ? <Play aria-hidden="true" className="h-4 w-4" /> : <ExternalLink aria-hidden="true" className="h-4 w-4" />}
                        {isGame ? "Play on itch.io" : "Live Demo"}
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="subtle-panel overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <ProjectVisual title={p.title} />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <p className="font-mono text-xs uppercase tracking-[0.08em] text-primary">
                    {p.type}
                  </p>
                  {statusBadge(p.status)}
                </div>
                <h3 className="font-display text-lg font-semibold text-on-surface">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded border border-outline-variant bg-surface-high px-2 py-1 font-mono text-[11px] leading-none text-on-surface-variant"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.githubUrl ? (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded border border-outline-variant bg-surface-container px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.04em] text-on-surface transition-colors duration-200 hover:border-primary"
                    >
                      <Github aria-hidden="true" className="h-4 w-4" /> GitHub
                    </a>
                  ) : null}
                  {p.demoUrl ? (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded border border-outline-variant bg-surface-container px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.04em] text-on-surface transition-colors duration-200 hover:border-primary"
                    >
                      {p.title === "99%" ? (
                        <Play aria-hidden="true" className="h-4 w-4" />
                      ) : (
                        <ExternalLink aria-hidden="true" className="h-4 w-4" />
                      )}
                      {p.title === "99%" ? "Play on itch.io" : "Live Demo"}
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
