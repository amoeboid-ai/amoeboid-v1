import { Section } from "@/components/layout";
import {
  Hero,
  SectionDisplay,
  Body,
  Dim,
} from "@/components/typography";
import { Reveal } from "@/components/motion/Reveal";
import { Crumb, NumberedLabel } from "@/components/site/PageChrome";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "Company — Amoeboid",
  description:
    "A studio shaped like software — built so brands compound, not erode, under AI. Position, approach, and point of view.",
};

const STATS = [
  { k: "Founded", v: "2023 · Brooklyn / London" },
  { k: "Discipline", v: "Adaptive creative production" },
  { k: "Engagements", v: "26 cases · 11 industries" },
  { k: "Stack", v: "L1–L4 · visible" },
];

const PILLARS = [
  {
    num: "Pillar 01",
    h: "Visible stack",
    p: "Four addressable layers. Inspectable composition per engagement. The architecture is the marketing.",
  },
  {
    num: "Pillar 02",
    h: "Calibration as moat",
    p: "Substrate-first. Output composes against a known calibration that survives the cycle and sharpens through it.",
  },
  {
    num: "Pillar 03",
    h: "Modular entry",
    p: "Sense without Form. Form without Reach. Engine without campaign. The contract is composed, never packaged.",
  },
];

const TENETS = [
  { i: "01", t: "Calibration is the moat.", e: "Output is downstream of substrate." },
  { i: "02", t: "Coherence is a function of the loop.", e: "Read · compose · deploy · read again." },
  { i: "03", t: "The stack must be inspectable.", e: "Trust is a property of legibility." },
  { i: "04", t: "Modular entry beats packaged offering.", e: "Need composes the contract." },
];

const LINEAGE = [
  { yr: "2023", lbl: "Substrate concept" },
  { yr: "2024", lbl: "First Engine cycle" },
  { yr: "2025", lbl: "Loop closure published" },
  { yr: "2026 · now", lbl: "Format Intelligence", now: true },
  { yr: "2027", lbl: "Calibration as service" },
  { yr: "2028+", lbl: "Open substrate" },
];

