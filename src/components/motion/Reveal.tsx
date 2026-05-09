"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export const REVEAL_DELAYS = [0.08, 0.2, 0.32, 0.44, 0.56, 0.68] as const;

export interface RevealProps {
  children: ReactNode;
  step?: 0 | 1 | 2 | 3 | 4 | 5;
  delay?: number;
  duration?: number;
  className?: string;
  yLift?: number;
  once?: boolean;
}

/**
 * Reveal — staggered entrance unit. Replicates Phase 1 .anim/.a1-.a6 pattern,
 * scroll-triggered. Default delay schedule: 80/200/320/440/560/680ms.
 * Always renders as a div; for semantic alternatives, wrap externally.
 */
export function Reveal({
  children,
  step,
  delay,
  duration = 0.7,
  className,
  yLift = 12,
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const computedDelay =
    typeof delay === "number"
      ? delay
      : typeof step === "number"
      ? REVEAL_DELAYS[step]
      : 0;

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: yLift },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{ duration, ease: EASE, delay: computedDelay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * HoverLift — translateY(-3px) + soft shadow on hover, used for tiles/cases/windows.
 * Spec: 0.4s cubic-bezier(0.2,0.7,0.2,1).
 */
export function HoverLift({
  children,
  className,
  amount = 3,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileHover={
        prefersReduced
          ? undefined
          : {
              y: -amount,
              boxShadow: "0 30px 60px -30px rgba(12,12,12,0.18)",
            }
      }
      transition={{ duration: 0.4, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
