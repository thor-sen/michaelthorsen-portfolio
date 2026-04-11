import Link from "next/link";
import { Github, FileText } from "lucide-react";

const componentCards = [
  {
    title: "Lead Enrichment",
    description:
      "Enriches companies via PDL API with employee count, revenue, industry, and tech stack",
  },
  {
    title: "ML Scoring Model",
    description:
      "Trains a logistic regression model and scores HubSpot companies as ICP fit (0-100)",
  },
  {
    title: "Pain Signal Detector",
    description:
      "Detects relevant pain signals from news data and writes structured results to HubSpot",
  },
  {
    title: "Territory Router",
    description:
      "FastAPI webhook service that routes new companies to reps by territory and company size",
  },
  {
    title: "AI Outreach Engine",
    description:
      "Claude-powered pipeline for ICP classification, intent detection, and outreach generation",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Streamlit dashboard for company filtering, routing audit, and pipeline health projections",
  },
];

const gtmTechStack = [
  "Python",
  "Claude API",
  "HubSpot API",
  "scikit-learn",
  "FastAPI",
  "Streamlit",
  "PostgreSQL",
  "PDL API",
];

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
      <h3 className="text-xl font-semibold text-accent mb-3">
        Automated Lead Scoring and Outreach Engine
      </h3>
      <p className="text-muted leading-relaxed mb-8 max-w-3xl">
        AI-powered automated enrichment, firmographic scoring, pain signal detection, ownership
        assignment, and customized outreach generation. Integrated end-to-end with a live HubSpot
        CRM.
      </p>

      {/* Component Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {componentCards.map((card) => (
          <div
            key={card.title}
            className="p-4 rounded-md border border-card-border bg-background/30 hover:border-muted/50 transition-colors"
          >
            <h4 className="text-sm font-medium text-accent mb-1">{card.title}</h4>
            <p className="text-xs text-muted leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {gtmTechStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-tag-bg text-xs font-medium text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href="https://github.com/thor-sen/gtm-automation-engine"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-card-border text-accent text-sm font-medium hover:bg-card-hover transition-colors"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
        <Link
          href="/projects/gtm-system"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-card-border text-accent text-sm font-medium hover:bg-card-hover hover:border-muted/50 transition-colors"
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
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(242,237,228,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="text-base font-medium leading-snug text-accent group-hover:text-muted">
          AI Sales Call Scorer
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted">
          A three-pass AI scoring system for sales calls. Scores rep performance against a weighted
          rubric, generates specific coaching feedback, and evaluates opportunity fit independent of
          how well the rep executed.
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {["Python", "Claude API", "JSON"].map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-tag-bg px-3 py-1 text-xs font-medium leading-5 text-foreground">
                {tech}
              </div>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/thor-sen/ai-sales-call-scorer"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-card-border text-accent text-sm font-medium hover:bg-card-hover transition-colors"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
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
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent lg:sr-only">
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
      </div>
    </section>
  );
}
