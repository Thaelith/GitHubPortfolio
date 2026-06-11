import { AnimatedBackground } from "@/components/AnimatedBackground";
import { BuildTimeline } from "@/components/BuildTimeline";
import { ContactPortal } from "@/components/ContactPortal";
import { Footer } from "@/components/Footer";
import { HeroCommandCenter } from "@/components/HeroCommandCenter";
import { InteractiveAbout } from "@/components/InteractiveAbout";
import { Navbar } from "@/components/Navbar";
import { ProjectMissionControl } from "@/components/ProjectMissionControl";
import { SkillMatrix } from "@/components/SkillMatrix";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroCommandCenter />
        <InteractiveAbout />
        <ProjectMissionControl />
        <SkillMatrix />
        <BuildTimeline />
        <ContactPortal />
      </main>
      <Footer />
    </>
  );
}
