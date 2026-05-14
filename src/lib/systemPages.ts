/**
 * Data shape for the Sense / Form / Reach product pages.
 *
 * The three pages share an identical 6-section template — only this content data
 * differs. Source: Phase 1 reference HTML (Sense.html, Form.html, Reach.html).
 *
 * Content fidelity: every claim, "Includes" copy, tag, case description, and
 * route copy is reproduced verbatim from the reference HTML.
 */

import type { ReactNode } from "react";

export type PlaceholderVariant =
  | "paper"
  | "ink"
  | "sense"
  | "form"
  | "reach"
  | "vis-a"
  | "vis-b"
  | "vis-c"
  | "vis-d";

export interface SystemCard {
  num: string; // "S—01"
  name: string;
  claim: string;
  includes: string;
  tags: string[];
  /** placeholder variant for this system's vis */
  visVariant: PlaceholderVariant;
  visLabel: string; // top-left mono label, e.g. "S—01 / Reading"
  visCenter: string; // dashed pill copy, e.g. "Substrate sample"
  visMeta: string; // bottom-right caption, e.g. "Calibration grid"
  /** image side: "left" mirrors the layout (vis-left, text-right). */
  imageSide?: "left" | "right";
  /** Last system on each page is emphasized as the distinctive system. */
  distinctive?: boolean;
  /** Pulse-pill text on the distinctive card, e.g. "S—05 · Distinctive System". */
  distinctivePill?: string;
  /** Form's F—04 Sonic uses a "deferred / partner-led" register. */
  deferred?: boolean;
  deferredPill?: string;
}

export interface CaseTile {
  badge: string; // "S—01 · S—05"
  visVariant: PlaceholderVariant;
  visCenterLabel: string; // dashed pill, e.g. "Studio register"
  caseNum: string; // "Case 01"
  category: string; // "Industrial / DTC"
  title: string;
  body: string;
}

export interface RouteTile {
  label: string; // "Product 02"
  name: string; // "Form"
  foot: string; // "Execution layer"
  arrow: "→" | "←";
  href: string;
}

export interface SystemPageData {
  /** URL-safe id, e.g. "sense" */
  slug: "sense" | "form" | "reach" | "adapt";
  /** Display name, e.g. "Sense" — also drives crumb + cross blocks. */
  name: string;
  /** Page metadata title (without site suffix). */
  metaTitle: string;
  metaDescription: string;

  /** ---- 1. HERO ---- */
  heroClaimLead: string; // "The reading layer."
  heroClaimDim: string; // dim portion that follows
  heroLede: string;
  heroCornerTL: string; // "Sense / Anchor · v1.0"
  heroCornerBR: string; // "Calibration register"
  heroAnchorMark: string; // "Research-coded imagery"
  heroTicks: string[]; // ["Signal","Foresight","Calibration"]

  /** ---- 2. WHAT IT DOES ---- */
  whatDisplayLead: string; // "A reading layer,"
  whatDisplayDim: string; // "not a research deck."
  whatBody: string[]; // 3 paragraphs (first contains <strong> body lead)
  whatBodyStrong?: string; // optional bold lead phrase, prepended to whatBody[0] if present
  triplet: { head: string; body: string }[]; // length 3

  /** ---- 3. SYSTEMS ---- */
  systemsCountLabel: string; // "Five Systems" / "Four Systems" / "Three Systems"
  systemsDisplayLead: string; // "Five Systems."
  systemsDisplayDim: string;
  systemsIntro: string;
  systems: SystemCard[];
  modularRestate: string; // strip body
  modularRestateStrong: string; // strong lead
  modularRestatePill: string; // pill text e.g. "5 of 5 selectable independently"

  /** ---- 4. INPUTS & OUTPUTS ---- */
  ioBody: string[]; // 2 paragraphs
  ioYouBring: string[]; // 5 strings — letter index will use 01..05
  ioWeProduce: string[]; // 5 strings — letter index A..E
  ioArrowGlyph: string; // "Sense →"

  /** ---- 5. CASES ---- */
  casesDisplay: string; // "Sense in the field."
  casesIntro: string; // single intro paragraph
  cases: CaseTile[]; // length 3

  /** ---- 6. CROSS ---- */
  crossDisplayLead: string;
  crossDisplayDim: string;
  routes: RouteTile[]; // length 4
  crossCtaCopy: string;
}

/* =========================================================================
   SENSE
   ========================================================================= */
