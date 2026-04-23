import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { ScheduleCalendlyEmbed } from "@/components/schedule-calendly-embed";

export const metadata: Metadata = {
  title: "Schedule a Call | Michael Thorsen",
  description:
    "Book time to chat about GTM engineering, revenue systems, or anything on this site.",
};

export default function SchedulePage() {
  return (
    <div className="relative bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-[680px] flex-col px-6 pt-[29px] pb-12 md:pt-12 md:pb-20">
        <Sidebar />
        <main
          id="content"
          className="flex min-h-0 flex-1 flex-col text-foreground"
        >
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Schedule a Call
            </h1>
          </div>
          <div className="shrink-0">
            <ScheduleCalendlyEmbed />
          </div>
        </main>
      </div>
    </div>
  );
}
