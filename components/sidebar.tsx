import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Navigation } from "./navigation";

export function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Michael Thorsen
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          GTM Systems Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted">
          I build the infrastructure that makes revenue teams scale.
        </p>
        <div className="mt-16">
          <Navigation />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline underline-offset-4"
        >
          View Full Résumé
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href="https://github.com/thor-sen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Github className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/michaelthorsen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
