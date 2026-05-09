I have read all 10 files. Now I'll produce the condensed reference. Note: there is no SVG turbulence/displacement filter for the Nebula symbol in the source HTML — it uses a static radial gradient (the Nebula filter must come from the design tokens elsewhere). I'll flag this.

---

# Amoeboid Phase 1 — Build Reference (condensed)

**Global notes**
- Page max-width: `1640px`. Gutter: `56px` (1100px: `40px`; 720px: `24px`).
- Header is identical on every page: lockup left (wordmark only, "amoeboid", weight 700, 22px, letter-spacing -0.029em), nav right (Products / Engine / Work / Company + pill `Contact`). Active page uses `aria-current="page"` → 1px ink underline. At ≤720px non-active, non-contact links hide.
- Standard entrance class `.anim` + `.a1`–`.a6` (delays 80/200/320/440/560/680ms, `cubic-bezier(0.2,0.7,0.2,1)`, 700ms `translateY(12)→0` + opacity). Honors `prefers-reduced-motion`.
- Common patterns: `.crumb`/`.secnum` mono eyebrows w/ leading 28×1px dash; `.cta` (filled ink pill, scale 1.025 hover, arrow translateX 3px); window/case hover = `translateY(-3/-4px)` + soft shadow `0 30px 60px -30px rgba(12,12,12,0.18)`.
- Per-page footer hairline: `© Amoeboid 2026` left, page-specific tag right (e.g. `Homepage / Hero · v1 proto`).
- **Nebula symbol filter**: the HTML source does **not** define a `feTurbulence`/`feDisplacementMap` filter. The Global Footer renders the symbol as a static SVG: a 32×32 `radialGradient` (id `footerNebula`, cx 0.42 cy 0.4 r 0.65, stops `#0c0c0c` 1 → 0.55 at 0.55 → 0 at 1), 13r circle filled with the gradient, 0.6-stroke 18%-ink ring, and a 2.4r `rgba(246,244,239,0.85)` "highlight" at (13.5,13.5). Comment explicitly says "static at footer scale per motion spec." Any turbulence animation must come from your design-tokens spec, not these files.

---

## Homepage Hero.html

### Section order
1. **Header** — site nav.
2. **Hero (`.hero`)** — title + CTA top row (border-bottom hairline), sub + meta-block row, then two-window showcase grid.
3. **Section 02 · Three Products** — `.products-block` heading + 3-tile product grid + foot meta + hub link.
4. **Section 03 · Modular entry** — `.scale-block` heading + 3-column row of "entry" links.
5. **Section 04 · Engine** — `.engine-block` 2-col grid; copy left, L1–L4 stack diagram right.
6. **Section 05 · Featured work** — `.work-block` 12-col grid: case-a 7 / case-b 5 / case-c 5 / case-d 7.
7. **Section 06 · Brand Calibration (moat)** — full-bleed `paper-2` block (negative-gutter pull-out).
8. **Section 07 · Closing CTA** — large display + CTA row.
9. **Footer hairline**.

### Copy (verbatim)
- Hero H1: `Adaptive Creative AI Production.`
- Hero CTA: `Start a conversation`
- Hero sub: `A creative production system calibrated to brand, format, and scale — built and orchestrated across Sense, Form, and Reach.`
- Window 1 label `Featured`, title `Editorial moment — Sense / Form / Reach`, meta `16:9 · Still or Motion`, placeholder `Drop hero visual`.
- Window 2 (tall, 4:5) label `Engine`, title `Stack diagram preview`, meta `4:5 · Static`, placeholder `Drop secondary visual`.
- 02 eyebrow: `Section 02  ·  Three Products`. H2: `Three Products. <dim>One calibrated stack.</dim>`. Lede: `Sense reads. Form makes. Reach scales. Each is independently engageable; together they orchestrate a single calibration through every cycle of work.`
- Tile Sense: code `P—01`, register `Research register`, meta `Reading layer · 05 Systems`, body `Brand, audience, cultural, competitive, and format intelligence — structured as substrate the rest of the stack composes against.` link `Open Sense`.
- Tile Form: code `P—02`, register `Craft register`, meta `Making layer · 04 Systems`, body `Still, motion, spatial, and sonic. Hero-grade craft across four media shapes, calibrated — not generic.` link `Open Form`.
- Tile Reach: code `P—03`, register `Broadcast register`, meta `Activation layer · 03 Systems`, body `Variant production, channel activation, and performance — brand calibration carried through every variant and platform.` link `Open Reach`.
- Products foot: `03 Products  ·  12 Systems  ·  Modular entry` / `Open Products hub →`.
- 03 eyebrow: `Section 03  ·  Modular entry`. H2: `Engage at <dim>any scale.</dim>`. Sub: `Start with a single System. A single Product. Or the full orchestration. <strong>Brand Calibration compounds whichever path you start on.</strong>`
- Rows: `Entry 01 · System / Start with Sense Brand Intelligence / Establish your brand calibration foundation.` · `Entry 02 · Product / Start with Form Still / Produce a single campaign with us.` · `Entry 03 · Orchestration / Start with the full stack / Orchestrated engagement across all three Products.`
- 04 eyebrow: `Section 04  ·  Engine`. H2: `The orchestration <dim>is the product.</dim>`. Body p1: `<strong>Engine is the substrate beneath Sense, Form, and Reach.</strong> Four addressable layers — L1 through L4 — that carry brand calibration through every cycle without resetting between them.` p2: `The stack is visible by design. Inspectable composition per engagement. The architecture is the marketing.` Link: `See the Engine`.
- L1 stack: `L1 / Calibration / Substrate that holds the brand` (gauge 5/5). `L2 / Reading / Sense — field, audience, format` (4/5). `L3 / Making / Form — still, motion, spatial, sonic` (3/5). `L4 / Activation / Reach — variant, channel, signal` (2/5).
- 05 eyebrow: `Section 05  ·  Featured work`. H2: `In the field. <dim>Brand-first.</dim>`. Lede: `Each case carries its own register — not Amoeboid's chrome. Outcomes measured against business motion, not deliverable count.`
- Cases — A: badge `F—03 / Sonance`, ph `Premium audio · product film`, meta `Case 01 / Premium audio`, h3 `An identity carried from page to environment.`. B: `R—01 / DTC`, `900+ calibrated variants`, `Case 02 / Consumer / DTC`, `One master into nine hundred calibrated variants.`. C: `S—01 / Industrial`, `Substrate sample`, `Case 03 / Industrial`, `Re-coding a 40-year voice without breaking it.`. D: `R—03 / SaaS`, `Closed loop · two launches`, `Case 04 / SaaS / B2B`, `Closed loop across two product launches.`.
- Work foot: `04 of 26 surfaced  ·  11 industries` / `Open Work index →`.
- 06 eyebrow: `Section 06  ·  Brand Calibration`. Claim: `Calibration <dim>is the moat.</dim>`. Prose: `<strong>Output is downstream of substrate.</strong> Volume without coherence is the dominant failure mode of AI-assisted production today — cheap variants, eroded brands, untracked drift.` / `Brand Calibration is the layer that resolves it. A substrate that reads voice, register, audience, and format accurately enough to enforce coherence at variant volume — and that <strong>sharpens through the engagement</strong> rather than degrading. Format Intelligence is its forward edge: research-investment proof that the substrate keeps reading.` / `Every cycle adds to the calibration. The calibration never resets. That is the durable asset.`
- Stats: `Cycles compounded / 26 engagements · 11 industries`, `Calibration retention / 100% · substrate carried cross-cycle`, `Forward edge / Format Intelligence · S—05`.
- 07 eyebrow: `Section 07  ·  Start`. Display: `Compose an engagement. <dim>Begin where the work begins.</dim>`. Context: `Open a structured intake. A partner replies within two business days. Adaptive, the on-site assistant, can route a question first if you prefer.` CTA: `Start a conversation`.

### Visuals/structure
- Hero head: 2-col `1fr auto` ending in border-bottom hairline. Hero-display clamp(64,8.2vw,120px) lh 0.98 ls -0.032em max 16ch.
- Windows grid `2.2fr 1fr`; main 16:9, secondary tall 4:5.
- Products tiles: 3-col, anchor `aspect-ratio 4/5`, register-coded surfaces (anchor-sense = orthogonal grid, anchor-form = warm radial + inset hairline 18px frame, anchor-reach = ink with 22px-inset reverse grid). Reach tile uses inverse `paper-on-ink` colors.
- Engine stack: `paper-2` outer card 28px padding, inner `paper` rows w/ 18×20 padding, gauge dots 4×14 ink-faint with on-state `.on`.
- Work grid 12-col with `case-a:7 / case-b:5 / case-c:5 / case-d:7`. vis-b/vis-d are dark registers w/ inverted text.
- Moat block: full-bleed via `margin: 0 calc(var(--gutter) * -1)`, padding `140px var(--gutter)`.

### Motion specifics
- Window/tile/case hover: `translateY(-2/-3px)` + soft drop shadow over 0.4s `cubic-bezier(0.2,0.7,0.2,1)`. CTA hover `scale(1.025)` + arrow `translateX(3px)` 0.3s.
- Six-step staggered entrance via a1–a6.