export const SENSE_PAGE: SystemPageData = {
  slug: "sense",
  name: "Sense",
  metaTitle: "Sense — Brand intelligence and format foresight",
  metaDescription:
    "Sense reads brand, audience, culture, competitive field, and emerging formats — then calibrates that reading into the substrate every subsequent piece of work compounds against.",

  heroClaimLead: "The reading layer.",
  heroClaimDim:
    "Brand intelligence and format foresight, structured as substrate.",
  heroLede:
    "Sense reads brand, audience, culture, competitive field, and emerging formats — then calibrates that reading into the substrate every subsequent piece of work compounds against. Agentic where it scales; researcher-shaped where it shouldn’t.",
  heroCornerTL: "Sense / Anchor · v1.0",
  heroCornerBR: "Calibration register",
  heroAnchorMark: "Research-coded imagery",
  heroTicks: ["Signal", "Foresight", "Calibration"],

  whatDisplayLead: "A reading layer,",
  whatDisplayDim: "not a research deck.",
  whatBodyStrong: "Sense produces calibration substrate",
  whatBody: [
    "— a structured reading of brand, audience, culture, field, and format that downstream Systems compose against. It is not a slide-ware deliverable. It is a working layer the rest of the production stack queries.",
    "Five Systems run in parallel, each with a defined input shape and output contract. They can run on a single brief or compound across an engagement. Brand Intelligence is foundational; the other four sharpen specific edges of the reading.",
    "For brand owners and operators who treat creative as a system, not a campaign — and who want their substrate to compound across cycles instead of resetting at each one.",
  ],
  triplet: [
    {
      head: "Answers",
      body: "Where does this brand have permission to act, and where doesn’t it?",
    },
    {
      head: "Produces",
      body: "Structured calibration substrate, queryable by every downstream System.",
    },
    {
      head: "For",
      body: "Operators who treat brand as compounding infrastructure, not campaign output.",
    },
  ],

  systemsCountLabel: "Five Systems",
  systemsDisplayLead: "Five Systems.",
  systemsDisplayDim: "Each engaged independently.",
  systemsIntro:
    "Systems S—01 through S—05 form Sense as a Product, but each is a complete unit of work with its own deliverable. Buyers commission individually, in combination, or as a full Sense engagement. Format Intelligence (S—05) is the most distinctive of the five — a foresight discipline most production stacks don’t carry.",
  systems: [
    {
      num: "S—01",
      name: "Brand Intelligence",
      claim:
        "Proprietary brand calibration system. Captures voice, visual register, behavioral patterns, cultural context. Powers all future creative engagement. Compounds over time.",
      includes:
        "Brand calibration system, voice and tone framework, visual register, behavioral patterns mapping, cultural context document, ongoing calibration refinement.",
      tags: ["Voice", "Codes", "Substrate"],
      visVariant: "sense",
      visLabel: "S—01 / Reading",
      visCenter: "Substrate sample",
      visMeta: "Calibration grid",
      imageSide: "right",
    },
    {
      num: "S—02",
      name: "Audience Intelligence",
      claim:
        "Audience profiles, persona research, behavioral insight, segment analysis. Grounds creative work in who it’s for.",
      includes:
        "Audience profiles, persona research, behavioral insight reports, segment analysis, cohort definition.",
      tags: ["Segments", "Motivation", "Context"],
      visVariant: "vis-c",
      visLabel: "S—02 / Mapping",
      visCenter: "Segment field",
      visMeta: "Motivation × context",
      imageSide: "left",
    },
    {
      num: "S—03",
      name: "Cultural Intelligence",
      claim:
        "Cultural context analysis, trend foresight, semiotic analysis, cultural moment identification. Brand work that lands in the moment it ships.",
      includes:
        "Cultural context analysis, trend foresight reports, semiotic analysis, cultural moment identification, competitive cultural mapping.",
      tags: ["Narratives", "Signals", "Weather"],
      visVariant: "vis-c",
      visLabel: "S—03 / Signal",
      visCenter: "Cultural waveform",
      visMeta: "Continuous read",
      imageSide: "right",
    },
    {
      num: "S—04",
      name: "Competitive Intelligence",
      claim:
        "Competitor positioning maps, benchmark analysis, white space identification, category landscape. Find the room your brand can own.",
      includes:
        "Competitor positioning maps, benchmark analysis, white space identification, category landscape report.",
      tags: ["Positioning", "Whitespace", "Adjacency"],
      visVariant: "vis-a",
      visLabel: "S—04 / Field",
      visCenter: "Position map",
      visMeta: "Whitespace · adjacency",
      imageSide: "left",
    },
    {
      num: "S—05",
      name: "Format Intelligence",
      claim:
        "Format foresight reports, emerging format briefings, format-specific recommendations. Research-backed direction on what to produce, not just how.",
      includes:
        "Format foresight reports, emerging format briefings, format-specific recommendations, research-backed direction documents.",
      tags: ["Foresight", "Asset types", "Pre-consensus", "Format primitives"],
      visVariant: "vis-d",
      visLabel: "S—05 / Foresight",
      visCenter: "Format rings",
      visMeta: "Pre-consensus signal",
      distinctive: true,
      distinctivePill: "S—05 · Distinctive System",
    },
  ],
  modularRestateStrong: "Modular entry.",
  modularRestate:
    "Engage S—01 alone as a foundational reading. Compose S—02 through S—05 around an existing brand substrate. Or commission Sense end-to-end as the calibration layer for everything downstream.",
  modularRestatePill: "5 of 5 selectable independently",

  ioBody: [
    "Sense engagements run on whatever substrate already exists — brand books, prior research, performance data, founder voice memos. Where input is thin, agentic discovery fills the field. Where it’s rich, the System compounds against it rather than restating it.",
    "Outputs are working artifacts: structured substrate every downstream Product can query, plus a human-shaped reading document for stakeholder decisions. No slideware unless slideware is itself the deliverable.",
  ],
  ioYouBring: [
    "Brand documents, however raw",
    "Prior research, qual or quant",
    "Performance & channel data",
    "Founder & operator voice",
    "Constraints, restraints, taboos",
  ],
  ioWeProduce: [
    "Calibration substrate (structured)",
    "Reading document (human-shaped)",
    "Audience & cultural field maps",
    "Competitive position read",
    "Format foresight memo",
  ],
  ioArrowGlyph: "Sense →",

  casesDisplay: "Sense in the field.",
  casesIntro:
    "Each case carries its own brand register — not Amoeboid’s. Sense substrates feed into Form and Reach engagements; outcomes are measured against business motion, not deliverable count.",
  cases: [
    {
      badge: "S—01 · S—05",
      visVariant: "vis-b",
      visCenterLabel: "Studio register",
      caseNum: "Case 01",
      category: "Industrial / DTC",
      title: "Re-coding a 40-year voice without breaking it.",
      body: "Foundational substrate plus format foresight ahead of a category re-launch.",
    },
    {
      badge: "S—02 · S—03",
      visVariant: "vis-a",
      visCenterLabel: "Editorial register",
      caseNum: "Case 02",
      category: "Cultural institution",
      title: "Audience field mapped against cultural weather.",
      body: "Continuous reading replaced an annual brand-tracker contract.",
    },
    {
      badge: "S—04 · S—05",
      visVariant: "vis-c",
      visCenterLabel: "Operator register",
      caseNum: "Case 03",
      category: "Software / B2B",
      title: "Whitespace read into a 24-month format roadmap.",
      body: "Competitive field plus format foresight, structured for product & marketing in tandem.",
    },
  ],

  crossDisplayLead: "Modular entry plays both ways.",
  crossDisplayDim: "Continue, compose, or step back to the system.",
  routes: [
    {
      label: "Product 02",
      name: "Form",
      foot: "Execution layer",
      arrow: "→",
      href: "/form",
    },
    {
      label: "Product 03",
      name: "Reach",
      foot: "Variant & channel",
      arrow: "→",
      href: "/reach",
    },
    {
      label: "Product 04",
      name: "Adapt",
      foot: "Loop-closer layer",
      arrow: "→",
      href: "/adapt",
    },
    {
      label: "Up one",
      name: "Products index",
      foot: "All four Products",
      arrow: "←",
      href: "/products",
    },
  ],
  crossCtaCopy:
    "Engagements start at a single System, a single Product, or as composed orchestration. Brand calibration compounds either way.",
};

