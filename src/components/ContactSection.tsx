import { Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionTitle } from "@/components/SectionTitle";

const contactLinks = {
  email: "mailto:efkanertas1@gmail.com",
  github: "https://github.com/Thaelith",
  linkedin: "https://www.linkedin.com/in/efkan-erta%C5%9F-9164b2316/",
};

export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell animate-section-in">
        <SectionTitle eyebrow="Contact" title="Let’s Connect" />
        <div className="subtle-panel grid gap-8 rounded-lg p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div className="max-w-[62ch]">
            <p className="text-sm leading-7 text-on-surface-variant md:text-base">
              I am open to internship opportunities, Android development work,
              and software projects where clean implementation and dependable
              delivery matter.
            </p>
            <a
              href={contactLinks.email}
              className="focus-ring mt-5 inline-block rounded text-sm font-semibold text-on-surface underline decoration-outline-variant underline-offset-4 transition hover:text-primary hover:decoration-primary"
            >
              efkanertas1@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <ButtonLink href={contactLinks.email} icon={Mail}>
              Email
            </ButtonLink>
            <ButtonLink href={contactLinks.github} icon={Github} external>
              GitHub
            </ButtonLink>
            <ButtonLink href={contactLinks.linkedin} icon={Linkedin} external>
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