### Page-specific locks
- Five `.section`s share `max-width:1640px`. The moat is the only full-bleed paper-2 swap on this page.

---

## Products Hub.html

### Section order
1. Header.
2. **Intro (`.intro`)** — crumb + 2-col grid (display + 3-paragraph body) ending in border-bottom.
3. **Sense product treatment** — `.layout-image-left` (image left tall, copy right with 5-systems list + `Open Sense` route).
4. **Form product treatment** — `.layout-image-right` (copy left + 4-systems list + `Open Form`; visual right wide 16:10).
5. **Reach product treatment** — `.layout-stacked` (copy row → full-bleed 21:9 visual → systems + Open Reach row).
6. **Outputs catalog** — large display + frame paragraph + 4-col grid (Still/Motion/Spatial + deferred Sonic) + foot.
7. **Modular closing** — `Begin where the work begins. Orchestrate when it's ready.` + CTA.
8. **Engagement / How it works** — full-bleed paper-2 block with 5-step row.
9. Footer hairline (`Products / Hub · v1 proto`).

### Copy (verbatim)
- Crumb: `Index  /  Products`.
- H1: `Three Products. <dim>One adaptive system.</dim>`.
- Intro body: `<strong>Sense, Form, and Reach</strong> are the three Products that compose Amoeboid's adaptive creative production system.` / `Each is its own destination — calibrated to a distinct stage of the work. Sense reads the brand and the field. Form makes the work across still, motion, spatial, and sonic. Reach takes a piece into variants, channels, and measured outcomes.` / `Buyers enter at any Product, or any single System within a Product. Orchestration is the optimal path we sell toward — never the gating requirement.`
- Sense block: eyebrow `Product 01  ·  Sense`. Visual label `Sense / Anchor`. Placeholder `Research-coded imagery`. Caption meta `Signal · Foresight · Calibration`. Name `Sense`. Claim `Brand intelligence and format foresight. The reading layer.`. Body `Sense is research, structured. It reads brand, audience, culture, competitors, and emerging formats — then calibrates that reading into the substrate every subsequent piece of work compounds against. Agentic where it scales; researcher-shaped where it shouldn't.`. Systems heading `Five Systems`:
  - `S—01 Brand Intelligence — Calibration substrate & voice.`
  - `S—02 Audience Intelligence — Segment, motivation, context.`
  - `S—03 Cultural Intelligence — Emergent narratives & signals.`
  - `S—04 Competitive Intelligence — Field positioning & whitespace.`
  - `S—05 Format Intelligence — Foresight on emerging asset types.`
  - Route: `Open Sense`.
- Form block: `Product 02  ·  Form`. Caption `Still · Motion · Spatial · Sonic`. Claim `Creative execution across the four media shapes.`. Body `Form is where calibration becomes craft. Still, motion, spatial, and sonic — each a discipline, each a System. Human-curated execution at the level the brand actually warrants. The shape framework holds; the output ships.`. Systems heading `Four Systems — media-shape framework`:
  - `F—01 Still — Image, identity, editorial.`
  - `F—02 Motion — Film, broadcast, narrative.`
  - `F—03 Spatial — Environment, object, dimensional.`
  - `F—04 Sonic — Voice, score, audio identity.`
- Reach block: `Product 03  ·  Reach`. Visual label `Reach / Anchor`, placeholder `Broadcast & scale imagery`, caption `Variants · Channels · Performance`. Claim `Variant production, channel activation, and measured performance.`. Body `Reach takes a piece of work and moves it into the world — at the variants and the volumes the channels actually demand. Agentic where it scales. Brand calibration enforced across every variant, not abandoned at distribution.`. Systems heading `Three Systems`:
  - `R—01 Variant Production — Asset variation at brand-coherent scale.`
  - `R—02 Channel Activation — Distribution shaped to channel logic.`
  - `R—03 Performance — Measurement that loops back to Sense.`
- Outputs eyebrow: `/ Catalog  ·  Outputs`. Display: `Outputs.`. Sub: `What we produce. Brand-calibrated, hero-grade, ready to deploy.`. Frame: `<strong>Form is the creation engine.</strong> Sense informs every output with brand calibration and audience grounding. Reach activates outputs across channels through variants, deployment, and performance loops.`
- **Output lists (verbatim, ordered)**:
  - **F—01 Still**: Campaign photography · Brand imagery libraries · Product visualization · Editorial content · Identity systems · Key art · Packaging surfaces.
  - **F—02 Motion**: Brand films · Social motion content · Kinetic identity · Animated brand moments · Product motion · Title sequences · Looping content.
  - **F—03 Spatial**: 3D product visualization · Environmental renders · AR / VR experiences · Immersive brand moments · Virtual showrooms · E-viewers · Configurators.
  - **F—04 Sonic** (deferred pill `Expanding 2027`): Brand sonic identity · Audio content · Voice systems.
- Outputs foot: `Outputs flow through Reach for multi-context deployment — channel variants, activation, performance optimization.`
- Modular closing: eyebrow `Closing  ·  Modular entry`. Display: `Begin where the work begins. <dim>Orchestrate when it's ready.</dim>`. Body: `Engagements start at any Product, or at any single System inside one. Orchestration is the optimal path — never the gating requirement. Inputs come from your library or ours. Brand calibration compounds either way.` CTA `Start a conversation`.
- Engagement: eyebrow `Section 06  ·  How an engagement works`. Display `From first call <dim>to closed loop.</dim>`. Lede `Five structural moments. The shape doesn't change — the composition does. Each engagement runs against this sequence; what scales is the substrate underneath it.`
- Steps: `Step 01 Discovery — 30-minute call. Understand brand context, scope, urgency.` · `Step 02 Scope — Proposal: which Products and Systems engage, deliverables defined, timeline, investment.` · `Step 03 Calibration — Brand Intelligence engagement if needed (~2–4 weeks). Becomes the proprietary foundation for everything that follows.` · `Step 04 Production — Form and Reach Systems execute. Deliverables produced, brand-calibrated, hero-grade.` · `Step 05 Activation & iteration — Reach activates across channels. Performance Systems measure. Iteration loops.`
- Foot note: `<strong>The shape is the contract.</strong> Calibration steps in only when it's the right substrate moment; the proposal in Step 02 names which Systems run and which sit out.` CTA `Start an engagement`.

### Visuals/structure
- Three product treatments alternate: image-left (`1.25fr 1fr`), image-right (`1fr 1.25fr`), stacked (full-bleed 21:9).
- Visual register classes: `.visual.sense` (orthogonal grid 56px), `.visual.form` (diagonal weave 22px both 135/45), `.visual.reach` (horizontal stepped bars 28px).
- Systems list rows: 3-col grid `36px 1fr auto` (num / name / desc right-aligned).
- Outputs grid 4-col, `gap 56px 40px`. Deferred col: muted ink, dashed pill `Expanding 2027`.
- Engagement section is full-bleed paper-2 (negative gutter pull-out), 5-col rows separated by 1px verticals.

### Motion / interaction specifics
- `.route` "Open Sense/Form/Reach" pill: ink outline → on hover, ink slides up from bottom (pseudo-element `translateY(101%)→0` 0.45s cb), text becomes paper, scale 1.02. Inner arrow swatch (22×22 ink pill with paper SVG) inverts on hover and rotates SVG `-45deg`.
- `.deferred .defer-pill` static pill, 6×6 dot indicator.

---

## Sense.html (template instance)

### Section order
1. Header.
2. **1. Hero** — crumb + giant `Sense.` display + 2-col claim/lede + 21:9 anchor with research-coded register (signal grid, scan ticks).
3. **2. What it does** — block-head + 3-col `.triplet` (Answers / Produces / For).
4. **3. Five Systems** — varied-rhythm `.syscard` stack with per-System mini-vis registers.
5. **4. Inputs & outputs** — 3-col `.io` (You bring / arrow / We produce).
6. **5. Cases** — 3-col case grid.
7. **6. Continue** — large `.cross-display` + 4-cell `.routes` grid + final cross-cta + `Start with Sense` CTA.
8. Footer (`Products / Sense · template instance · v1 proto`).

