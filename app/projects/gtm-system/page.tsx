import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTM System | Michael Thorsen",
  description:
    "End-to-end lead management system with AI-powered enrichment, pain signal detection, and intelligent routing.",
};

export default function GTMSystemPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back
        </Link>

        <article>
          {/* Hero Video */}
          <div className="mb-4 overflow-hidden rounded-lg border border-card-border">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video w-full object-cover"
            >
              <source src="/videos/gtm-system-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="mb-12 text-sm text-muted">
            Live demo: lead flows through enrichment, scoring, and routing in
            real time
          </p>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            GTM System
          </h1>

          {/* Description */}
          <div className="mb-12 space-y-4 text-muted">
            <p>
              A comprehensive go-to-market infrastructure built to demonstrate
              how modern revenue teams can automate lead management at scale.
              This system combines real-time data enrichment, AI-powered pain
              signal detection, and intelligent routing to transform raw leads
              into qualified opportunities.
            </p>
            <p>
              The project showcases the full lifecycle of a lead — from initial
              capture through enrichment, scoring, and automated routing to the
              right sales rep based on territory, segment, and expertise.
            </p>
          </div>

          {/* Architecture Diagram Placeholder */}
          <div className="mb-12 flex aspect-[16/9] items-center justify-center rounded-lg border-2 border-dashed border-card-border bg-card-hover">
            <span className="text-sm text-muted">Architecture Diagram</span>
          </div>

          {/* Feature Bullets */}
          <div className="mb-12">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Key Features
            </h2>
            <ul className="space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-medium text-foreground">
                    Real-time Lead Enrichment
                  </span>{" "}
                  — Automatically enriches incoming leads with company data,
                  technographics, and contact information from multiple data
                  providers.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-medium text-foreground">
                    AI-Powered Pain Signal Detection
                  </span>{" "}
                  — Uses natural language processing to identify buying signals
                  from news, job postings, and company announcements.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-medium text-foreground">
                    Intelligent Lead Scoring
                  </span>{" "}
                  — Multi-factor scoring model that weighs firmographic fit, engagement
                  signals, and timing indicators.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-medium text-foreground">
                    Automated Routing Engine
                  </span>{" "}
                  — Routes leads to the optimal sales rep based on territory,
                  industry expertise, capacity, and round-robin rules.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                <span>
                  <span className="font-medium text-foreground">
                    HubSpot Integration
                  </span>{" "}
                  — Bi-directional sync with HubSpot CRM for seamless workflow
                  integration with existing sales processes.
                </span>
              </li>
            </ul>
          </div>

          {/* Honest Framing */}
          <p className="mb-12 border-l-2 border-accent/50 pl-4 text-sm italic text-muted">
            Built on live HubSpot data with 204 real companies. Pain signal
            detection uses mocked news data pending a live API integration.
          </p>

          {/* GitHub Link */}
          <div className="mb-12">
            <a
              href="https://github.com/thor-sen/gtm-system"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
            >
              View on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Remotion Video Placeholder */}
          <div className="rounded-lg border border-card-border bg-card-hover p-8 text-center">
            <p className="text-sm text-muted">Walkthrough video coming soon</p>
          </div>
        </article>
      </div>
    </div>
  );
}
