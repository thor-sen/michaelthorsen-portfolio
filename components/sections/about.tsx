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
          from scratch. I believe the future of the go-to-market space belongs to
          technical generalists with earned sales intuition and a love for
          building systems in messy spaces.
        </p>
        <p>
          I spent the last three and a half years at Chapter, a Medicare guidance
          startup, where I built the partnerships function from the ground up.
          During that time, Chapter raised from series B to series D and grew 10x.
        </p>
        <p>
          Before that I was a financial advisor at a small RIA in Boston, where I
          built my book of business from scratch and became the firm&apos;s go-to
          person for cold calling tactics within 5 months.
        </p>
        <p>
          I took the past few months off to surf, summit volcanoes, write, and
          deepen my technical skills.
        </p>
        <p>
          In my free time I enjoy playing tennis, guitar, writing, philosophy,
          neuroscience, and traveling (usually somewhere with no cell service).
        </p>
      </div>
    </section>
  );
}