### Copy
- Crumb: `Index / Products / Sense`.
- H1: `Sense.`
- Claim: `The reading layer. <dim>Brand intelligence and format foresight, structured as substrate.</dim>`
- Lede: `Sense reads brand, audience, culture, competitive field, and emerging formats — then calibrates that reading into the substrate every subsequent piece of work compounds against. Agentic where it scales; researcher-shaped where it shouldn't.`
- Anchor corners: `Sense / Anchor  ·  v1.0` (top-left), `Calibration register` (bottom-right). Ticks: `• Signal · Foresight · Calibration`. Center mark: `Research-coded imagery`.
- §02 eyebrow `Section 02  ·  What it does`. Display: `A reading layer, <dim>not a research deck.</dim>`. Body p1: `<strong>Sense produces calibration substrate</strong> — a structured reading of brand, audience, culture, field, and format that downstream Systems compose against. It is not a slide-ware deliverable. It is a working layer the rest of the production stack queries.` p2: `Five Systems run in parallel, each with a defined input shape and output contract. They can run on a single brief or compound across an engagement. Brand Intelligence is foundational; the other four sharpen specific edges of the reading.` p3: `For brand owners and operators who treat creative as a system, not a campaign — and who want their substrate to compound across cycles instead of resetting at each one.`
- Triplet: `Answers — Where does this brand have permission to act, and where doesn't it?` · `Produces — Structured calibration substrate, queryable by every downstream System.` · `For — Operators who treat brand as compounding infrastructure, not campaign output.`
- §03 eyebrow `Section 03  ·  Five Systems`. Display: `Five Systems. <dim>Each engaged independently.</dim>`. Body: `Systems S—01 through S—05 form Sense as a Product, but each is a complete unit of work with its own deliverable. Buyers commission individually, in combination, or as a full Sense engagement. Format Intelligence (S—05) is the most distinctive of the five — a foresight discipline most production stacks don't carry.`
- **S—01 Brand Intelligence** claim: `Proprietary brand calibration system. Captures voice, visual register, behavioral patterns, cultural context. Powers all future creative engagement. Compounds over time.` Includes: `Brand calibration system, voice and tone framework, visual register, behavioral patterns mapping, cultural context document, ongoing calibration refinement.` Tags: Voice · Codes · Substrate. Vis label `S—01 / Reading`, ph `Substrate sample`, meta `Calibration grid`.
- **S—02 Audience Intelligence** claim: `Audience profiles, persona research, behavioral insight, segment analysis. Grounds creative work in who it's for.` Includes: `Audience profiles, persona research, behavioral insight reports, segment analysis, cohort definition.` Tags: Segments · Motivation · Context. Vis: `S—02 / Mapping`, `Segment field`, `Motivation × context`.
- **S—03 Cultural Intelligence** claim: `Cultural context analysis, trend foresight, semiotic analysis, cultural moment identification. Brand work that lands in the moment it ships.` Includes: `Cultural context analysis, trend foresight reports, semiotic analysis, cultural moment identification, competitive cultural mapping.` Tags: Narratives · Signals · Weather. Vis: `S—03 / Signal`, `Cultural waveform`, `Continuous read`.
- **S—04 Competitive Intelligence** claim: `Competitor positioning maps, benchmark analysis, white space identification, category landscape. Find the room your brand can own.` Includes: `Competitor positioning maps, benchmark analysis, white space identification, category landscape report.` Tags: Positioning · Whitespace · Adjacency. Vis: `S—04 / Field`, `Position map`, `Whitespace · adjacency`.
- **S—05 Format Intelligence** (full-bleed inverted card, pulse pill `S—05  ·  Distinctive System`). Claim: `Format foresight reports, emerging format briefings, format-specific recommendations. Research-backed direction on what to produce, not just how.` Includes: `Format foresight reports, emerging format briefings, format-specific recommendations, research-backed direction documents.` Tags: Foresight · Asset types · Pre-consensus · Format primitives. Vis (`vis-rings`, ink bg, paper concentric rings at radii 56/96/144/198 with descending alpha 0.18→0.06): `S—05 / Foresight`, `Format rings`, `Pre-consensus signal`.
- Modular restate: `<strong>Modular entry.</strong> Engage S—01 alone as a foundational reading. Compose S—02 through S—05 around an existing brand substrate. Or commission Sense end-to-end as the calibration layer for everything downstream.` Pill: `5 of 5 selectable independently`.
- §04 eyebrow `Section 04  ·  Inputs & outputs`. Display: `What you bring. <dim>What we produce.</dim>`. Body p1: `Sense engagements run on whatever substrate already exists — brand books, prior research, performance data, founder voice memos. Where input is thin, agentic discovery fills the field. Where it's rich, the System compounds against it rather than restating it.` p2: `Outputs are working artifacts: structured substrate every downstream Product can query, plus a human-shaped reading document for stakeholder decisions. No slideware unless slideware is itself the deliverable.`
- IO bring (01–05): `Brand documents, however raw` · `Prior research, qual or quant` · `Performance & channel data` · `Founder & operator voice` · `Constraints, restraints, taboos`. Glyph: `Sense →`. Produce (A–E): `Calibration substrate (structured)` · `Reading document (human-shaped)` · `Audience & cultural field maps` · `Competitive position read` · `Format foresight memo`.
- §05 Cases. Display: `Sense in the field.` Body: `Each case carries its own brand register — not Amoeboid's. Sense substrates feed into Form and Reach engagements; outcomes are measured against business motion, not deliverable count.`
- Cases:
  - case-a (dark): badge `S—01 · S—05`, ph `Studio register`, meta `Case 01 / Industrial / DTC`, h3 `Re-coding a 40-year voice without breaking it.`, sub `Foundational substrate plus format foresight ahead of a category re-launch.`
  - case-b (light cream): badge `S—02 · S—03`, ph `Editorial register`, meta `Case 02 / Cultural institution`, h3 `Audience field mapped against cultural weather.`, sub `Continuous reading replaced an annual brand-tracker contract.`
  - case-c (paper-2 + center vertical line): badge `S—04 · S—05`, ph `Operator register`, meta `Case 03 / Software / B2B`, h3 `Whitespace read into a 24-month format roadmap.`, sub `Competitive field plus format foresight, structured for product & marketing in tandem.`
- §06 eyebrow `Section 06  ·  Continue`. Display: `Modular entry plays both ways. <dim>Continue, compose, or step back to the system.</dim>`
- Routes (4 cells):
  - `Product 02 / Form / Execution layer / →`
  - `Product 03 / Reach / Variant & channel / →`
  - `Engine / How it composes / Adaptive system / →`
  - `Up one / Products index / All three Products / ←`
- Cross-cta p: `Engagements start at a single System, a single Product, or as composed orchestration. Brand calibration compounds either way.` CTA: `Start with Sense`.

### Visuals/structure (Sense-specific)
- Hero anchor 21:9: research register = orthogonal 64px grid + scan ticks (180deg repeating 2px stripes via mix-blend-mode multiply) + radial blob bottom-left.
- Mini-vis registers (4:3, all `.sys-vis`):
  - `vis-grid` (S—01): 36px orthogonal grid.
  - `vis-scatter` (S—02): 8 radial-gradient dot positions.
  - `vis-wave` (S—03): horizontal 14px stripes + center waveform line w/ alternating segments.
  - `vis-field` (S—04): 135deg 14px diagonal weave + inset bracket box at 18%/22%.
  - `vis-rings` (S—05): inverted ink card with 4 concentric rings (radii 56/96/144/198).
- Layout variants per syscard: sys-1 `1.05/1.25`, sys-2 `1.25/1.05`, sys-3 `1/1.4`, sys-4 `1.4/1`. sys-5 = single column, ink bg, 22px radius, 64×56 padding.
- `.sys-5-pill` includes `.pulse` 6×6 paper dot, animated `pulse` keyframe (2.4s ease-out infinite, box-shadow ripple 0→8px).

### Motion specifics
- `.pulse` dot: `0% box-shadow 0 0 0 0 rgba(246,244,239,0.6)` → `70% 0 0 0 8px rgba(0)` → `100% 0`. 2.4s ease-out infinite.
- Routes hover: bg → ink, color → paper (0.35s).

---

## Form.html (same template as Sense, varied)

### Section order
Identical to Sense (Hero / What it does / Four Systems / Inputs & outputs / Cases / Continue).

