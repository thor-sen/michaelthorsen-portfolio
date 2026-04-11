import { Sidebar } from "@/components/sidebar";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="mx-auto min-h-screen max-w-[680px] px-6 py-12 md:py-20">
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
