import Link from "next/link";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: ComponentType<LucideProps>;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
};

const variantClasses = {
  primary:
    "border-on-surface bg-on-surface text-background hover:border-primary hover:bg-primary hover:text-background",
  secondary:
    "border-outline-variant bg-surface-container text-on-surface hover:border-primary hover:bg-surface-high",
  text: "border-transparent bg-transparent text-on-surface hover:text-primary",
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "secondary",
  external,
  className = "",
}: ButtonLinkProps) {
  const classes = `focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.04em] transition duration-200 ease-out ${variantClasses[variant]} ${className}`;

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      >
        {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </Link>
  );
}