### Copy
- Crumb: `Index / Products / Form`. H1 `Form.`
- Claim: `The execution layer. <dim>Creative craft across the four media shapes, human-curated end to end.</dim>`
- Lede: `Form is where calibration becomes craft. Still, motion, spatial, and sonic — each a discipline, each a System. The brand calibration substrate from Sense is carried through every frame, every cut, every surface. Considered craft over volume; human-curated where the work warrants it.`
- Hero anchor corners: `Form / Anchor  ·  v1.0` / `Craft register`. Ticks: `• Still · Motion · Spatial · Sonic`. Mark: `Product-craft imagery`.
- §02 Display: `An execution layer, <dim>organised by the shape of the work.</dim>`. Body p1: `<strong>Form produces finished work across four media shapes</strong> — still, motion, spatial, and sonic. The framework is media-shape, not output-shape: each System is a domain of craft, not a deliverable type. A campaign moves through the relevant Systems; a brand identity sits inside Still; a launch film commissions Motion plus Sonic.` p2: `What separates Form from generic creative production is the moat — the brand calibration carried through from Sense, enforced at every craft decision rather than reinterpreted by each vendor. Considered craft over volume. Human-curated end to end, with agentic support where it sharpens craft rather than replacing it.` p3: `For brand owners and operators commissioning work that has to hold up at the level the brand actually warrants — not the level a production timeline allows.`
- Triplet: `Answers — What does this idea look, move, sit, and sound like at brand-level fidelity?` · `Produces — Finished work across still, motion, spatial, and sonic — calibrated, not generic.` · `For — Operators who refuse to let production volume erode brand craft.`
- §03 Display: `Four media shapes. <dim>Each a domain of craft.</dim>`. Body: `Systems F—01 through F—04 form a media-shape framework, not an output catalogue. Still, motion, and spatial are live disciplines today. Sonic (F—04) is staged: the framework is built, the slot is reserved, and the discipline expands in 2027. Each System is engaged independently, in combination, or composed end-to-end.`
- **F—01 Still** claim: `Premium photography, illustration, and design assets. Identity systems, editorial imagery, packaging, key art — the surfaces a brand is judged on at first contact and held to thereafter.` Includes: `Campaign photography, brand imagery libraries, product visualization, editorial content, identity systems, key art, packaging surfaces.` Tags: Photography · Illustration · Identity · Editorial. Vis: `F—01 / Still`, `Premium still imagery`, `Editorial · key art`.
- **F—02 Motion** claim: `Film, animation, and kinetic content. Brand films, narrative work, kinetic identity, motion systems for product surfaces. Edit, score, and timing treated as craft decisions, not handoffs.` Includes: `Brand films, social motion content, kinetic identity, animated brand moments, product motion, title sequences, looping content.` Tags: Film · Animation · Kinetic identity · Narrative. Vis: `F—02 / Motion`, `Motion detail`, `Film · animation · kinetic`.
- **F—03 Spatial** claim: `3D product visualization, environmental renders, AR/VR experiences, immersive brand moments, virtual showrooms.` Includes: `3D product visualization, environmental renders, AR/VR experiences, immersive brand moments, virtual showrooms, e-viewers, configurators.` Tags: 3D · Environmental · Immersive · Dimensional. Vis: `F—03 / Spatial`, `Spatial / 3D render`, `Dimensional · environmental`.
- **F—04 Sonic** (deferred slot, `paper-2` rounded card, `.deferred-pill F—04  ·  Expanding 2027`). Claim: `Audio identity, music, and voice. The fourth media shape, staged for full discipline expansion in 2027. Reserved as a structural slot in the framework today; commissioned through partner studios for live engagements until brought in-house.` Includes: `Brand sonic identity, audio content, voice systems.` Tags: Audio identity · Music · Voice · Score. Vis: `F—04 / Sonic`, `Reserved slot`, `Expanding 2027`.
- Modular restate: `<strong>Modular entry.</strong> Commission a single System — a Still campaign, a Motion film, a Spatial activation. Compose two or three across a launch. Or run all four as the execution layer of a multi-cycle engagement.` Pill: `3 live · 1 partner-led`.
- §04 Body p1: `Form engagements ideally run on a Sense calibration substrate — but they don't require one. A live brand book, a clear creative brief, and a willingness to hold the work to brand-level fidelity is enough to commission. Where Sense exists, every craft decision compounds against it; where it doesn't, Form establishes a working calibration before craft begins.` p2: `Outputs are finished, master-grade work across the relevant media shapes — production files, delivery formats, and a calibration record so the next cycle compounds rather than resets.`
- IO bring: `Sense substrate, or a working brand` · `Creative brief or commissioning thesis` · `Reference set, however rough` · `Channel & deliverable requirements` · `Production constraints & horizon`. Glyph: `Form →`. Produce: `Master-grade still assets & identity` · `Motion & film, edit through grade` · `Spatial / 3D / immersive work` · `Sonic, partner-led until 2027` · `Calibration record for next cycle`.
- §05 Display: `Form in the field.` Body: `Each case carries its own brand register — not Amoeboid's. Form work is measured against the bar of the brand it serves: cultural weight, craft fidelity, longevity in market.`
- Cases: case-a `F—01 · F—02 / Studio register / Case 01 / Performance / hardware / Identity, key art, and launch film at one fidelity. — Still and Motion run as a single craft engagement, not handed-off vendors.` · case-b `F—01 · F—03 / Editorial register / Case 02 / Hospitality / An identity carried from page to environment. — Editorial photography paired with spatial design across a 14-property rollout.` · case-c `F—02 · F—03 / Operator register / Case 03 / Consumer tech / A product film and 3D system from one calibration. — Motion and Spatial composed against a shared brand substrate and rendered to spec.`
- §06 Routes: `Product 01 / Sense / Reading layer / ←` · `Product 03 / Reach / Variant & channel / →` · `Engine / How it composes / Adaptive system / →` · `Up one / Products index / All three Products / ←`. CTA: `Start with Form`.

### Visuals/structure (Form-specific)
- Hero anchor surface = product-craft register: radial highlight 28%/22% (paper) + radial shadow 78%/82% (ink) + inner 40×56 inset hairline frame.
- Mini-vis variants:
  - `vis-still`: editorial radial light + 18px inset frame.
  - `vis-motion`: ink bg with 4-frame editorial strip pattern (24/49/74% lines) + bottom timecode bar (`linear-gradient 0–38% strong, rest faded`, 6px height).
  - `vis-spatial`: split paper-2/dark gradient + 3D-perspective rotated rect (52deg perspective 640px, box-shadow 0 14 22).
  - `vis-sonic`: layered waveform (vertical bars 9px-spaced) masked by radial ellipse 30%→80%.
- Layouts: sys-1 `1.05/1.25`, sys-2 `1.25/1.05`, sys-3 `1/1.4`. sys-4-deferred = `1.25fr 1fr`, paper-2 rounded 22px card, 56px padding.

### Motion specifics
- `.deferred-pill .pulse` dot: same pulse keyframe but rgba(12,12,12,0.4) shadow stops.

---

## Reach.html (same template, 3 systems)

### Section order
Same as Sense / Form.

### Copy
- Crumb: `Index / Products / Reach`. H1 `Reach.`
- Claim: `The activation layer. <dim>Variant production, channel activation, and measured performance.</dim>`
- Lede: `Reach takes a piece of work and moves it into the world — at the variants and the volumes channels actually demand. Agentic where it scales, brand-calibrated at every variant, and measured against business motion rather than vanity. Distribution treated as a production discipline, not an afterthought.`
- Anchor corners: `Reach / Anchor  ·  v1.0` / `Broadcast register`. Ticks: `• Variants · Channels · Performance`. Mark: `Variant · channel · performance`.
- §02 Display: `An activation layer, <dim>not a media plan.</dim>`. Body p1: `<strong>Reach takes a master piece of work and moves it through variants, channels, and performance</strong> — without losing brand calibration along the way. Most stacks treat distribution as a hand-off; Reach treats it as a production discipline with its own craft, its own measurement, and its own loop back into Sense.` p2: `Three Systems run together. Variant Production generates platform-shaped expressions from a master at scale. Channel Activation deploys those variants into the platforms that actually move the audience. Performance closes the loop — measuring against business motion, optimising in flight, and feeding signal back to the calibration substrate.` p3: `For brand owners and operators who refuse the trade-off between scale and brand fidelity — and who want distribution that compounds rather than burns.`
- Triplet: `Answers — How does this idea move through every channel without breaking calibration?` · `Produces — Variants at scale, deployed natively, measured against business motion.` · `For — Operators scaling distribution without abandoning brand fidelity.`
- §03 Display: `Three Systems. <dim>Variants. Channels. Signal.</dim>`. Body: `Systems R—01 through R—03 form Reach as a Product. Each is a complete unit of work; together they close the loop from master creative back into the calibration substrate. Performance (R—03) is the most distinctive of the three — the loop most production stacks leave open.`
- **R—01 Variant Production** claim: `Asset variation at brand-coherent scale. From a master, generate the dozens or thousands of platform-shaped expressions a campaign actually requires — without abandoning calibration at variant five hundred.` Includes: `Channel-sized variants, A/B test variants, localization variants, format adaptations, master-to-multiple deployments.` Tags: `Master → variant · Format adaptation · Calibration enforced`. Vis: `R—01 / Variants`, `Variant grid`, `Master → many`.
- **R—02 Channel Activation** claim: `Deployment shaped to channel logic. Each platform has its own grammar — pacing, format, audience expectation. Reach activates work natively to each, rather than flattening to a lowest common denominator.` Includes: `Platform-native creative deployment, paid social activation, programmatic, OOH, owned channels, platform-specific optimization.` Tags: Platform-native · Pacing & rhythm · Multi-channel. Vis: `R—02 / Channels`, `Distribution map`, `Native · multi-platform`.
- **R—03 Performance** (inverted ink full-bleed card with pulse pill `R—03  ·  Closes the loop`). Claim: `Measurement, optimization, iteration based on signal. Performance dashboards. Continuous learning loops.` Includes: `Performance dashboards, optimization protocols, signal analysis, iteration cycles, performance insight reports.` Tags: `In-flight optimisation · Business motion · Loop into Sense · Retire / re-base`. Vis: `R—03 / Signal`, `Performance read`, `Loop closed`.
- Modular restate: `<strong>Modular entry.</strong> Engage R—01 alone for variant production from your existing masters. Plug R—02 into a campaign that already has creative. Or run all three as a closed loop, with signal feeding directly into Sense.` Pill: `3 of 3 selectable independently`.
- §04 p1: `Reach engagements run on a master — a finished piece of creative work, ideally produced in Form, but a vendor-delivered or in-house master is fine if calibration is documented. Channel set, audience targeting, and business KPIs come from the operator side; Reach handles variant production, native deployment, and signal interpretation.` p2: `Outputs are deployed assets across every variant and channel, plus a continuously-updated performance read that feeds back to the calibration substrate — turning each cycle into compounding signal rather than restart cost.`
- IO bring: `Master creative (Form or external)` · `Channel set & audience targeting` · `Business KPIs & motion targets` · `Existing performance baselines` · `Brand calibration documentation`. Glyph: `Reach →`. Produce: `Variant set across all channels` · `Native deployment per platform` · `In-flight optimisation cycles` · `Performance read against motion` · `Signal looped back to Sense`.
- §05 Display: `Reach in the field.` Body: `Each case carries its own brand register — not Amoeboid's. Reach work is measured against business motion: market-share movement, cycle compounding, cost-per-outcome trending against brand-fidelity, never one without the other.`
- Cases: case-a `R—01 · R—02 / Studio register / Case 01 / Consumer / DTC / One master into nine hundred calibrated variants. — Variant production at scale without breaking the brand at variant five hundred.` · case-b `R—02 · R—03 / Editorial register / Case 02 / Media / publishing / Channel-native deployment with in-flight signal. — Eight platforms activated natively; performance read closed the loop in six weeks.` · case-c `R—01 · R—02 · R—03 / Operator register / Case 03 / SaaS / B2B / Closed loop across two product launches. — Reach end-to-end — variants, channels, performance — with signal feeding next cycle's Sense read.`
- §06 Routes: `Product 01 / Sense / Reading layer / ←` · `Product 02 / Form / Execution layer / ←` · `Engine / How it composes / Adaptive system / →` · `Up one / Products index / All three Products / ←`. CTA: `Start with Reach`.

