import Link from "next/link";
import { Section } from "@/components/layout";
import {
  SectionDisplay,
  Body,
  Dim,
} from "@/components/typography";
import { Reveal, HoverLift } from "@/components/motion/Reveal";
import { Placeholder } from "@/components/site/Placeholder";
import {
  Crumb,
  NumberedLabel,
  ArrowLink,
} from "@/components/site/PageChrome";
import { CTAGroup } from "@/components/cta/CTAGroup";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "Sonance — Case Study",
  description:
    "Premium audio, considered craft. A consumer audio launch composed across eleven markets — one master, fourteen hundred variants, the substrate held end-to-end.",
};

const HERO_STATS = [
  { k: "Industry", v: "Consumer audio" },
  { k: "Engagement", v: "Launch + ongoing" },
  { k: "Markets", v: "Eleven" },
  { k: "Year", v: "2024 — 2025" },
];

const KEY_FACTS = [
  { k: "Industry", v: "Consumer audio — premium" },
  { k: "Scope", v: "Brand calibration + launch" },
  { k: "Timeline", v: "14 weeks · ongoing custodianship" },
  { k: "Team", v: "11 Amoeboid · 4 Sonance-side" },
];

type OrchCell = { code: string; nm: string; active?: boolean; deferred?: boolean };
type OrchRow = { lbl: string; count: 3 | 4 | 5; cells: OrchCell[] };

const ORCH_ROWS: OrchRow[] = [
  {
    lbl: "Sense / L2",
    count: 5,
    cells: [
      { code: "S—01", nm: "Brand Intel.", active: true },
      { code: "S—02", nm: "Audience" },
      { code: "S—03", nm: "Culture" },
      { code: "S—04", nm: "Field" },
      { code: "S—05", nm: "Format Intel.", active: true },
    ],
  },
  {
    lbl: "Form / L3",
    count: 4,
    cells: [
      { code: "F—01", nm: "Still", active: true },
      { code: "F—02", nm: "Motion", active: true },
      { code: "F—03", nm: "Spatial" },
      { code: "F—04", nm: "Sonic", deferred: true },
    ],
  },
  {
    lbl: "Reach / L4",
    count: 3,
    cells: [
      { code: "R—01", nm: "Variant Prod.", active: true },
      { code: "R—02", nm: "Channel Activation", active: true },
      { code: "R—03", nm: "Performance", active: true },
    ],
  },
];

const FRAMES: {
  span: string;
  aspect: string;
  variant: "vis-a" | "vis-b" | "vis-c" | "vis-d";
  dark?: boolean;
  badge: string;
  corner: string;
  caption: string;
  tag: string;
  motion?: boolean;
}[] = [
  {
    span: "lg:col-span-12",
    aspect: "aspect-[21/9]",
    variant: "vis-c",
    badge: "Frame 01 · Still",
    corner: "Master · product",
    caption: "Master frame — product on horizon",
    tag: "F—01 · Still",
  },
  {
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    variant: "vis-a",
    badge: "Frame 02 · Still",
    corner: "Material study",
    caption: "Material study — brushed alloy",
    tag: "F—01 · Still",
  },
  {
    span: "lg:col-span-7",
    aspect: "aspect-[3/2]",
    variant: "vis-d",
    dark: true,
    badge: "Frame 03 · Motion",
    corner: "02:14 · loop",
    caption: "Hero motion — product reveal",
    tag: "F—02 · Motion",
    motion: true,
  },
  {
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
    variant: "vis-c",
    badge: "Frame 04 · Still",
    corner: "Environmental",
    caption: "Environmental — in-room",
    tag: "F—01 · Still",
  },
  {
    span: "lg:col-span-5",
    aspect: "aspect-square",
    variant: "vis-a",
    badge: "Frame 05 · Still",
    corner: "Packaging",
    caption: "Packaging — silhouette study",
    tag: "F—01 · Still",
  },
  {
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
    variant: "vis-c",
    badge: "Frame 06 · Spatial",
    corner: "Render",
    caption: "Spatial — retail study",
    tag: "F—03 · Deferred",
  },
  {
    span: "lg:col-span-4",
    aspect: "aspect-square",
    variant: "vis-b",
    dark: true,
    badge: "Frame 07 · Motion",
    corner: "00:09",
    caption: "Variant motion — channel cut",
    tag: "F—02 · Motion",
    motion: true,
  },
  {
    span: "lg:col-span-4",
    aspect: "aspect-square",
    variant: "vis-a",
    badge: "Frame 08 · Variants",
    corner: "9 of 1,400",
    caption: "Variant grid — nine of fourteen-hundred",
    tag: "R—01 · Variant",
  },
];

