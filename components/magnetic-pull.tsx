"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const INFLUENCE_PX = 80;
const MAX_DISPLACE_PX = 12;
const STIFFNESS = 0.22;
const DAMPING = 0.86;

type Entry = {
  el: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
};

function collectEntries(): Entry[] {
  const seen = new Set<HTMLElement>();
  const out: Entry[] = [];

  document
    .querySelectorAll<HTMLElement>(
      'a[href], button:not(:disabled), [role="button"]:not([aria-disabled="true"])'
    )
    .forEach((el) => {
      if (seen.has(el)) return;
      const href = el.getAttribute("href");
      if (el.tagName === "A" && (!href || href === "#")) return;
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      seen.add(el);
      out.push({ el, x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0 });
    });

  return out;
}

function clearEntries(entries: Entry[]) {
  for (const { el } of entries) {
    el.style.transform = "";
    el.style.willChange = "";
  }
}

export function MagneticPull() {
  const entriesRef = useRef<Entry[]>([]);
  const rafRef = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const bind = () => {
      clearEntries(entriesRef.current);
      entriesRef.current = collectEntries();
      for (const { el } of entriesRef.current) {
        el.style.willChange = "transform";
      }
    };

    bind();
    requestAnimationFrame(bind);

    let debounce: ReturnType<typeof setTimeout> | undefined;
    const mo = new MutationObserver(() => {
      clearTimeout(debounce);
      debounce = setTimeout(bind, 120);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onMove = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;
      for (const entry of entriesRef.current) {
        const rect = entry.el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < INFLUENCE_PX && dist > 0.25) {
          const t = 1 - dist / INFLUENCE_PX;
          const mag = t * MAX_DISPLACE_PX;
          entry.tx = (dx / dist) * mag;
          entry.ty = (dy / dist) * mag;
        } else {
          entry.tx = 0;
          entry.ty = 0;
        }
      }
    };

    let stopped = false;
    const tick = () => {
      if (stopped) return;
      for (const entry of entriesRef.current) {
        entry.vx += (entry.tx - entry.x) * STIFFNESS;
        entry.vy += (entry.ty - entry.y) * STIFFNESS;
        entry.vx *= DAMPING;
        entry.vy *= DAMPING;
        entry.x += entry.vx;
        entry.y += entry.vy;

        if (
          Math.abs(entry.tx) < 0.02 &&
          Math.abs(entry.ty) < 0.02 &&
          Math.abs(entry.x) < 0.04 &&
          Math.abs(entry.y) < 0.04
        ) {
          entry.x = entry.y = entry.vx = entry.vy = 0;
          entry.el.style.transform = "";
        } else {
          entry.el.style.transform = `translate3d(${entry.x.toFixed(2)}px, ${entry.y.toFixed(2)}px, 0)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      stopped = true;
      mo.disconnect();
      clearTimeout(debounce);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      clearEntries(entriesRef.current);
      entriesRef.current = [];
    };
  }, [pathname]);

  return null;
}
