import { Sidebar } from "@/components/sidebar";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="mx-auto min-h-screen max-w-[680px] px-6 pt-[29px] pb-12 md:pt-12 md:pb-20">
        <Sidebar />
        <main id="content">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