/* =========================================================================
   FORM
   ========================================================================= */
export const FORM_PAGE: SystemPageData = {
  slug: "form",
  name: "Form",
  metaTitle: "Form — Creative execution across the four media shapes",
  metaDescription:
    "Form is where calibration becomes craft. Still, motion, spatial, and sonic — each a discipline, each a System. Considered craft over volume; human-curated where the work warrants it.",

  heroClaimLead: "The execution layer.",
  heroClaimDim:
    "Creative craft across the four media shapes, human-curated end to end.",
  heroLede:
    "Form is where calibration becomes craft. Still, motion, spatial, and sonic — each a discipline, each a System. The brand calibration substrate from Sense is carried through every frame, every cut, every surface. Considered craft over volume; human-curated where the work warrants it.",
  heroCornerTL: "Form / Anchor · v1.0",
  heroCornerBR: "Craft register",
  heroAnchorMark: "Product-craft imagery",
  heroTicks: ["Still", "Motion", "Spatial", "Sonic"],

  whatDisplayLead: "An execution layer,",
  whatDisplayDim: "organised by the shape of the work.",
  whatBodyStrong: "Form produces finished work across four media shapes",
  whatBody: [
    "— still, motion, spatial, and sonic. The framework is media-shape, not output-shape: each System is a domain of craft, not a deliverable type. A campaign moves through the relevant Systems; a brand identity sits inside Still; a launch film commissions Motion plus Sonic.",
    "What separates Form from generic creative production is the moat — the brand calibration carried through from Sense, enforced at every craft decision rather than reinterpreted by each vendor. Considered craft over volume. Human-curated end to end, with agentic support where it sharpens craft rather than replacing it.",
    "For brand owners and operators commissioning work that has to hold up at the level the brand actually warrants — not the level a production timeline allows.",
  ],
  triplet: [
    {
      head: "Answers",
      body: "What does this idea look, move, sit, and sound like at brand-level fidelity?",
    },
    {
      head: "Produces",
      body: "Finished work across still, motion, spatial, and sonic — calibrated, not generic.",
    },
    {
      head: "For",
      body: "Operators who refuse to let production volume erode brand craft.",
    },
  ],

  systemsCountLabel: "Four Systems",
  systemsDisplayLead: "Four media shapes.",
  systemsDisplayDim: "Each a domain of craft.",
  systemsIntro:
    "Systems F—01 through F—04 form a media-shape framework, not an output catalogue. Still, motion, and spatial are live disciplines today. Sonic (F—04) is staged: the framework is built, the slot is reserved, and the discipline expands in 2027. Each System is engaged independently, in combination, or composed end-to-end.",
  systems: [
    {
      num: "F—01",
      name: "Still",
      claim:
        "Premium photography, illustration, and design assets. Identity systems, editorial imagery, packaging, key art — the surfaces a brand is judged on at first contact and held to thereafter.",
      includes:
        "Campaign photography, brand imagery libraries, product visualization, editorial content, identity systems, key art, packaging surfaces.",
      tags: ["Photography", "Illustration", "Identity", "Editorial"],
      visVariant: "form",
      visLabel: "F—01 / Still",
      visCenter: "Premium still imagery",
      visMeta: "Editorial · key art",
      imageSide: "right",
    },
    {
      num: "F—02",
      name: "Motion",
      claim:
        "Film, animation, and kinetic content. Brand films, narrative work, kinetic identity, motion systems for product surfaces. Edit, score, and timing treated as craft decisions, not handoffs.",
      includes:
        "Brand films, social motion content, kinetic identity, animated brand moments, product motion, title sequences, looping content.",
      tags: ["Film", "Animation", "Kinetic identity", "Narrative"],
      visVariant: "vis-b",
      visLabel: "F—02 / Motion",
      visCenter: "Motion detail",
      visMeta: "Film · animation · kinetic",
      imageSide: "left",
    },
    {
      num: "F—03",
      name: "Spatial",
      claim:
        "3D product visualization, environmental renders, AR/VR experiences, immersive brand moments, virtual showrooms.",
      includes:
        "3D product visualization, environmental renders, AR/VR experiences, immersive brand moments, virtual showrooms, e-viewers, configurators.",
      tags: ["3D", "Environmental", "Immersive", "Dimensional"],
      visVariant: "vis-a",
      visLabel: "F—03 / Spatial",
      visCenter: "Spatial / 3D render",
      visMeta: "Dimensional · environmental",
      imageSide: "right",
    },
    {
      num: "F—04",
      name: "Sonic",
      claim:
        "Audio identity, music, and voice. The fourth media shape, staged for full discipline expansion in 2027. Reserved as a structural slot in the framework today; commissioned through partner studios for live engagements until brought in-house.",
      includes: "Brand sonic identity, audio content, voice systems.",
      tags: ["Audio identity", "Music", "Voice", "Score"],
      visVariant: "vis-d",
      visLabel: "F—04 / Sonic",
      visCenter: "Reserved slot",
      visMeta: "Expanding 2027",
      distinctive: true,
      distinctivePill: "F—04 · Expanding 2027",
      deferred: true,
    },
  ],
  modularRestateStrong: "Modular entry.",
  modularRestate:
    "Commission a single System — a Still campaign, a Motion film, a Spatial activation. Compose two or three across a launch. Or run all four as the execution layer of a multi-cycle engagement.",
  modularRestatePill: "3 live · 1 partner-led",

  ioBody: [
    "Form engagements ideally run on a Sense calibration substrate — but they don’t require one. A live brand book, a clear creative brief, and a willingness to hold the work to brand-level fidelity is enough to commission. Where Sense exists, every craft decision compounds against it; where it doesn’t, Form establishes a working calibration before craft begins.",
    "Outputs are finished, master-grade work across the relevant media shapes — production files, delivery formats, and a calibration record so the next cycle compounds rather than resets.",
  ],
  ioYouBring: [
    "Sense substrate, or a working brand",
    "Creative brief or commissioning thesis",
    "Reference set, however rough",
    "Channel & deliverable requirements",
    "Production constraints & horizon",
  ],
  ioWeProduce: [
    "Master-grade still assets & identity",
    "Motion & film, edit through grade",
    "Spatial / 3D / immersive work",
    "Sonic, partner-led until 2027",
    "Calibration record for next cycle",
  ],
  ioArrowGlyph: "Form →",

  casesDisplay: "Form in the field.",
  casesIntro:
    "Each case carries its own brand register — not Amoeboid’s. Form work is measured against the bar of the brand it serves: cultural weight, craft fidelity, longevity in market.",
  cases: [
    {
      badge: "F—01 · F—02",
      visVariant: "vis-b",
      visCenterLabel: "Studio register",
      caseNum: "Case 01",
      category: "Performance / hardware",
      title: "Identity, key art, and launch film at one fidelity.",
      body: "Still and Motion run as a single craft engagement, not handed-off vendors.",
    },
    {
      badge: "F—01 · F—03",
      visVariant: "vis-a",
      visCenterLabel: "Editorial register",
      caseNum: "Case 02",
      category: "Hospitality",
      title: "An identity carried from page to environment.",
      body: "Editorial photography paired with spatial design across a 14-property rollout.",
    },
    {
      badge: "F—02 · F—03",
      visVariant: "vis-c",
      visCenterLabel: "Operator register",
      caseNum: "Case 03",
      category: "Consumer tech",
      title: "A product film and 3D system from one calibration.",
      body: "Motion and Spatial composed against a shared brand substrate and rendered to spec.",
    },
  ],

  crossDisplayLead: "Modular entry plays both ways.",
  crossDisplayDim: "Continue, compose, or step back to the system.",
  routes: [
    {
      label: "Product 01",
      name: "Sense",
      foot: "Reading layer",
      arrow: "←",
      href: "/sense",
    },
    {
      label: "Product 03",
      name: "Reach",
      foot: "Variant & channel",
      arrow: "→",
      href: "/reach",
    },
    {
      label: "Product 04",
      name: "Adapt",
      foot: "Loop-closer layer",
      arrow: "→",
      href: "/adapt",
    },
    {
      label: "Up one",
      name: "Products index",
      foot: "All four Products",
      arrow: "←",
      href: "/products",
    },
  ],
  crossCtaCopy:
    "Engagements start at a single System, a single Product, or as composed orchestration. Brand calibration compounds either way.",
};

