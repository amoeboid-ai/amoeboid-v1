import { Section } from "@/components/layout";
import {
  Hero,
  SectionDisplay,
  Body,
  Dim,
} from "@/components/typography";
import { Reveal } from "@/components/motion/Reveal";
import {
  Crumb,
  NumberedLabel,
  ArrowLink,
} from "@/components/site/PageChrome";
import { CTAGroup } from "@/components/cta/CTAGroup";
import { cn } from "@/lib/cn";
import Link from "next/link";

export const metadata = {
  title: "Engine — Orchestration, made visible",
  description:
    "The Engine is the orchestration layer underneath Sense, Form, and Reach. L1–L4 — calibration substrate, reading, making, activation. Visible architecture, by design.",
};

/* ────────────────────────────────────────────────────────────────────────────
   Stack data — L1 substrate up to L4 surface.
   `on` is the 5-tick depth gauge (L1 fully ON, L4 lightest).
   ──────────────────────────────────────────────────────────────────────────── */

interface StackLayer {
  code: string;
  name: string;
  sub: string;
  meta: string;
  pillar: "Engine" | "Sense" | "Form" | "Reach";
  on: number;
  emphasis?: boolean;
}

// Visual order: L4 on top → L1 anchoring beneath, matching reference HTML.
const STACK_LAYERS: StackLayer[] = [
  {
    code: "L4",
    name: "Activation",
    sub: "Variants, channels, and the performance loop — the work meeting the world.",
    meta: "Reach · agentic-led",
    pillar: "Reach",
    on: 2,
    emphasis: true,
  },
  {
    code: "L3",
    name: "Making",
    sub: "Still, motion, spatial, sonic — finished work at brand-level fidelity.",
    meta: "Form · human-curated",
    pillar: "Form",
    on: 3,
  },
  {
    code: "L2",
    name: "Reading",
    sub: "Brand, audience, culture, field, and format intelligence as substrate.",
    meta: "Sense · agentic-led",
    pillar: "Sense",
    on: 4,
  },
  {
    code: "L1",
    name: "Calibration",
    sub: "The shared substrate every level above queries and compounds against.",
    meta: "Engine · foundational",
    pillar: "Engine",
    on: 5,
  },
];

const AGENTIC_LIST = [
  { where: "Sense / L2", what: "Continuous reading across brand, audience, culture, field, format." },
  { where: "Reach / R—01", what: "Variant production from masters, brand-coherent at scale." },
  { where: "Reach / R—02", what: "Channel-native deployment across heterogeneous platforms." },
  { where: "Reach / R—03", what: "In-flight performance reading and substrate feedback." },
];

const HUMAN_LIST = [
  { where: "Form / L3", what: "Still, motion, spatial — finished craft at brand-level fidelity." },
  { where: "Sense / S—05", what: "Format Intelligence — foresight requires research judgement." },
  { where: "Engine / L1", what: "Calibration substrate design — architected, not inferred." },
  { where: "All / Review gates", what: "Brand calibration sign-off, taste calls, irrevocable decisions." },
];

const LINEAGE = [
  { yr: "2023", h: "Calibration substrate prototype", p: "First working contract layer between research output and creative input." },
  { yr: "2024", h: "Sense as Product", p: "Five Systems formalised; Brand and Format Intelligence pulled into one stack." },
  { yr: "2025", h: "Form & Reach composed", p: "Three Products live; orchestration contracts publishable as a stack diagram." },
  { yr: "2026 · Now", h: "Engine v1 — visible stack", p: "L1–L4 architecture published; agentic / human split made explicit per layer.", now: true },
  { yr: "2027", h: "Sonic discipline expansion", p: "Form's fourth media shape brought in-house; deferred slot becomes live System." },
  { yr: "2028→", h: "Substrate openness", p: "Reading layer formats published for client-side queryability against the contract." },
];

const ROUTES = [
  { lbl: "Product 01", name: "Sense", foot: "Reading layer · L2", href: "/sense", arrow: "→" },
  { lbl: "Product 02", name: "Form", foot: "Craft layer · L3", href: "/form", arrow: "→" },
  { lbl: "Product 03", name: "Reach", foot: "Surface layer · L4", href: "/reach", arrow: "→" },
  { lbl: "Up one", name: "Products index", foot: "All three Products", href: "/products", arrow: "←" },
];

