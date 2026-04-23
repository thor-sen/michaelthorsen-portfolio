"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sectionNavItems = [
  { id: "about", label: "ABOUT", href: "/#about" as const },
  { id: "experience", label: "EXPERIENCE", href: "/#experience" as const },
  { id: "projects", label: "PROJECTS", href: "/#projects" as const },
] as const;

const scheduleNavItem = { id: "schedule", label: "SCHEDULE", href: "/schedule" as const };

const navItems = [...sectionNavItems, scheduleNavItem];

export function Navigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    if (pathname !== "/") return;

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

    sectionNavItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (id: string) => {
    if (pathname === "/schedule") return id === "schedule";
    if (pathname !== "/") return false;
    if (id === "schedule") return false;
    return activeSection === id;
  };

  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
      {navItems.map(({ id, label, href }) => {
        const active = isActive(id);
        return (
          <Link
            key={id}
            href={href}
            className={`text-xs font-bold tracking-widest transition-colors duration-300 ${
              active ? "text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