const RELATED = [
  {
    num: "F01",
    title: "Hyrst",
    year: "2025",
    sub: "24-month brand calibration for a heritage outerwear label.",
    variant: "vis-d" as const,
    dark: true,
  },
  {
    num: "007",
    title: "Solen",
    year: "2025",
    sub: "Audio device campaign — motion-led, channel-native variants.",
    variant: "vis-a" as const,
  },
  {
    num: "F04",
    title: "Verge Foundation",
    year: "2026",
    sub: "Three cycles of brand custodianship under one Engine.",
    variant: "vis-d" as const,
    dark: true,
  },
];

export default function SonanceCase() {
  return (
    <>
      {/* 1. HERO — Sonance brand register (ink/dark) */}
      <Section pad="none" surface="ink" className="pt-10 pb-[88px]">
        <Reveal step={0} className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[rgba(246,244,239,0.12)]">
            <span className="font-mono-util text-[rgba(246,244,239,0.55)]">
              <Link href="/work" className="hover:opacity-80">
                ← Work
              </Link>
              {"  /  Featured 03"}
            </span>
            <span className="font-mono-util text-[rgba(246,244,239,0.55)]">
              Case · Sonance · 2025
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end pt-16 pb-14">
          <Reveal step={1}>
            <h1 className="font-display font-medium text-paper text-[clamp(72px,11vw,168px)] leading-[0.92] tracking-[-0.046em]">
              Sonance.
            </h1>
          </Reveal>
          <Reveal step={2}>
            <p className="font-display text-[clamp(20px,1.6vw,26px)] leading-[1.3] tracking-[-0.018em] text-[rgba(246,244,239,0.72)] max-w-[32ch]">
              <strong className="text-paper font-medium">
                Premium audio, considered craft.
              </strong>{" "}
              A consumer audio launch composed across eleven markets — one
              master, fourteen hundred variants, the substrate held
              end&#8209;to&#8209;end.
            </p>
          </Reveal>
        </div>

        <Reveal step={3}>
          <HoverLift>
            <Placeholder
              variant="vis-d"
              dark
              aspect="aspect-[21/9]"
              rounded="rounded-[14px]"
              label="Image 01 / 08"
              corner="Sonance · Master frame"
              centerLabel="Brand-register hero photography — placeholder"
              caption={
                <>
                  <span className="font-mono-util text-[rgba(246,244,239,0.55)]">
                    02:39:17
                  </span>
                  <span className="font-mono-util text-[rgba(246,244,239,0.55)]">
                    Form · Still
                  </span>
                </>
              }
            />
          </HoverLift>
        </Reveal>

        <Reveal step={4} className="mt-10 pt-9 border-t border-[rgba(246,244,239,0.12)]">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12">
            {HERO_STATS.map((s) => (
              <div key={s.k} className="flex flex-col gap-1.5">
                <dt className="font-mono-util text-[rgba(246,244,239,0.55)]">
                  {s.k}
                </dt>
                <dd className="font-display font-medium text-paper text-[clamp(18px,1.5vw,22px)] tracking-[-0.014em]">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* 2. BRIEF */}
      <Section pad="none" id="brief" className="py-[120px] border-b border-ink-line">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-14">
          <Reveal step={0}>
            <NumberedLabel prefix="Section 02" label="Brief" />
            <SectionDisplay className="mt-6 max-w-[18ch]">
              What Sonance <Dim>brought to us.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={1}>
            <Body tone="soft" className="max-w-[50ch]">
              Sonance had a defined product, a Scandinavian design language,
              and a launch window that crossed eleven regulated markets. What
              they did not have was a way to hold their visual register
              coherent at the variant volume the launch required — and a
              clear answer to who would do the holding.
            </Body>
          </Reveal>
        </div>

        <Reveal step={2}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            <blockquote className="pl-6 border-l border-ink">
              <p className="font-display text-[clamp(20px,1.6vw,26px)] leading-[1.4] tracking-[-0.018em] text-ink max-w-[40ch]">
                &ldquo;
                <span className="text-ink-mute not-italic">
                  We don&rsquo;t want a campaign. We want a system that
                  produces a campaign and stays calibrated when we run the
                  next one.
                </span>
                &rdquo;
              </p>
              <footer className="mt-4 font-mono-util text-ink-mute">
                Sonance · Head of brand · Q3 2024
              </footer>
            </blockquote>

            <div className="space-y-4">
              <Body tone="soft" className="max-w-[48ch]">
                <strong className="text-ink font-medium">
                  The ask was structural, not creative.
                </strong>{" "}
                Sonance came in with a product and a hero image; what they
                didn&rsquo;t have was the substrate to keep the brand
                calibrated as 1,400 variants moved through eleven markets and
                eight channels. They wanted the calibration done once, and
                held.
              </Body>
              <Body tone="soft" className="max-w-[48ch]">
                Modular entry began with Sense — specifically Brand
                Intelligence and Format Intelligence — before any Form work
                was sold in. That sequence is the case&rsquo;s structural
                decision; the rest of the engagement composes against it.
              </Body>
            </div>
          </div>
        </Reveal>

        <Reveal step={3} className="mt-14">
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-ink-line">
            {KEY_FACTS.map((f, i) => (
              <div
                key={f.k}
                className={cn(
                  "flex flex-col gap-2 py-6 pr-7",
                  i < KEY_FACTS.length - 1 && "lg:border-r border-ink-line",
                  i < 2 && "md:border-b lg:border-b-0 border-ink-line"
                )}
              >
                <dt className="font-mono-util text-ink-mute">{f.k}</dt>
                <dd className="font-display font-medium text-ink text-[clamp(16px,1.25vw,19px)] leading-[1.3] tracking-[-0.012em]">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* 3. ORCHESTRATION */}
      <Section pad="none" id="orchestration" className="py-[120px] border-b border-ink-line">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-14">
          <Reveal step={0}>
            <NumberedLabel prefix="Section 03" label="Orchestration" />
            <SectionDisplay className="mt-6 max-w-[18ch]">
              How the stack <Dim>lit up for this case.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={1}>
            <Body tone="soft" className="max-w-[50ch]">
              Modular entry began at L2 — the Reading layer — and composed
              forward into Form for masters and Reach for variant production.
              The diagram below mirrors what was live for Sonance; cells
              outside the engagement stay visibly outlined to keep the stack
              readable.
            </Body>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          <Reveal step={2} className="space-y-4">
            <Body tone="soft" className="max-w-[46ch]">
              <strong className="text-ink font-medium">Sense ran first.</strong>{" "}
              Brand Intelligence and Format Intelligence read against the
              existing Sonance archive and the live state of consumer-audio
              launches across the target markets. The output was a
              calibration substrate — not a deck — that Form and Reach
              queried directly through the engagement.
            </Body>
            <Body tone="soft" className="max-w-[46ch]">
              <strong className="text-ink font-medium">
                Form held one master.
              </strong>{" "}
              Still and Motion at brand-level fidelity, calibrated against
              the substrate. Spatial was deferred by design (Sonance&rsquo;s
              retail partners hold that). Sonic was tagged as a future-cycle
              expansion.
            </Body>
            <Body tone="soft" className="max-w-[46ch]">
              <strong className="text-ink font-medium">
                Reach closed the loop.
              </strong>{" "}
              1,400 variants generated against the master and channel-deployed
              across eight surfaces. Performance signal read back into the
              substrate every 72 hours — sharpening Sense&rsquo;s next
              reading without re-translation.
            </Body>
          </Reveal>

          <Reveal step={3}>
            <figure className="border border-ink-line rounded-[14px] bg-paper p-6 flex flex-col gap-3.5">
              <div className="flex justify-between items-center font-mono-util text-ink-mute pb-3 border-b border-ink-line">
                <span>Engagement · L1–L4</span>
                <span>Sonance · Cycle 01</span>
              </div>

              {ORCH_ROWS.map((row) => (
                <div
                  key={row.lbl}
                  className="grid grid-cols-1 md:grid-cols-[86px_1fr] gap-3 md:gap-4 items-stretch"
                >
                  <span className="font-mono-util text-ink-mute md:pt-2.5">
                    {row.lbl}
                  </span>
                  <div
                    className={cn(
                      "grid gap-2",
                      row.count === 5 && "grid-cols-2 sm:grid-cols-5",
                      row.count === 4 && "grid-cols-2 sm:grid-cols-4",
                      row.count === 3 && "grid-cols-3"
                    )}
                  >
                    {row.cells.map((c) => (
                      <div
                        key={c.code}
                        className={cn(
                          "border rounded-lg px-3 py-2.5 min-h-[64px] flex flex-col gap-1 justify-center",
                          c.active &&
                            "bg-ink border-ink",
                          c.deferred &&
                            "bg-paper border-dashed border-ink-line opacity-70",
                          !c.active &&
                            !c.deferred &&
                            "bg-paper-2 border-ink-line"
                        )}
                      >
                        <span
                          className={cn(
                            "font-mono-util text-[9px] tracking-[0.18em]",
                            c.active
                              ? "text-[rgba(246,244,239,0.55)]"
                              : "text-ink-mute"
                          )}
                        >
                          {c.code}
                        </span>
                        <span
                          className={cn(
                            "font-display font-medium text-[12.5px] leading-[1.2] tracking-[-0.005em]",
                            c.active ? "text-paper" : "text-ink"
                          )}
                        >
                          {c.nm}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-2 pt-3 border-t border-ink-line flex justify-between items-center font-mono-util text-ink-mute">
                <span>Modular entry — Sense first</span>
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-block w-1.5 h-1.5 rounded-full bg-ink animate-pulse"
                  />
                  Loop active · 72h
                </span>
              </div>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* 4. OUTPUT GALLERY — Sonance brand register (paper-2 surface) */}
      <Section
        pad="none"
        surface="paper-2"
        id="gallery"
        className="py-[120px] border-b border-ink-line"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-16">
          <Reveal step={0}>
            <NumberedLabel prefix="Section 04" label="The work" />
            <SectionDisplay className="mt-6 max-w-[16ch]">
              Eight frames <Dim>from the cycle.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={1}>
            <Body tone="soft" className="max-w-[50ch]">
              Stills, motion, and a single spatial study from the launch
              window. Imagery placeholders sit in Sonance&rsquo;s register —
              cool off-white, restrained type, generous negative space. The
              brand carries the gallery; Amoeboid&rsquo;s chrome is paused.
            </Body>
          </Reveal>
        </div>

        <Reveal step={2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {FRAMES.map((f, i) => (
              <div key={i} className={cn("flex flex-col", f.span)}>
                <HoverLift>
                  <Placeholder
                    variant={f.variant}
                    dark={f.dark}
                    aspect={f.aspect}
                    rounded="rounded-none"
                    label={f.badge}
                    corner={f.corner}
                  >
                    {f.motion && (
                      <div
                        className={cn(
                          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                          "w-14 h-14 rounded-full flex items-center justify-center",
                          "border backdrop-blur-[2px]",
                          f.dark
                            ? "border-[rgba(246,244,239,0.85)] bg-[rgba(28,29,31,0.4)]"
                            : "border-ink bg-[rgba(239,238,234,0.4)]"
                        )}
                        aria-hidden
                      >
                        <svg viewBox="0 0 14 14" className="w-3.5 h-3.5">
                          <path
                            d="M3 1.5 L12 7 L3 12.5 Z"
                            fill={
                              f.dark
                                ? "rgba(239,238,234,0.95)"
                                : "rgba(28,29,31,0.85)"
                            }
                          />
                        </svg>
                      </div>
                    )}
                  </Placeholder>
                </HoverLift>
                <div className="mt-3.5 pt-2.5 border-t border-ink-line grid grid-cols-[1fr_auto] gap-3 font-mono-util text-ink-mute">
                  <span>{f.caption}</span>
                  <span>{f.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal step={3} className="mt-16 pt-7 border-t border-ink-line">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono-util text-ink-mute">
            <span>Eight frames shown · full set in client portal</span>
            <span>Sonance · Cycle 01 · 2024–25</span>
          </div>
        </Reveal>
      </Section>

      {/* 5. REFLECTION */}
      <Section pad="none" id="reflection" className="py-[120px] border-b border-ink-line">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-14">
          <Reveal step={0}>
            <NumberedLabel prefix="Section 05" label="Reflection" />
            <SectionDisplay className="mt-6 max-w-[18ch]">
              What carried <Dim>forward.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={1}>
            <Body tone="soft" className="max-w-[50ch]">
              The output of the cycle was the campaign. The byproduct was a
              calibrated substrate that the next cycle queries against
              directly — and a published 72-hour loop closure that has
              become the template for similar Reach-led engagements.
            </Body>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
          <Reveal step={2} className="space-y-4">
            <Body tone="soft" className="max-w-[50ch]">
              <strong className="text-ink font-medium">
                Sequencing was the decision.
              </strong>{" "}
              Beginning at L2 — not L3 — meant the substrate was durable
              before any image was made. Form composed against a known
              calibration; Reach enforced it across variants. The
              cycle&rsquo;s coherence is downstream of that one structural
              choice.
            </Body>
            <Body tone="soft" className="max-w-[50ch]">
              <strong className="text-ink font-medium">
                The loop earned its keep.
              </strong>{" "}
              R—03 fed Sense&rsquo;s reading every 72 hours through the
              launch window. By week three, audience hypotheses from S—02
              had measurably sharpened against in-market signal — and the
              next variant batch reflected the sharpening without human
              re-translation.
            </Body>
            <Body tone="soft" className="max-w-[50ch]">
              <strong className="text-ink font-medium">
                Sonic was the visible defer.
              </strong>{" "}
              Not within scope, but tagged at the substrate level so the
              next cycle can compose it in. That tag is now a standard
              pattern.
            </Body>
          </Reveal>

          <Reveal step={3}>
            <blockquote className="border-y border-ink-line py-8">
              <p className="font-display font-medium text-ink text-[clamp(22px,2vw,28px)] leading-[1.3] tracking-[-0.018em] max-w-[32ch]">
                &ldquo;The substrate is now Sonance-side property.
                That&rsquo;s the deliverable.&rdquo;
              </p>
              <footer className="mt-3 font-mono-util text-ink-mute">
                Sonance · Head of brand
              </footer>
            </blockquote>

            <div className="mt-8 pt-5 border-t border-ink-line">
              <h5 className="font-mono-util text-ink-mute mb-3">
                Carried into Brand Calibration
              </h5>
              <p className="font-display text-[14.5px] leading-[1.55] tracking-[-0.005em] text-ink-soft max-w-[36ch]">
                72-hour loop closure pattern, deferred-Sonic substrate tag,
                and Sense-first sequencing template — all promoted to
                Engine-level patterns after this cycle.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 6. CONTINUE — related cases + dual CTA */}
      <Section pad="none" className="py-[140px]">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="Section 06" label="Continue" />
        </Reveal>
        <Reveal step={1}>
          <SectionDisplay className="max-w-[22ch] mb-14">
            Related cases. <Dim>Or back to the index.</Dim>
          </SectionDisplay>
        </Reveal>

        <Reveal step={2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RELATED.map((r) => (
              <Link
                key={r.title}
                href="/work"
                className="group flex flex-col gap-3.5 transition-transform hover:-translate-y-1"
              >
                <Placeholder
                  variant={r.variant}
                  dark={r.dark}
                  aspect="aspect-[4/3]"
                  rounded="rounded-[12px]"
                  label="Related"
                  corner={r.title}
                />
                <div className="grid grid-cols-[32px_1fr_auto] gap-3 pt-2 border-t border-ink-line items-baseline">
                  <span className="font-mono-util text-ink-mute">{r.num}</span>
                  <span className="font-display font-medium text-ink text-[17px] tracking-[-0.012em] leading-[1.2]">
                    {r.title}
                  </span>
                  <span className="font-mono-util text-ink-mute">{r.year}</span>
                </div>
                <p className="font-display text-[13px] leading-[1.45] tracking-[-0.005em] text-ink-soft">
                  {r.sub}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal step={3} className="mt-20 pt-8 border-t border-ink-line">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Body tone="soft" className="max-w-[48ch]">
              <strong className="text-ink font-medium">
                Read more from the working portfolio
              </strong>{" "}
              — or open a conversation about composing a similar engagement.
            </Body>
            <div className="flex flex-col items-stretch sm:items-end gap-3">
              <CTAGroup pattern="engagement-first" />
              <ArrowLink href="/work" variant="plain">
                All cases
              </ArrowLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
