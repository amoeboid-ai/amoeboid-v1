import { cn } from "@/lib/cn";

type Tone = "ink" | "cream";

export interface WordmarkProps {
  size?: number;
  tone?: Tone;
  className?: string;
  as?: "span" | "div";
}

export function Wordmark({
  size = 22,
  tone = "ink",
  className,
  as: Tag = "span",
}: WordmarkProps) {
  return (
    <Tag
      className={cn(
        "font-wordmark leading-none select-none",
        tone === "ink" ? "text-ink" : "text-paper",
        className
      )}
      style={{ fontSize: size }}
    >
      amoeboid
    </Tag>
  );
}
