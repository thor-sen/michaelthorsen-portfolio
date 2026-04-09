import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Lead Scoring and Outreach Engine | Michael Thorsen",
  description:
    "Production-grade GTM automation: enrich, score, route, and generate outreach for companies in a live HubSpot CRM.",
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
          <div className="mb-12 overflow-hidden rounded-lg border border-card-border">
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

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Automated Lead Scoring and Outreach Engine
          </h1>

          <p className="mb-8 text-muted leading-relaxed">
            A production-grade system that automatically enriches, scores, routes, and generates
            outreach for companies in a live HubSpot CRM. Built on real company data (health systems)
            across 7 interconnected components.
          </p>

          <div className="mb-12">
            <a
              href="https://github.com/thor-sen/gtm-automation-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
            >
              View on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mb-12 space-y-4 text-muted leading-relaxed">
            <p>
              The core system is fully live against a real HubSpot portal with real company data.
              The CRM connector, territory router, composite scorer, ML model, and dashboard all run
              against production CRM records.
            </p>
            <p>Two areas are partially stubbed.</p>
            <p>
              Lead enrichment is fully built but without a People Data Labs account. Without a valid
              API key, companies get marked as failed and the pipeline moves on gracefully. In
              production you would need to swap in the key and for enrichment to populate
              automatically. The integration point is already there.
            </p>
            <p>
              The pain signal detector uses mocked news data — realistic healthcare articles mapped to
              known companies — rather than a live news feed. Everything downstream of that is real:
              the Claude classification, the gating logic, the outreach generation all run against
              real CRM fields. In production you&apos;d connect a live news API or an intent data
              provider like Bombora at the same integration point.
            </p>
            <p>
              The design philosophy was to build every integration point as if it were production and
              stub only the data sources that require funded third-party accounts to demo.
            </p>
            <p>
              If I were taking this or something similar live I would also have included a feedback
              loop that retrains the scoring model on closed-won data over time, and a sequence layer
              that tracks outreach responses and adjusts follow-up cadence automatically.
            </p>
          </div>

          <div className="mb-12 overflow-hidden rounded-lg border border-card-border bg-card-hover/30 p-4">
            <Image
              src="/gtm-pipeline-flow.svg"
              alt="Diagram of HubSpot CRM data flowing through enrichment, ML scoring, composite scoring, territory routing, AI outreach, and the intelligence dashboard"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </div>

          <div className="mb-12 space-y-4 text-muted leading-relaxed">
            <p>
              I built a GTM automation system that takes a company from &quot;just entered our
              CRM&quot; to &quot;personalized outreach in the rep&apos;s queue&quot; without anyone
              touching it manually.
            </p>
            <p>
              It starts with a live connection to HubSpot that keeps our data fresh. The moment a
              company enters the system, it automatically gets enriched — we pull in firmographic
              data like headcount, revenue, industry, and tech stack from an external API so
              we&apos;re not working with a half-empty record.
            </p>
            <p>
              From there, a machine learning model scores each company on ICP fit — basically asking
              &quot;how closely does this company match our ideal customer?&quot; — and returns a
              score from 0 to 100. That score gets combined with two other signals: how much the
              company has engaged with us, and whether they&apos;ve shown signs of having the problem
              we solve. The result is a single composite priority score that determines which tier
              each company falls into. Everything writes back to HubSpot automatically.
            </p>
            <p>
              When a new company is created, a webhook fires and routes it to the right rep
              instantly based on geography and company size. No spreadsheet, no Slack message, no
              manual assignment.
            </p>
            <p>
              The AI layer sits on top of all of this. It reads each company&apos;s scores and
              signals, classifies ICP fit, detects intent, and generates personalized outreach for
              the BDR team using Claude. The output isn&apos;t a template — it&apos;s informed by what
              we actually know about each company.
            </p>
            <p>
              A Streamlit dashboard ties it together — pipeline health, scoring breakdowns, routing
              audit trails — so the team always knows what the system is doing and why.
            </p>
            <p>
              The whole thing is designed around one principle: get the right company in front of the
              right rep with the right message before a human has to think about it.
            </p>
          </div>

          <section className="mb-12" aria-labelledby="design-decisions-heading">
            <h2
              id="design-decisions-heading"
              className="mb-8 text-2xl font-bold tracking-tight text-foreground"
            >
              Key Design Decisions
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-base font-semibold text-foreground">
                  Firmographic data drives half the score — and that&apos;s intentional.
                </h3>
                <p className="text-muted leading-relaxed">
                  In healthcare, certain things are either true or they&apos;re not. A company either
                  has the headcount, the revenue, and the Medicare participation to be a real
                  customer. No amount of engagement changes that. So I weighted firmographic fit at
                  50% — it&apos;s the floor, not a tiebreaker. Engagement and urgency signals split
                  the other 50% because they tell you when to reach out, not whether to. A
                  perfect-fit company that hasn&apos;t engaged yet still surfaces as a priority. A
                  poor-fit company that&apos;s been clicking around doesn&apos;t jump the queue.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold text-foreground">
                  Territory routing follows fixed rules, not load balancing.
                </h3>
                <p className="text-muted leading-relaxed">
                  I could have built a system that evenly distributes leads across reps automatically.
                  I didn&apos;t, and it was a deliberate call. Fixed rules — region and company size
                  determine which rep gets which company — mean every routing decision is explainable.
                  You can look at any company in the CRM and know exactly why it went where it went
                  without digging through server logs. The tradeoff is that if territories get
                  unbalanced, someone has to update the rules manually rather than letting the system
                  self-correct. For a sales team where rep accountability and transparency matter,
                  that&apos;s worth it.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold text-foreground">
                  HubSpot is the only source of truth.
                </h3>
                <p className="text-muted leading-relaxed">
                  Every component in the system reads from HubSpot and writes back to HubSpot —
                  nothing passes data to the next stage through local files or a shared database.
                  This means if one part of the pipeline goes down, the rest keep running. It means
                  every intermediate result shows up in CRM in real time, not just at the end. And
                  it means anyone on the team can see exactly what the system did and when. The cost
                  is more API calls and more attention to rate limits. The benefit is a system that
                  produces real, visible CRM changes at every step — which matters when you&apos;re
                  asking a sales team to trust something they didn&apos;t build.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
