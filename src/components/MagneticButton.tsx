"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ComponentType, type MouseEvent } from "react";
import Link from "next/link";
import type { LucideProps } from "lucide-react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: ComponentType<LucideProps>;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
};

const variantClasses = {
  primary:
    "border-primary-strong bg-primary-strong text-background hover:border-primary hover:bg-primary hover:text-background",
  secondary:
    "border-outline-variant bg-surface-container text-on-surface hover:border-primary hover:bg-surface-high",
  text: "border-transparent bg-transparent text-on-surface hover:text-primary",
};

export function MagneticButton({
  href,
  children,
  icon: Icon,
  variant = "secondary",
  external,
  className = "",
}: MagneticButtonProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 15 });
  const springY = useSpring(y, { stiffness: 180, damping: 15 });

  const handleMouseMove = (e: MouseEvent) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.04em] transition-colors duration-200 ease-out ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      {external || href.startsWith("mailto:") ? (
        <a
          href={href}
          className={classes}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
        >
          {content}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )}
    </motion.div>
  );
}
