import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Placeholder visual windows — the dashed-pill mark at center plus optional caption.
 * Used as the universal visual stand-in across hero, product tiles, work cases, etc.
 * Phase 1 reference: each surface variant has a specific register-coded background.
 */

type Variant =
  | "paper"
  | "ink"
  | "sense" /* horizontal/vertical grid lines */
  | "form" /* warm radial wash */
  | "reach" /* dark wired grid */
  | "adapt" /* twin radial pulses — loop / compounding */
  | "vis-a"
  | "vis-b"
  | "vis-c"
  | "vis-d";

const surfaceClass: Record<Variant, string> = {
  paper:
    "bg-[linear-gradient(180deg,#EEEBE5_0%,#E6E2D8_100%)] [background-image:repeating-linear-gradient(135deg,rgba(12,12,12,0.025)_0_14px,rgba(12,12,12,0)_14px_28px),linear-gradient(180deg,#EEEBE5_0%,#E6E2D8_100%)]",
  ink: "bg-[linear-gradient(180deg,#1a1a18_0%,#0c0c0c_100%)]",
  sense:
    "[background-image:repeating-linear-gradient(0deg,rgba(12,12,12,0.05)_0_1px,transparent_1px_36px),repeating-linear-gradient(90deg,rgba(12,12,12,0.05)_0_1px,transparent_1px_36px),linear-gradient(180deg,#EEEBE5_0%,#E6E2D8_100%)]",
  form: "[background-image:radial-gradient(ellipse_at_38%_32%,rgba(246,244,239,0.65)_0%,rgba(12,12,12,0)_55%),linear-gradient(135deg,#EEEBE5_0%,#E6E2D8_60%,#d6d2c8_100%)]",
  reach: "bg-[linear-gradient(180deg,#1a1a18_0%,#0c0c0c_100%)]",
  adapt:
    "[background-image:radial-gradient(circle_at_72%_30%,rgba(12,12,12,0.07)_0%,rgba(12,12,12,0)_48%),radial-gradient(circle_at_28%_72%,rgba(12,12,12,0.05)_0%,rgba(12,12,12,0)_44%),linear-gradient(180deg,#EEEBE5_0%,#E6E2D8_100%)]",
  "vis-a": "bg-[linear-gradient(135deg,#d8d3c5_0%,#c2bdaf_100%)]",
  "vis-b": "bg-[linear-gradient(180deg,#1c1c1a_0%,#0c0c0c_100%)]",
  "vis-c": "bg-[linear-gradient(180deg,#EEEBE5_0%,#E6E2D8_100%)]",
  "vis-d": "bg-[linear-gradient(135deg,#2b2926_0%,#1a1815_100%)]",
};

export interface PlaceholderProps {
  variant?: Variant;
  label?: string;
  badge?: string;
  corner?: string;
  centerLabel?: string;
  caption?: ReactNode;
  className?: string;
  aspect?: string;
  rounded?: string;
  innerFrame?: boolean; // form variant inset border
  reachGrid?: boolean; // reach inner wired grid
  dark?: boolean; // invert text for dark surfaces
  children?: ReactNode;
}

export function Placeholder({
  variant = "paper",
  label,
  badge,
  corner,
  centerLabel,
  caption,
  className,
  aspect = "aspect-[16/9]",
  rounded = "rounded-[18px]",
  innerFrame = false,
  reachGrid = false,
  dark = false,
  children,
}: PlaceholderProps) {
  const labelTone = dark ? "text-[rgba(246,244,239,0.55)]" : "text-ink-mute";
  const phTone = dark
    ? "text-[rgba(246,244,239,0.45)] border-[rgba(246,244,239,0.35)]"
    : "text-ink-faint border-ink-faint";

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-ink-line",
        aspect,
        rounded,
        surfaceClass[variant],
        className
      )}
    >
      {innerFrame && (
        <div className="pointer-events-none absolute inset-[18px] rounded-[6px] border border-[rgba(12,12,12,0.10)]" />
      )}
      {reachGrid && (
        <div
          className="pointer-events-none absolute inset-[22px] rounded-[4px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg,rgba(246,244,239,0.18) 0 1px,transparent 1px 28px),repeating-linear-gradient(0deg,rgba(246,244,239,0.10) 0 1px,transparent 1px 28px)",
          }}
        />
      )}
      {label && (
        <span
          className={cn(
            "absolute top-5 left-[22px] z-10 font-mono-util",
            labelTone
          )}
        >
          {label}
        </span>
      )}
      {badge && (
        <span
          className={cn(
            "absolute top-[14px] left-4 z-10 font-mono-util",
            labelTone
          )}
        >
          {badge}
        </span>
      )}
      {corner && (
        <span
          className={cn(
            "absolute top-[18px] right-5 z-10 font-mono-util",
            labelTone
          )}
        >
          {corner}
        </span>
      )}
      {centerLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "font-mono-util border border-dashed rounded-full px-[14px] py-2",
              phTone
            )}
          >
            {centerLabel}
          </span>
        </div>
      )}
      {caption && (
        <div className="absolute bottom-[22px] left-[22px] right-[22px] flex items-end justify-between gap-6">
          {caption}
        </div>
      )}
      {children}
    </div>
  );
}
