import { Section } from "@/components/layout";
import {
  Hero,
  SectionDisplay,
  SubDisplay,
  Body,
  Mono,
  Dim,
} from "@/components/typography";
import { Reveal, HoverLift } from "@/components/motion/Reveal";
import { Placeholder } from "@/components/site/Placeholder";
import {
  Crumb,
  NumberedLabel,
  SystemList,
  ArrowLink,
} from "@/components/site/PageChrome";
import { CTAGroup } from "@/components/cta/CTAGroup";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "Products — Sense, Form, Reach, Adapt",
  description:
    "Four Products. One adaptive system. Sense reads the brand and the field. Form makes the work. Reach scales it across channels. Adapt closes the loop.",
};

const SENSE_SYSTEMS = [
  { num: "S—01", name: "Brand Intelligence", desc: "Calibration substrate & voice." },
  { num: "S—02", name: "Audience Intelligence", desc: "Segment, motivation, context." },
  { num: "S—03", name: "Cultural Intelligence", desc: "Emergent narratives & signals." },
  { num: "S—04", name: "Competitive Intelligence", desc: "Field positioning & whitespace." },
  { num: "S—05", name: "Format Intelligence", desc: "Foresight on emerging asset types." },
];

const FORM_SYSTEMS = [
  { num: "F—01", name: "Still", desc: "Image, identity, editorial." },
  { num: "F—02", name: "Motion", desc: "Film, broadcast, narrative." },
  { num: "F—03", name: "Spatial", desc: "Environment, object, dimensional." },
  { num: "F—04", name: "Sonic", desc: "Voice, score, audio identity." },
];

const REACH_SYSTEMS = [
  { num: "R—01", name: "Variant Production", desc: "Asset variation at brand-coherent scale." },
  { num: "R—02", name: "Channel Activation", desc: "Distribution shaped to channel logic." },
  { num: "R—03", name: "Performance", desc: "Measurement that loops back to Sense." },
];

const ASSETS = [
  {
    lbl: "F—01 / Still",
    title: "Still",
    items: [
      "Campaign photography",
      "Brand imagery libraries",
      "Product visualization",
      "Editorial content",
      "Identity systems",
      "Key art",
      "Packaging surfaces",
    ],
  },
  {
    lbl: "F—02 / Motion",
    title: "Motion",
    items: [
      "Brand films",
      "Social motion content",
      "Kinetic identity",
      "Animated brand moments",
      "Product motion",
      "Title sequences",
      "Looping content",
    ],
  },
  {
    lbl: "F—03 / Spatial",
    title: "Spatial",
    items: [
      "3D product visualization",
      "Environmental renders",
      "AR / VR experiences",
      "Immersive brand moments",
      "Virtual showrooms",
      "E-viewers",
      "Configurators",
    ],
  },
  {
    lbl: "F—04 / Sonic",
    title: "Sonic",
    deferred: true,
    items: ["Brand sonic identity", "Audio content", "Voice systems"],
  },
];

const STEPS = [
  { num: "Step 01", h: "Discovery", p: "30-minute call. Understand brand context, scope, urgency." },
  { num: "Step 02", h: "Scope", p: "Proposal: which Products and Systems engage, deliverables defined, timeline, investment." },
  { num: "Step 03", h: "Calibration", p: "Brand Intelligence engagement if needed (~2–4 weeks). Becomes the proprietary foundation for everything that follows." },
  { num: "Step 04", h: "Production", p: "Form and Reach Systems execute. Deliverables produced, brand-calibrated, hero-grade." },
  { num: "Step 05", h: "Activation & iteration", p: "Reach activates across channels. Performance Systems measure. Iteration loops." },
];

