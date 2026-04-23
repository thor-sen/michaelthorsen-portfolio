"use client";

import { InlineWidget } from "react-calendly";

export function ScheduleCalendlyEmbed() {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        marginTop: "2rem",
        padding: "2rem",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
      }}
    >
      <InlineWidget
        url="https://calendly.com/mrourkethorsen"
        styles={{ height: "700px" }}
      />
    </div>
  );
}
