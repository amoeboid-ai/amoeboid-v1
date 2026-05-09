"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Nebula } from "@/components/marks/Nebula";
import { useAdaptive } from "./AdaptiveContext";
import { cn } from "@/lib/cn";

/**
 * AdaptiveWidget — proto 1 container scaffold.
 *
 * Visual polish (final icon design, message styling, Nebula state animations across
 * collapsed/expanded/typing) is HELD pending the Claude Design widget reference.
 * What's wired here:
 *   - bottom-right anchor on every page
 *   - collapsed pill -> expanded chat surface
 *   - sessionStorage-backed message history (per-visit persistence)
 *   - POST /api/adaptive for completions
 *   - basic open/close motion via Framer Motion
 *   - opt-out under prefers-reduced-motion (handled inside Nebula)
 */

interface Message {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "adaptive.messages.v1";
const GREETING: Message = {
  role: "assistant",
  content: "Hi — I'm Adaptive. How can I help you explore Amoeboid?",
};

export function AdaptiveWidget() {
  const { isOpen, open, close } = useAdaptive();
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Restore prior session messages on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Message[];
        if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed);
      }
    } catch {
      /* ignore corrupt session blob */
    }
  }, []);

  // Persist on change
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* quota or disabled — silently drop */
    }
  }, [messages]);

  // Auto-scroll to latest
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
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

  return (
    <>
      {/* Collapsed launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="launcher"
            type="button"
            onClick={open}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            aria-label="Open Adaptive"
            className={cn(
              "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40",
              "inline-flex items-center gap-3 rounded-full pl-3 pr-5 py-2.5",
              "bg-paper border border-ink-line shadow-[0_18px_40px_-24px_rgba(12,12,12,0.35)]",
              "hover:shadow-[0_22px_50px_-22px_rgba(12,12,12,0.45)] transition-shadow"
            )}
          >
            <Nebula size={28} mode="static" tone="ink" ariaLabel="Adaptive" />
            <span className="font-mono-util text-ink">Ask Adaptive</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded surface — placeholder visual, awaiting Claude Design reference */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="surface"
            role="dialog"
            aria-label="Adaptive chat"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className={cn(
              "fixed z-40",
              "bottom-6 right-6 md:bottom-8 md:right-8",
              "w-[min(92vw,420px)] h-[min(80vh,560px)]",
              "flex flex-col",
              "bg-paper border border-ink-line rounded-[20px]",
              "shadow-[0_30px_80px_-30px_rgba(12,12,12,0.45)] overflow-hidden"
            )}
          >
            <header className="flex items-center justify-between px-5 py-4 border-b border-ink-line">
              <div className="inline-flex items-center gap-2.5">
                <Nebula size={22} mode="static" tone="ink" ariaLabel="Adaptive" />
                <span className="font-display font-medium text-[15px] text-ink">Adaptive</span>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close Adaptive"
                className="font-mono-util text-ink-mute hover:text-ink transition-colors"
              >
                Close
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] text-[15px] leading-[1.5]",
                    m.role === "user"
                      ? "ml-auto bg-ink text-paper rounded-2xl rounded-tr-sm px-4 py-2.5"
                      : "mr-auto text-ink"
                  )}
                >
                  {m.content}
                </div>
              ))}
              {isPending && (
                <div className="font-mono-util text-ink-mute">Adaptive is thinking…</div>
              )}
              {error && (
                <div className="font-mono-util text-[#8a2c2c]" role="alert">
                  {error}
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-ink-line px-3 py-3 flex items-end gap-2"
            >
              <label className="sr-only" htmlFor="adaptive-input">
                Message Adaptive
              </label>
              <textarea
                id="adaptive-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void handleSubmit(e as unknown as React.FormEvent);
                  }
                }}
                placeholder="Ask anything about Amoeboid…"
                rows={1}
                className={cn(
                  "flex-1 resize-none bg-transparent outline-none px-3 py-2",
                  "text-[15px] text-ink placeholder:text-ink-mute",
                  "max-h-[120px]"
                )}
              />
              <button
                type="submit"
                disabled={isPending || !input.trim()}
                className={cn(
                  "rounded-full px-4 py-2 font-mono-util",
                  "bg-ink text-paper disabled:opacity-40"
                )}
              >
                Send
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
