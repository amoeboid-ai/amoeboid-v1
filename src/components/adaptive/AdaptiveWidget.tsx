"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { AnimatedNebula } from "@/components/marks/NebulaFilterDefs";
import { useAdaptive } from "./AdaptiveContext";
import { cn } from "@/lib/cn";

/**
 * AdaptiveWidget — panel anchored to the top-right of the sticky header.
 *
 * Trigger: the "Talk to Adaptive" pill in SiteHeader (no bottom-right launcher
 *   in build-dev-1.2). On open, slide down from the trigger with cubic-bezier
 *   (0.2, 0.7, 0.2, 1) at 260ms.
 *
 * Sizes:
 *   default   420 × 640
 *   expanded  560 × 820       (desktop only; toggle in header)
 *   mobile    full viewport (100dvh sheet)
 *
 * Persistence: NONE for expanded state. Every close resets to default size.
 *
 * Portal: rendered into document.body to escape the backdrop-blur on
 *   SiteHeader, which would otherwise create a containing block for fixed
 *   descendants (same pattern as MobileNav.tsx, commit e31dc23).
 */

interface Message {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "adaptive.messages.v1";
const EASE = [0.2, 0.7, 0.2, 1] as const;

const SUGGESTED = [
  "What does Sense do?",
  "Show me a case study",
  "How does Brand Calibration work?",
  "Connect me with the team",
];

const DEFAULT_SIZE = { w: 420, h: 640 };
const EXPANDED_SIZE = { w: 560, h: 820 };

export function AdaptiveWidget() {
  const { isOpen, close } = useAdaptive();
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // SSR-safe portal target
  useEffect(() => setMounted(true), []);

  // Always reset expanded state when the widget closes — no persistence.
  useEffect(() => {
    if (!isOpen) setIsExpanded(false);
  }, [isOpen]);

  // Restore any prior session messages
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Message[];
        if (Array.isArray(parsed)) setMessages(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* ignore */
    }
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isPending, isOpen]);

  // Esc closes
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // Focus input when opening into empty / active state
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || isPending) return;
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setIsPending(true);
    setError(null);

    try {
      const res = await fetch("/api/adaptive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `Adaptive request failed (${res.status})`);
      }
      const data = (await res.json()) as { reply: string };
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsPending(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    void sendMessage(input);
  }

  const hasConversation = messages.length > 0;
  const sendDisabled = !input.trim() || isPending;
  const size = isExpanded ? EXPANDED_SIZE : DEFAULT_SIZE;

  if (!mounted) return null;

  const panel = (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          key="panel"
          role="dialog"
          aria-label="Adaptive"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: prefersReduced ? 0.15 : 0.26, ease: EASE }}
          style={{
            transformOrigin: "top right",
            // Desktop sizing is set inline so framer-motion can animate the
            // dimension changes when toggling expand/collapse.
            ["--adaptive-w" as string]: `${size.w}px`,
            ["--adaptive-h" as string]: `${size.h}px`,
          }}
          className={cn(
            "fixed z-[9999]",
            // Desktop: anchored top-right just below the 72px sticky header
            "md:top-[80px] md:right-6 lg:right-8",
            "md:w-[var(--adaptive-w)] md:h-[var(--adaptive-h)]",
            "md:rounded-[20px] md:border md:border-ink-line",
            "md:shadow-[0_30px_80px_-30px_rgba(12,12,12,0.45)]",
            // Mobile: full-viewport sheet
            "inset-0 max-md:rounded-none max-md:border-0",
            "flex flex-col bg-paper overflow-hidden"
          )}
        >
          {/* ── Header ──────────────────────────────────── */}
          <header className="flex items-center justify-between px-5 py-3 border-b border-ink-line">
            <div className="inline-flex items-center gap-2.5">
              {/* +30% Nebula (was size 22 → 29). Tightened header padding (py-4 → py-3). */}
              <AnimatedNebula size={29} variant="ambient" />
              <span className="font-display font-medium text-[16px] tracking-[-0.014em] text-ink">
                Adaptive
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono-util text-ink-mute">
              <span
                className={cn(
                  "inline-block w-1.5 h-1.5 rounded-full",
                  isPending ? "bg-ink animate-pulse" : "bg-ink"
                )}
              />
              {isPending ? "Typing" : "Online"}
            </span>
            <div className="ml-3 inline-flex items-center gap-1">
              {/* Expand / collapse — desktop only, no persistence */}
              <button
                type="button"
                onClick={() => setIsExpanded((v) => !v)}
                aria-label={isExpanded ? "Collapse widget" : "Expand widget"}
                aria-pressed={isExpanded}
                className={cn(
                  "hidden md:inline-flex items-center justify-center w-7 h-7 rounded-full",
                  "text-ink-mute hover:text-ink hover:bg-paper-2 transition-colors",
                  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink focus-visible:outline-offset-2"
                )}
              >
                {isExpanded ? (
                  // ti-arrows-diagonal-minimize-2
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                    <path
                      d="M5 9h4V5M19 15h-4v4M15 9V5h4M9 15v4H5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  // ti-arrows-diagonal
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                    <path
                      d="M16 4h4v4M14 10l6-6M8 20H4v-4M10 14l-6 6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close Adaptive"
                className="inline-flex items-center justify-center w-7 h-7 rounded-full text-ink-mute hover:text-ink hover:bg-paper-2 transition-colors"
              >
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true">
                  <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </header>

          {/* ── Body ────────────────────────────────────── */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5">
            {/* State 02 · Empty greeting + suggested chips */}
            {!hasConversation && (
              <div className="flex flex-col gap-7">
                <div className="flex flex-col items-start gap-4 pt-4">
                  <motion.span
                    animate={prefersReduced ? undefined : { scale: [1, 1.045, 1] }}
                    transition={
                      prefersReduced
                        ? undefined
                        : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                    }
                    className="inline-flex"
                  >
                    <AnimatedNebula size={56} variant="ambient" />
                  </motion.span>
                  <h2 className="font-display font-medium text-[clamp(22px,2.2vw,28px)] leading-[1.2] tracking-[-0.018em] text-ink">
                    Hi. I&rsquo;m Adaptive.
                  </h2>
                  <p className="font-sans text-[15px] leading-[1.5] text-ink-soft max-w-[36ch]">
                    Ask about Sense, Form, Reach, or how an engagement starts. I can route you to a partner when ready.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <span className="font-mono-util text-ink-mute mb-1">Try asking</span>
                  {SUGGESTED.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => void sendMessage(s)}
                      className={cn(
                        "group inline-flex items-center justify-between gap-3",
                        "rounded-full pl-4 pr-3.5 py-2.5",
                        "bg-paper-2 border border-ink-line hover:border-ink",
                        "transition-colors text-left"
                      )}
                    >
                      <span className="font-display font-medium text-[14px] tracking-[-0.005em] text-ink">
                        {s}
                      </span>
                      <span aria-hidden className="text-ink-mute group-hover:text-ink transition-colors">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* State 03 · Active conversation */}
            {hasConversation && (
              <div className="flex flex-col gap-5">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex flex-col gap-1",
                      m.role === "user" ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[88%] text-[15px] leading-[1.5] tracking-[-0.005em]",
                        m.role === "user"
                          ? "bg-ink text-paper rounded-2xl rounded-br-md px-4 py-2.5"
                          : "bg-paper-2 text-ink rounded-2xl rounded-bl-md px-4 py-2.5"
                      )}
                    >
                      {m.role === "assistant" ? (
                        <div className="adaptive-md">
                          <ReactMarkdown>{m.content}</ReactMarkdown>
                        </div>
                      ) : (
                        m.content
                      )}
                    </div>
                    <span className="font-mono-util text-ink-mute">
                      {m.role === "user" ? "You" : "Adaptive"}
                    </span>
                  </div>
                ))}

                {isPending && (
                  <div className="flex items-center gap-3 pl-1">
                    <TriadMerge size={36} />
                    <span className="font-mono-util text-ink-mute">Thinking…</span>
                  </div>
                )}

                {error && (
                  <div className="font-mono-util text-[#8a2c2c]" role="alert">
                    {error}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Input row ───────────────────────────────── */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-ink-line px-3 py-3 flex items-center gap-2"
          >
            <label htmlFor="adaptive-input" className="sr-only">
              Message Adaptive
            </label>
            <input
              ref={inputRef}
              id="adaptive-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Adaptive anything…"
              className={cn(
                "flex-1 bg-transparent outline-none px-3 py-2",
                "font-sans text-[15px] text-ink placeholder:text-ink-mute"
              )}
            />
            <button
              type="submit"
              disabled={sendDisabled}
              aria-label="Send"
              className={cn(
                "inline-flex items-center justify-center w-9 h-9 rounded-full",
                "transition-all duration-200",
                sendDisabled
                  ? "bg-paper-2 text-ink-mute"
                  : "bg-ink text-paper hover:scale-[1.04]"
              )}
            >
              <svg viewBox="0 0 14 14" width="14" height="14" fill="none" aria-hidden="true">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          <div className="px-5 pb-3 -mt-1 font-mono-util text-ink-mute">
            Press ⏎ to send · Esc to close
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );

  return createPortal(panel, document.body);
}

/**
 * TriadMerge — three ink circles drifting in/out of a gooey merge.
 * Replaces the "Thinking…" Nebula loader. Spec from build-dev-1.2 §1.2.
 * Respects prefers-reduced-motion via globals.css (animation paused, static).
 */
function TriadMerge({ size = 36 }: { size?: number }) {
  return (
    <svg className="triad-merge" viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
      <defs>
        <filter id="triad-goo-hard">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 26 -13"
          />
        </filter>
      </defs>
      <g filter="url(#triad-goo-hard)">
        <circle className="a" cx="50" cy="100" r="20" fill="#0c0c0c" />
        <circle className="b" cx="100" cy="60" r="20" fill="#0c0c0c" />
        <circle className="c" cx="150" cy="100" r="20" fill="#0c0c0c" />
      </g>
    </svg>
  );
}