/* ────────────────────────────────────────────────────────────────────────────
   Stack diagram — Engine page hero centerpiece.
   Inline build (reference HTML carried only a placeholder pill).
   L1 anchors the bottom; L4 emphasis row sits at the top. Each row carries
   layer code, name + descriptor, pillar/role meta, and the 5-tick depth gauge.
   ──────────────────────────────────────────────────────────────────────────── */

function StackDiagram() {
  return (
    <figure
      role="img"
      aria-label="L1 to L4 orchestration stack diagram"
      className="relative mt-16 rounded-[22px] border border-ink-line bg-paper overflow-hidden"
    >
      {/* Corner labels */}
      <span className="absolute top-[22px] left-6 font-mono-util text-ink-mute">
        Engine / Stack
      </span>
      <span className="absolute top-[22px] right-6 font-mono-util text-ink-mute">
        L1 → L4
      </span>
      <span className="absolute bottom-[22px] left-6 font-mono-util text-ink-mute">
        Substrate → Surface
      </span>
      <span className="absolute bottom-[22px] right-6 font-mono-util text-ink-mute">
        v1.0 · research register
      </span>

      {/* Layer rows */}
      <div className="px-7 sm:px-14 py-16 sm:py-20 flex flex-col gap-3.5">
        {STACK_LAYERS.map((l) => {
          const dark = !!l.emphasis;
          return (
            <div
              key={l.code}
              data-emphasis={dark || undefined}
              className={cn(
                "relative grid items-center gap-6 px-5 sm:px-7 py-5 sm:py-7 rounded-[12px] border overflow-hidden",
                "grid-cols-[56px_1fr] sm:grid-cols-[88px_1fr_220px]",
                dark ? "bg-ink border-ink" : "bg-paper-2 border-ink-line"
              )}
            >
              {/* horizontal-line texture overlay */}
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: dark
                    ? "repeating-linear-gradient(0deg, rgba(246,244,239,0.05) 0 1px, transparent 1px 14px)"
                    : "repeating-linear-gradient(0deg, rgba(12,12,12,0.04) 0 1px, transparent 1px 14px)",
                }}
              />
              <span
                className={cn(
                  "relative font-mono-util",
                  dark ? "text-[rgba(246,244,239,0.55)]" : "text-ink-mute"
                )}
              >
                {l.code}
              </span>
              <span className="relative">
                <span
                  className={cn(
                    "block font-display font-medium text-[clamp(20px,1.6vw,26px)] tracking-[-0.018em]",
                    dark ? "text-paper" : "text-ink"
                  )}
                >
                  {l.name}
                </span>
                <span
                  className={cn(
                    "block font-display text-[13px] leading-[1.5] tracking-[-0.005em] mt-1 max-w-[56ch]",
                    dark ? "text-[rgba(246,244,239,0.7)]" : "text-ink-soft"
                  )}
                >
                  {l.sub}
                </span>
              </span>
              <span
                className={cn(
                  "relative hidden sm:flex items-center justify-end gap-4 font-mono-util",
                  dark ? "text-[rgba(246,244,239,0.55)]" : "text-ink-mute"
                )}
              >
                <span>{l.meta}</span>
                <span aria-hidden className="flex gap-[3px]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <i
                      key={i}
                      className={cn(
                        "block w-1 h-3.5 rounded-[1px]",
                        i < l.on
                          ? dark ? "bg-paper" : "bg-ink"
                          : dark ? "bg-[rgba(246,244,239,0.18)]" : "bg-ink-faint"
                      )}
                    />
                  ))}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

export default function EnginePage() {
  return (
    <>
      {/* ============================== 1. HERO + STACK ============================== */}
      <Section pad="none" className="pt-14 pb-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-14">
          <Crumb parent="Index" parentHref="/" current="Engine" />
        </Reveal>

        <Reveal step={1}>
          <p className="font-display font-medium text-[clamp(20px,1.6vw,26px)] tracking-[-0.018em] text-ink-mute mb-4">
            The Engine
          </p>
        </Reveal>
        <Reveal step={2}>
          <Hero className="!text-[clamp(48px,5.6vw,78px)] !leading-[1.02] !tracking-[-0.034em] max-w-[22ch]">
            Orchestration, <Dim>made visible.</Dim>
          </Hero>
        </Reveal>

        <Reveal step={3}>
          <StackDiagram />
        </Reveal>

        <div className="mt-11 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-start">
          <Reveal step={4}>
            <Body tone="soft" className="max-w-[52ch]">
              <strong className="text-ink font-medium">
                The Engine is the orchestration layer underneath the three Products.
              </strong>{" "}
              It is the calibration substrate, the routing logic, and the loop that lets Sense, Form, and Reach compose without losing brand fidelity between stages. We publish the stack rather than hide it — visible architecture is how buyers verify durability.
            </Body>
          </Reveal>
          <Reveal step={4} className="lg:border-l lg:border-ink-line lg:pl-8 flex flex-col gap-3.5">
            <h5 className="font-mono-util text-ink-mute">Legend</h5>
            <ul className="flex flex-col gap-2">
              <li className="flex items-baseline gap-3 font-display text-[14px] tracking-[-0.005em] text-ink-soft">
                <span aria-hidden className="inline-block w-3 h-3 rounded-[3px] bg-ink border border-ink translate-y-[1px] shrink-0" />
                <span>Emphasized layer — current point of leverage</span>
              </li>
              <li className="flex items-baseline gap-3 font-display text-[14px] tracking-[-0.005em] text-ink-soft">
                <span aria-hidden className="inline-block w-3 h-3 rounded-[3px] bg-paper-2 border border-ink-line translate-y-[1px] shrink-0" />
                <span>Active layer — queryable substrate or live craft</span>
              </li>
              <li className="flex items-baseline gap-3 font-display text-[14px] tracking-[-0.005em] text-ink-soft">
                <span aria-hidden className="inline-block w-3 h-3 rounded-[3px] border border-ink-line translate-y-[1px] shrink-0" />
                <span>Outline only — structural slot</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ============================== 2. ARGUMENT ============================== */}
      <Section pad="none" id="argument" className="py-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-14">
          <NumberedLabel prefix="Section 02" label="The argument" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-end mb-14">
          <Reveal step={1}>
            <SectionDisplay className="max-w-[18ch]">
              Why orchestration. <Dim>Why visible.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body tone="soft" className="max-w-[52ch]">
              Most creative production stacks are stitched together — agency, studio, in-house, freelance, AI, vendor — with brand calibration re-interpreted at each handoff. The work degrades not because any link fails, but because no link holds the whole. Orchestration is the answer; visibility is what makes orchestration trustable.
            </Body>
          </Reveal>
        </div>

        <Reveal step={3}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h4 className="font-mono-util text-ink-mute mb-4">Why orchestration is durable</h4>
              <Body tone="soft" className="max-w-[50ch]">
                <strong className="text-ink font-medium">Calibration compounds when it&rsquo;s held in one substrate.</strong> Sense reads it, Form composes against it, Reach enforces it across variants. The compounding only happens when the substrate itself is durable — not re-derived per engagement, not re-interpreted per vendor, not flattened to a brief.
              </Body>
              <Body tone="soft" className="max-w-[50ch] mt-4">
                The Engine is what makes the substrate durable. It is the contract every Product queries, the routing logic between Products, and the loop closure that lets Reach&rsquo;s signal sharpen Sense&rsquo;s next reading without human re-translation.
              </Body>
            </div>
            <div>
              <h4 className="font-mono-util text-ink-mute mb-4">Why visibility is non-negotiable</h4>
              <Body tone="soft" className="max-w-[50ch]">
                <strong className="text-ink font-medium">Buyers committing to a multi-cycle creative system need to see the system.</strong> Black-box claims about &ldquo;AI-powered orchestration&rdquo; are doing a lot of work in the market right now and almost none of it is verifiable. A stack you can&rsquo;t inspect is a stack you can&rsquo;t trust to compound across a budget cycle.
              </Body>
              <Body tone="soft" className="max-w-[50ch] mt-4">
                We publish the L1&ndash;L4 architecture, the agentic / human-curated split per layer, and the contracts each layer holds. The Engine is sold on its readability as much as its capability. If a buyer can&rsquo;t draw the stack from memory after a first conversation, we haven&rsquo;t earned the engagement.
              </Body>
            </div>
          </div>
        </Reveal>

        <Reveal step={4} className="mt-10">
          <p className="border-t border-b border-ink-line py-9 px-0 font-display font-medium text-[clamp(22px,2vw,30px)] leading-[1.25] tracking-[-0.02em] text-ink max-w-[30ch]">
            A stack you can&rsquo;t inspect is a stack you can&rsquo;t trust to compound.
          </p>
        </Reveal>
      </Section>

      {/* ============================== 3. AGENTIC VS HUMAN ============================== */}
      <Section pad="none" id="agentic-human" className="py-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-14">
          <NumberedLabel prefix="Section 03" label="Agentic / human" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-end mb-14">
          <Reveal step={1}>
            <SectionDisplay className="max-w-[18ch]">
              Where machines lead. <Dim>Where humans hold.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body tone="soft" className="max-w-[52ch]">
              The agentic / human-curated split is a deliberate framework, not an aspirational AGI claim. Some layers benefit from agentic scale — reading at breadth, generating variants, deploying natively across channels. Others benefit from a hand on the work — craft decisions, taste calls, the moments where the brand is being judged most closely. Each layer is shaped by what the work actually rewards.
            </Body>
          </Reveal>
        </div>

        <Reveal step={3}>
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b border-ink-line lg:divide-x lg:divide-ink-line">
            {/* Agentic */}
            <div className="bg-paper px-8 lg:px-10 py-12">
              <span className="inline-flex items-center gap-2.5 font-mono-util text-ink-mute px-3 py-1.5 border border-ink-line rounded-full bg-paper mb-7">
                <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-ink" />
                Agentic-led
              </span>
              <h3 className="font-display font-medium text-[clamp(28px,2.4vw,38px)] leading-[1.08] tracking-[-0.022em] text-ink mb-3.5">
                Reading at breadth, deploying at scale.
              </h3>
              <Body tone="soft" className="max-w-[44ch] mb-6">
                Where the work rewards continuous coverage, structured retrieval, and high-volume variation, agents lead. Calibration is enforced at the contract layer; agents work inside the substrate, not against it.
              </Body>
              <ul className="flex flex-col">
                {AGENTIC_LIST.map((row, i, arr) => (
                  <li
                    key={row.where}
                    className={cn(
                      "grid grid-cols-[88px_1fr] gap-4 items-baseline py-3.5 border-t border-ink-line",
                      i === arr.length - 1 && "border-b border-ink-line"
                    )}
                  >
                    <span className="font-mono-util text-ink-mute">{row.where}</span>
                    <span className="font-display text-[15px] leading-[1.5] tracking-[-0.005em] text-ink">
                      {row.what}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Human */}
            <div className="bg-paper-2 px-8 lg:px-10 py-12 border-t lg:border-t-0 border-ink-line">
              <span className="inline-flex items-center gap-2.5 font-mono-util text-ink-mute px-3 py-1.5 border border-ink-line rounded-full bg-paper mb-7">
                <span aria-hidden className="inline-block w-2 h-2 rounded-full border-[1.5px] border-ink bg-transparent" />
                Human-curated
              </span>
              <h3 className="font-display font-medium text-[clamp(28px,2.4vw,38px)] leading-[1.08] tracking-[-0.022em] text-ink mb-3.5">
                Craft, taste, and the call only a person makes.
              </h3>
              <Body tone="soft" className="max-w-[44ch] mb-6">
                Where the work is judged most closely, humans hold the pen. Form is human-curated end to end. Format Intelligence is researcher-shaped. The Engine itself is human-architected; agents serve it, not the other way around.
              </Body>
              <ul className="flex flex-col">
                {HUMAN_LIST.map((row, i, arr) => (
                  <li
                    key={row.where}
                    className={cn(
                      "grid grid-cols-[88px_1fr] gap-4 items-baseline py-3.5 border-t border-ink-line",
                      i === arr.length - 1 && "border-b border-ink-line"
                    )}
                  >
                    <span className="font-mono-util text-ink-mute">{row.where}</span>
                    <span className="font-display text-[15px] leading-[1.5] tracking-[-0.005em] text-ink">
                      {row.what}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal step={4} className="mt-9">
          <Body tone="soft" className="max-w-[56ch]">
            <strong className="text-ink font-medium">The split is engineered, not philosophical.</strong> It changes as tools change — that&rsquo;s why Format Intelligence (S&mdash;05) sits where it does, and why the next paragraph is about research lineage rather than feature roadmaps.
          </Body>
        </Reveal>
      </Section>

      {/* ============================== 4. RESEARCH LINEAGE ============================== */}
      <Section pad="none" id="lineage" className="py-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-14">
          <NumberedLabel prefix="Section 04" label="Research lineage" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-end mb-14">
          <Reveal step={1}>
            <SectionDisplay className="max-w-[18ch]">
              Continuous research. <Dim>Treated as infrastructure.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body tone="soft" className="max-w-[52ch]">
              Format Intelligence isn&rsquo;t a deliverable line item — it&rsquo;s a continuous investment. The Engine reserves bandwidth for reading emerging tools, formats, and capabilities ahead of market consensus, and folds that reading back into the substrate every Product queries. Lab register, not vendor pitch.
            </Body>
          </Reveal>
        </div>

        <Reveal step={3}>
          <div className="pt-9 border-t border-ink-line">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {LINEAGE.map((cell) => (
                <div
                  key={cell.yr}
                  className={cn(
                    "rounded-[8px] border px-4 py-4 min-h-[110px] flex flex-col",
                    cell.now
                      ? "bg-ink border-ink"
                      : "bg-paper-2 border-ink-line"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono-util mb-2.5",
                      cell.now ? "text-[rgba(246,244,239,0.55)]" : "text-ink-mute"
                    )}
                  >
                    {cell.yr}
                  </span>
                  <h5
                    className={cn(
                      "font-display font-medium text-[15px] leading-[1.25] tracking-[-0.012em] mb-1.5",
                      cell.now ? "text-paper" : "text-ink"
                    )}
                  >
                    {cell.h}
                  </h5>
                  <p
                    className={cn(
                      "font-display text-[13px] leading-[1.5] tracking-[-0.005em]",
                      cell.now ? "text-[rgba(246,244,239,0.7)]" : "text-ink-soft"
                    )}
                  >
                    {cell.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal step={4} className="mt-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <Body tone="soft" className="max-w-[50ch]">
              <strong className="text-ink font-medium">Format Intelligence is the visible edge of a continuous discipline.</strong> Bandwidth is reserved each cycle — not won project-to-project — for reading emerging tools and asset shapes. That investment is what keeps the agentic / human split honest as the underlying capabilities move.
            </Body>
            <Body tone="soft" className="max-w-[50ch]">
              The lineage above is a working timeline, not a roadmap pitch. Past entries are shipped layers of the Engine; the &ldquo;now&rdquo; cell is the one we&rsquo;re writing against; future cells are the slots we&rsquo;ve reserved capacity for. Buyers can ask after any of them.
            </Body>
          </div>
        </Reveal>
      </Section>

      {/* ============================== 5. CLOSING ============================== */}
      <Section pad="none" id="close" className="py-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="Section 05" label="Continue" />
        </Reveal>
        <Reveal step={1}>
          <SectionDisplay className="!text-[clamp(40px,5.4vw,78px)] !leading-[1.02] !tracking-[-0.034em] max-w-[16ch] mb-16">
            Step into a Product. <Dim>Or open a conversation about the stack.</Dim>
          </SectionDisplay>
        </Reveal>

        <Reveal step={2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-ink-line">
            {ROUTES.map((r, i, arr) => (
              <Link
                key={r.name}
                href={r.href}
                className={cn(
                  "group flex flex-col gap-3.5 px-7 pt-8 pb-9 bg-paper text-ink no-underline",
                  "transition-colors duration-300 hover:bg-ink hover:text-paper",
                  "border-ink-line",
                  i < arr.length - 1 && "lg:border-r",
                  i === 0 && "sm:border-r lg:border-r",
                  i === 1 && "lg:border-r",
                  i === 2 && "sm:border-r lg:border-r",
                  i < arr.length - 1 && "border-b sm:border-b-0",
                  i < 2 && "sm:border-b lg:border-b-0"
                )}
              >
                <span className="font-mono-util text-ink-mute group-hover:text-paper transition-colors">
                  {r.lbl}
                </span>
                <span className="font-display font-medium text-[clamp(22px,1.7vw,28px)] leading-[1.1] tracking-[-0.02em]">
                  {r.name}
                </span>
                <span className="mt-auto pt-8 flex justify-between items-center">
                  <span className="font-mono-util text-ink-mute group-hover:text-paper transition-colors">
                    {r.foot}
                  </span>
                  <span
                    aria-hidden
                    className="font-mono-util text-ink-mute group-hover:text-paper transition-all group-hover:translate-x-1"
                  >
                    {r.arrow}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal step={3} className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <Body tone="soft" className="max-w-[50ch] text-[clamp(17px,1.25vw,20px)]">
              The Engine is sold on its readability as much as its capability. If anything in the stack is unclear, that&rsquo;s a conversation we&rsquo;d rather have than skip.
            </Body>
            <CTAGroup pattern="engagement-first" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}

/* TODO(eng-page):
   - Reference HTML carries a placeholder pill for the L1–L4 figure ("bespoke
     design in production"). The implementation here builds an inline diagram
     instead. If a bespoke SVG/illustrated diagram lands later, swap in via
     <Placeholder variant="paper" /> or a custom figure component.
   - Reference also implied Sense/Form/Reach pill connectors between rows on
     the diagram. Not built — would crowd the L1-anchor read. Consider a hover
     state that surfaces pillar→layer mapping if user feedback asks for it.
*/
