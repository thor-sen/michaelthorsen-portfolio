import Link from "next/link";
import { ArrowUpRight, ArrowRight, Github, FileText } from "lucide-react";

const pipelineStages = [
  { name: "HubSpot CRM", description: "Source of truth" },
  { name: "Enrichment", description: "Data augmentation" },
  { name: "Scoring", description: "Lead prioritization" },
  { name: "Routing", description: "Rep assignment" },
  { name: "AI BDR", description: "Automated outreach" },
  { name: "Dashboard", description: "Analytics & reporting" },
];

const componentCards = [
  { title: "Lead Enrichment Engine", description: "Waterfall API strategy for 95%+ fill rates on firmographic data" },
  { title: "ICP Scoring Model", description: "Multi-factor scoring based on fit, intent, and engagement signals" },
  { title: "Pain Signal Detector", description: "AI-powered analysis of hiring, funding, and tech stack changes" },
  { title: "Smart Router", description: "Rules-based assignment with round-robin and territory logic" },
  { title: "AI BDR Agent", description: "Personalized outreach sequences triggered by buying signals" },
  { title: "Revenue Dashboard", description: "Real-time pipeline visibility with conversion analytics" },
];

const gtmTechStack = ["Next.js", "TypeScript", "Supabase", "n8n", "Claude API", "HubSpot API"];

function GTMFeaturedProject() {
  return (
    <div className="mb-16 rounded-lg border border-card-border bg-card-hover/30 p-6 lg:p-8">
      {/* Video Placeholder */}
      <div className="aspect-video w-full rounded-lg border-2 border-card-border bg-background/50 flex items-center justify-center mb-6">
        <div className="text-center">
          <div className="text-muted text-sm mb-2">Video Walkthrough</div>
          <div className="text-muted/50 text-xs">Coming soon</div>
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="text-xl font-semibold text-foreground mb-3">GTM System</h3>
      <p className="text-muted leading-relaxed mb-8 max-w-3xl">
        A complete lead-to-revenue infrastructure built on live HubSpot data. This system automates the entire GTM workflow: enriching leads from multiple data providers, scoring them against ICP criteria, detecting pain signals with AI, routing to the right reps, and triggering personalized outreach sequences.
      </p>

      {/* Pipeline Diagram */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-start gap-2 lg:gap-0 lg:justify-between">
          {pipelineStages.map((stage, index) => (
            <div key={stage.name} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="px-3 py-2 rounded-md bg-tag-bg border border-card-border text-center min-w-[100px]">
                  <div className="text-xs font-medium text-accent">{stage.name}</div>
                </div>
              </div>
              {index < pipelineStages.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted mx-2 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Component Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {componentCards.map((card) => (
          <div
            key={card.title}
            className="p-4 rounded-md border border-card-border bg-background/30 hover:border-muted/50 transition-colors"
          >
            <h4 className="text-sm font-medium text-foreground mb-1">{card.title}</h4>
            <p className="text-xs text-muted leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {gtmTechStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-tag-bg text-xs font-medium text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
        <Link
          href="/projects/gtm-system"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-card-border text-foreground text-sm font-medium hover:bg-card-hover hover:border-muted/50 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Read Writeup
        </Link>
      </div>
    </div>
  );
}

function SimpleProjectCard() {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="font-medium leading-snug text-foreground">
          <span className="inline-flex items-baseline text-base font-medium leading-tight text-foreground group-hover:text-accent">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>AI Sales Call Scorer</span>
          </span>
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted">
          Automated system that analyzes sales call transcripts using Claude to score rep performance, identify coaching opportunities, and extract key insights. Outputs structured JSON for easy integration with CRM and coaching platforms.
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {["Python", "Claude API", "FastAPI", "JSON"].map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-tag-bg px-3 py-1 text-xs font-medium leading-5 text-accent">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="z-10 sm:order-1 sm:col-span-2">
        <div className="aspect-video w-full rounded border-2 border-card-border bg-gradient-to-br from-accent/10 to-accent/5 transition group-hover:border-muted/50" />
      </div>
    </div>
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
        {/* Featured GTM System */}
        <GTMFeaturedProject />

        {/* Other Projects */}
        <ul className="group/list space-y-12">
          <li>
            <SimpleProjectCard />
          </li>
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
