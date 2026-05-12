import { ExternalLink, Github, Play } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SkillTag } from "@/components/SkillTag";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const isGame = project.title === "99%";

  return (
    <article
      className={`subtle-panel group animate-section-in overflow-hidden rounded-lg transition duration-300 ease-out hover:border-primary hover:bg-surface-container ${
        featured && project.title === "ArchLens" ? "md:col-span-2" : ""
      }`}
      style={{ animationDelay: `${Math.min(index * 90, 360)}ms` }}
    >
      <div
        className={`grid h-full ${
          featured && project.title === "ArchLens"
            ? "md:grid-cols-[0.9fr_1.1fr]"
            : ""
        }`}
      >
        {featured ? <ProjectVisual title={project.title} /> : null}

        <div className="flex h-full flex-col p-5 md:p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-primary">
                {project.type}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-on-surface">
                {project.title}
              </h3>
            </div>
            <span className="font-mono text-xs text-on-surface-variant">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="text-sm leading-6 text-on-surface-variant">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <SkillTag key={tech}>{tech}</SkillTag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl ? (
              <ButtonLink href={project.githubUrl} icon={Github} external>
                GitHub
              </ButtonLink>
            ) : null}
            {project.demoUrl ? (
              <ButtonLink
                href={project.demoUrl}
                icon={isGame ? Play : ExternalLink}
                external
              >
                {isGame ? "Play on itch.io" : "Live Demo"}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ title }: { title: string }) {
  if (title === "EcoTracker") {
    return (
      <div className="border-b border-outline-variant bg-surface-container p-5 md:p-6">
        <div className="grid aspect-video place-items-center rounded border border-outline-variant bg-surface-lowest">
          <div className="w-3/4 max-w-[260px]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="h-2 w-20 rounded-sm bg-primary/80" />
                <div className="mt-2 h-2 w-28 rounded-sm bg-on-surface-variant/25" />
              </div>
              <div className="grid h-12 w-12 grid-cols-3 gap-1 border border-outline-variant p-1">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-primary/80"
                        : "bg-on-surface-variant/25"
                    }
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 rounded-sm bg-on-surface-variant/20" />
              <div className="h-2 w-10/12 rounded-sm bg-on-surface-variant/20" />
              <div className="h-2 w-7/12 rounded-sm bg-primary/60" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (title === "99%") {
    return (
      <div className="border-b border-outline-variant bg-surface-container p-5 md:p-6">
        <div className="grid aspect-video place-items-center rounded border border-outline-variant bg-surface-lowest">
          <div className="w-3/4 max-w-[260px] font-mono">
            <div className="mb-5 flex items-end justify-between">
              <span className="text-5xl font-semibold text-on-surface">99</span>
              <span className="pb-1 text-xl text-primary">%</span>
            </div>
            <div className="h-2 rounded-sm bg-outline-variant">
              <div className="h-2 w-[99%] rounded-sm bg-primary" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[70, 45, 88, 30].map((height) => (
                <span
                  key={height}
                  className="block rounded-sm border border-outline-variant bg-surface-high"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-outline-variant bg-surface-container p-5 md:border-b-0 md:border-r md:p-6">
      <div className="grid aspect-video place-items-center rounded border border-outline-variant bg-surface-lowest">
        <div className="relative h-40 w-64 max-w-full">
          <div className="absolute left-4 top-5 h-12 w-24 rounded border border-primary/70 bg-primary/10" />
          <div className="absolute right-4 top-7 h-12 w-24 rounded border border-on-surface-variant/50 bg-surface-high" />
          <div className="absolute bottom-5 left-20 h-12 w-24 rounded border border-on-surface-variant/50 bg-surface-high" />
          <div className="absolute left-[105px] top-[76px] h-px w-16 rotate-[24deg] bg-primary/70" />
          <div className="absolute left-[84px] top-[76px] h-px w-16 -rotate-[35deg] bg-primary/70" />
          <div className="absolute left-[132px] top-[63px] h-3 w-3 rounded-full border border-primary bg-background" />
        </div>
      </div>
    </div>
  );
}
