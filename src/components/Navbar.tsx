"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

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

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm font-medium text-on-surface-variant transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
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

      {open ? (
        <nav className="border-t border-outline-variant bg-surface-low md:hidden">
          <div className="container-shell grid gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded px-2 py-3 text-sm font-medium text-on-surface-variant transition hover:bg-surface-container hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
