"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:flex flex-col gap-4">
      {navItems.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className="group flex items-center gap-4 text-left"
          >
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-16 bg-foreground"
                  : "w-8 bg-muted group-hover:w-16 group-hover:bg-foreground"
              }`}
            />
            <span
              className={`text-xs font-bold tracking-widest transition-colors duration-300 ${
                isActive
                  ? "text-foreground"
                  : "text-muted group-hover:text-foreground"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
