import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type AsProp<T extends ElementType> = { as?: T };
type CommonProps = { className?: string; children: ReactNode };

/**
 * Container: max-width 1640px, gutter 56px (40px tablet, 24px mobile).
 */
export function Container({
  as: Tag = "div",
  className,
  children,
}: CommonProps & AsProp<ElementType>) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full gutter",
        className
      )}
      style={{ maxWidth: "var(--container-max)" }}
    >
      {children}
    </Tag>
  );
}

/**
 * Section: vertical padding rhythm + optional surface swap.
 */
export function Section({
  as: Tag = "section",
  className,
  children,
  surface = "paper",
  fullBleed = false,
  pad = "default",
  id,
}: CommonProps &
  AsProp<ElementType> & {
    surface?: "paper" | "paper-2" | "paper-3" | "ink";
    fullBleed?: boolean;
    pad?: "default" | "tight" | "none";
    id?: string;
  }) {
  const bg =
    surface === "paper"
      ? "bg-paper text-ink"
      : surface === "paper-2"
      ? "bg-paper-2 text-ink"
      : surface === "paper-3"
      ? "bg-paper-3 text-ink"
      : "bg-ink text-paper";
  const pad_ =
    pad === "default" ? "section-pad" : pad === "tight" ? "py-[64px] md:py-[80px]" : "";
  return (
    <Tag
      id={id}
      className={cn(bg, pad_, fullBleed ? "w-full" : "", className)}
    >
      {fullBleed ? (
        children
      ) : (
        <Container>{children}</Container>
      )}
    </Tag>
  );
}

/**
 * Hairline: 1px ink-line horizontal rule. Drop in between hero head + body.
 */
export function Hairline({ className }: { className?: string }) {
  return <hr className={cn("border-0 h-px bg-ink-line w-full", className)} />;
}

/**
 * Grid: thin wrapper around CSS grid with tokens we use repeatedly.
 */
export function Grid({
  className,
  children,
  cols = "12",
  gap = "default",
}: CommonProps & {
  cols?: "12" | "2" | "3" | "4" | "5";
  gap?: "default" | "tight" | "loose";
}) {
  const colsClass =
    cols === "12"
      ? "grid-cols-12"
      : cols === "5"
      ? "grid-cols-1 md:grid-cols-5"
      : cols === "4"
      ? "grid-cols-1 md:grid-cols-4"
      : cols === "3"
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2";
  const gapClass =
    gap === "tight" ? "gap-6" : gap === "loose" ? "gap-12 md:gap-16" : "gap-8 md:gap-10";
  return <div className={cn("grid", colsClass, gapClass, className)}>{children}</div>;
}
