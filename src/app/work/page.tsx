"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Section } from "@/components/layout";
import {
  Hero,
  SectionDisplay,
  Body,
  Dim,
} from "@/components/typography";
import { Reveal, HoverLift } from "@/components/motion/Reveal";
import { Placeholder } from "@/components/site/Placeholder";
import { Crumb, NumberedLabel, ArrowLink } from "@/components/site/PageChrome";
import { CTAGroup } from "@/components/cta/CTAGroup";
import { cn } from "@/lib/cn";

type Pillar = "Sense" | "Form" | "Reach" | "Adapt";

interface FeaturedCase {
  ix: string;
  slug: string;
  title: string;
  dim?: string;
  lede: string;
  tags: string[];
  industry: string;
  pillar: Pillar;
  formSystem: string;
  variant: "wide" | "left" | "split" | "ink";
  placeholder: {
    variant: "ink" | "form" | "reach" | "vis-a" | "vis-b" | "vis-c" | "vis-d";
    label?: string;
    centerLabel?: string;
    dark?: boolean;
  };
}

interface IndexCase {
  num: string;
  slug: string;
  title: string;
  year: string;
  sub: string;
  industry: string;
  pillar: Pillar;
  formSystem: string;
  tags: string[];
  aspect: "land" | "port" | "square" | "wide";
  ph: {
    variant: "ink" | "form" | "reach" | "vis-a" | "vis-b" | "vis-c" | "vis-d";
    dark?: boolean;
  };
}

const INDUSTRIES = [
  "All",
  "Apparel",
  "Hospitality",
  "Consumer tech",
  "Cultural",
  "Finance",
  "Other",
] as const;

const PILLARS = ["All", "Sense", "Form", "Reach", "Adapt"] as const;

const FORM_SYSTEMS = ["All", "Still", "Motion", "Spatial", "Sonic"] as const;

const FEATURED: FeaturedCase[] = [
  {
    ix: "F01",
    slug: "/work",
    title:
      "A 24-month brand calibration for a heritage outerwear label, run as one continuous engagement.",
    dim: "Sense, Form, and Reach composed end-to-end.",
    lede:
      "Hyrst arrived with a heritage archive, a fragmented seasonal output, and a brand that read differently in every channel. We held the calibration substrate, ran continuous Sense across culture and category, and produced two seasons of stills and motion at brand-level fidelity — with channel-native variants pushed through Reach.",
    tags: ["Industry — Apparel", "Form — Still + Motion", "Sense — All five"],
    industry: "Apparel",
    pillar: "Adapt",
    formSystem: "Motion",
    variant: "wide",
    placeholder: {
      variant: "vis-d",
      label: "Image 01 / 04",
      centerLabel: "Hyrst · archive lookbook",
      dark: true,
    },
  },
  {
    ix: "F02",
    slug: "/work",
    title: "Norder —",
    dim: "an editorial reframe for a 19-property hospitality group.",
    lede:
      "A Form-led engagement — portraiture, spatial documentation, and a print-grade lookbook held to one calibration across nineteen sites. No Reach this cycle by design; the work was sold to be inhabited, not amplified.",
    tags: ["Industry — Hospitality", "Product — Form-led", "Form — Still + Spatial"],
    industry: "Hospitality",
    pillar: "Form",
    formSystem: "Spatial",
    variant: "left",
    placeholder: {
      variant: "vis-a",
      label: "Image 02 / 04",
      centerLabel: "Norder · editorial portrait",
    },
  },
  {
    ix: "F03",
    slug: "/work/sonance",
    title: "Sonance —",
    dim: "a global product launch run as one closed loop.",
    lede:
      "A consumer hardware launch across eleven markets. Sense ran field, audience, and format reading continuously through the campaign window; Reach produced 1,400 brand-coherent variants and read the performance signal back into the substrate every 72 hours. Form was held tight to one master.",
    tags: ["Industry — Consumer tech", "Product — Sense + Reach", "Variants — 1.4k"],
    industry: "Consumer tech",
    pillar: "Reach",
    formSystem: "Motion",
    variant: "split",
    placeholder: {
      variant: "form",
      label: "03",
      centerLabel: "Master frame",
    },
  },
  {
    ix: "F04",
    slug: "/work",
    title: "Verge Foundation —",
    dim: "three cycles of brand custodianship, held by Adapt.",
    lede:
      "A foundation rebuilding its public-facing identity across exhibitions, programmes, and digital archive. We've held the calibration substrate continuously since 2023; each cycle composes a different mix of Sense, Form, and Reach against the same contract.",
    tags: ["Industry — Cultural institution", "Adapt — Multi-cycle", "Years — 03"],
    industry: "Cultural",
    pillar: "Adapt",
    formSystem: "Still",
    variant: "ink",
    placeholder: {
      variant: "vis-d",
      label: "Image 04 / 04",
      centerLabel: "Verge · archive frame",
      dark: true,
    },
  },
];