### Visuals (Reach-specific)
- Hero anchor: tiled output grid (90deg 11.111%, 0deg 33.333% gridlines) + horizontal `.scan` progress bar (62% strong → 38% faint, 5px tall, rounded).
- `vis-tile` (R—01): 16.666% × 25% grid.
- `vis-rays` (R—02): conic-gradient ray pattern from 12%/50% origin (alternating 6deg/10deg) + ink dot origin.
- `vis-perf` (R—03, ink): bar-chart pattern (variable-alpha vertical bars at 6/14/22/30/38…% widths, masked top 85%).
- sys-3-emph = ink full-bleed card (mirrors Sense sys-5 / Reach sys-3).

---

## Engine.html

### Section order
1. Header.
2. **Hero** — eyebrow `The Engine` + title + dominant 16:9 stack-frame diagram + 2-col foot (prose left, legend right).
3. **§02 The argument** — 2-col argument + bottom pull quote.
4. **§03 Agentic / human** — 2-col `.duo` (paper / paper-2) + foot.
5. **§04 Research lineage** — 6-cell timeline grid + 2-col foot.
6. **§05 Continue** — close display + 4-cell `.routes` + close-cta.
7. Footer (`Engine · v1 proto · visible stack`).

### Copy
- Crumb: `Index / Engine`.
- Eyebrow `The Engine`. H1: `Orchestration, <dim>made visible.</dim>`
- Stack frame corners (TL/TR/BL/BR): `Engine / Stack` · `L1 → L4` · `Substrate → Surface` · `v1.0 · research register`. Center placeholder: `L1–L4 stack diagram — bespoke design in production`.
- Stack rows (top→bottom L4→L1; L4 emphasized ink):
  - L4 Surface — `Variants, channels, and performance loop — the work meeting the world.` meta `Reach · agentic-led`.
  - L3 Craft — `Still, motion, spatial, sonic — finished work at brand-level fidelity.` meta `Form · human-curated`.
  - L2 Reading — `Brand, audience, culture, field, and format intelligence as substrate.` meta `Sense · agentic-led`.
  - L1 Calibration — `The shared substrate every level above queries and compounds against.` meta `Engine · foundational`.
- Hero foot prose: `<strong>The Engine is the orchestration layer underneath the three Products.</strong> It is the calibration substrate, the routing logic, and the loop that lets Sense, Form, and Reach compose without losing brand fidelity between stages. We publish the stack rather than hide it — visible architecture is how buyers verify durability.`
- Legend: `Emphasized layer — current point of leverage` · `Active layer — queryable substrate or live craft` · `Outline only — structural slot`.
- §02 eyebrow `Section 02  ·  The argument`. Display: `Why orchestration. <dim>Why visible.</dim>`. Lede: `Most creative production stacks are stitched together — agency, studio, in-house, freelance, AI, vendor — with brand calibration re-interpreted at each handoff. The work degrades not because any link fails, but because no link holds the whole. Orchestration is the answer; visibility is what makes orchestration trustable.`
- Argument cols:
  - Why orchestration is durable: `<strong>Calibration compounds when it's held in one substrate.</strong> Sense reads it, Form composes against it, Reach enforces it across variants. The compounding only happens when the substrate itself is durable — not re-derived per engagement, not re-interpreted per vendor, not flattened to a brief.` / `The Engine is what makes the substrate durable. It is the contract every Product queries, the routing logic between Products, and the loop closure that lets Reach's signal sharpen Sense's next reading without human re-translation.`
  - Why visibility is non-negotiable: `<strong>Buyers committing to a multi-cycle creative system need to see the system.</strong> Black-box claims about "AI-powered orchestration" are doing a lot of work in the market right now and almost none of it is verifiable. A stack you can't inspect is a stack you can't trust to compound across a budget cycle.` / `We publish the L1–L4 architecture, the agentic / human-curated split per layer, and the contracts each layer holds. The Engine is sold on its readability as much as its capability. If a buyer can't draw the stack from memory after a first conversation, we haven't earned the engagement.`
- Pull quote: `A stack you can't inspect is a stack you can't trust to compound.`
- §03 eyebrow `Section 03  ·  Agentic / human`. Display: `Where machines lead. <dim>Where humans hold.</dim>`. Lede: `The agentic / human-curated split is a deliberate framework, not an aspirational AGI claim. Some layers benefit from agentic scale — reading at breadth, generating variants, deploying natively across channels. Others benefit from a hand on the work — craft decisions, taste calls, the moments where the brand is being judged most closely. Each layer is shaped by what the work actually rewards.`
- Agentic-led: tag `Agentic-led`, h3 `Reading at breadth, deploying at scale.`, p `Where the work rewards continuous coverage, structured retrieval, and high-volume variation, agents lead. Calibration is enforced at the contract layer; agents work inside the substrate, not against it.`
  - `Sense / L2 — Continuous reading across brand, audience, culture, field, format.`
  - `Reach / R—01 — Variant production from masters, brand-coherent at scale.`
  - `Reach / R—02 — Channel-native deployment across heterogeneous platforms.`
  - `Reach / R—03 — In-flight performance reading and substrate feedback.`
- Human-curated: tag `Human-curated`, h3 `Craft, taste, and the call only a person makes.`, p `Where the work is judged most closely, humans hold the pen. Form is human-curated end to end. Format Intelligence is researcher-shaped. The Engine itself is human-architected; agents serve it, not the other way around.`
  - `Form / L3 — Still, motion, spatial — finished craft at brand-level fidelity.`
  - `Sense / S—05 — Format Intelligence — foresight requires research judgement.`
  - `Engine / L1 — Calibration substrate design — architected, not inferred.`
  - `All / Review gates — Brand calibration sign-off, taste calls, irrevocable decisions.`
- Foot: `<strong>The split is engineered, not philosophical.</strong> It changes as tools change — that's why Format Intelligence (S—05) sits where it does, and why the next paragraph is about research lineage rather than feature roadmaps.`
- §04 eyebrow `Section 04  ·  Research lineage`. Display: `Continuous research. <dim>Treated as infrastructure.</dim>`. Lede: `Format Intelligence isn't a deliverable line item — it's a continuous investment. The Engine reserves bandwidth for reading emerging tools, formats, and capabilities ahead of market consensus, and folds that reading back into the substrate every Product queries. Lab register, not vendor pitch.`
- Lineage cells (6):
  - 2023 — `Calibration substrate prototype` — `First working contract layer between research output and creative input.`
  - 2024 — `Sense as Product` — `Five Systems formalised; Brand and Format Intelligence pulled into one stack.`
  - 2025 — `Form & Reach composed` — `Three Products live; orchestration contracts publishable as a stack diagram.`
  - **2026 · Now** (`data-now=true`, ink bg) — `Engine v1 — visible stack` — `L1–L4 architecture published; agentic / human split made explicit per layer.`
  - 2027 — `Sonic discipline expansion` — `Form's fourth media shape brought in-house; deferred slot becomes live System.`
  - 2028→ — `Substrate openness` — `Reading layer formats published for client-side queryability against the contract.`
- Lineage foot p1: `<strong>Format Intelligence is the visible edge of a continuous discipline.</strong> Bandwidth is reserved each cycle — not won project-to-project — for reading emerging tools and asset shapes. That investment is what keeps the agentic / human split honest as the underlying capabilities move.` p2: `The lineage above is a working timeline, not a roadmap pitch. Past entries are shipped layers of the Engine; the "now" cell is the one we're writing against; future cells are the slots we've reserved capacity for. Buyers can ask after any of them.`
- §05 eyebrow `Section 05  ·  Continue`. Close display: `Step into a Product. <dim>Or open a conversation about the stack.</dim>`
- Routes: `Product 01 / Sense / Reading layer · L2 / →` · `Product 02 / Form / Craft layer · L3 / →` · `Product 03 / Reach / Surface layer · L4 / →` · `Up one / Products index / All three Products / ←`.
- Close cta p: `The Engine is sold on its readability as much as its capability. If anything in the stack is unclear, that's a conversation we'd rather have than skip.` CTA: `Open a conversation`.