/* =========================================================================
   REACH
   ========================================================================= */
export const REACH_PAGE: SystemPageData = {
  slug: "reach",
  name: "Reach",
  metaTitle: "Reach — Variant production, channel activation, and measured performance",
  metaDescription:
    "Reach takes a piece of work and moves it into the world — at the variants and the volumes channels actually demand. Distribution treated as a production discipline.",

  heroClaimLead: "The activation layer.",
  heroClaimDim:
    "Variant production, channel activation, and measured performance.",
  heroLede:
    "Reach takes a piece of work and moves it into the world — at the variants and the volumes channels actually demand. Agentic where it scales, brand-calibrated at every variant, and measured against business motion rather than vanity. Distribution treated as a production discipline, not an afterthought.",
  heroCornerTL: "Reach / Anchor · v1.0",
  heroCornerBR: "Broadcast register",
  heroAnchorMark: "Variant · channel · performance",
  heroTicks: ["Variants", "Channels", "Performance"],

  whatDisplayLead: "An activation layer,",
  whatDisplayDim: "not a media plan.",
  whatBodyStrong:
    "Reach takes a master piece of work and moves it through variants, channels, and performance",
  whatBody: [
    "— without losing brand calibration along the way. Most stacks treat distribution as a hand-off; Reach treats it as a production discipline with its own craft, its own measurement, and its own loop back into Sense.",
    "Three Systems run together. Variant Production generates platform-shaped expressions from a master at scale. Channel Activation deploys those variants into the platforms that actually move the audience. Performance closes the loop — measuring against business motion, optimising in flight, and feeding signal back to the calibration substrate.",
    "For brand owners and operators who refuse the trade-off between scale and brand fidelity — and who want distribution that compounds rather than burns.",
  ],
  triplet: [
    {
      head: "Answers",
      body: "How does this idea move through every channel without breaking calibration?",
    },
    {
      head: "Produces",
      body: "Variants at scale, deployed natively, measured against business motion.",
    },
    {
      head: "For",
      body: "Operators scaling distribution without abandoning brand fidelity.",
    },
  ],

  systemsCountLabel: "Three Systems",
  systemsDisplayLead: "Three Systems.",
  systemsDisplayDim: "Variants. Channels. Signal.",
  systemsIntro:
    "Systems R—01 through R—03 form Reach as a Product. Each is a complete unit of work; together they close the loop from master creative back into the calibration substrate. Performance (R—03) is the most distinctive of the three — the loop most production stacks leave open.",
  systems: [
    {
      num: "R—01",
      name: "Variant Production",
      claim:
        "Asset variation at brand-coherent scale. From a master, generate the dozens or thousands of platform-shaped expressions a campaign actually requires — without abandoning calibration at variant five hundred.",
      includes:
        "Channel-sized variants, A/B test variants, localization variants, format adaptations, master-to-multiple deployments.",
      tags: ["Master → variant", "Format adaptation", "Calibration enforced"],
      visVariant: "reach",
      visLabel: "R—01 / Variants",
      visCenter: "Variant grid",
      visMeta: "Master → many",
      imageSide: "right",
    },
    {
      num: "R—02",
      name: "Channel Activation",
      claim:
        "Deployment shaped to channel logic. Each platform has its own grammar — pacing, format, audience expectation. Reach activates work natively to each, rather than flattening to a lowest common denominator.",
      includes:
        "Platform-native creative deployment, paid social activation, programmatic, OOH, owned channels, platform-specific optimization.",
      tags: ["Platform-native", "Pacing & rhythm", "Multi-channel"],
      visVariant: "vis-d",
      visLabel: "R—02 / Channels",
      visCenter: "Distribution map",
      visMeta: "Native · multi-platform",
      imageSide: "left",
    },
    {
      num: "R—03",
      name: "Performance",
      claim:
        "Measurement, optimization, iteration based on signal. Performance dashboards. Continuous learning loops.",
      includes:
        "Performance dashboards, optimization protocols, signal analysis, iteration cycles, performance insight reports.",
      tags: [
        "In-flight optimisation",
        "Business motion",
        "Loop into Sense",
        "Retire / re-base",
      ],
      visVariant: "vis-d",
      visLabel: "R—03 / Signal",
      visCenter: "Performance read",
      visMeta: "Loop closed",
      distinctive: true,
      distinctivePill: "R—03 · Closes the loop",
    },
  ],
  modularRestateStrong: "Modular entry.",
  modularRestate:
    "Engage R—01 alone for variant production from your existing masters. Plug R—02 into a campaign that already has creative. Or run all three as a closed loop, with signal feeding directly into Sense.",
  modularRestatePill: "3 of 3 selectable independently",

  ioBody: [
    "Reach engagements run on a master — a finished piece of creative work, ideally produced in Form, but a vendor-delivered or in-house master is fine if calibration is documented. Channel set, audience targeting, and business KPIs come from the operator side; Reach handles variant production, native deployment, and signal interpretation.",
    "Outputs are deployed assets across every variant and channel, plus a continuously-updated performance read that feeds back to the calibration substrate — turning each cycle into compounding signal rather than restart cost.",
  ],
  ioYouBring: [
    "Master creative (Form or external)",
    "Channel set & audience targeting",
    "Business KPIs & motion targets",
    "Existing performance baselines",
    "Brand calibration documentation",
  ],
  ioWeProduce: [
    "Variant set across all channels",
    "Native deployment per platform",
    "In-flight optimisation cycles",
    "Performance read against motion",
    "Signal looped back to Sense",
  ],
  ioArrowGlyph: "Reach →",

  casesDisplay: "Reach in the field.",
  casesIntro:
    "Each case carries its own brand register — not Amoeboid’s. Reach work is measured against business motion: market-share movement, cycle compounding, cost-per-outcome trending against brand-fidelity, never one without the other.",
  cases: [
    {
      badge: "R—01 · R—02",
      visVariant: "vis-b",
      visCenterLabel: "Studio register",
      caseNum: "Case 01",
      category: "Consumer / DTC",
      title: "One master into nine hundred calibrated variants.",
      body: "Variant production at scale without breaking the brand at variant five hundred.",
    },
    {
      badge: "R—02 · R—03",
      visVariant: "vis-a",
      visCenterLabel: "Editorial register",
      caseNum: "Case 02",
      category: "Media / publishing",
      title: "Channel-native deployment with in-flight signal.",
      body: "Eight platforms activated natively; performance read closed the loop in six weeks.",
    },
    {
      badge: "R—01 · R—02 · R—03",
      visVariant: "vis-c",
      visCenterLabel: "Operator register",
      caseNum: "Case 03",
      category: "SaaS / B2B",
      title: "Closed loop across two product launches.",
      body: "Reach end-to-end — variants, channels, performance — with signal feeding next cycle’s Sense read.",
    },
  ],

  crossDisplayLead: "Modular entry plays both ways.",
  crossDisplayDim: "Continue, compose, or step back to the system.",
  routes: [
    {
      label: "Product 01",
      name: "Sense",
      foot: "Reading layer",
      arrow: "←",
      href: "/sense",
    },
    {
      label: "Product 02",
      name: "Form",
      foot: "Execution layer",
      arrow: "←",
      href: "/form",
    },
    {
      label: "Product 04",
      name: "Adapt",
      foot: "Loop-closer layer",
      arrow: "→",
      href: "/adapt",
    },
    {
      label: "Up one",
      name: "Products index",
      foot: "All four Products",
      arrow: "←",
      href: "/products",
    },
  ],
  crossCtaCopy:
    "Engagements start at a single System, a single Product, or as composed orchestration. Brand calibration compounds either way.",
};