export default function ProductsHub() {
  return (
    <>
      {/* 1. INTRO */}
      <Section pad="none" className="pt-14 pb-[100px] border-b border-ink-line">
        <Reveal step={0} className="mb-7">
          <Crumb parent="Index" parentHref="/" current="Products" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end">
          <Reveal step={1}>
            <Hero className="!text-[clamp(56px,7vw,104px)] !leading-[1.0] max-w-[18ch]">
              Four Products. <Dim>One adaptive system.</Dim>
            </Hero>
          </Reveal>
          <Reveal step={2} className="space-y-3.5">
            <Body className="max-w-[50ch]" tone="soft">
              <strong className="text-ink font-medium">Sense, Form, Reach, and Adapt</strong> are the four Products that compose Amoeboid&rsquo;s adaptive creative production system.
            </Body>
            <Body className="max-w-[50ch]" tone="soft">
              Each is its own destination — calibrated to a distinct stage of the work. Sense reads the brand and the field. Form makes the work across still, motion, spatial, and sonic. Reach takes a piece into variants, channels, and measured outcomes. Adapt closes the loop — refreshing the substrate and composing the next cycle&rsquo;s adjustments.
            </Body>
            <Body className="max-w-[50ch]" tone="soft">
              Buyers enter at any Product, or any single System within a Product. Orchestration is the optimal path we sell toward — never the gating requirement.
            </Body>
          </Reveal>
        </div>
      </Section>

      {/* 1.5 ORIENTATION — order menu: four Products, the Assets each produces, one promise */}
      <Section pad="none" surface="paper-2" className="py-[100px] border-b border-ink-line">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="Orientation" label="What you can order" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-10">
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(32px,3.6vw,52px)] max-w-[18ch]">
              The order menu, <Dim>plainly.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body tone="soft" className="max-w-[50ch]">
              Four Products. Each composed of named Systems. Each producing concrete Assets. Engage any Product, or any single System within one — orchestration is the optimal path, never the gating requirement.
            </Body>
          </Reveal>
        </div>

        <Reveal step={3}>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-ink-line">
            {[
              {
                num: "Product 01",
                name: "Sense",
                line: "Brand, audience, cultural, competitive, and format intelligence — structured into the calibration substrate everything else composes against.",
              },
              {
                num: "Product 02",
                name: "Form",
                line: "Still, motion, spatial, and sonic — campaign photography, brand films, 3D visualization, editorial content, identity systems, key art, packaging surfaces.",
              },
              {
                num: "Product 03",
                name: "Reach",
                line: "Variant production at brand-coherent scale, channel-shaped activation, performance reads that loop back to Sense.",
              },
              {
                num: "Product 04",
                name: "Adapt",
                line: "A continuous loop-closer between cycles — refreshed substrate, a change brief that names what shifted, and a composition memo for the next cycle.",
              },
            ].map((p, i, arr) => (
              <li
                key={p.num}
                className={cn(
                  "flex flex-col gap-3 py-7 pr-7",
                  "border-b md:border-b-0 md:border-r border-ink-line",
                  i === arr.length - 1 && "lg:border-r-0 lg:pr-0",
                  i === arr.length - 1 && "border-b-0",
                  i % 2 === 1 && "md:border-r-0 lg:border-r"
                )}
              >
                <span className="font-mono-util text-ink-mute">{p.num}</span>
                <h4 className="font-display font-medium text-[clamp(22px,1.9vw,28px)] leading-[1.15] tracking-[-0.02em] text-ink">
                  {p.name}
                </h4>
                <p className="font-display text-[14.5px] leading-[1.55] tracking-[-0.005em] text-ink-soft max-w-[34ch]">
                  {p.line}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* 2. SENSE — image left */}
      <Section pad="none" id="sense" className="py-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="Product 01" label="Sense" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
          <Reveal step={1}>
            <HoverLift>
              <Placeholder
                variant="sense"
                label="Sense / Anchor"
                centerLabel="Research-coded imagery"
                aspect="aspect-[4/5]"
                rounded="rounded-[14px]"
                caption={
                  <div className="font-mono-util text-ink-mute">
                    Signal · Foresight · Calibration
                  </div>
                }
              />
            </HoverLift>
          </Reveal>
          <Reveal step={2}>
            <SectionDisplay className="!text-[clamp(40px,5vw,68px)]">Sense</SectionDisplay>
            <p className="mt-5 font-display font-medium text-[clamp(20px,1.7vw,26px)] leading-[1.25] tracking-[-0.018em] text-ink max-w-[28ch]">
              Brand intelligence and format foresight. The reading layer.
            </p>
            <Body className="mt-5 max-w-[48ch]" tone="soft">
              Sense is research, structured. It reads brand, audience, culture, competitors, and emerging formats — then calibrates that reading into the substrate every subsequent piece of work compounds against. Agentic where it scales; researcher-shaped where it shouldn&rsquo;t.
            </Body>
            <SystemList heading="Five Systems" items={SENSE_SYSTEMS} />
            <div className="mt-8">
              <ArrowLink href="/sense">Open Sense</ArrowLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. FORM — image right */}
      <Section pad="none" id="form" className="py-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="Product 02" label="Form" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(40px,5vw,68px)]">Form</SectionDisplay>
            <p className="mt-5 font-display font-medium text-[clamp(20px,1.7vw,26px)] leading-[1.25] tracking-[-0.018em] text-ink max-w-[28ch]">
              Creative execution across the four media shapes.
            </p>
            <Body className="mt-5 max-w-[48ch]" tone="soft">
              Form is where calibration becomes craft. Still, motion, spatial, and sonic — each a discipline, each a System. Human-curated execution at the level the brand actually warrants. The shape framework holds; the output ships.
            </Body>
            <SystemList heading="Four Systems — media-shape framework" items={FORM_SYSTEMS} />
            <div className="mt-8">
              <ArrowLink href="/form">Open Form</ArrowLink>
            </div>
          </Reveal>
          <Reveal step={2} className="lg:order-last lg:row-start-1 lg:col-start-2">
            <HoverLift>
              <Placeholder
                variant="form"
                label="Form / Anchor"
                centerLabel="Product-craft imagery"
                aspect="aspect-[4/5]"
                rounded="rounded-[14px]"
                innerFrame
                caption={
                  <div className="font-mono-util text-ink-mute">
                    Still · Motion · Spatial · Sonic
                  </div>
                }
              />
            </HoverLift>
          </Reveal>
        </div>
      </Section>

      {/* 4. REACH — full-width stacked */}
      <Section pad="none" id="reach" className="py-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="Product 03" label="Reach" />
        </Reveal>
        <Reveal step={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-10">
            <SectionDisplay className="!text-[clamp(40px,5vw,68px)]">Reach</SectionDisplay>
            <div>
              <p className="font-display font-medium text-[clamp(20px,1.7vw,26px)] leading-[1.25] tracking-[-0.018em] text-ink max-w-[28ch]">
                Variant production, channel activation, and measured performance.
              </p>
              <Body className="mt-5 max-w-[48ch]" tone="soft">
                Reach takes a piece of work and moves it into the world — at the variants and the volumes the channels actually demand. Agentic where it scales. Brand calibration enforced across every variant, not abandoned at distribution.
              </Body>
            </div>
          </div>
        </Reveal>

        <Reveal step={2}>
          <HoverLift>
            <Placeholder
              variant="reach"
              label="Reach / Anchor"
              centerLabel="Broadcast & scale imagery"
              aspect="aspect-[16/9]"
              rounded="rounded-[14px]"
              dark
              reachGrid
              caption={
                <div className="font-mono-util text-[rgba(246,244,239,0.55)]">
                  Variants · Channels · Performance
                </div>
              }
            />
          </HoverLift>
        </Reveal>

        <Reveal step={3} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
            <SystemList heading="Three Systems" items={REACH_SYSTEMS} className="!mt-0 !pt-0 !border-t-0" />
            <div className="flex md:items-end md:justify-end pt-7">
              <ArrowLink href="/reach">Open Reach</ArrowLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 4.5 ASSETS CATALOG */}
      <Section pad="none" surface="paper-2" id="assets" className="py-[120px] border-b border-ink-line">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="/ Catalog" label="Assets" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-end mb-10">
          <Reveal step={1}>
            <SectionDisplay>Assets.</SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body tone="soft" className="max-w-[44ch]">
              What we produce. Brand-calibrated, hero-grade, ready to deploy.
            </Body>
          </Reveal>
        </div>
        <Reveal step={2}>
          <Body className="max-w-[78ch]" tone="soft">
            <strong className="text-ink font-medium">Form is the creation layer.</strong> Sense informs every asset with brand calibration and audience grounding. Reach activates assets across channels through variants, deployment, and performance loops. Adapt closes the loop — refreshing the calibration against signal from the field.
          </Body>
        </Reveal>

        <Reveal step={3} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ASSETS.map((col) => (
              <div
                key={col.title}
                className={cn(
                  "relative bg-paper border border-ink-line rounded-[14px] p-7 flex flex-col gap-4",
                  col.deferred && "opacity-90"
                )}
              >
                <span className="font-mono-util text-ink-mute">{col.lbl}</span>
                {col.deferred && (
                  <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 font-mono-util text-ink-mute">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink-faint" />
                    Expanding 2027
                  </span>
                )}
                <h3 className="font-display font-medium text-[clamp(24px,2vw,30px)] leading-[1.1] tracking-[-0.02em] text-ink">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2 mt-1">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="font-display text-[14.5px] leading-[1.55] tracking-[-0.005em] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal step={4} className="mt-10">
          <Body tone="soft" className="max-w-[68ch] text-[15px]">
            Assets flow through Reach for multi-context deployment — channel variants, activation, performance optimization.
          </Body>
        </Reveal>
      </Section>

      {/* 5. MODULAR ENTRY RESTATE */}
      <Section pad="none" className="py-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="Closing" label="Modular entry" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end">
          <Reveal step={1}>
            <SectionDisplay className="max-w-[18ch]">
              Begin where the work begins. <Dim>Orchestrate when it&rsquo;s ready.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body className="max-w-[50ch]" tone="soft">
              Engagements start at any Product, or at any single System inside one. Orchestration is the optimal path — never the gating requirement. Inputs come from your library or ours. Brand calibration compounds either way.
            </Body>
            <div className="mt-7">
              <CTAGroup pattern="adaptive-first" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 6. HOW AN ENGAGEMENT WORKS */}
      <Section pad="none" className="py-[140px] border-b border-ink-line">
        <Reveal step={0} className="mb-9">
          <NumberedLabel prefix="Section 06" label="How an engagement works" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-end mt-2 mb-14">
          <Reveal step={1}>
            <SectionDisplay className="max-w-[14ch]">
              From first call <Dim>to closed loop.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={2}>
            <Body tone="soft" className="max-w-[48ch]">
              Five structural moments. The shape doesn&rsquo;t change — the composition does. Each engagement runs against this sequence; what scales is the calibration layer underneath it.
            </Body>
          </Reveal>
        </div>

        <Reveal step={3}>
          <ol className="grid grid-cols-1 md:grid-cols-5 border-t border-ink-line">
            {STEPS.map((s, i, arr) => (
              <li
                key={s.num}
                className={cn(
                  "flex flex-col gap-3 py-7 pr-7",
                  "border-b md:border-b-0 md:border-r border-ink-line",
                  i === arr.length - 1 && "md:border-r-0 md:pr-0 border-b-0"
                )}
              >
                <span className="inline-flex items-center gap-2 font-mono-util text-ink-mute">
                  <span aria-hidden className="inline-block w-1.5 h-1.5 bg-ink rounded-full" />
                  {s.num}
                </span>
                <h4 className="font-display font-medium text-[clamp(20px,1.6vw,24px)] leading-[1.2] tracking-[-0.018em] text-ink">
                  {s.h}
                </h4>
                <p className="font-display text-[14.5px] leading-[1.55] tracking-[-0.005em] text-ink-soft max-w-[28ch]">
                  {s.p}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal step={4} className="mt-12 pt-7 border-t border-ink-line">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <Body tone="soft" className="max-w-[52ch] text-[15px]">
              <strong className="text-ink font-medium">The shape is the contract.</strong> Calibration steps in only when it&rsquo;s the right moment in the engagement; the proposal in Step 02 names which Systems run and which sit out.
            </Body>
            <CTAGroup pattern="engagement-first" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