const INDEX: IndexCase[] = [
  {
    num: "005",
    slug: "/work",
    title: "Hagen Studios",
    year: "2025",
    sub: "Independent record label brand system; print-led identity.",
    industry: "Cultural",
    pillar: "Form",
    formSystem: "Still",
    tags: ["Cultural", "Form-led", "Still"],
    aspect: "land",
    ph: { variant: "vis-b", dark: true },
  },
  {
    num: "006",
    slug: "/work",
    title: "Tindra",
    year: "2025",
    sub: "Skincare line launch — portraiture and packaging system.",
    industry: "Apparel",
    pillar: "Sense",
    formSystem: "Still",
    tags: ["Apparel", "Sense+Form", "Still"],
    aspect: "port",
    ph: { variant: "vis-a" },
  },
  {
    num: "007",
    slug: "/work/sonance",
    title: "Solen",
    year: "2025",
    sub: "Audio device campaign — motion-led, channel-native variants.",
    industry: "Consumer tech",
    pillar: "Reach",
    formSystem: "Motion",
    tags: ["Tech", "Reach-led", "Motion"],
    aspect: "square",
    ph: { variant: "ink", dark: true },
  },
  {
    num: "008",
    slug: "/work",
    title: "Mariner Hotel",
    year: "2024",
    sub: "Property reframe across three coastal sites.",
    industry: "Hospitality",
    pillar: "Form",
    formSystem: "Spatial",
    tags: ["Hospitality", "Form-led", "Still+Spatial"],
    aspect: "land",
    ph: { variant: "vis-c" },
  },
  {
    num: "009",
    slug: "/work",
    title: "Korva Bank",
    year: "2024",
    sub: "Private bank rebrand — calibrated across regulated touchpoints.",
    industry: "Finance",
    pillar: "Adapt",
    formSystem: "Still",
    tags: ["Finance", "Adapt multi-cycle", "Still"],
    aspect: "port",
    ph: { variant: "vis-d", dark: true },
  },
  {
    num: "010",
    slug: "/work",
    title: "Aldra Mobility",
    year: "2024",
    sub: "EV brand launch across eight European markets.",
    industry: "Consumer tech",
    pillar: "Reach",
    formSystem: "Motion",
    tags: ["Tech", "Reach-led", "Motion"],
    aspect: "wide",
    ph: { variant: "reach", dark: true },
  },
  {
    num: "011",
    slug: "/work",
    title: "Verge / Cycle 02",
    year: "2024",
    sub: "Foundation programme — second cycle of multi-year custodianship.",
    industry: "Cultural",
    pillar: "Adapt",
    formSystem: "Spatial",
    tags: ["Cultural", "Adapt", "Still+Spatial"],
    aspect: "square",
    ph: { variant: "vis-c" },
  },
  {
    num: "012",
    slug: "/work",
    title: "Northbound Ski Co.",
    year: "2024",
    sub: "Apparel brand — archive lookbook and seasonal motion suite.",
    industry: "Apparel",
    pillar: "Form",
    formSystem: "Motion",
    tags: ["Apparel", "Form-led", "Still+Motion"],
    aspect: "land",
    ph: { variant: "ink", dark: true },
  },
  {
    num: "013",
    slug: "/work",
    title: "Lumen House",
    year: "2023",
    sub: "Boutique hospitality — portraiture and brand book.",
    industry: "Hospitality",
    pillar: "Form",
    formSystem: "Still",
    tags: ["Hospitality", "Form-led", "Still"],
    aspect: "port",
    ph: { variant: "form" },
  },
  {
    num: "014",
    slug: "/work",
    title: "Marle Press",
    year: "2023",
    sub: "Publishing imprint — type system and cover programme.",
    industry: "Cultural",
    pillar: "Form",
    formSystem: "Still",
    tags: ["Cultural", "Form-led", "Still"],
    aspect: "land",
    ph: { variant: "vis-a" },
  },
  {
    num: "015",
    slug: "/work",
    title: "Thurn Capital",
    year: "2023",
    sub: "Investment firm rebrand — institutional register, restrained palette.",
    industry: "Finance",
    pillar: "Form",
    formSystem: "Still",
    tags: ["Finance", "Form-led", "Still"],
    aspect: "square",
    ph: { variant: "vis-b", dark: true },
  },
  {
    num: "016",
    slug: "/work",
    title: "Drift Coffee",
    year: "2023",
    sub: "Specialty roaster — full Adapt cycle, multi-format.",
    industry: "Other",
    pillar: "Adapt",
    formSystem: "Motion",
    tags: ["Other", "Adapt", "Still+Motion"],
    aspect: "wide",
    ph: { variant: "ink", dark: true },
  },
];

