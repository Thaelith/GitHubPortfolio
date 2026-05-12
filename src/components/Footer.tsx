import { Github, Linkedin, Mail } from "lucide-react";

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
    <footer className="border-t border-outline-variant/70 bg-surface-lowest">
      <div className="container-shell flex flex-col gap-5 py-8 text-sm text-on-surface-variant md:flex-row md:items-center md:justify-between">
        <p className="font-display font-semibold text-on-surface">Efkan Ertaş</p>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="focus-ring inline-flex items-center gap-2 rounded transition hover:text-primary"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs">© 2026 Efkan Ertaş</p>
      </div>
    </footer>
  );
}
