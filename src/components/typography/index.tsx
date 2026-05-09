import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type AsProp<T extends ElementType> = { as?: T };
type CommonProps = { className?: string; children: ReactNode };

/**
 * Display: scale-led hierarchy. ALL headings render Inter Tight 500.
 * Visual hierarchy comes from the type-scale clamp, not weight.
 */

export function Hero({
  as: Tag = "h1",
  className,
  children,
}: CommonProps & AsProp<ElementType>) {
  return (
    <Tag
      className={cn(
        "font-display text-ink",
        "text-[clamp(64px,8.2vw,120px)] leading-[0.98] tracking-[-0.032em] max-w-[16ch]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionDisplay({
  as: Tag = "h2",
  className,
  children,
}: CommonProps & AsProp<ElementType>) {
  return (
    <Tag
      className={cn(
        "font-display text-ink",
        "text-[clamp(40px,5.4vw,72px)] leading-[1.02] tracking-[-0.022em]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function SubDisplay({
  as: Tag = "h3",
  className,
  children,
}: CommonProps & AsProp<ElementType>) {
  return (
    <Tag
      className={cn(
        "font-display text-ink",
        "text-[clamp(26px,3vw,40px)] leading-[1.1] tracking-[-0.018em]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Heading({
  as: Tag = "h4",
  className,
  children,
}: CommonProps & AsProp<ElementType>) {
  return (
    <Tag
      className={cn(
        "font-display text-ink",
        "text-[clamp(20px,1.6vw,26px)] leading-[1.2] tracking-[-0.012em]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Body({
  as: Tag = "p",
  className,
  children,
  tone = "ink",
}: CommonProps & AsProp<ElementType> & { tone?: "ink" | "soft" | "mute" }) {
  const toneClass =
    tone === "soft" ? "text-ink-soft" : tone === "mute" ? "text-ink-mute" : "text-ink";
  return (
    <Tag
      className={cn(
        "font-sans",
        "text-[clamp(16px,1.2vw,20px)] leading-[1.5] tracking-[0]",
        toneClass,
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Mono({
  as: Tag = "span",
  className,
  children,
}: CommonProps & AsProp<ElementType>) {
  return (
    <Tag className={cn("font-mono-util text-ink-soft", className)}>
      {children}
    </Tag>
  );
}

/**
 * Eyebrow — mono utility with the leading 28×1px ink dash.
 * Pattern: "Section 02 · Three Products"
 */
export function Eyebrow({
  className,
  children,
  tone = "soft",
}: CommonProps & { tone?: "ink" | "soft" | "mute" }) {
  const toneClass =
    tone === "ink" ? "text-ink" : tone === "mute" ? "text-ink-mute" : "text-ink-soft";
  return (
    <span className={cn("inline-flex items-center gap-3 font-mono-util", toneClass, className)}>
      <span aria-hidden="true" className="inline-block h-px w-7 bg-current opacity-60" />
      {children}
    </span>
  );
}

/**
 * Dim — typographic emphasis variant for `<dim>` spans inside Hero/SectionDisplay.
 * Renders the same scale at reduced ink for the secondary clause.
 */
export function Dim({ children, className }: CommonProps) {
  return <span className={cn("text-ink-mute", className)}>{children}</span>;
}