/* =========================================================================
   ADAPT
   ========================================================================= */
export const ADAPT_PAGE: SystemPageData = {
  slug: "adapt",
  name: "Adapt",
  metaTitle: "Adapt — The loop-closer. Calibration that compounds.",
  metaDescription:
    "Adapt runs continuously beneath every engagement, observing signal across Sense, Form, Reach, and the field. At cycle boundaries it refreshes the calibration substrate, briefs what shifted, and composes the next cycle's adjustments.",

  heroClaimLead: "The loop-closer.",
  heroClaimDim: "Calibration that compounds.",
  heroLede:
    "Continuous loop-closer. Adapt monitors signal beneath every engagement, refreshes the calibration substrate at cycle close, and composes forward direction for the next cycle. Standalone-capable — established brands can engage Adapt directly, bringing their own calibration substrate, and Adapt evolves it forward as the field moves.",
  heroCornerTL: "Adapt / Anchor · v1.0",
  heroCornerBR: "Closing register",
  heroAnchorMark: "Loop-closer imagery",
  heroTicks: ["Track", "Tune", "Compose"],

  whatDisplayLead: "A closing layer,",
  whatDisplayDim: "not a quarterly review.",
  whatBodyStrong:
    "Adapt produces a refreshed substrate, a written change brief, and forward composition",
  whatBody: [
    " — three artifacts that close one cycle and stage the next. It is not a report read once and filed. It is a working layer that updates the substrate every other Product composes against.",
    "Three Systems run together. Track holds a continuous read on signal across all four Products and the external field. Tune refreshes the calibration substrate at cycle boundaries and writes the change brief that documents what shifted and why. Compose names the forward adjustments — strategic, specific, sequenced — that Sense, Form, and Reach run against in the next cycle.",
    "For brand owners and operators who treat brand as compounding infrastructure rather than campaign output — and who refuse to let each cycle reset the substrate they built in the last one.",
  ],
  triplet: [
    {
      head: "Answers",
      body: "What shifted this cycle, and what should the next cycle do about it?",
    },
    {
      head: "Produces",
      body: "A refreshed substrate, a written change brief, and composed forward recommendations.",
    },
    {
      head: "For",
      body: "Operators who treat calibration as compounding infrastructure, not campaign rework.",
    },
  ],

  systemsCountLabel: "Three Systems",
  systemsDisplayLead: "Three Systems.",
  systemsDisplayDim: "Track. Tune. Compose.",
  systemsIntro:
    "Systems A—01 through A—03 form Adapt as a Product. Each is a complete unit of work; together they close the loop from field signal back into the calibration substrate and forward into the next cycle's brief. Compose (A—03) is the most distinctive of the three — the forward move most production stacks leave to chance.",
  systems: [
    {
      num: "A—01",
      name: "Track",
      claim:
        "Always-on signal capture across every active engagement. Track reads output from each Product currently engaged — substrate state from Sense, creative performance from Form, market and audience response from Reach — and pairs it with external field signal: market shifts, cultural movement, format change. Runs continuously beneath the engagement, not as a periodic audit.",
      includes:
        "Continuous per-Product signal capture, calibration drift detection, format shift tracking, audience response reads, competitive and cultural field monitoring, signal-to-substrate routing.",
      tags: ["Continuous monitoring", "Drift", "Signal", "Field"],
      visVariant: "vis-c",
      visLabel: "A—01 / Track",
      visCenter: "Signal stream",
      visMeta: "Continuous read",
      imageSide: "right",
    },
    {
      num: "A—02",
      name: "Tune",
      claim:
        "At cycle close, Tune reconciles tracked signal against the calibration substrate. Drift gets surfaced. Stabilised positions get sharpened. Patterns that no longer fit get retired. Two outputs: a refreshed substrate carried into the next cycle, and a written change brief documenting what shifted and why.",
      includes:
        "Substrate refresh, calibration update document, written change brief, cycle delta report, drift surface and retirement log, version-controlled substrate handoff.",
      tags: ["Cycle-end refresh", "Substrate", "Change brief"],
      visVariant: "vis-a",
      visLabel: "A—02 / Tune",
      visCenter: "Substrate delta",
      visMeta: "Cycle boundary",
      imageSide: "left",
    },
    {
      num: "A—03",
      name: "Compose",
      claim:
        "Tune tells you where the substrate now sits. Compose tells you what to do next. Forward recommendations span Product mix, creative priorities, and tactical adjustments — composed against the refreshed substrate, not reset from scratch. Compose is how each cycle starts a step ahead of the last.",
      includes:
        "Forward composition memo, per-Product adjustment recommendations across Sense/Form/Reach, next-cycle creative priorities, tactical sequencing, Product-mix recommendation.",
      tags: ["Forward direction", "Adjustments", "Closes the loop"],
      visVariant: "vis-d",
      visLabel: "A—03 / Compose",
      visCenter: "Forward read",
      visMeta: "Loop closed",
      distinctive: true,
      distinctivePill: "A—03 · Closes the loop",
    },
  ],
  modularRestateStrong: "Modular entry.",
  modularRestate:
    "Engage A—01 alone for a brand-drift audit against an existing substrate. Compose A—02 around a single cycle close. Or run Adapt end-to-end as the continuous loop-closer beneath the work. Established brands with a working substrate can engage Adapt directly — bring your brand system, and Adapt evolves it forward as the field moves.",
  modularRestatePill: "3 of 3 selectable independently",

  ioBody: [
    "Adapt runs on an existing calibration substrate — ideally a Sense substrate, but a documented brand book or a working calibration record from any prior cycle is enough. Field signal, performance reads, and channel data come from the operator side or are captured continuously through Track.",
    "Outputs are a refreshed substrate, a written change brief that documents what shifted between cycles, and a forward-looking composition memo that names the adjustments recommended for Sense, Form, and Reach in the next cycle. The substrate never resets — it sharpens.",
  ],
  ioYouBring: [
    "Calibration substrate or brand book",
    "Performance & channel reads",
    "Field signal access",
    "Cycle horizon & cadence",
    "Operator context & constraints",
  ],
  ioWeProduce: [
    "Refreshed calibration substrate",
    "Written change brief",
    "Forward composition memo",
    "Per-Product adjustment recommendations",
    "Versioned cycle record",
  ],
  ioArrowGlyph: "Adapt →",

  casesDisplay: "Adapt in the field.",
  casesIntro:
    "Each case carries its own brand register — not Amoeboid's. Adapt work is measured against substrate compounding: drift caught early, calibration sharpened, next cycle composed before the field shifts.",
  cases: [
    {
      badge: "A—01 · A—02",
      visVariant: "vis-b",
      visCenterLabel: "Studio register",
      caseNum: "Case 01",
      category: "Consumer / DTC",
      title: "Drift caught before it surfaced in production.",
      body: "Continuous monitoring flagged calibration drift across variant production; substrate sharpened before the next cycle shipped.",
    },
    {
      badge: "A—02 · A—03",
      visVariant: "vis-a",
      visCenterLabel: "Editorial register",
      caseNum: "Case 02",
      category: "Cultural institution",
      title: "A change brief that named the next cycle's moves.",
      body: "Cycle-end refresh paired with forward composition — Sense, Form, and Reach adjusted in step with shifting cultural weather.",
    },
    {
      badge: "A—01 · A—02 · A—03",
      visVariant: "vis-c",
      visCenterLabel: "Operator register",
      caseNum: "Case 03",
      category: "SaaS / B2B",
      title: "A substrate that compounded across four cycles.",
      body: "Adapt end-to-end across two product launches — calibration sharpened cycle on cycle rather than re-litigated at each one.",
    },
  ],

  crossDisplayLead: "Modular entry plays both ways.",
  crossDisplayDim: "Continue, compose, or step back to the system.",
  routes: [
    {
      label: "Product 01",
      name: "Sense",
      foot: "Reading layer",
      arrow: "←",
      href: "/sense",
    },
    {
      label: "Product 02",
      name: "Form",
      foot: "Execution layer",
      arrow: "←",
      href: "/form",
    },
    {
      label: "Product 03",
      name: "Reach",
      foot: "Activation layer",
      arrow: "←",
      href: "/reach",
    },
    {
      label: "Up one",
      name: "Products index",
      foot: "All four Products",
      arrow: "←",
      href: "/products",
    },
  ],
  crossCtaCopy:
    "Engagements start at a single System, a single Product, or as composed orchestration. Adapt makes the compounding explicit — calibration sharpens cycle on cycle rather than resetting.",
};

/** Re-export type for ReactNode in case consumers extend later. */
export type { ReactNode };
