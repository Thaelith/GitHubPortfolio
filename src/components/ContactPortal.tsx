"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionTitle } from "@/components/SectionTitle";

const contactLinks = {
  email: "mailto:efkanertas1@gmail.com",
  github: "https://github.com/Thaelith",
  linkedin: "https://www.linkedin.com/in/efkan-erta%C5%9F-9164b2316/",
};

export function ContactPortal() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <SectionTitle eyebrow="Contact" title="Project Handoff" />

        <motion.div
          className="subtle-panel grid gap-8 rounded-lg p-6 md:grid-cols-[1fr_320px] md:items-start md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Send aria-hidden="true" className="h-4 w-4 text-primary" />
              </motion.div>
              <div>
                <p className="font-display text-base font-semibold text-on-surface">
                  Let&apos;s work together
                </p>
                <p className="text-xs text-on-surface-variant">Open to opportunities</p>
              </div>
            </div>

            <p className="max-w-[62ch] text-sm leading-7 text-on-surface-variant md:text-base">
              I am open to internship opportunities, Android development work,
              and software projects where clean implementation and dependable
              delivery matter. If you&apos;re building something interesting, I&apos;d love to hear about it.
            </p>

            <a
              href={contactLinks.email}
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary group"
            >
              efkanertas1@gmail.com
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <MagneticButton href={contactLinks.email} icon={Mail} variant="primary">
              Send Email
            </MagneticButton>
            <MagneticButton href={contactLinks.github} icon={Github} external>
              GitHub
            </MagneticButton>
            <MagneticButton href={contactLinks.linkedin} icon={Linkedin} external>
              LinkedIn
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
