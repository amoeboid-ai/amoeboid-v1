"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "ink" | "cream" | "ghost";

export interface PillCTAProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  tone?: Tone;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
}

const toneClass: Record<Tone, string> = {
  ink: "bg-ink text-paper border border-ink",
  cream: "bg-paper text-ink border border-ink",
  ghost: "bg-transparent text-ink border border-ink-faint hover:border-ink",
};

/**
 * PillCTA — filled ink pill (or cream/ghost variant). Hover scale 1.025, arrow translateX 3px.
 * Use for primary calls. For secondary text-link, use TextCTA.
 */
export function PillCTA({
  children,
  href,
  onClick,
  tone = "ink",
  arrow = true,
  className,
  ariaLabel,
  type = "button",
}: PillCTAProps) {
  const prefersReduced = useReducedMotion();
  const inner = (
    <motion.span
      initial={false}
      whileHover={prefersReduced ? undefined : { scale: 1.025 }}
      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
      className={cn(
        "inline-flex items-center gap-3 rounded-full px-6 py-3.5",
        "text-sm tracking-[0.04em]",
        toneClass[tone],
        "transition-colors",
        className
      )}
    >
      <span className="font-display font-medium">{children}</span>
      {arrow && (
        <motion.span
          aria-hidden="true"
          initial={false}
          className="inline-block"
          variants={
            prefersReduced
              ? undefined
              : { rest: { x: 0 }, hover: { x: 3 } }
          }
        >
          →
        </motion.span>
      )}
    </motion.span>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} aria-label={ariaLabel} className="inline-flex">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-flex">
        {inner}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-flex"
    >
      {inner}
    </button>
  );
}

/**
 * TextCTA — small inline link, ink-mute, used as the secondary in dual-CTA pairs.
 */
export function TextCTA({
  children,
  href,
  onClick,
  arrow = false,
  className,
  ariaLabel,
}: Omit<PillCTAProps, "tone">) {
  const inner = (
    <span
      className={cn(
        "font-mono-util text-ink-mute hover:text-ink transition-colors",
        "inline-flex items-center gap-2",
        className
      )}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </span>
  );
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) return <a href={href} aria-label={ariaLabel}>{inner}</a>;
    return <Link href={href} aria-label={ariaLabel}>{inner}</Link>;
  }
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
