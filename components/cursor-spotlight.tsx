"use client";

import { useEffect, useRef, useCallback } from "react";

const DOT_SIZE = 5;
const BRANCH_MIN = 25;
const BRANCH_MAX = 35;
const SUB_BRANCH_SPLIT = 0.65;
const FADE_MS = 700;
const MAX_CLUSTERS = 4;
const SPAWN_DIST_THRESHOLD = 40;
const STROKE_ALPHA = 0.2;

type Branch = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  subs: { x1: number; y1: number; x2: number; y2: number }[];
};

type Cluster = {
  born: number;
  branches: Branch[];
};

function randRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function makeBranch(ox: number, oy: number, moveAngle: number): Branch {
  const angleOffset = (Math.random() - 0.5) * 1.2;
  const angle = moveAngle + angleOffset;
  const len = randRange(BRANCH_MIN, BRANCH_MAX);
  const x2 = ox + Math.cos(angle) * len;
  const y2 = oy + Math.sin(angle) * len;

  const splitPt = SUB_BRANCH_SPLIT + Math.random() * 0.1;
  const mx = ox + (x2 - ox) * splitPt;
  const my = oy + (y2 - oy) * splitPt;

  const subCount = Math.random() < 0.5 ? 1 : 2;
  const subs: Branch["subs"] = [];
  for (let i = 0; i < subCount; i++) {
    const subAngle = angle + (Math.random() - 0.5) * 1.4;
    const subLen = randRange(8, 16);
    subs.push({
      x1: mx,
      y1: my,
      x2: mx + Math.cos(subAngle) * subLen,
      y2: my + Math.sin(subAngle) * subLen,
    });
  }

  return { x1: ox, y1: oy, x2, y2, subs };
}

export function CursorSpotlight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    mx: 0,
    my: 0,
    lastSpawnX: 0,
    lastSpawnY: 0,
    visible: false,
    clusters: [] as Cluster[],
    raf: 0,
    accentRgb: [212, 232, 240] as [number, number, number],
  });

  const readAccent = useCallback((el?: Element) => {
    const target = el || document.querySelector("[style*='--color-accent']") || document.documentElement;
    const raw = getComputedStyle(target)
      .getPropertyValue("--color-accent")
      .trim();
    if (raw.startsWith("#") && raw.length === 7) {
      stateRef.current.accentRgb = [
        parseInt(raw.slice(1, 3), 16),
        parseInt(raw.slice(3, 5), 16),
        parseInt(raw.slice(5, 7), 16),
      ];
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dot = dotRef.current;
    if (!canvas || !dot) return;
    const hasFinePointer =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasFinePointer) {
      canvas.style.display = "none";
      dot.style.display = "none";
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    readAccent();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      readAccent();
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      s.mx = e.clientX;
      s.my = e.clientY;
      s.visible = true;
      if (e.target instanceof Element) readAccent(e.target);
      dot.style.transform = `translate(${s.mx - DOT_SIZE * 2}px, ${s.my - DOT_SIZE * 2}px)`;
      dot.style.opacity = "1";

      const dx = s.mx - s.lastSpawnX;
      const dy = s.my - s.lastSpawnY;
      const dist = Math.hypot(dx, dy);

      if (dist > SPAWN_DIST_THRESHOLD) {
        const moveAngle = Math.atan2(dy, dx);
        const branchCount = Math.random() < 0.4 ? 2 : 1;
        const branches: Branch[] = [];
        for (let i = 0; i < branchCount; i++) {
          branches.push(makeBranch(s.mx, s.my, moveAngle));
        }
        s.clusters.push({ born: performance.now(), branches });
        if (s.clusters.length > MAX_CLUSTERS) {
          s.clusters.shift();
        }
        s.lastSpawnX = s.mx;
        s.lastSpawnY = s.my;
      }
    };

    const onLeave = () => {
      s.visible = false;
      dot.style.opacity = "0";
    };

    const onThorBurst = (e: Event) => {
      const { x, y } = (e as CustomEvent).detail;
      const branchCount = 3 + Math.floor(Math.random() * 3);
      const branches: Branch[] = [];
      for (let i = 0; i < branchCount; i++) {
        const angle = (Math.PI * 2 * i) / branchCount + (Math.random() - 0.5) * 0.8;
        branches.push(makeBranch(x, y, angle));
      }
      s.clusters.push({ born: performance.now(), branches });
      if (s.clusters.length > MAX_CLUSTERS + 2) {
        s.clusters.shift();
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("thor-burst", onThorBurst);
    document.body.addEventListener("mouseleave", onLeave);

    const tick = () => {
      const now = performance.now();
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const [r, g, b] = s.accentRgb;

      s.clusters = s.clusters.filter((c) => now - c.born < FADE_MS);

      for (const cluster of s.clusters) {
        const age = now - cluster.born;
        const alpha = STROKE_ALPHA * (1 - age / FADE_MS);
        if (alpha <= 0) continue;

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.lineCap = "round";

        for (const branch of cluster.branches) {
          ctx.beginPath();
          ctx.moveTo(branch.x1, branch.y1);
          ctx.lineTo(branch.x2, branch.y2);
          ctx.stroke();

          for (const sub of branch.subs) {
            ctx.beginPath();
            ctx.moveTo(sub.x1, sub.y1);
            ctx.lineTo(sub.x2, sub.y2);
            ctx.stroke();
          }
        }
      }

      s.raf = requestAnimationFrame(tick);
    };

    s.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(s.raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("thor-burst", onThorBurst);
      window.removeEventListener("resize", resize);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, [readAccent]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[200]"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[201] rounded-full opacity-0 transition-opacity duration-200"
        style={{
          width: DOT_SIZE * 4,
          height: DOT_SIZE * 4,
          background: `radial-gradient(circle, var(--color-accent) 0%, color-mix(in srgb, var(--color-accent) 30%, transparent) 40%, transparent 70%)`,
        }}
      />
    </>
  );
}