const aspectClass: Record<IndexCase["aspect"], string> = {
  land: "aspect-[4/3]",
  port: "aspect-[3/4]",
  square: "aspect-[1/1]",
  wide: "aspect-[16/10]",
};

export default function WorkIndex() {
  const [industry, setIndustry] = useState<(typeof INDUSTRIES)[number]>("All");
  const [pillar, setPillar] = useState<(typeof PILLARS)[number]>("All");
  const [formSystem, setFormSystem] = useState<(typeof FORM_SYSTEMS)[number]>("All");

  const filtered = useMemo(() => {
    return INDEX.filter((c) => {
      if (industry !== "All" && c.industry !== industry) return false;
      if (pillar !== "All" && c.pillar !== pillar) return false;
      if (formSystem !== "All" && c.formSystem !== formSystem) return false;
      return true;
    });
  }, [industry, pillar, formSystem]);

  const clear = () => {
    setIndustry("All");
    setPillar("All");
    setFormSystem("All");
  };

  const allActive = industry === "All" && pillar === "All" && formSystem === "All";

  return (
    <>
      {/* 1. INTRO */}
      <Section pad="none" className="pt-14 pb-[88px] border-b border-ink-line">
        <Reveal step={0} className="mb-8">
          <Crumb parent="Index" parentHref="/" current="Work" />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-end">
          <Reveal step={1}>
            <Hero className="!text-[clamp(48px,5.6vw,78px)] !leading-[1.02] !tracking-[-0.034em] max-w-[14ch]">
              A working portfolio. <Dim>Read it the way you&rsquo;d read a journal.</Dim>
            </Hero>
          </Reveal>
          <Reveal step={2}>
            <Body className="max-w-[50ch]" tone="soft">
              <strong className="text-ink font-medium">
                Each engagement is a case — not a deliverable list.
              </strong>{" "}
              Featured cases below are written long; the index after them is browseable. Both carry their own brand register, never ours.
            </Body>
          </Reveal>
        </div>
        <Reveal step={3} className="mt-9 pt-7 border-t border-ink-line">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {[
              { k: "Cases live", v: "26" },
              { k: "Featured", v: "04" },
              { k: "Industries", v: "11" },
              { k: "Updated", v: "Apr 2026" },
            ].map((s) => (
              <div key={s.k} className="flex flex-col gap-1.5">
                <span className="font-mono-util text-ink-mute">{s.k}</span>
                <span className="font-display font-medium text-[clamp(20px,1.6vw,26px)] tracking-[-0.018em] leading-[1.1]">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 2. FEATURED */}
      <Section pad="none" className="pt-[96px] pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-[72px]">
          <Reveal step={0}>
            <div className="mb-6">
              <NumberedLabel prefix="Section 02" label="Featured" />
            </div>
            <SectionDisplay className="!text-[clamp(36px,4.4vw,60px)] max-w-[18ch]">
              Four cases, <Dim>written long.</Dim>
            </SectionDisplay>
          </Reveal>
          <Reveal step={1}>
            <Body className="max-w-[50ch]" tone="soft">
              Read whichever pulls. Each entry is treated as editorial — the visual register, the pacing, and the depth of writing sit closer to a magazine spread than a portfolio tile. Cases that need more room get more room.
            </Body>
          </Reveal>
        </div>

        {/* CASE 01 — wide bleed */}
        <Reveal step={2} className="mb-[140px]">
          <article className="grid grid-cols-1 gap-9">
            <Link href={FEATURED[0].slug} aria-label={`Open ${FEATURED[0].title}`}>
              <HoverLift>
                <Placeholder
                  variant={FEATURED[0].placeholder.variant}
                  aspect="aspect-[21/9]"
                  rounded="rounded-[16px]"
                  label={FEATURED[0].placeholder.label}
                  centerLabel={FEATURED[0].placeholder.centerLabel}
                  dark={FEATURED[0].placeholder.dark}
                />
              </HoverLift>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-end">
              <div>
                <CaseTags tags={FEATURED[0].tags} />
                <h3 className="mt-4 font-display font-medium text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-[-0.024em] max-w-[22ch]">
                  {FEATURED[0].title} <Dim>{FEATURED[0].dim}</Dim>
                </h3>
              </div>
              <p className="font-display text-[clamp(15px,1.1vw,17px)] leading-[1.6] tracking-[-0.008em] text-ink-soft max-w-[48ch]">
                {FEATURED[0].lede}
              </p>
            </div>
            <CaseFoot ix={FEATURED[0].ix} href={FEATURED[0].slug} />
          </article>
        </Reveal>

        {/* CASE 02 — image left, copy right */}
        <Reveal step={2} className="mb-[140px]">
          <article className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-stretch">
            <Link href={FEATURED[1].slug} aria-label={`Open ${FEATURED[1].title}`}>
              <HoverLift>
                <Placeholder
                  variant={FEATURED[1].placeholder.variant}
                  aspect="aspect-[4/5]"
                  rounded="rounded-[16px]"
                  label={FEATURED[1].placeholder.label}
                  centerLabel={FEATURED[1].placeholder.centerLabel}
                />
              </HoverLift>
            </Link>
            <div className="flex flex-col justify-center py-6">
              <CaseTags tags={FEATURED[1].tags} />
              <h3 className="mt-4 font-display font-medium text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-[-0.024em] max-w-[16ch]">
                {FEATURED[1].title} <Dim>{FEATURED[1].dim}</Dim>
              </h3>
              <p className="mt-5 font-display text-[clamp(15px,1.1vw,17px)] leading-[1.6] tracking-[-0.008em] text-ink-soft max-w-[44ch]">
                {FEATURED[1].lede}
              </p>
              <CaseFoot ix={FEATURED[1].ix} href={FEATURED[1].slug} />
            </div>
          </article>
        </Reveal>

        {/* CASE 03 — split pair */}
        <Reveal step={2} className="mb-[140px]">
          <article>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-9">
              <div>
                <CaseTags tags={FEATURED[2].tags} />
                <h3 className="mt-4 font-display font-medium text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-[-0.024em] max-w-[18ch]">
                  {FEATURED[2].title} <Dim>{FEATURED[2].dim}</Dim>
                </h3>
              </div>
              <p className="font-display text-[clamp(15px,1.1vw,17px)] leading-[1.6] tracking-[-0.008em] text-ink-soft max-w-[48ch]">
                {FEATURED[2].lede}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr] gap-6">
              <Link href={FEATURED[2].slug} aria-label="Sonance — supporting visual">
                <HoverLift>
                  <Placeholder
                    variant="form"
                    aspect="aspect-[3/4]"
                    rounded="rounded-[14px]"
                    label="03a"
                    centerLabel="Portrait detail"
                  />
                </HoverLift>
              </Link>
              <Link href={FEATURED[2].slug} aria-label="Sonance — campaign anchor">
                <HoverLift>
                  <Placeholder
                    variant="ink"
                    aspect="aspect-[4/3]"
                    rounded="rounded-[14px]"
                    label="03b"
                    centerLabel="Master frame"
                    dark
                  />
                </HoverLift>
              </Link>
            </div>
            <CaseFoot ix={FEATURED[2].ix} href={FEATURED[2].slug} className="mt-7" />
          </article>
        </Reveal>
      </Section>

      {/* CASE 04 — full-bleed inverted ink */}
      <Section pad="none" surface="ink" className="py-[88px] mb-[140px]">
        <Reveal step={0}>
          <article
            id="case-04"
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center"
          >
            <div className="py-6">
              <span className="inline-flex items-center gap-3.5 font-mono-util text-[rgba(246,244,239,0.45)]">
                <span aria-hidden className="inline-block h-px w-7 bg-[rgba(246,244,239,0.2)]" />
                <span>Featured 04 · Multi-cycle</span>
              </span>
              <div className="mt-6 flex flex-wrap gap-x-3.5 gap-y-2 font-mono-util text-[rgba(246,244,239,0.5)]">
                {FEATURED[3].tags.map((t, i) => (
                  <span key={t} className="inline-flex items-center gap-3.5">
                    {i > 0 && (
                      <span aria-hidden className="text-[rgba(246,244,239,0.25)]">·</span>
                    )}
                    <span>{t}</span>
                  </span>
                ))}
              </div>
              <h3 className="mt-6 font-display font-medium text-[clamp(32px,3.4vw,48px)] leading-[1.05] tracking-[-0.024em] max-w-[18ch] text-paper">
                {FEATURED[3].title}{" "}
                <span className="text-[rgba(246,244,239,0.5)]">{FEATURED[3].dim}</span>
              </h3>
              <p className="mt-5 font-display text-[clamp(15px,1.1vw,17px)] leading-[1.6] tracking-[-0.008em] text-[rgba(246,244,239,0.7)] max-w-[44ch]">
                {FEATURED[3].lede}
              </p>
              <div className="mt-6 pt-5 border-t border-[rgba(246,244,239,0.15)] flex justify-between items-center">
                <span className="font-mono-util text-[rgba(246,244,239,0.5)]">
                  Case — {FEATURED[3].ix}
                </span>
                <Link
                  href={FEATURED[3].slug}
                  className="group inline-flex items-center gap-2.5 font-display font-medium text-[14px] tracking-[-0.005em] text-paper hover:opacity-80 transition-opacity"
                >
                  Read the case
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
            <Link href={FEATURED[3].slug} aria-label="Open Verge case study">
              <HoverLift>
                <Placeholder
                  variant="vis-d"
                  aspect="aspect-[5/6]"
                  rounded="rounded-[16px]"
                  label="Image 04 / 04"
                  centerLabel="Verge · archive frame"
                  dark
                />
              </HoverLift>
            </Link>
          </article>
        </Reveal>
      </Section>

      {/* 3. FILTER REGION */}
      <Section pad="none" className="pt-[56px] pb-8 border-t border-ink-line">
        <Reveal step={0} className="mb-7">
          <NumberedLabel prefix="Section 03" label="The full index" />
        </Reveal>

        <Reveal step={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] gap-8 lg:gap-14 items-start py-7 border-t border-b border-ink-line">
            <div className="font-display font-medium text-[clamp(20px,1.6vw,26px)] tracking-[-0.018em] leading-[1.2] max-w-[18ch]">
              Filter the index. <Dim>Pick across taxonomies; results compose.</Dim>
            </div>

            <FilterGroup
              heading="Industry"
              options={[...INDUSTRIES]}
              active={industry}
              onChange={(v) => setIndustry(v as (typeof INDUSTRIES)[number])}
            />
            <FilterGroup
              heading="Product"
              options={[...PILLARS]}
              active={pillar}
              onChange={(v) => setPillar(v as (typeof PILLARS)[number])}
            />
            <FilterGroup
              heading="Form System"
              options={[...FORM_SYSTEMS]}
              active={formSystem}
              onChange={(v) => setFormSystem(v as (typeof FORM_SYSTEMS)[number])}
            />
          </div>
        </Reveal>

        <Reveal step={2}>
          <div className="flex flex-wrap justify-between items-center gap-4 pt-5 font-mono-util text-ink-mute">
            <span>
              Showing {filtered.length} of {INDEX.length} cases ·{" "}
              {allActive
                ? "All industries · All products · All form systems"
                : [
                    industry === "All" ? "All industries" : industry,
                    pillar === "All" ? "All products" : pillar,
                    formSystem === "All" ? "All form systems" : formSystem,
                  ].join(" · ")}
            </span>
            <button
              type="button"
              onClick={clear}
              className="font-mono-util text-ink-mute underline underline-offset-4 decoration-ink-faint hover:text-ink transition-colors"
            >
              Clear filters
            </button>
          </div>
        </Reveal>
      </Section>

      {/* 4. INDEX GRID */}
      <Section pad="none" className="pt-12 pb-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((c, i) => (
            <Reveal key={c.num} step={(Math.min(i, 4)) as 0 | 1 | 2 | 3 | 4}>
              <Link
                href={c.slug}
                className="group flex flex-col gap-4 text-ink"
              >
                <HoverLift>
                  <Placeholder
                    variant={c.ph.variant}
                    aspect={aspectClass[c.aspect]}
                    rounded="rounded-[12px]"
                    label={c.num}
                    centerLabel={c.title}
                    dark={c.ph.dark}
                  />
                </HoverLift>
                <div className="grid grid-cols-[32px_1fr_auto] gap-3 items-baseline pt-1.5 border-t border-ink-line">
                  <span className="font-mono-util text-ink-mute">{c.num}</span>
                  <span className="font-display font-medium text-[17px] tracking-[-0.012em] leading-[1.2]">
                    {c.title}
                  </span>
                  <span className="font-mono-util text-ink-mute">{c.year}</span>
                </div>
                <p className="font-display text-[13px] leading-[1.45] tracking-[-0.005em] text-ink-soft max-w-[38ch] -mt-2">
                  {c.sub}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono-util text-ink-mute">
                  {c.tags.map((t, ti) => (
                    <span key={t} className="inline-flex items-center gap-3">
                      {ti > 0 && <span aria-hidden className="text-ink-faint">·</span>}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center font-display text-ink-soft">
            No cases match the current filters.
          </div>
        )}

        <div className="mt-16 pt-6 border-t border-ink-line flex flex-wrap justify-between items-center gap-4">
          <span className="font-mono-util text-ink-mute">
            {filtered.length} of {INDEX.length} shown · older cases archived
          </span>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <Section pad="none" className="py-[140px] border-t border-ink-line">
        <Reveal step={0} className="mb-8">
          <NumberedLabel prefix="Closing" label="Start" />
        </Reveal>
        <Reveal step={1}>
          <SectionDisplay className="!text-[clamp(40px,4.6vw,64px)] max-w-[22ch]">
            Compose a case of your own. <Dim>Begin where the work begins.</Dim>
          </SectionDisplay>
        </Reveal>
        <Reveal step={2}>
          <Body className="mt-7 max-w-[56ch]" tone="soft">
            Open a structured intake. A partner replies within two business days. Adaptive, the on-site assistant, can route a question first if you prefer.
          </Body>
        </Reveal>
        <Reveal step={3} className="mt-9">
          <CTAGroup pattern="engagement-first" />
        </Reveal>
      </Section>
    </>
  );
}

function CaseTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-3.5 gap-y-2 font-mono-util text-ink-mute">
      {tags.map((t, i) => (
        <span key={t} className="inline-flex items-center gap-3.5">
          {i > 0 && <span aria-hidden className="text-ink-faint">·</span>}
          <span>{t}</span>
        </span>
      ))}
    </div>
  );
}

function CaseFoot({
  ix,
  href,
  className,
}: {
  ix: string;
  href: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex justify-between items-center pt-5 border-t border-ink-line",
        className
      )}
    >
      <span className="font-mono-util text-ink-mute">Case — {ix}</span>
      <ArrowLink href={href} variant="plain">
        Read the case
      </ArrowLink>
    </div>
  );
}

function FilterGroup({
  heading,
  options,
  active,
  onChange,
}: {
  heading: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <h4 className="font-mono-util text-ink-mute mb-3.5">{heading}</h4>
      <ul className="flex flex-col gap-1.5">
        {options.map((opt) => {
          const isActive = active === opt;
          return (
            <li key={opt}>
              <button
                type="button"
                onClick={() => onChange(opt)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex items-baseline gap-2 font-display text-[14.5px] tracking-[-0.005em] text-left transition-colors",
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                )}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="inline-block w-1.5 h-1.5 rounded-full bg-ink -translate-y-0.5"
                  />
                )}
                <span>{opt}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
