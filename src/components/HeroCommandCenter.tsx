"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const focusAreas = ["Android Development", "Kotlin", "Java", "Game Development"];

const terminalLines = [
  "> loading portfolio...",
  "> indexing Android projects...",
  "> checking game systems...",
  "> preparing project showcase...",
  "> ready.",
];

function ProfileSnapshot() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="subtle-panel rounded-lg p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      <div className="flex items-center justify-between border-b border-outline-variant pb-4">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-on-surface-variant">
          Profile Snapshot
        </p>
        <motion.span
          className="block h-2 w-2 rounded-full bg-primary"
          animate={
            prefersReduced
              ? { opacity: 0.8 }
              : { opacity: [0.5, 1, 0.5] }
          }
          transition={
            prefersReduced
              ? { duration: 0.3 }
              : { duration: 2, repeat: Infinity }
          }
        />
      </div>
      <dl className="mt-5 space-y-4 text-sm">
        <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 md:grid-cols-[96px_minmax(0,1fr)]">
          <dt className="font-mono text-xs uppercase text-on-surface-variant">Role</dt>
          <dd className="min-w-0 text-on-surface">Computer Engineering Student</dd>
        </div>
        <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 md:grid-cols-[96px_minmax(0,1fr)]">
          <dt className="font-mono text-xs uppercase text-on-surface-variant">Mobile</dt>
          <dd className="min-w-0 text-on-surface">Kotlin, Java, Android</dd>
        </div>
        <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 md:grid-cols-[96px_minmax(0,1fr)]">
          <dt className="font-mono text-xs uppercase text-on-surface-variant">Game</dt>
          <dd className="min-w-0 text-on-surface">Godot, GDScript</dd>
        </div>
      </dl>
    </motion.div>
  );
}

function TerminalCard() {
  return (
    <motion.div
      className="subtle-panel rounded-lg p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="mb-3 flex items-center gap-2 border-b border-outline-variant pb-3">
        <Terminal aria-hidden="true" className="h-3.5 w-3.5 text-primary" />
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">
          Terminal
        </span>
      </div>
      <div className="space-y-1.5 font-mono text-xs">
        {terminalLines.map((line, i) => (
          <motion.p
            key={i}
            className="text-on-surface-variant"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.6 + i * 0.32 }}
          >
            <span className="text-primary">{line.slice(0, 1)}</span>
            {line.slice(1)}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export function HeroCommandCenter() {
  return (
    <section className="border-b border-outline-variant/45 pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="container-shell grid gap-8 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
        <div className="min-w-0">
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.16em] text-primary"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-on-surface md:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            Efkan Ertaş
          </motion.h1>
          <motion.p
            className="mt-3 font-display text-xl font-semibold text-on-surface-variant md:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            Computer Engineering Student
          </motion.p>

          <motion.div
            className="mt-6 flex max-w-2xl flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.24 }}
          >
            {focusAreas.map((area, i) => (
              <motion.span
                key={area}
                className="inline-flex items-center rounded border border-primary/35 bg-primary/10 px-2 py-1 font-mono text-xs leading-none text-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: 0.28 + i * 0.06 }}
              >
                {area}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex max-w-[360px] flex-wrap gap-3 sm:max-w-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href="https://github.com/Thaelith" icon={Github} external>
              GitHub
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/efkan-erta%C5%9F-9164b2316/" icon={Linkedin} external>
              LinkedIn
            </MagneticButton>
            <MagneticButton href="mailto:efkanertas1@gmail.com" icon={Mail}>
              Email
            </MagneticButton>
          </motion.div>
        </div>

        <div className="min-w-0 space-y-3">
          <ProfileSnapshot />
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
