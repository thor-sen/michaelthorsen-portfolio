import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  href?: string;
  isVideo?: boolean;
}

const projects: Project[] = [
  {
    title: "GTM System",
    description:
      "End-to-end lead management system with AI-powered enrichment, pain signal detection, and intelligent routing. Built on live HubSpot data with real company workflows.",
    technologies: ["Next.js", "Supabase", "n8n", "AI Agents"],
    href: "/projects/gtm-system",
    isVideo: true,
  },
  {
    title: "AI Sales Call Scorer",
    description:
      "Automated system that analyzes sales call transcripts using Claude to score rep performance, identify coaching opportunities, and extract key insights.",
    technologies: ["Python", "Claude API", "FastAPI", "JSON"],
    isVideo: false,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const CardWrapper = project.href ? Link : "div";
  const cardProps = project.href
    ? { href: project.href }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="font-medium leading-snug text-foreground">
          <span className="inline-flex items-baseline text-base font-medium leading-tight text-foreground group-hover:text-accent">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {project.title}
              {project.href && (
                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
              )}
            </span>
          </span>
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted">
          {project.description}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-tag-bg px-3 py-1 text-xs font-medium leading-5 text-accent">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="z-10 sm:order-1 sm:col-span-2">
        {project.isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full rounded border-2 border-card-border object-cover transition group-hover:border-muted/50"
          >
            <source src="/videos/gtm-system-preview.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="aspect-video w-full rounded border-2 border-card-border bg-gradient-to-br from-accent/10 to-accent/5 transition group-hover:border-muted/50" />
        )}
      </div>
    </CardWrapper>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list space-y-12">
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View Full Project Archive
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
