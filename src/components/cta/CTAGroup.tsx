"use client";

import { PillCTA, TextCTA } from "./PillCTA";
import { useAdaptive } from "@/components/adaptive/AdaptiveContext";
import { cn } from "@/lib/cn";

/**
 * Dual-CTA pattern (CTA wording lock, May 2026):
 *
 *   homepage:
 *     primary  = "Talk to Adaptive →" (opens widget) — single CTA, no secondary
 *
 *   product / engine / work / case-study:
 *     primary   = "Start an engagement →" (-> /contact)
 *     secondary = "Talk to Adaptive"      (opens widget)
 *
 *   products-hub closing:
 *     primary   = "Talk to Adaptive →"
 *     secondary = "Start an engagement →"
 *
 *   company / footer:
 *     primary   = "Start an engagement →"
 */

type Pattern =
  | "homepage"
  | "engagement-first" /* product / engine / work / case-study */
  | "adaptive-first" /* products hub closing */
  | "engagement-only"; /* company contact + footer */

export function CTAGroup({
  pattern,
  className,
}: {
  pattern: Pattern;
  className?: string;
}) {
  const { open: openAdaptive } = useAdaptive();

  if (pattern === "homepage") {
    return (
      <div className={cn("inline-flex", className)}>
        <PillCTA tone="ink" onClick={openAdaptive} ariaLabel="Talk to Adaptive">
          Talk to Adaptive
        </PillCTA>
      </div>
    );
  }
  if (pattern === "engagement-first") {
    return (
      <div className={cn("flex flex-wrap items-center gap-x-6 gap-y-3", className)}>
        <PillCTA tone="ink" href="/contact" ariaLabel="Start an engagement">
          Start an engagement
        </PillCTA>
        <TextCTA onClick={openAdaptive} arrow>
          Talk to Adaptive
        </TextCTA>
      </div>
    );
  }
  if (pattern === "adaptive-first") {
    return (
      <div className={cn("flex flex-wrap items-center gap-x-6 gap-y-3", className)}>
        <PillCTA tone="ink" onClick={openAdaptive} ariaLabel="Talk to Adaptive">
          Talk to Adaptive
        </PillCTA>
        <TextCTA href="/contact" arrow>
          Start an engagement
        </TextCTA>
      </div>
    );
  }
  // engagement-only
  return (
    <div className={cn("inline-flex", className)}>
      <PillCTA tone="ink" href="/contact" ariaLabel="Start an engagement">
        Start an engagement
      </PillCTA>
    </div>
  );
}
