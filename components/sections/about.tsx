export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-[38px] scroll-mt-16 md:mb-[58px] lg:mb-[86px]"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          About
        </h2>
      </div>
      <div className="space-y-4 text-muted font-normal">
        <p>
          I&apos;m a GTM operator with a track record of building revenue systems
          from scratch. I do my best work at the intersection of go-to-market
          strategy, systems building, and relationship development.
        </p>
        <p>
          I spent the last three years at Chapter, a Medicare guidance startup,
          where I built the partnerships function from the ground up. During that
          time, Chapter raised from series B to series D and grew 10x.
        </p>
        <p>
          Before that I was a financial advisor at a small RIA in Boston. It was
          there that I cultivated a love for the intersection between psychology
          and personal finance. I also became obsessed with financial incentives
          — an obsession that ultimately led me to change career paths.
        </p>
        <p>
          I took the past few months off to travel, write, and deepen my
          technical skills while figuring out what I want to build next. I believe
          the future of the go-to-market space belongs to technical generalists
          with earned sales intuition and a love for building systems in messy
          spaces.
        </p>
        <p>
          In my free time I enjoy playing tennis, guitar, writing, anything
          philosophy or neuroscience, and traveling (usually somewhere with no cell
          service).
        </p>
      </div>
    </section>
  );
}
