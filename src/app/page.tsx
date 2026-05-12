import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillTag } from "@/components/SkillTag";
import { projects } from "@/data/projects";

const skills = [
  "Kotlin",
  "Java",
  "Android",
  "Firebase",
  "Firestore",
  "Godot",
  "GDScript",
  "Git",
  "GitHub",
  "REST APIs",
  "MVVM",
  "SQL",
  "C#",
  "Python",
];

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="section-shell">
          <div className="container-shell animate-section-in">
            <SectionTitle eyebrow="Profile" title="About" />
            <div className="grid gap-6 md:grid-cols-12">
              <div className="subtle-panel md:col-span-8 rounded-lg p-6 md:p-8">
                <div className="max-w-[65ch] space-y-5 text-sm leading-7 text-on-surface-variant md:text-base">
                  <p>
                    I am a Computer Engineering student focused on practical
                    software development, especially Android applications built
                    with Kotlin and Java. I care about maintainable structure,
                    readable interfaces, and reliable features that solve real
                    user problems.
                  </p>
                  <p>
                    My work also includes game development with Godot, where I
                    approach mechanics and interaction design with the same
                    engineering mindset: clear constraints, careful feedback,
                    and purposeful implementation.
                  </p>
                </div>
              </div>
              <aside className="md:col-span-4">
                <div className="subtle-panel rounded-lg p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    Current Focus
                  </p>
                  <div className="mt-5 space-y-3 text-sm text-on-surface-variant">
                    <p>Android application development</p>
                    <p>Clean mobile architecture</p>
                    <p>Game systems and interaction design</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell">
          <div className="container-shell">
            <div className="animate-section-in">
              <SectionTitle eyebrow="Selected Work" title="Featured Projects" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  featured
                />
              ))}
            </div>

            <div className="mt-16 animate-section-in [animation-delay:180ms]">
              <SectionTitle
                eyebrow="Public Repositories"
                title="Other Public Projects"
                compact
              />
              <div className="grid gap-4 md:grid-cols-2">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index + featuredProjects.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="container-shell animate-section-in">
            <SectionTitle eyebrow="Technical Range" title="Skills" />
            <div className="subtle-panel rounded-lg p-5 md:p-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
