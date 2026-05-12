import { Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SkillTag } from "@/components/SkillTag";

const focusAreas = [
  "Android Development",
  "Kotlin",
  "Java",
  "Game Development",
];

export function Hero() {
  return (
    <section className="border-b border-outline-variant/45">
      <div className="container-shell grid gap-10 py-20 md:grid-cols-[minmax(0,1fr)_340px] md:items-center md:py-28">
        <div className="min-w-0 animate-section-in">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
            Portfolio
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-on-surface md:text-6xl">
            Efkan Ertaş
          </h1>
          <p className="mt-4 font-display text-xl font-semibold text-on-surface-variant md:text-3xl">
            Computer Engineering Student
          </p>
          <div className="mt-7 flex max-w-2xl flex-wrap gap-2">
            {focusAreas.map((area) => (
              <SkillTag key={area} accent>
                {area}
              </SkillTag>
            ))}
          </div>
          <div className="mt-10 grid max-w-[360px] grid-cols-2 gap-3 sm:flex sm:max-w-none sm:flex-wrap">
            <ButtonLink
              href="#projects"
              variant="primary"
              className="w-full sm:w-auto"
            >
              View Projects
            </ButtonLink>
            <ButtonLink
              href="https://github.com/Thaelith"
              icon={Github}
              external
              className="w-full sm:w-auto"
            >
              GitHub
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/efkan-erta%C5%9F-9164b2316/"
              icon={Linkedin}
              external
              className="w-full sm:w-auto"
            >
              LinkedIn
            </ButtonLink>
            <ButtonLink
              href="mailto:efkanertas1@gmail.com"
              icon={Mail}
              className="w-full sm:w-auto"
            >
              Email
            </ButtonLink>
          </div>
        </div>

        <div className="min-w-0 animate-section-in [animation-delay:120ms]">
          <div className="subtle-panel rounded-lg p-5">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-on-surface-variant">
                Profile Snapshot
              </p>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 md:grid-cols-[96px_minmax(0,1fr)]">
                <dt className="font-mono text-xs uppercase text-on-surface-variant">
                  Role
                </dt>
                <dd className="min-w-0 text-on-surface">
                  Computer Engineering Student
                </dd>
              </div>
              <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 md:grid-cols-[96px_minmax(0,1fr)]">
                <dt className="font-mono text-xs uppercase text-on-surface-variant">
                  Mobile
                </dt>
                <dd className="min-w-0 text-on-surface">Kotlin, Java, Android</dd>
              </div>
              <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-4 md:grid-cols-[96px_minmax(0,1fr)]">
                <dt className="font-mono text-xs uppercase text-on-surface-variant">
                  Game
                </dt>
                <dd className="min-w-0 text-on-surface">Godot, GDScript</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
