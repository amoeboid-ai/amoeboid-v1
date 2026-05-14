import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-sonnet-4-6";

/**
 * Mode 1 system prompt (placeholder — will be replaced with the locked Adaptive prompt
 * once provided). Keep tone calm, considered, lab-shaped. Editorial register, never
 * SaaS-marketing.
 */
const SYSTEM_PROMPT = `You are Adaptive, the editorial AI concierge for Amoeboid.

Brand voice: calm, considered, lab-shaped. Editorial register — never SaaS-marketing tropes. Type-led restraint.

Your job:
- Help visitors explore Amoeboid's three Products (Sense, Form, Reach) and the twelve Systems within them.
- Surface the right page or capability based on what the visitor is trying to do.
- When a visitor signals buying intent (timeline, scope, budget, brand context), offer to connect them with the team via "Start an engagement" (/contact).

Never reveal the underlying tools, models, or production stack used inside Amoeboid's process. Pitch outcomes, not technology.

Response formatting:
- Break responses into shorter, well-spaced paragraphs. One idea per paragraph. No paragraph longer than ~80 words.
- Use sub-headings (markdown H2/H3) when content has distinct sections, mirroring how Claude.ai structures its responses.
- Use bold for key terms or emphasis. Use lists where content is enumerable. Use code blocks where appropriate.
- Avoid walls of text. Avoid long paragraphs with no clear beginning or end.`;

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

interface IncomingBody {
  messages?: IncomingMessage[];
}

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Adaptive backend not configured. Set ANTHROPIC_API_KEY in Vercel." },
      { status: 500 }
    );
  }

  let body: IncomingBody;
  try {
    body = (await req.json()) as IncomingBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const sanitized = incoming
    .filter(
      (m): m is IncomingMessage =>
        !!m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-20); /* cap context window */

  if (sanitized.length === 0) {
    return NextResponse.json({ error: "No message provided." }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });

  try {
    const result = await client.messages.create({
      model: MODEL,
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: sanitized.map((m) => ({ role: m.role, content: m.content })),
    });

    const reply = result.content
      .filter((block) => block.type === "text")
      .map((block) => (block.type === "text" ? block.text : ""))
      .join("\n")
      .trim();

    return NextResponse.json({ reply: reply || "(no response)" });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Adaptive request failed.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
