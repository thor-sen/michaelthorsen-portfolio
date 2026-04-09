export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4 text-muted">
        <p>
          Back in 2018, I discovered that the most impactful work happens at the
          intersection of technology and go-to-market strategy. Since then,
          I&apos;ve had the privilege of building systems that help revenue
          teams work smarter at{" "}
          <span className="font-medium text-foreground">
            high-growth startups
          </span>{" "}
          and{" "}
          <span className="font-medium text-foreground">
            enterprise companies
          </span>{" "}
          alike.
        </p>
        <p>
          My main focus these days is architecting end-to-end GTM infrastructure
          — from lead enrichment and scoring to routing and automation. I
          specialize in connecting the dots between{" "}
          <span className="font-medium text-foreground">CRM systems</span>,{" "}
          <span className="font-medium text-foreground">
            marketing automation
          </span>
          , and{" "}
          <span className="font-medium text-foreground">
            data enrichment tools
          </span>{" "}
          to create seamless workflows that actually work.
        </p>
        <p>
          When I&apos;m not deep in{" "}
          <a
            href="https://hubspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-accent transition-colors"
          >
            HubSpot
          </a>{" "}
          or building automation flows, I&apos;m usually exploring how{" "}
          <span className="font-medium text-foreground">AI agents</span> can
          transform sales operations. I believe the future of GTM is intelligent
          systems that do the heavy lifting so reps can focus on what they do
          best — building relationships.
        </p>
        <p>
          In my spare time, I&apos;m usually hiking Colorado trails, tinkering
          with side projects, or diving into the latest developments in the AI
          space.
        </p>
      </div>
    </section>
  );
}
