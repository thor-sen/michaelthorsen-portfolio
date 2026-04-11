"use client";

import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <div
      role="link"
      tabIndex={0}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) return;
        router.push("/projects/gtm-system");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !(e.target as HTMLElement).closest("a")) {
          router.push("/projects/gtm-system");
        }
      }}
      className="group relative block mb-16 rounded-lg border border-card-border bg-card-hover/30 p-6 lg:p-8 transition cursor-pointer lg:hover:bg-card-hover lg:hover:shadow-[inset_0_1px_0_0_rgba(242,237,228,0.12)] lg:hover:drop-shadow-lg"
    >
      {/* Video */}
      <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-card-border mb-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/gtm-pipeline-light.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Title and Description */}
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
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
            className="group/sub p-4 rounded-md border border-card-border bg-background/30 hover:border-muted/50 transition-colors"
          >
            <h4 className="text-sm font-medium text-foreground mb-1 transition-colors group-hover/sub:text-accent">{card.title}</h4>
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
      <div className="relative z-10 flex flex-wrap gap-3">
        <a
          href="https://github.com/thor-sen/gtm-automation-engine"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-card-border text-accent text-sm font-medium hover:bg-card-hover transition-colors"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-card-border text-accent text-sm font-medium hover:bg-card-hover hover:border-muted/50 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Read Writeup
        </span>
      </div>
    </div>
  );
}

const salesCallScorerTags = ["Python", "Claude API", "JSON"];

function SimpleProjectCard() {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-card-border/50 bg-background/25 transition-colors lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:hover:border-card-border/70 lg:hover:bg-background/40">
      {/* Video strip */}
      <div className="aspect-[80/27] w-full overflow-hidden border-b border-card-border/35">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/call-scorer.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="p-4 lg:p-5">
        <h3 className="text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
          AI Sales Call Scorer
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          A three-pass AI scoring system for sales calls. Scores rep performance against a weighted
          rubric, generates specific coaching feedback, and evaluates opportunity fit independent of
          how well the rep executed.
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {salesCallScorerTags.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-card-border/25 bg-background/40 px-2.5 py-0.5 text-[11px] font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/thor-sen/ai-sales-call-scorer"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-5 inline-flex items-center gap-1.5 rounded-md border border-card-border/45 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:border-card-border/70 hover:bg-card-hover/40"
        >
          <Github className="h-3.5 w-3.5" />
          View on GitHub
        </a>
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
      </div>
    </section>
  );
}