### Visuals/structure
- Stack frame: 16:9 paper card, 22px radius, inner `.stack-grid` inset 64×56, 4-row equal grid w/ 14px gap. Each row = `88px 1fr 240px` cols + horizontal 14px-stripe pseudo-overlay. Ink-emphasized row uses inverted hairline pattern.
- `.duo` 2-col split with 1px center divider; agentic col paper, human col paper-2. Tags use 8×8 dot glyphs (filled vs outlined). `.duo-col li` row grid `80px 1fr` (where / what) with 1px top dividers.
- Lineage axis: top hairline + cells (8px radius, paper-2 bg, min-height 110); active cell ink-on-paper. 6-col grid (1100: 3-col, 720: 2-col).

---

## Work Index.html

### Section order
1. Header.
2. **§01 Intro** — 2-col grid (display + body) + crumb on top + 4-stat meta strip on bottom.
3. **§02 Featured** — sec-head + 4 featured cases, each a different layout treatment.
4. **§03 Filters** — restrained text-led filter bar (4-col: lead + 3 groups) + filter-state row.
5. **§04 Full index** — 3-col tile grid w/ varied aspect ratios + load-more foot.
6. Footer (`Work · index v1 · updated Apr 2026`).

### Copy (verbatim)
- Crumb: `Index / Work`. H1: `A working portfolio. <dim>Read it the way you'd read a journal.</dim>`. Body: `<strong>Each engagement is a case — not a deliverable list.</strong> Featured cases below are written long; the index after them is browseable. Both carry their own brand register, never ours.`
- Stats: `Cases live / 26` · `Featured / 04` · `Industries / 11` · `Updated / Apr 2026`.
- §02 sec-head: eyebrow `Section 02  ·  Featured`. H2: `Four cases, <dim>written long.</dim>`. Lede: `Read whichever pulls. Each entry is treated as editorial — the visual register, the pacing, and the depth of writing sit closer to a magazine spread than a portfolio tile. Cases that need more room get more room.`

#### Featured 01 — Hyrst (full bleed wide 21:9, copy beneath)
- Image label `Image 01 / 04`, right `Hyrst · archive lookbook`. Tags: `Industry — Apparel · Form — Still + Motion · Sense — All five`. H3: `A 24-month brand calibration for a heritage outerwear label, run as one continuous engagement. <dim>Sense, Form, and Reach composed end-to-end.</dim>`. Lede: `Hyrst arrived with a heritage archive, a fragmented seasonal output, and a brand that read differently in every channel. We held the calibration substrate, ran continuous Sense across culture and category, and produced two seasons of stills and motion at brand-level fidelity — with channel-native variants pushed through Reach.` Foot: `Case — F01` · `Read the case →`.

#### Featured 02 — Norder (4:5 image left, copy right)
- Tags: `Industry — Hospitality · Product — Form-led · Form — Still + Spatial`. H3: `Norder — <dim>an editorial reframe for a 19-property hospitality group.</dim>`. Lede: `A Form-led engagement — portraiture, spatial documentation, and a print-grade lookbook held to one calibration across nineteen sites. No Reach this cycle by design; the work was sold to be inhabited, not amplified.` Foot: `Case — F02`.

#### Featured 03 — Sonance (split pair: 3:4 portrait + 4:3 landscape)
- Tags: `Industry — Consumer tech · Product — Sense + Reach · Variants — 1.4k`. H3: `Sonance — <dim>a global product launch run as one closed loop.</dim>`. Lede: `A consumer hardware launch across eleven markets. Sense ran field, audience, and format reading continuously through the campaign window; Reach produced 1,400 brand-coherent variants and read the performance signal back into the substrate every 72 hours. Form was held tight to one master.` Image labels: `03a / Portrait detail` · `03b / Master frame`. Foot: `Case — F03`.

#### Featured 04 — Verge Foundation (full-bleed inverted ink card, image right 5:6)
- Eyebrow: `Featured 04  ·  Multi-cycle`. Tags: `Industry — Cultural institution · Engine — Multi-cycle · Years — 03`. H3: `Verge Foundation — <dim>three cycles of brand custodianship under one Engine.</dim>`. Lede: `A foundation rebuilding its public-facing identity across exhibitions, programmes, and digital archive. We've held the calibration substrate continuously since 2023; each cycle composes a different mix of Sense, Form, and Reach against the same contract.` Image label `Image 04 / 04 / Verge · archive frame`. Foot: `Case — F04`.

### Filters (verbatim labels + counts)
Eyebrow: `Section 03  ·  The full index`. Lead: `Filter the index. <dim>Pick across taxonomies; results compose.</dim>`
- **Industry**: All 26 / Apparel 06 / Hospitality 04 / Consumer tech 05 / Cultural 04 / Finance 03 / Other 04.
- **Product**: All 26 / Sense-led 07 / Form-led 10 / Reach-led 05 / Engine multi-cycle 04.
- **Form System**: All 26 / Still 14 / Motion 09 / Spatial 06 / Sonic 02.
- Filter state default: `Showing 12 of 26 cases · All industries · All products · All form systems` + `Clear filters`.

### Index tiles (12 shown)
Each = aspect (`land`/`port`/`square`/`wide`) + ph palette (`cool`/`sand`/`charcoal`/`cream`/`midnight`/`steel`/`pearl`/`dark`/`warm`/`editorial`) + meta `num / title / yr` + sub + tags:
- 005 · `Hagen Studios` · 2025 · `Independent record label brand system; print-led identity.` · Cultural · Form-led · Still.
- 006 · `Tindra` · 2025 · `Skincare line launch — portraiture and packaging system.` · Apparel · Sense+Form · Still.
- 007 · `Solen` · 2025 · `Audio device campaign — motion-led, channel-native variants.` · Tech · Reach-led · Motion.
- 008 · `Mariner Hotel` · 2024 · `Property reframe across three coastal sites.` · Hospitality · Form-led · Still+Spatial.
- 009 · `Korva Bank` · 2024 · `Private bank rebrand — calibrated across regulated touchpoints.` · Finance · Engine multi-cycle · Still.
- 010 · `Aldra Mobility` · 2024 · `EV brand launch across eight European markets.` · Tech · Reach-led · Motion.
- 011 · `Verge / Cycle 02` · 2024 · `Foundation programme — second cycle of multi-year custodianship.` · Cultural · Engine · Still+Spatial.
- 012 · `Northbound Ski Co.` · 2024 · `Apparel brand — archive lookbook and seasonal motion suite.` · Apparel · Form-led · Still+Motion.
- 013 · `Lumen House` · 2023 · `Boutique hospitality — portraiture and brand book.` · Hospitality · Form-led · Still.
- 014 · `Marle Press` · 2023 · `Publishing imprint — type system and cover programme.` · Cultural · Form-led · Still.
- 015 · `Thurn Capital` · 2023 · `Investment firm rebrand — institutional register, restrained palette.` · Finance · Form-led · Still.
- 016 · `Drift Coffee` · 2023 · `Specialty roaster — full Engine cycle, multi-format.` · Other · Engine · Still+Motion.
- Foot: `12 of 26 shown · older cases archived` + button `Load 14 more`.

### Visuals/structure
- Featured 04 uses negative-margin pull-out (`margin: 0 calc(-1*var(--gutter)) 140px`) and `--paper` swap to ink — the only inverted Featured.
- Tile aspect ratios: `land=4/3`, `port=3/4`, `square=1/1`, `wide=16/10`.
- Each `.ph` placeholder has 2 corner crops (top-left + top-right via `.crop`, `.crop.tr`).
- Background SVGs use varied stroke patterns (lines, circles, rects, dashed connector lines).

### Motion / interaction
- Filter buttons: single-select per group (JS toggles `aria-pressed`). Selected button gets 6px ink dot before label. Clear button resets all to first option ("All"). State string updates live (count remains 12 of 26 — display only).
- Tile hover: `tile-img translateY(-3px)` 0.4s. Featured case-link arrow translateX 4px on hover.
- "Load 14 more" is decorative-only (no JS handler).

---

## Case Study - Sonance.html

### Section order
1. Header.
2. **§01 Hero (Sonance brand register)** — full-bleed page background swap to `--sonance-paper`. Meta strip + title block + 21:9 anchor + 4-stat hero foot.
3. **§02 Brief (Amoeboid editorial)** — block-head + brief-body (quote left + prose right) + 4-col key-facts.
4. **§03 Orchestration** — block-head + orch-body (prose left + stack diagram right showing active/deferred cells).
5. **§04 Output gallery (Sonance brand register)** — full-bleed paper swap, 12-col gallery grid, 8 frames.
6. **§05 Reflection (Amoeboid editorial)** — block-head + reflection-body (prose left + pull quote/carry-forward right).
7. **§06 Continue** — 3-up related cases + cross-cta with two CTAs.
8. Footer (`Case · Sonance · template v1`).

