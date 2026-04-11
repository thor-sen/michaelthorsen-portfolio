import Image from "next/image";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Navigation } from "./navigation";
import { ThorNameHeading } from "./thor-name-heading";

export function Sidebar() {
  return (
    <header className="flex flex-col items-center text-center pb-12 mb-12 border-b border-card-border">
      <Image
        src="/headshot.jpeg"
        alt="Michael Thorsen"
        width={120}
        height={120}
        className="mb-6 h-[120px] w-[120px] rounded-full object-cover"
        priority
        unoptimized
      />
      <ThorNameHeading />
      <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
        GTM Operator
      </h2>
      <p className="mt-4 max-w-xs leading-normal text-muted">
        I build revenue systems and the teams to run them.
      </p>
      <div className="mt-8">
        <Navigation />
      </div>
      <div className="mt-8 flex items-center justify-center gap-5">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline underline-offset-4"
        >
          View Full Resume
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <span className="h-4 w-px bg-card-border" />
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="https://github.com/thor-sen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground transition-opacity hover:opacity-80"
            >
              <Github className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/michael-thorsen-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground transition-opacity hover:opacity-80"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
