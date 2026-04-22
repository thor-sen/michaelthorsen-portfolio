import { ArrowUpRight } from "lucide-react";

interface Experience {
  dateRange: string;
  title: string;
  company: string;
  /** Omit or leave empty for a non-linked company name */
  companyUrl?: string;
  description: string;
}

const experiences: Experience[] = [
  {
    dateRange: "2022 — 2025",
    title: "Partnerships Lead",
    company: "Chapter",
    companyUrl: "https://www.businesswire.com/news/home/20260409159904/en/Chapter-Raises-%24100-Million-Series-E-to-Continue-Building-the-Trust-Layer-Between-Seniors-and-Technology-in-the-Age-of-AI",
    description:
      "Led GTM strategy across all partnership verticals, scaling from a solo role to a team of three. Selected and deployed the full GTM tech stack and owned RevOps infrastructure end to end. Built the outbound engine responsible for roughly 80% of Chapter's revenue as the company grew from Series B to Series D.",
  },
  {
    dateRange: "2020 — 2022",
    title: "Financial Advisor",
    company: "McAdam Financial",
    description:
      "Built a financial advisory book of business from scratch with 100% client retention. Selected within the first five months to teach client acquisition tactics company-wide based on conversion ratio.",
  },
];

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(242,237,228,0.12)] lg:group-hover:drop-shadow-lg" />
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2"
        aria-label={experience.dateRange}
      >
        {experience.dateRange}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-foreground">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground group-hover:text-accent transition-colors"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {experience.title} ·{" "}
                <span className="inline-block underline-offset-4 group-hover/link:underline group-focus-visible/link:underline">
                  {experience.company}
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                </span>
              </span>
            </a>
          ) : (
            <span className="text-base font-medium leading-tight group-hover:text-accent transition-colors">
              {experience.title} · {experience.company}
            </span>
          )}
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted">
          {experience.description}
        </p>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list space-y-12">
          {experiences.map((experience, index) => (
            <li key={index}>
              <ExperienceCard experience={experience} />
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-muted transition-colors"
          >
            View Full Resume
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