### Copy
- Header active link: Work (`aria-current="section"`).
- Meta strip: `← Work / Featured 03` · `Case · Sonance · 2025`.
- H1: `Sonance.` Sub: `<strong>Premium audio, considered craft.</strong> A consumer audio launch composed across eleven markets — one master, fourteen hundred variants, the substrate held end‑to‑end.`
- Anchor corners: `Image 01 / 08` · `Sonance · Master frame` · `02:39:17` · `Form · Still`. Pill: `Brand-register hero photography — placeholder`.
- Hero foot: `Industry / Consumer audio` · `Engagement / Launch + ongoing` · `Markets / Eleven` · `Year / 2024 — 2025`.
- §02 eyebrow `Section 02  ·  Brief`. H2: `What Sonance <dim>brought to us.</dim>` Lede: `Sonance had a defined product, a Scandinavian design language, and a launch window that crossed eleven regulated markets. What they did not have was a way to hold their visual register coherent at the variant volume the launch required — and a clear answer to who would do the holding.`
- Brief quote: `"<em>We don't want a campaign. We want a system that produces a campaign and stays calibrated when we run the next one.</em>"` Attrib: `Sonance · Head of brand · Q3 2024`.
- Brief prose: `<strong>The ask was structural, not creative.</strong> Sonance came in with a product and a hero image; what they didn't have was the substrate to keep the brand calibrated as 1,400 variants moved through eleven markets and eight channels. They wanted the calibration done once, and held.` / `Modular entry began with Sense — specifically Brand Intelligence and Format Intelligence — before any Form work was sold in. That sequence is the case's structural decision; the rest of the engagement composes against it.`
- Key facts: `Industry / Consumer audio — premium` · `Scope / Brand calibration + launch` · `Timeline / 14 weeks · ongoing custodianship` · `Team / 11 Amoeboid · 4 Sonance-side`.
- §03 eyebrow `Section 03  ·  Orchestration`. H2: `How the stack <dim>lit up for this case.</dim>` Lede: `Modular entry began at L2 — the Reading layer — and composed forward into Form for masters and Reach for variant production. The diagram below mirrors what was live for Sonance; cells outside the engagement stay visibly outlined to keep the stack readable.`
- Orch prose: `<strong>Sense ran first.</strong> Brand Intelligence and Format Intelligence read against the existing Sonance archive and the live state of consumer-audio launches across the target markets. The output was a calibration substrate — not a deck — that Form and Reach queried directly through the engagement.` / `<strong>Form held one master.</strong> Still and Motion at brand-level fidelity, calibrated against the substrate. Spatial was deferred by design (Sonance's retail partners hold that). Sonic was tagged as a future-cycle expansion.` / `<strong>Reach closed the loop.</strong> 1,400 variants generated against the master and channel-deployed across eight surfaces. Performance signal read back into the substrate every 72 hours — sharpening Sense's next reading without re-translation.`
- Diagram head: `Engagement · L1–L4` / `Sonance · Cycle 01`. Diagram active states:
  - Sense / L2: S—01 Brand Intel. **active**, S—02 Audience, S—03 Culture, S—04 Field (all idle), S—05 Format Intel. **active**.
  - Form / L3: F—01 Still **active**, F—02 Motion **active**, F—03 Spatial idle, F—04 Sonic **deferred** (dashed border).
  - Reach / L4: R—01 Variant Prod. **active**, R—02 Channel Activation **active**, R—03 Performance **active**.
- Diagram foot: `Modular entry — Sense first` · `• Loop active · 72h` (pulse dot, 2.4s opacity 1↔0.35).
- §04 eyebrow `Section 04  ·  The work`. H2: `Eight frames <dim>from the cycle.</dim>` Lede: `Stills, motion, and a single spatial study from the launch window. Imagery placeholders sit in Sonance's register — cool off-white, restrained type, generous negative space. The brand carries the gallery; Amoeboid's chrome is paused.`
- Frames + caption schema (per frame: corner-tl + corner-br + frame-cap):
  - 01 (g-01, 21:9): `Frame 01 · Still` / `Master · product` — cap `Master frame — product on horizon` / `F—01 · Still`.
  - 02 (g-02, 4:5): `Frame 02 · Still` / `Material study` — cap `Material study — brushed alloy` / `F—01 · Still`.
  - 03 (g-03, 3:2 dark, play button): `Frame 03 · Motion` / `02:14 · loop` — cap `Hero motion — product reveal` / `F—02 · Motion`.
  - 04 (g-04, 16:9): `Frame 04 · Still` / `Environmental` — cap `Environmental — in-room` / `F—01 · Still`.
  - 05 (g-05, 1:1): `Frame 05 · Still` / `Packaging` — cap `Packaging — silhouette study` / `F—01 · Still`.
  - 06 (g-06, 3:4): `Frame 06 · Spatial` / `Render` — cap `Spatial — retail study` / `F—03 · Deferred`.
  - 07 (g-07, 1:1 dark, play): `Frame 07 · Motion` / `00:09` — cap `Variant motion — channel cut` / `F—02 · Motion`.
  - 08 (g-08, 1:1): `Frame 08 · Variants` / `9 of 1,400` — cap `Variant grid — nine of fourteen-hundred` / `R—01 · Variant`.
- Gallery foot: `Eight frames shown · full set in client portal` · `Sonance · Cycle 01 · 2024–25`.
- §05 eyebrow `Section 05  ·  Reflection`. H2: `What carried <dim>forward.</dim>` Lede: `The output of the cycle was the campaign. The byproduct was a calibrated substrate that the next cycle queries against directly — and a published 72-hour loop closure that has become the template for similar Reach-led engagements.`
- Reflection prose: `<strong>Sequencing was the decision.</strong> Beginning at L2 — not L3 — meant the substrate was durable before any image was made. Form composed against a known calibration; Reach enforced it across variants. The cycle's coherence is downstream of that one structural choice.` / `<strong>The loop earned its keep.</strong> R—03 fed Sense's reading every 72 hours through the launch window. By week three, audience hypotheses from S—02 had measurably sharpened against in-market signal — and the next variant batch reflected the sharpening without human re-translation.` / `<strong>Sonic was the visible defer.</strong> Not within scope, but tagged at the substrate level so the next cycle can compose it in. That tag is now a standard pattern.`
- Pull quote: `"The substrate is now Sonance-side property. That's the deliverable."` Attrib: `Sonance · Head of brand`.
- Carry forward h5 `Carried into Brand Calibration` p: `72-hour loop closure pattern, deferred-Sonic substrate tag, and Sense-first sequencing template — all promoted to Engine-level patterns after this cycle.`
- §06 eyebrow `Section 06  ·  Continue`. H2: `Related cases. <dim>Or back to the index.</dim>`
- Related: `F01 Hyrst 2025 — 24-month brand calibration for a heritage outerwear label.` · `007 Solen 2025 — Audio device campaign — motion-led, channel-native variants.` · `F04 Verge Foundation 2026 — Three cycles of brand custodianship under one Engine.`
- Cross-cta p: `<strong>Read more from the working portfolio</strong> — or open a conversation about composing a similar engagement.` CTAs: ghost `All cases` + filled `Open a conversation`.

### Visuals/structure (Sonance-specific)
- **Brand-register palette** (used in hero + gallery only): `--sonance-paper #efeeea`, `paper-2 #e3e1db`, `paper-3 #d4d2cb`, `graphite #1c1d1f`, `fjord #4b5560`, `pale #e9e7e1`. Soft/mute/line opacities 0.62/0.42/0.10.
- Sections 02/03/05 swap back to Amoeboid `--paper`. Sections 01 and 04 use Sonance register — this is the "case carries its own register" pattern.
- Gallery 12-col grid, gap 24px. Placements: g-01 span 12; g-02 span 5 + g-03 span 7; g-04 span 7 + g-05 span 5; g-06 span 4 + g-07 span 4 + g-08 span 4.
- Orch diagram: `paper` rounded card 14px radius, rows are `86px 1fr` (label / cells). Active cells = ink swap. Deferred = dashed border, `--paper` bg, 0.7 opacity.
- Play button on motion frames: 56×56 ink-stroked circle, paper-translucent fill (`backdrop-filter: blur(2px)`).

### Motion specifics
- `.pulse` dot in orch foot: 2.4s opacity-only `1↔0.35` (not the box-shadow ripple variant — different keyframes from Sense).
- Related case hover: `translateY(-3px)` 0.4s.

---

## Company.html

### Section order
1. Header.
2. **§01 Hero** — centered, no imagery: crumb (centered) + display + thesis paragraph + 4-stat meta strip.
3. **§02 Approach** — block-head + 2-col approach-prose + 3-col `.pillars`.
4. **§03 Point of view** — block-head + 2-col pov-body (prose left + side aside w/ quote + tenets) + research-lineage strip.
5. **§04 Contact** — 2-col contact-grid (lead left + 3 contact paths + meta).
6. Footer (`Company · v1 · updated May 2026`).

