"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function ThorNameHeading() {
  const [hover, setHover] = useState(false);
  const thorRef = useRef<HTMLSpanElement>(null);
  const hoverRef = useRef(false);

  const emitBurst = useCallback(() => {
    if (!thorRef.current) return;
    const rect = thorRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    window.dispatchEvent(
      new CustomEvent("thor-burst", { detail: { x: cx, y: cy } })
    );
  }, []);

  useEffect(() => {
    hoverRef.current = hover;
    if (!hover) return;

    emitBurst();
    const id = setInterval(() => {
      if (hoverRef.current) emitBurst();
    }, 180);
    return () => clearInterval(id);
  }, [hover, emitBurst]);

  return (
    <h1 className="text-[36px] font-bold tracking-tight text-foreground">
      Michael{" "}
      <span
        ref={thorRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="inline-block cursor-none"
      >
        Thor
      </span>
      sen
    </h1>
  );
}
