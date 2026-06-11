"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const scrollPos = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-background/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link
          href="#"
          className="focus-ring rounded font-display text-base font-bold text-on-surface transition hover:text-primary"
          onClick={() => setOpen(false)}
        >
          Efkan Ertaş
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring relative rounded px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0.5 left-1/2 h-0.5 rounded-full bg-primary"
                  animate={{
                    width: isActive ? "60%" : "0%",
                    x: "-50%",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded border border-outline-variant bg-surface-container text-on-surface transition hover:border-primary md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            className="border-t border-outline-variant bg-surface-low md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="container-shell grid gap-1 py-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="focus-ring block rounded px-2 py-3 text-sm font-medium text-on-surface-variant transition hover:bg-surface-container hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
