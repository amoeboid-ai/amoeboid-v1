"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AnimatedNebula } from "@/components/marks/NebulaFilterDefs";
import { useAdaptive } from "./AdaptiveContext";
import { cn } from "@/lib/cn";

/**
 * AdaptiveWidget — three states per Phase 1 Adaptive Widget reference.
 *
 *   01 Collapsed   bottom-right launcher pill, Nebula + "Adaptive" + "Ask"
 *                  breathing scale 1 → 1.045 over 4s
 *   02 Expanded · Empty   greeting + 4 suggested-prompt chips
 *   03 Expanded · Active  user/bot bubble thread; bot typing renders
 *                         AnimatedNebula(typing) + "Thinking…"
 *
 * Animated Nebula is used in EVERY state.
 * Mode 1 (no RAG): POSTs message history to /api/adaptive (system prompt only).
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

export function AdaptiveWidget() {
  const { isOpen, open, close } = useAdaptive();
  const prefersReduced = useReducedMotion();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <>
      {/* ─── State 01 · Collapsed launcher ─────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="launcher"
            type="button"
            onClick={open}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.28, ease: EASE }}
            aria-label="Open Adaptive"
            aria-expanded={isOpen}
            className={cn(
              "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999]",
              "inline-flex items-center gap-3 rounded-full pl-3 pr-5 py-2.5",
              "bg-paper border border-ink-line",
              "shadow-[0_18px_40px_-24px_rgba(12,12,12,0.35)]",
              "hover:shadow-[0_22px_50px_-22px_rgba(12,12,12,0.45)] transition-shadow"
            )}
          >
            <motion.span
              className="inline-flex items-center justify-center"
              animate={
                prefersReduced
                  ? undefined
                  : { scale: [1, 1.045, 1] }
              }
              transition={
                prefersReduced
                  ? undefined
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <AnimatedNebula size={28} variant="ambient" />
            </motion.span>
            <span className="font-display font-medium text-[14px] tracking-[-0.005em] text-ink">
              Adaptive
            </span>
            <span className="font-mono-util text-ink-mute">Ask</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── State 02 / 03 · Expanded panel ─────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="panel"
            role="dialog"
            aria-label="Adaptive"
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ duration: 0.28, ease: EASE }}
            style={{ transformOrigin: "bottom right" }}
            className={cn(
              "fixed z-[9999]",
              "bottom-6 right-6 md:bottom-8 md:right-8",
              "w-[min(92vw,420px)] h-[min(82vh,620px)]",
              "max-[540px]:left-4 max-[540px]:right-4 max-[540px]:bottom-4 max-[540px]:w-auto max-[540px]:h-[min(92vh,720px)]",
              "flex flex-col",
              "bg-paper border border-ink-line rounded-[20px]",
              "shadow-[0_30px_80px_-30px_rgba(12,12,12,0.45)] overflow-hidden"
            )}
          >
            {/* ── Header ──────────────────────────────────── */}
            <header className="flex items-center justify-between px-5 py-4 border-b border-ink-line">
              <div className="inline-flex items-center gap-2.5">
                <AnimatedNebula size={22} variant="ambient" />
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
              <button
                type="button"
                onClick={close}
                aria-label="Close Adaptive"
                className="ml-3 inline-flex items-center justify-center w-7 h-7 rounded-full text-ink-mute hover:text-ink hover:bg-paper-2 transition-colors"
              >
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true">
                  <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            {/* ── Body ────────────────────────────────────── */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-5"
            >
              {/* State 02 · Empty greeting + suggested chips */}
              {!hasConversation && (
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col items-start gap-4 pt-4">
                    <motion.span
                      animate={
                        prefersReduced
                          ? undefined
                          : { scale: [1, 1.045, 1] }
                      }
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
                        {m.content}
                      </div>
                      <span className="font-mono-util text-ink-mute">
                        {m.role === "user" ? "You" : "Adaptive"}
                      </span>
                    </div>
                  ))}

                  {isPending && (
                    <div className="flex items-center gap-3 pl-1">
                      <AnimatedNebula size={28} variant="typing" />
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
    </>
  );
}
