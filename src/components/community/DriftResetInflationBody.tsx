import { PlaceholderMedia } from "./PlaceholderMedia";

/**
 * Field Note F—01 body, locked April 2026.
 * Inline placeholder sits between Drift and Reset per build-dev-1.4 §3.2.
 */
export function DriftResetInflationBody() {
  return (
    <>
      <p>
        The promise of AI in creative production was scale. More output,
        faster turnaround, lower marginal cost per asset. That promise has
        been delivered. What followed was less expected.
      </p>
      <p>
        Most of what&rsquo;s been built is more of the same. Faster, cheaper,
        less distinct. The marginal cost of a variant has approached zero;
        the marginal cost of brand coherence has gone up. Production volume
        has detached from brand value, and most operators are now generating
        more output than they can hold a register for.
      </p>
      <p>
        We see three failure modes recurring across the AI creative production
        landscape — across categories, scales, and stack maturities. They are
        not technology problems. They are substrate problems. We name them
        Drift, Reset, and Inflation.
      </p>

      <h2>Drift</h2>
      <p className="article-h2-sub">
        <em>Brand coherence breaks down at variant volume.</em>
      </p>
      <p>
        A master asset is produced at hero quality. The brand calibration is
        documented in a deck. Operators downstream of the master — variant
        teams, channel specialists, AI tools — receive the documentation and
        produce variants. By variant fifty, the documentation has been
        interpreted slightly differently across operators. By variant five
        hundred, the brand is unrecognisable. By variant five thousand,
        &ldquo;the brand&rdquo; is whichever interpretation got copied most.
      </p>
      <p>
        A familiar pattern: a brand commissions thousands of paid social
        variants per quarter. By the bottom of the funnel, the voice has split
        into several distinct registers — none of them the brand.
      </p>
      <p>
        The root issue is that most calibration today is documentation, not
        infrastructure. Documentation is static. It assumes a single reader, a
        single moment of interpretation, a single execution. At scale, none of
        those assumptions hold. The brief travels through dozens of hands;
        each hand makes a calibration decision; the decisions don&rsquo;t
        reconcile.
      </p>
      <p>
        A substrate, by contrast, is queryable. Every variant generation step
        queries the same source. The source enforces coherence rather than
        describing it.
      </p>

      <div className="my-12 not-prose">
        <PlaceholderMedia
          ratio="4/3"
          label="Inline · 4:3 · optional"
          sub="Mid-article visual"
        />
      </div>

      <h2>Reset</h2>
      <p className="article-h2-sub">
        <em>Calibration doesn&rsquo;t survive cycle-to-cycle.</em>
      </p>
      <p>
        A brand commissions a campaign. The work goes well. Calibration is
        built into the process — voice is captured, register is enforced,
        audience is read accurately. Six months later, the next campaign
        starts. New brief. New team. New tools. The calibration from the
        first campaign sits in a shared drive, mentioned in the kick-off,
        and then quietly bypassed because it&rsquo;s faster to re-litigate
        than to integrate.
      </p>
      <p>
        Three campaigns in, the fourth campaign doesn&rsquo;t know what the
        first three learned. Each cycle compounds for the production team —
        they get better, faster, more capable — but the compounding never
        reaches the brand. The brand resets at every engagement.
      </p>
      <p>
        The diagnostic is simple: when this engagement ends, what does the
        next engagement inherit? If the answer is &ldquo;a folder of finished
        assets,&rdquo; the calibration didn&rsquo;t compound. If the answer
        is &ldquo;a working substrate the next cycle queries,&rdquo; it did.
      </p>

      <h2>Inflation</h2>
      <p className="article-h2-sub">
        <em>Output grows. Distinctiveness shrinks.</em>
      </p>
      <p>
        AI lowered the floor of &ldquo;acceptable&rdquo; output across an
        entire category. What used to require a craft team can now be
        produced by a templated stack in minutes. The result is that the
        average brand campaign now reads like every other brand campaign.
        Same tropes. Same composition. Same beats. The technology
        democratised production and homogenised the output it produces.
      </p>
      <p>
        This is the failure mode operators feel last because the dashboard
        numbers go up. More variants shipped. More channels activated. Lower
        cost-per-output. The motion looks like progress. What&rsquo;s not in
        the dashboard is the loss of register — the thing a brand sounded
        like, looked like, felt like before everything got production-line.
      </p>
      <p>
        The marginal cost of a variant approaches zero. The marginal value of
        distinctiveness approaches infinity. Few operators have rebuilt their
        stack around that asymmetry.
      </p>

      <h2>What they share</h2>
      <p>
        The three failure modes have one root cause: production is being
        thought of as volume, not substrate.
      </p>
      <p>
        Volume-thinking optimises for output. More assets, more channels, more
        variants. The metrics it produces are flattering. The brand decays
        underneath them.
      </p>
      <p>
        Substrate-thinking optimises for what compounds. A reading of the
        brand that downstream production queries rather than re-interprets. A
        calibration that survives cycle-to-cycle rather than being rebuilt
        each time. A craft register held at the substrate so volume cannot
        erode it.
      </p>
      <p>
        The fix is not more AI. Adding variants to an unsolved substrate
        problem accelerates the failure. The fix is moving brand from
        documentation to infrastructure — a layer that reads accurately,
        compounds across cycles, and enforces coherence at variant scale
        rather than describing it.
      </p>
      <p>
        We built Amoeboid around that read. Brand calibration as the durable
        asset. Substrate before output. Coherence at the variant level, not
        the deck level. The three failure modes are the negative space of
        what we built. They are also the operator-side problems we keep
        meeting.
      </p>
      <p>
        These are early observations. We expect to revise them. If
        you&rsquo;re running into any of the three — in your own work, or in
        work being commissioned around you — we&rsquo;d like to hear how
        it&rsquo;s showing up.
      </p>
    </>
  );
}