### Copy
- Hero crumb: `— Company / Position & thesis —`. H1: `A studio shaped like software <dim>— built so brands compound, not erode, under AI.</dim>`
- Thesis: `<strong>Amoeboid is an adaptive creative production company.</strong> We hold the calibration substrate that lets AI-assisted output stay coherent across volume, channel, and time — so that scale becomes brand equity instead of brand drift. Our position is structural, not stylistic: we sell the discipline that compounds, and the system that enforces it.`
- Hero meta: `Founded / 2023 · Brooklyn / London` · `Discipline / Adaptive creative production` · `Engagements / 26 cases · 11 industries` · `Stack / L1–L4 · visible`.
- §02 eyebrow `Section 02  ·  Approach`. H2: `How the studio <dim>is shaped.</dim>` Lede: `Amoeboid is organised as an orchestration layer over a visible stack. The shape is software's, not an agency's — modular surfaces over a shared substrate, each engagement a composition rather than a deliverable list. Three structural decisions make the rest of the system legible.`
- Approach col-1: `<strong>The stack is visible by design.</strong> Four layers — Engine (L1), Sense (L2), Form (L3), Reach (L4) — each addressable, each inspectable. Clients see what is composed for them and where the calibration lives. A stack you can't inspect is a stack you can't trust to compound; we treat that as a structural property of the work, not a marketing one.` / `<strong>Brand Calibration is the moat.</strong> The substrate that holds a brand's register coherent across volume is what we sell. The output is downstream of it. Every engagement adds to the substrate; the substrate never resets between cycles.`
- Approach col-2: `<strong>Modular entry, not packaged offerings.</strong> A client can begin at any layer. Sense without Form. Form without Reach. Engine multi-cycle without a single campaign. The contract composes against need, not against a price sheet. Cases run in our portfolio prove this empirically across eleven industries.` / `<strong>Agentic and human, named.</strong> Where work runs autonomously through the stack and where it is held by a person is published per case, not obscured. The studio reads like an instrument; the instrument reads like a substrate.`
- Pillars:
  - 01 `Visible stack` — `Four addressable layers. Inspectable composition per engagement. The architecture is the marketing.`
  - 02 `Calibration as moat` — `Substrate-first. Output composes against a known calibration that survives the cycle and sharpens through it.`
  - 03 `Modular entry` — `Sense without Form. Form without Reach. Engine without campaign. The contract is composed, never packaged.`
- §03 eyebrow `Section 03  ·  Point of view`. H2: `What we believe <dim>about the field.</dim>` Lede: `The AI creative production landscape is mid-collapse into two failure modes — volume without coherence, and craft without scale. Neither is durable. Our point of view is that the missing layer is calibration, and that the studios who solve it will be the ones whose work compounds.`
- POV prose:
  - `<strong>Volume without coherence is the dominant failure mode.</strong> Generative tools have made variant production cheap; they have not made it coherent. Every brand that has stood up an AI pipeline in the last twenty-four months has produced output that is technically on-brief and structurally off-brand — and the gap is only legible at scale, after the spend is sunk.`
  - `<strong>Craft without scale is the second failure mode</strong>, and it is the one most agencies are pivoting toward as a defensive position. It does not survive the contract environment. Clients are not asking for less output; they are asking for output that holds up under more.`
  - `<strong>Calibration is the layer that resolves both.</strong> A substrate that reads a brand's register, audience, and format conventions accurately enough to enforce coherence at variant volume — and that sharpens through the engagement rather than degrading. We have spent three cycles building this layer; the field is roughly two cycles behind, and closing.`
  - `<strong>The studio that wins is the one that publishes its substrate</strong> — that lets clients inspect the calibration, lets the loop close in public, and lets the discipline compound case-over-case. That is the company we are building.`
- POV quote: `"Brand drift is no longer a quarterly risk. At AI variant volume, it's a weekly one."`
- Tenets (h5 `Tenets`, ol prefixed `01`, `02`…):
  - `Calibration is the moat. <em>Output is downstream of substrate.</em>`
  - `Coherence is a function of the loop. <em>Read · compose · deploy · read again.</em>`
  - `The stack must be inspectable. <em>Trust is a property of legibility.</em>`
  - `Modular entry beats packaged offering. <em>Need composes the contract.</em>`
- Lineage strip h4 `Research lineage` → 6 cells: `2023 Substrate concept` · `2024 First Engine cycle` · `2025 Loop closure published` · **`2026 · now Format Intelligence`** (ink) · `2027 Calibration as service` · `2028+ Open substrate`.
- §04 eyebrow `Section 04  ·  Contact`. H2: `Reach the studio. <dim>One path, no ceremony.</dim>` p: `<strong>Open a conversation</strong> if you want to compose an engagement, ask a structural question, or read a substrate against your brand. The Adaptive assistant on this site can route you, and is read by the team.`
- Contact paths (each row: ix / title / sub / arrow):
  - `01 / Open a conversation / Structured intake. Goes to a partner. Reply within two business days.` (href `#start`)
  - `02 / Adaptive — the on-site assistant / Ask anything about the stack, the work, or how an engagement composes. Read by the team.` (href `#adaptive`)
  - `03 / studio@amoeboid.xyz / For press, partnerships, and substrate-level questions.` (`mailto:studio@amoeboid.xyz`)
- Contact meta: `Studio  Brooklyn / London` · `Hours  ET / GMT` · `Response  within 48 hrs`.

### Visuals/structure
- Hero is unique on the site: centered text, no anchor visual, hero-meta is `880px max-width` constrained band aligned-left within a centered 4-col grid.
- Pillars: 3-col, separated by 1px right-borders, no border on last; padding `36px 36px 36px 0`.
- POV tenets `ol counter-reset` displays `01`, `02` numerals via `::before`.
- Lineage strip layout differs from Engine's: `200px label-col + 6-col cell track` enclosed in a 10px-radius outlined container; ink-on-paper for "now" cell. Labels are short (single-line), no description.
- Contact path hover: bg → paper-2, padding-left/right shifts to 14px (with negative margin compensation), arrow translateX 4px.

### Animation note
- Company `.anim` uses different stagger delays: `a1=80, a2=220, a3=360, a4=500ms` (slightly slower cadence than the 80/200/320/440 used elsewhere).

---

## Global Footer.html

### Structure
- `<footer class="amb-footer">` (paper-2 bg, 1px ink-line top), inner `.wrap` (max 1640, gutter 56).
- 3-column grid `1.4fr 1fr 1fr`, gap 96px (1100px collapses to 2-col with brand spanning row; 720px → 1-col 48px).
- Below the cols: `.amb-legal` row, 80px top margin, 1px-line top, 24px top padding, between-cols 28/16px gaps; collapses to column on 720px.

### Column 1 — Brand
- Lockup: 32×32 `.symbol` (Nebula SVG, see filter notes above) + wordmark `amoeboid`. Symbol margin-right: -6px (negative — "slight overlap into wordmark per spec"). Wordmark size 26px (larger than header's 22px) / weight 700 / ls -0.029em.
- Tagline (mono, 22% tracking, mute): `Adaptive Creative AI Production`.
- Lede (display, 15px, max 36ch): `<strong>A studio shaped like software.</strong> We hold the calibration substrate that lets brands compound, not erode, under AI-assisted volume.`

### Column 2 — Site (sitemap)
- h4 `Site` (mono cap, hairline border-bottom).
- Links (display 500, 16px, gap 12px, 0.85 opacity → 1 hover):
  - `Products` → `Products Hub.html`
  - `Engine` → `Engine.html`
  - `Work` → `Work Index.html`
  - `Company` → `Company.html`
  - `Contact` → `#contact`
- Hover: opacity 1 + a 0→18px ink underline drawn after the text via `::after` (0.3s width transition).

### Column 3 — Contact
- h4 `Contact`.
- Path 1 — label `General` / `hello@amoeboid.com` (mailto).
- Path 2 — label `Studio` / `studio@amoeboid.com` (mailto).
- Location (separated by 1px-top divider, 18px pad-top): `<strong>Melbourne / Global</strong><br>Response within 48 hrs · AEDT`.

### Legal row (mono, 10px, 20% tracking)
- Left: `© 2026 Amoeboid AI`.
- Center: legal-links — `Privacy` → `#privacy` · `Terms` → `#terms` · `Colophon` → `#colophon` (28px gap; hover ink-mute → ink).
- Right: `.build` — 6×6 ink-mute dot + `v1.0 · May 2026`.

### Notes / locks
- No social, no newsletter, no sentiment per HTML comment in preview-shell: "Restrained brand restatement, sitemap, contact — legal row at the very bottom."
- Note **email-domain inconsistency**: footer uses `@amoeboid.com`, Company page uses `@amoeboid.xyz`. Pick one when implementing.
- Footer is the only place the Nebula symbol renders alongside the wordmark; header lockups across all pages render wordmark only. The static gradient implementation here is explicitly scoped "static at footer scale per motion spec" — animated turbulence (if any) belongs at hero scale, not footer.

---

### Small cross-page reconciliations to flag during build
- Sense/Form/Reach product pages reference `#engine`/`#work`/`#company` in their nav (anchors), while Homepage/Engine/Work/Company headers link to real `.html` files. Normalize to filenames in Next.js routing.
- Products Hub `Open Sense/Form/Reach` `.route` links point to `#sense-page`/`#form-page`/`#reach-page` rather than `Sense.html` etc. — re-link.
- Case Study / Work Index "Read the case" links are `#`. Wire to `/work/[slug]`.
- Featured 03 on Work Index = Sonance — its h3 ("a global product launch run as one closed loop") differs slightly from the case study's hero sub. Treat case-study copy as canonical.

agentId: abe899c8e483fa91b (use SendMessage with to: 'abe899c8e483fa91b' to continue this agent)
<usage>total_tokens: 272543
tool_uses: 11
duration_ms: 582988</usage>