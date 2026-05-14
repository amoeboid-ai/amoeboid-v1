import { cn } from "@/lib/cn";

/**
 * Dashed-border media slot. Drops in for hero, inline, and card thumbnails
 * until real editorial visuals are wired in. Matches the Phase 2 placeholder
 * pattern from v2 handoff.
 */
export function PlaceholderMedia({
  ratio = "16/9",
  label,
  sub,
  className,
}: {
  ratio?: "16/9" | "4/3";
  label: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full rounded-[12px]",
        "border border-dashed border-ink-faint",
        "bg-paper-2/40",
        "flex flex-col items-center justify-center text-center px-6",
        className
      )}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
    >
      <span className="font-mono-util text-ink-mute">{label}</span>
      {sub && (
        <span className="mt-1.5 font-sans text-[13px] text-ink-mute/80 max-w-[34ch]">
          {sub}
        </span>
      )}
    </div>
  );
}
