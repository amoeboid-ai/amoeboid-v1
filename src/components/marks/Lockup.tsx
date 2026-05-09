import { cn } from "@/lib/cn";
import { Nebula } from "./Nebula";
import { Wordmark } from "./Wordmark";

type Tone = "ink" | "cream";
type Variant = "horizontal" | "vertical" | "symbol" | "wordmark";

export interface LockupProps {
  variant?: Variant;
  tone?: Tone;
  symbolSize?: number;
  wordmarkSize?: number;
  staticSymbol?: boolean;
  className?: string;
}

export function Lockup({
  variant = "horizontal",
  tone = "ink",
  symbolSize = 32,
  wordmarkSize = 22,
  staticSymbol = false,
  className,
}: LockupProps) {
  if (variant === "wordmark") {
    return <Wordmark size={wordmarkSize} tone={tone} className={className} />;
  }
  if (variant === "symbol") {
    return (
      <Nebula
        size={symbolSize}
        tone={tone}
        mode={staticSymbol ? "static" : "ambient"}
        className={className}
      />
    );
  }
  if (variant === "vertical") {
    return (
      <span
        className={cn("inline-flex flex-col items-center gap-3", className)}
      >
        <Nebula
          size={symbolSize}
          tone={tone}
          mode={staticSymbol ? "static" : "ambient"}
        />
        <Wordmark size={wordmarkSize} tone={tone} />
      </span>
    );
  }
  // horizontal: wordmark sits with -11% margin-left (atmospheric edge embraces wordmark)
  const negativeMargin = -Math.round(symbolSize * 0.11);
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Nebula
        size={symbolSize}
        tone={tone}
        mode={staticSymbol ? "static" : "ambient"}
      />
      <span style={{ marginLeft: negativeMargin }}>
        <Wordmark size={wordmarkSize} tone={tone} />
      </span>
    </span>
  );
}
