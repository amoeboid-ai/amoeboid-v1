"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Tone = "ink" | "cream";
type Mode = "ambient" | "static";

export interface NebulaProps {
  size?: number;
  tone?: Tone;
  mode?: Mode;
  className?: string;
  ariaLabel?: string;
}

/**
 * Nebula — three-circle organic mark.
 * - mode "ambient": continuous drift + 15s rotation + turbulence displacement
 * - mode "static":  no animation, used at small scales (footer, chat icon)
 * Auto-falls-back to static under prefers-reduced-motion.
 */
export function Nebula({
  size = 96,
  tone = "ink",
  mode = "ambient",
  className,
  ariaLabel = "Amoeboid mark",
}: NebulaProps) {
  const prefersReduced = useReducedMotion();
  const isStatic = mode === "static" || prefersReduced;

  const fill = tone === "ink" ? "#0C0C0C" : "#F6F4EF";
  const ringStroke =
    tone === "ink" ? "rgba(12,12,12,0.18)" : "rgba(246,244,239,0.30)";
  const highlight =
    tone === "ink" ? "rgba(246,244,239,0.85)" : "rgba(12,12,12,0.65)";

  const useFilter = !isStatic;

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        className="block"
        animate={
          isStatic
            ? undefined
            : { rotate: 360 }
        }
        transition={
          isStatic
            ? undefined
            : { duration: 15, ease: "linear", repeat: Infinity }
        }
      >
        <g filter={useFilter ? "url(#nebula-filter)" : undefined}>
          {/* Three overlapping circles = organic three-lobe form. */}
          <circle cx="13" cy="13" r="9" fill={fill} fillOpacity="0.92" />
          <circle cx="20" cy="14" r="7.4" fill={fill} fillOpacity="0.78" />
          <circle cx="16" cy="20" r="6.6" fill={fill} fillOpacity="0.68" />
        </g>
        {/* Outer ring — preserves the silhouette beneath turbulence */}
        <circle
          cx="16"
          cy="16"
          r="13"
          fill="none"
          stroke={ringStroke}
          strokeWidth="0.6"
        />
        {/* Atmospheric highlight */}
        <circle cx="13.5" cy="13.5" r="2.4" fill={highlight} />
      </motion.svg>

      {/* Ambient drift — slow translate of the whole symbol */}
      {!isStatic && (
        <style>{`
          @keyframes nebulaDrift {
            0%   { transform: translate(0, 0); }
            50%  { transform: translate(0.8px, -0.6px); }
            100% { transform: translate(0, 0); }
          }
        `}</style>
      )}
    </span>
  );
}
