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
import { CTAGroup } from "@/components/cta/CTAGroup";
import { cn } from "@/lib/cn";
import type {
  SystemPageData,
  SystemCard,
  CaseTile,
  RouteTile,
} from "@/lib/systemPages";

/* ---------- Eyebrow with leading dash, Phase 1 spec ---------- */
function SectionEyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  const tone = dark ? "text-[rgba(246,244,239,0.55)]" : "text-ink-mute";
  const dashTone = dark ? "bg-[rgba(246,244,239,0.25)]" : "bg-ink-faint";
  return (
    <span className={cn("inline-flex items-center gap-3.5 font-mono-util", tone)}>
      <span aria-hidden className={cn("inline-block h-px w-7", dashTone)} />
      <span>{children}</span>
    </span>
  );
}

/* ---------- HERO ---------- */
function HeroSection({ data }: { data: SystemPageData }) {
  return (
    <Section pad="none" className="pt-14 pb-[120px] border-b border-ink-line">
      <Reveal step={0} className="mb-16">
        <span className="inline-flex items-center gap-3.5 font-mono-util text-ink-mute">
          <span aria-hidden className="inline-block h-px w-7 bg-ink-faint" />
          <span>
            <Link href="/" className="text-ink-mute hover:text-ink transition-colors">
              Index
            </Link>
            {" / "}
            <Link href="/products" className="text-ink-mute hover:text-ink transition-colors">
              Products
            </Link>
            {" / "}
            <span>{data.name}</span>
          </span>
        </span>
      </Reveal>

      <Reveal step={1}>
        <Hero className="!text-[clamp(72px,11vw,188px)] !leading-[0.92] tracking-[-0.045em] mb-14">
          {data.name}.
        </Hero>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-end">
        <Reveal step={2}>
          <p className="font-display font-medium text-[clamp(24px,2.1vw,34px)] leading-[1.2] tracking-[-0.022em] text-ink max-w-[18ch]">
            {data.heroClaimLead} <Dim>{data.heroClaimDim}</Dim>
          </p>
        </Reveal>
        <Reveal step={2}>
          <Body className="max-w-[46ch]" tone="soft">
            {data.heroLede}
          </Body>
        </Reveal>
      </div>

      <Reveal step={3} className="mt-20">
        <div
          className="relative aspect-[21/9] overflow-hidden rounded-[22px] border border-ink-line bg-paper-2"
          role="img"
          aria-label={`${data.name} anchor visual`}
        >
          {/* Surface */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: [
                "repeating-linear-gradient(0deg,rgba(12,12,12,0.06) 0 1px,transparent 1px 64px)",
                "repeating-linear-gradient(90deg,rgba(12,12,12,0.06) 0 1px,transparent 1px 64px)",
                "radial-gradient(ellipse at 20% 80%,rgba(12,12,12,0.05),transparent 50%)",
                "linear-gradient(180deg,#EEEBE5 0%,#E6E2D8 100%)",
              ].join(","),
            }}
          />
          {/* Scan */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg,rgba(12,12,12,0.025) 0 2px,transparent 2px 8px)",
            }}
          />
          <span className="absolute top-[22px] left-6 font-mono-util text-ink-mute">
            {data.heroCornerTL}
          </span>
          <span className="absolute bottom-[22px] right-6 font-mono-util text-ink-mute">
            {data.heroCornerBR}
          </span>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-mono-util text-ink-faint border border-dashed border-ink-faint rounded-full px-4 py-2 bg-[rgba(246,244,239,0.55)]">
              {data.heroAnchorMark}
            </span>
          </div>
          <div className="absolute left-6 bottom-[22px] flex gap-[18px] font-mono-util text-ink-mute">
            {data.heroTicks.map((t, i) => (
              <span key={t} className="inline-flex items-center">
                {i === 0 && (
                  <span
                    aria-hidden
                    className="inline-block w-1.5 h-1.5 rounded-full bg-ink mr-2 -translate-y-px"
                  />
                )}
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 2. WHAT IT DOES ---------- */
function WhatSection({ data }: { data: SystemPageData }) {
  return (
    <Section pad="none" id="what" className="py-[120px] border-b border-ink-line">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-16">
        <div>
          <Reveal step={0} className="mb-7">
            <SectionEyebrow>Section 02 · What it does</SectionEyebrow>
          </Reveal>
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(36px,4.4vw,60px)] !leading-[1.05] tracking-[-0.028em] max-w-[18ch]">
              {data.whatDisplayLead} <Dim>{data.whatDisplayDim}</Dim>
            </SectionDisplay>
          </Reveal>
        </div>
        <Reveal step={2} className="space-y-4">
          <Body tone="soft" className="max-w-[50ch]">
            {data.whatBodyStrong && (
              <strong className="text-ink font-medium">{data.whatBodyStrong}</strong>
            )}
            {data.whatBodyStrong ? " " : ""}
            {data.whatBody[0]}
          </Body>
          {data.whatBody.slice(1).map((p, i) => (
            <Body key={i} tone="soft" className="max-w-[50ch]">
              {p}
            </Body>
          ))}
        </Reveal>
      </div>

      <Reveal step={3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border-y border-ink-line mt-12">
          {data.triplet.map((t) => (
            <div
              key={t.head}
              className="bg-paper px-8 pt-9 pb-10 flex flex-col gap-4"
            >
              <h4 className="font-mono-util text-ink-mute">{t.head}</h4>
              <p className="font-display font-medium text-[clamp(20px,1.55vw,26px)] leading-[1.25] tracking-[-0.018em] text-ink max-w-[22ch]">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 3. SYSTEMS LIST ---------- */
function SystemCardRegular({ s }: { s: SystemCard }) {
  const text = (
    <div>
      <div className="font-mono-util text-ink-mute">{s.num}</div>
      <h3 className="mt-3 font-display font-medium text-[clamp(34px,3.4vw,50px)] leading-[1.04] tracking-[-0.028em] text-ink">
        {s.name}
      </h3>
      <p className="mt-[18px] font-display text-[clamp(16px,1.1vw,18px)] leading-[1.6] tracking-[-0.008em] text-ink-soft max-w-[42ch]">
        {s.claim}
      </p>
      <p className="mt-[18px] font-sans text-[14px] leading-[1.6] tracking-[-0.005em] text-ink-soft max-w-[56ch]">
        <span className="font-mono-util text-ink-mute mr-2.5 align-baseline">
          Includes
        </span>
        {s.includes}
      </p>
      <div className="mt-6 flex flex-wrap gap-y-1.5 font-mono-util text-ink-mute">
        {s.tags.map((tag, i) => (
          <span key={tag} className="inline-flex items-center">
            {i > 0 && <span className="mx-3.5 text-ink-faint">·</span>}
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const vis = (
    <HoverLift>
      <Placeholder
        variant={s.visVariant}
        label={s.visLabel}
        centerLabel={s.visCenter}
        aspect="aspect-[4/3]"
        rounded="rounded-[16px]"
        caption={
          <div className="font-mono-util text-ink-mute ml-auto">{s.visMeta}</div>
        }
      />
    </HoverLift>
  );

  const isLeft = s.imageSide === "left";

  return (
    <article
      className={cn(
        "syscard border-t border-ink-line py-14 grid gap-14 items-start",
        "grid-cols-1",
        isLeft
          ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)]"
          : "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)]",
        s.deferred && "opacity-95"
      )}
    >
      {isLeft ? (
        <>
          <Reveal step={0}>{vis}</Reveal>
          <Reveal step={1}>{text}</Reveal>
        </>
      ) : (
        <>
          <Reveal step={0}>{text}</Reveal>
          <Reveal step={1}>{vis}</Reveal>
        </>
      )}
    </article>
  );
}

function SystemCardDistinctive({ s }: { s: SystemCard }) {
  const dark = !s.deferred; // Sense S—05 + Reach R—03 are inverted; Form F—04 deferred uses paper-2
  return (
    <article
      className={cn(
        "syscard mt-4 rounded-[22px] p-12 md:p-14",
        dark ? "bg-ink text-paper" : "bg-paper-2 text-ink border border-ink-line"
      )}
    >
      <Reveal step={0}>
        <span
          className={cn(
            "inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full font-mono-util mb-7",
            dark
              ? "border border-[rgba(246,244,239,0.3)] text-[rgba(246,244,239,0.7)]"
              : "border border-ink-line text-ink-mute bg-paper"
          )}
        >
          <span
            aria-hidden
            className={cn(
              "inline-block w-1.5 h-1.5 rounded-full",
              dark ? "bg-paper" : "bg-ink"
            )}
            style={{
              animation: "amoeboid-pulse 2.4s ease-out infinite",
            }}
          />
          {s.distinctivePill}
        </span>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-end">
        <Reveal step={1}>
          <div
            className={cn(
              "font-mono-util",
              dark ? "text-[rgba(246,244,239,0.55)]" : "text-ink-mute"
            )}
          >
            {s.num}
          </div>
          <h3
            className={cn(
              "mt-3.5 font-display font-medium leading-[1.04] tracking-[-0.028em]",
              "text-[clamp(40px,4.4vw,64px)]",
              dark ? "text-paper" : "text-ink"
            )}
          >
            {s.name}
          </h3>
          <p
            className={cn(
              "mt-[18px] font-display text-[clamp(16px,1.1vw,18px)] leading-[1.6] tracking-[-0.008em] max-w-[56ch]",
              dark ? "text-[rgba(246,244,239,0.7)]" : "text-ink-soft"
            )}
          >
            {s.claim}
          </p>
          <p
            className={cn(
              "mt-[18px] font-sans text-[14px] leading-[1.6] tracking-[-0.005em] max-w-[60ch]",
              dark ? "text-[rgba(246,244,239,0.7)]" : "text-ink-soft"
            )}
          >
            <span
              className={cn(
                "font-mono-util mr-2.5 align-baseline",
                dark ? "text-[rgba(246,244,239,0.5)]" : "text-ink-mute"
              )}
            >
              Includes
            </span>
            {s.includes}
          </p>
          <div
            className={cn(
              "mt-6 flex flex-wrap gap-y-1.5 font-mono-util",
              dark ? "text-[rgba(246,244,239,0.5)]" : "text-ink-mute"
            )}
          >
            {s.tags.map((tag, i) => (
              <span key={tag} className="inline-flex items-center">
                {i > 0 && (
                  <span
                    className={cn(
                      "mx-3.5",
                      dark
                        ? "text-[rgba(246,244,239,0.25)]"
                        : "text-ink-faint"
                    )}
                  >
                    ·
                  </span>
                )}
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal step={2}>
          <HoverLift>
            <Placeholder
              variant={dark ? "vis-d" : s.visVariant}
              label={s.visLabel}
              centerLabel={s.visCenter}
              aspect="aspect-[4/3]"
              rounded="rounded-[16px]"
              dark={dark}
              caption={
                <div
                  className={cn(
                    "font-mono-util ml-auto",
                    dark ? "text-[rgba(246,244,239,0.55)]" : "text-ink-mute"
                  )}
                >
                  {s.visMeta}
                </div>
              }
            />
          </HoverLift>
        </Reveal>
      </div>
    </article>
  );
}

function SystemsSection({ data }: { data: SystemPageData }) {
  return (
    <Section pad="none" id="systems" className="py-[120px] border-b border-ink-line">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-16">
        <div>
          <Reveal step={0} className="mb-7">
            <SectionEyebrow>
              Section 03 · {data.systemsCountLabel}
            </SectionEyebrow>
          </Reveal>
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(36px,4.4vw,60px)] !leading-[1.05] tracking-[-0.028em] max-w-[18ch]">
              {data.systemsDisplayLead} <Dim>{data.systemsDisplayDim}</Dim>
            </SectionDisplay>
          </Reveal>
        </div>
        <Reveal step={2}>
          <Body tone="soft" className="max-w-[50ch]">
            {data.systemsIntro}
          </Body>
        </Reveal>
      </div>

      <div>
        {data.systems.map((s) =>
          s.distinctive ? (
            <SystemCardDistinctive key={s.num} s={s} />
          ) : (
            <SystemCardRegular key={s.num} s={s} />
          )
        )}
      </div>

      <Reveal step={3} className="mt-12">
        <div className="bg-paper-2 rounded-[14px] px-8 py-7 flex flex-wrap items-center justify-between gap-6">
          <p className="font-display text-[15px] tracking-[-0.005em] text-ink-soft max-w-[60ch]">
            <strong className="text-ink font-medium">
              {data.modularRestateStrong}
            </strong>{" "}
            {data.modularRestate}
          </p>
          <span className="font-mono-util text-ink-mute px-3.5 py-2 border border-ink-line rounded-full bg-paper whitespace-nowrap">
            {data.modularRestatePill}
          </span>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 4. INPUTS & OUTPUTS ---------- */
function InputsSection({ data }: { data: SystemPageData }) {
  const letters = ["A", "B", "C", "D", "E"];
  return (
    <Section pad="none" id="inputs" className="py-[120px] border-b border-ink-line">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-16">
        <div>
          <Reveal step={0} className="mb-7">
            <SectionEyebrow>Section 04 · Inputs &amp; outputs</SectionEyebrow>
          </Reveal>
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(36px,4.4vw,60px)] !leading-[1.05] tracking-[-0.028em] max-w-[18ch]">
              What you bring. <Dim>What we produce.</Dim>
            </SectionDisplay>
          </Reveal>
        </div>
        <Reveal step={2} className="space-y-4">
          {data.ioBody.map((p, i) => (
            <Body key={i} tone="soft" className="max-w-[50ch]">
              {p}
            </Body>
          ))}
        </Reveal>
      </div>

      <Reveal step={3}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-12 items-stretch">
          <div className="flex flex-col gap-3.5">
            <h5 className="font-mono-util text-ink-mute mb-1.5">You bring</h5>
            <ul className="flex flex-col">
              {data.ioYouBring.map((item, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3.5 font-display text-[clamp(17px,1.2vw,19px)] leading-[1.4] tracking-[-0.012em] text-ink py-3.5 border-b border-ink-line last:border-b-0"
                >
                  <span className="font-mono-util text-ink-mute min-w-6 text-[10px] tracking-[0.04em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative self-stretch flex lg:flex-col items-center justify-center">
            <span className="font-mono-util text-ink-mute bg-paper border border-ink-line rounded-full px-3 py-1.5 whitespace-nowrap">
              {data.ioArrowGlyph}
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            <h5 className="font-mono-util text-ink-mute mb-1.5">We produce</h5>
            <ul className="flex flex-col">
              {data.ioWeProduce.map((item, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3.5 font-display text-[clamp(17px,1.2vw,19px)] leading-[1.4] tracking-[-0.012em] text-ink py-3.5 border-b border-ink-line last:border-b-0"
                >
                  <span className="font-mono-util text-ink-mute min-w-6 text-[10px] tracking-[0.04em]">
                    {letters[i]}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 5. CASES ---------- */
function CaseTileEl({ c }: { c: CaseTile }) {
  return (
    <HoverLift>
      <a className="case flex flex-col gap-[18px] no-underline text-inherit" href="#case">
        <Placeholder
          variant={c.visVariant}
          badge={c.badge}
          centerLabel={c.visCenterLabel}
          aspect="aspect-[4/5]"
          rounded="rounded-[16px]"
          dark={c.visVariant === "vis-b" || c.visVariant === "vis-d"}
        />
        <div className="flex items-center justify-between font-mono-util text-ink-mute">
          <span>{c.caseNum}</span>
          <span>{c.category}</span>
        </div>
        <h3 className="font-display font-medium text-[clamp(22px,1.55vw,26px)] leading-[1.18] tracking-[-0.02em] text-ink">
          {c.title}
        </h3>
        <p className="font-display text-[14px] leading-[1.55] tracking-[-0.005em] text-ink-soft max-w-[38ch]">
          {c.body}
        </p>
      </a>
    </HoverLift>
  );
}

function CasesSection({ data }: { data: SystemPageData }) {
  return (
    <Section pad="none" id="cases" className="py-[120px] border-b border-ink-line">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-end mb-16">
        <div>
          <Reveal step={0} className="mb-7">
            <SectionEyebrow>Section 05 · Cases</SectionEyebrow>
          </Reveal>
          <Reveal step={1}>
            <SectionDisplay className="!text-[clamp(36px,4.4vw,60px)] !leading-[1.05] tracking-[-0.028em]">
              {data.casesDisplay}
            </SectionDisplay>
          </Reveal>
        </div>
        <Reveal step={2}>
          <Body tone="soft" className="max-w-[50ch]">
            {data.casesIntro}
          </Body>
        </Reveal>
      </div>

      <Reveal step={3}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cases.map((c, i) => (
            <CaseTileEl key={i} c={c} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- 6. CROSS ---------- */
function RouteTileEl({ r }: { r: RouteTile }) {
  return (
    <Link
      href={r.href}
      className="group bg-paper px-7 pt-8 pb-9 flex flex-col gap-3.5 no-underline text-inherit transition-colors duration-300 hover:bg-ink hover:text-paper"
    >
      <span className="font-mono-util text-ink-mute group-hover:text-paper transition-colors">
        {r.label}
      </span>
      <span className="font-display font-medium text-[clamp(22px,1.7vw,28px)] leading-[1.1] tracking-[-0.02em]">
        {r.name}
      </span>
      <span className="mt-auto pt-8 flex justify-between items-center">
        <span>{r.foot}</span>
        <span
          aria-hidden
          className="font-mono-util text-ink-mute group-hover:text-paper transition-all group-hover:translate-x-1"
        >
          {r.arrow}
        </span>
      </span>
    </Link>
  );
}

function CrossSection({ data }: { data: SystemPageData }) {
  return (
    <Section pad="none" id="cross" className="pt-[140px] pb-[120px]">
      <Reveal step={0} className="mb-9">
        <SectionEyebrow>Section 06 · Continue</SectionEyebrow>
      </Reveal>
      <Reveal step={1}>
        <h2 className="font-display font-medium text-[clamp(40px,5.4vw,78px)] leading-[1.02] tracking-[-0.034em] max-w-[16ch] mb-16">
          {data.crossDisplayLead} <Dim>{data.crossDisplayDim}</Dim>
        </h2>
      </Reveal>

      <Reveal step={2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border-y border-ink-line">
          {data.routes.map((r) => (
            <RouteTileEl key={r.name} r={r} />
          ))}
        </div>
      </Reveal>

      <Reveal step={3} className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <Body tone="soft" className="max-w-[50ch] !text-[clamp(17px,1.25vw,20px)] !leading-[1.5]">
            {data.crossCtaCopy}
          </Body>
          <CTAGroup pattern="engagement-first" />
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- root ---------- */
export function SystemPage({ data }: { data: SystemPageData }) {
  return (
    <>
      {/* Local keyframes for the distinctive-system pulse */}
      <style>{`
        @keyframes amoeboid-pulse {
          0% { box-shadow: 0 0 0 0 rgba(246,244,239,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(246,244,239,0); }
          100% { box-shadow: 0 0 0 0 rgba(246,244,239,0); }
        }
      `}</style>
      <HeroSection data={data} />
      <WhatSection data={data} />
      <SystemsSection data={data} />
      <InputsSection data={data} />
      <CasesSection data={data} />
      <CrossSection data={data} />
    </>
  );
}