const INTAKE_FIELDS: {
  name: string;
  label: string;
  type: "text" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
}[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "company", label: "Company", type: "text", placeholder: "Brand or organisation" },
  {
    name: "brief",
    label: "Brief",
    type: "textarea",
    placeholder: "What you're trying to compose. The shape of the work, not the spec.",
  },
  {
    name: "timeline",
    label: "Timeline",
    type: "select",
    options: ["Exploring", "Within 30 days", "Within a quarter", "Open / ongoing"],
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* 1. HERO — centered thesis */}
      <Section pad="none" className="pt-14 pb-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-14 flex justify-center">
          <Crumb parent="Index" parentHref="/" current="Company" />
        </Reveal>
        <Reveal step={1}>
          <Hero
            as="h1"
            className="!text-[clamp(48px,6.4vw,96px)] !leading-[1.02] !tracking-[-0.034em] max-w-[22ch] mx-auto text-center"
          >
            A studio shaped like software{" "}
            <Dim>— built so brands compound, not erode, under AI.</Dim>
          </Hero>
        </Reveal>
        <Reveal step={2}>
          <p className="mt-14 max-w-[60ch] mx-auto text-center font-display text-[clamp(17px,1.3vw,21px)] leading-[1.55] tracking-[-0.012em] text-ink-soft">
            <strong className="text-ink font-medium">
              Amoeboid is an adaptive creative production company.
            </strong>{" "}
            We hold the calibration substrate that lets AI-assisted output stay coherent across volume, channel, and time — so that scale becomes brand equity instead of brand drift. Our position is structural, not stylistic: we sell the discipline that compounds, and the system that enforces it.
          </p>
        </Reveal>
        <Reveal step={3}>
          <div className="mt-20 pt-7 border-t border-ink-line max-w-[880px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.k} className="flex flex-col gap-1.5 text-left">
                <span className="font-mono-util text-ink-mute">{s.k}</span>
                <span className="font-display font-medium text-[clamp(15px,1.1vw,17px)] tracking-[-0.008em] leading-[1.3] text-ink">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 2. APPROACH */}
      <Section pad="none" id="approach" className="py-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-6">
          <NumberedLabel prefix="Section 02" label="Approach" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-end mb-[72px]">
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(40px,4.8vw,68px)] max-w-[16ch]">
              How the studio <Dim>is shaped.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body tone="soft" className="max-w-[50ch]">
              Amoeboid is organised as an orchestration layer over a visible stack. The shape is software&rsquo;s, not an agency&rsquo;s — modular surfaces over a shared substrate, each engagement a composition rather than a deliverable list. Three structural decisions make the rest of the system legible.
            </Body>
          </Reveal>
        </div>

        <Reveal step={3}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20">
            <div className="space-y-4">
              <Body tone="soft" className="max-w-[48ch]">
                <strong className="text-ink font-medium">The stack is visible by design.</strong> Four layers — Engine (L1), Sense (L2), Form (L3), Reach (L4) — each addressable, each inspectable. Clients see what is composed for them and where the calibration lives. A stack you can&rsquo;t inspect is a stack you can&rsquo;t trust to compound; we treat that as a structural property of the work, not a marketing one.
              </Body>
              <Body tone="soft" className="max-w-[48ch]">
                <strong className="text-ink font-medium">Brand Calibration is the moat.</strong> The substrate that holds a brand&rsquo;s register coherent across volume is what we sell. The output is downstream of it. Every engagement adds to the substrate; the substrate never resets between cycles.
              </Body>
            </div>
            <div className="space-y-4">
              <Body tone="soft" className="max-w-[48ch]">
                <strong className="text-ink font-medium">Modular entry, not packaged offerings.</strong> A client can begin at any layer. Sense without Form. Form without Reach. Engine multi-cycle without a single campaign. The contract composes against need, not against a price sheet. Cases run in our portfolio prove this empirically across eleven industries.
              </Body>
              <Body tone="soft" className="max-w-[48ch]">
                <strong className="text-ink font-medium">Agentic and human, named.</strong> Where work runs autonomously through the stack and where it is held by a person is published per case, not obscured. The studio reads like an instrument; the instrument reads like a substrate.
              </Body>
            </div>
          </div>
        </Reveal>

        <Reveal step={4}>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink-line">
            {PILLARS.map((p, i, arr) => (
              <div
                key={p.num}
                className={cn(
                  "flex flex-col gap-4 py-9 pr-9",
                  "border-b md:border-b-0 md:border-r border-ink-line",
                  i === arr.length - 1 && "md:border-r-0 md:pr-0 border-b-0"
                )}
              >
                <span className="font-mono-util text-ink-mute">{p.num}</span>
                <h3 className="font-display font-medium text-[clamp(22px,1.8vw,28px)] leading-[1.2] tracking-[-0.018em] text-ink max-w-[18ch]">
                  {p.h}
                </h3>
                <p className="font-display text-[15px] leading-[1.6] tracking-[-0.006em] text-ink-soft max-w-[40ch]">
                  {p.p}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 3. POINT OF VIEW */}
      <Section pad="none" id="pov" className="py-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-6">
          <NumberedLabel prefix="Section 03" label="Point of view" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-end mb-[72px]">
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(40px,4.8vw,68px)] max-w-[16ch]">
              What we believe <Dim>about the field.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body tone="soft" className="max-w-[50ch]">
              The AI creative production landscape is mid-collapse into two failure modes — volume without coherence, and craft without scale. Neither is durable. Our point of view is that the missing layer is calibration, and that the studios who solve it will be the ones whose work compounds.
            </Body>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-24 items-start">
          <Reveal step={3} className="space-y-4">
            <Body tone="soft" className="max-w-[50ch]">
              <strong className="text-ink font-medium">Volume without coherence is the dominant failure mode.</strong> Generative tools have made variant production cheap; they have not made it coherent. Every brand that has stood up an AI pipeline in the last twenty-four months has produced output that is technically on-brief and structurally off-brand — and the gap is only legible at scale, after the spend is sunk.
            </Body>
            <Body tone="soft" className="max-w-[50ch]">
              <strong className="text-ink font-medium">Craft without scale is the second failure mode</strong>, and it is the one most agencies are pivoting toward as a defensive position. It does not survive the contract environment. Clients are not asking for less output; they are asking for output that holds up under more.
            </Body>
            <Body tone="soft" className="max-w-[50ch]">
              <strong className="text-ink font-medium">Calibration is the layer that resolves both.</strong> A substrate that reads a brand&rsquo;s register, audience, and format conventions accurately enough to enforce coherence at variant volume — and that sharpens through the engagement rather than degrading. We have spent three cycles building this layer; the field is roughly two cycles behind, and closing.
            </Body>
            <Body tone="soft" className="max-w-[50ch]">
              <strong className="text-ink font-medium">The studio that wins is the one that publishes its substrate</strong> — that lets clients inspect the calibration, lets the loop close in public, and lets the discipline compound case-over-case. That is the company we are building.
            </Body>
          </Reveal>

          <Reveal step={4} className="space-y-7">
            <blockquote className="border-l border-ink pl-6 font-display font-medium text-[clamp(20px,1.6vw,26px)] leading-[1.3] tracking-[-0.018em] text-ink max-w-[28ch]">
              &ldquo;Brand drift is no longer a quarterly risk. At AI variant volume, it&rsquo;s a weekly one.&rdquo;
            </blockquote>

            <div className="border-t border-ink-line pt-6">
              <h5 className="font-mono-util text-ink-mute mb-2">Tenets</h5>
              <ol className="flex flex-col">
                {TENETS.map((t, i) => (
                  <li
                    key={t.i}
                    className={cn(
                      "grid grid-cols-[36px_1fr] gap-3.5 py-3",
                      i !== 0 && "border-t border-ink-line"
                    )}
                  >
                    <span className="font-mono-util text-ink-mute pt-1">{t.i}</span>
                    <span className="font-display text-[15px] leading-[1.5] tracking-[-0.006em] text-ink">
                      {t.t} <span className="text-ink-mute not-italic">{t.e}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* Lineage */}
        <Reveal step={5} className="mt-16 pt-7 border-t border-ink-line">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-start">
            <h4 className="font-mono-util text-ink-mute">Research lineage</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-ink-line rounded-[10px] overflow-hidden">
              {LINEAGE.map((c, i, arr) => (
                <div
                  key={c.yr}
                  className={cn(
                    "p-4 flex flex-col gap-1.5 min-h-[96px]",
                    "border-r border-ink-line",
                    (i + 1) % 2 === 0 && "border-r-0 md:border-r",
                    (i + 1) % 3 === 0 && "md:border-r-0 lg:border-r",
                    i === arr.length - 1 && "lg:border-r-0",
                    c.now ? "bg-ink text-paper" : "bg-paper"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono-util",
                      c.now ? "text-[rgba(246,244,239,0.55)]" : "text-ink-mute"
                    )}
                  >
                    {c.yr}
                  </span>
                  <span
                    className={cn(
                      "font-display font-medium text-[13px] leading-[1.3] tracking-[-0.005em]",
                      c.now ? "text-paper" : "text-ink"
                    )}
                  >
                    {c.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 4. CONTACT */}
      <Section pad="none" id="contact" className="py-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-24 items-start">
          {/* Lead */}
          <div>
            <Reveal step={0} className="mb-6">
              <NumberedLabel prefix="Section 04" label="Contact" />
            </Reveal>
            <Reveal step={1}>
              <SectionDisplay className="!text-[clamp(40px,4.8vw,68px)] max-w-[14ch]">
                Reach the studio. <Dim>One path, no ceremony.</Dim>
              </SectionDisplay>
            </Reveal>
            <Reveal step={2}>
              <Body tone="soft" className="mt-7 max-w-[44ch]">
                <strong className="text-ink font-medium">Start an engagement</strong> if you want to compose work, ask a structural question, or read a substrate against your brand. Replies within two business days, from a partner.
              </Body>
            </Reveal>

            <Reveal step={3} className="mt-10 pt-6 border-t border-ink-line flex flex-wrap gap-x-12 gap-y-3 font-mono-util text-ink-mute">
              <span>
                <strong className="text-ink font-medium">Studio</strong>
                {"  "}Brooklyn / London
              </span>
              <span>
                <strong className="text-ink font-medium">Hours</strong>
                {"  "}ET / GMT
              </span>
              <span>
                <strong className="text-ink font-medium">Response</strong>
                {"  "}within 48 hrs
              </span>
            </Reveal>
          </div>

          {/* Intake form */}
          <Reveal step={3}>
            <form
              method="post"
              action="mailto:hello@amoeboid.ai"
              encType="text/plain"
              className="border-t border-ink-line"
            >
              {INTAKE_FIELDS.map((f, i) => (
                <div
                  key={f.name}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-6 py-6 border-b border-ink-line",
                    i === 0 && "pt-7"
                  )}
                >
                  <label
                    htmlFor={f.name}
                    className="font-mono-util text-ink-mute pt-2"
                  >
                    {f.label}
                  </label>
                  {f.type === "textarea" ? (
                    <textarea
                      id={f.name}
                      name={f.name}
                      rows={4}
                      placeholder={f.placeholder}
                      className="w-full bg-transparent border-0 border-b border-ink-line focus:border-ink focus:outline-none font-display text-[16px] leading-[1.5] tracking-[-0.008em] text-ink placeholder:text-ink-mute pb-2 resize-none transition-colors"
                    />
                  ) : f.type === "select" ? (
                    <select
                      id={f.name}
                      name={f.name}
                      defaultValue=""
                      className="w-full bg-transparent border-0 border-b border-ink-line focus:border-ink focus:outline-none font-display text-[16px] leading-[1.5] tracking-[-0.008em] text-ink pb-2 transition-colors"
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={f.name}
                      name={f.name}
                      type="text"
                      placeholder={f.placeholder}
                      className="w-full bg-transparent border-0 border-b border-ink-line focus:border-ink focus:outline-none font-display text-[16px] leading-[1.5] tracking-[-0.008em] text-ink placeholder:text-ink-mute pb-2 transition-colors"
                    />
                  )}
                </div>
              ))}

              <div className="pt-8 flex flex-wrap items-center gap-x-8 gap-y-4 justify-between">
                <p className="font-mono-util text-ink-mute max-w-[36ch]">
                  Submitting opens your mail client. Replies routed to a partner.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-[22px] py-[11px] font-display font-medium text-[15px] tracking-[-0.005em] hover:opacity-85 transition-opacity"
                >
                  Send brief
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
