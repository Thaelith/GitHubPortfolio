"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Thaelith",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/efkan-erta%C5%9F-9164b2316/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:efkanertas1@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-outline-variant/70 bg-surface-lowest">
      <motion.div
        className="container-shell flex flex-col gap-5 py-8 text-sm text-on-surface-variant md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-display font-semibold text-on-surface">Efkan Ertaş</p>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map(({ label, href, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="focus-ring inline-flex items-center gap-2 rounded transition hover:text-primary"
              whileHover={{ y: -1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {label}
            </motion.a>
          ))}
        </div>
        <p className="font-mono text-xs">2026 Efkan Ertaş</p>
      </motion.div>
    </footer>
  );
}
