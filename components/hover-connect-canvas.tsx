"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const FADE_MS = 400;
const PEAK_ALPHA = 0.2;

function nearestInteractive(node: EventTarget | null): HTMLElement | null {
  if (!node || !(node instanceof Element)) return null;
  const el = node.closest<HTMLElement>(
    'a[href], button:not(:disabled), [role="button"]:not([aria-disabled="true"])'
  );
  if (!el) return null;
  if (el.tagName === "A") {
    const href = el.getAttribute("href");
    if (!href || href === "#") return null;
  }
  const r = el.getBoundingClientRect();
  if (r.width < 2 || r.height < 2) return null;
  return el;
}

function parseAccentRgb(css: string): [number, number, number] {
  const v = css.trim();
  if (v.startsWith("#")) {
    const h = v.slice(1);
    if (h.length === 6) {
      return [
        parseInt(h.slice(0, 2), 16),
        parseInt(h.slice(2, 4), 16),
        parseInt(h.slice(4, 6), 16),
      ];
    }
    if (h.length === 3) {
      return [
        parseInt(h[0] + h[0], 16),
        parseInt(h[1] + h[1], 16),
        parseInt(h[2] + h[2], 16),
      ];
    }
  }
  const m = v.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return [212, 232, 240];
}

export function HoverConnectCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const readRgb = () =>
      parseAccentRgb(
        getComputedStyle(document.documentElement).getPropertyValue("--color-accent")
      );

    let rgb = readRgb();

    type LineState = { from: HTMLElement; to: HTMLElement; start: number };
    let line: LineState | null = null;
    let raf: number = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rgb = readRgb();
    };

    resize();
    window.addEventListener("resize", resize);

    const clear = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
    };

    const tick = () => {
      if (!line) {
        clear();
        raf = 0;
        return;
      }

      const elapsed = performance.now() - line.start;
      const fade = 1 - Math.min(1, elapsed / FADE_MS);
      if (fade <= 0 || !line.from.isConnected || !line.to.isConnected) {
        line = null;
        clear();
        raf = 0;
        return;
      }

      const a = line.from.getBoundingClientRect();
      const b = line.to.getBoundingClientRect();
      const x1 = a.left + a.width / 2;
      const y1 = a.top + a.height / 2;
      const x2 = b.left + b.width / 2;
      const y2 = b.top + b.height / 2;

      clear();
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${PEAK_ALPHA * fade})`;
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.stroke();

      raf = requestAnimationFrame(tick);
    };

    const schedule = () => {
      if (raf !== 0) return;
      raf = requestAnimationFrame(tick);
    };

    const onMouseOver = (e: MouseEvent) => {
      const cur = nearestInteractive(e.target);
      const rel = nearestInteractive(e.relatedTarget);
      if (!cur || !rel || cur === rel) return;
      line = { from: rel, to: cur, start: performance.now() };
      schedule();
    };

    document.addEventListener("mouseover", onMouseOver, true);

    return () => {
      document.removeEventListener("mouseover", onMouseOver, true);
      window.removeEventListener("resize", resize);
      if (raf !== 0) cancelAnimationFrame(raf);
      line = null;
      raf = 0;
      clear();
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] h-[100dvh] w-full"
    />
  );
}
