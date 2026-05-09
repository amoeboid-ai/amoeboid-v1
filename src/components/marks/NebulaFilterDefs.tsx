/**
 * Shared SVG <defs> mounted at root. Contains:
 *   - #nebula-filter: turbulence + displacement for animated Nebula instances
 *   - #footerNebula: static radial gradient used at small scales
 *
 * Exposed at root layout level so any Nebula instance can reference by id.
 */
export function NebulaFilterDefs() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0 }}
    >
      <defs>
        <filter
          id="nebula-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed="3"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="22s"
              values="0.012 0.018; 0.018 0.014; 0.012 0.018"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Static gradient for small / footer Nebula */}
        <radialGradient
          id="footerNebula"
          cx="0.42"
          cy="0.4"
          r="0.65"
        >
          <stop offset="0" stopColor="#0c0c0c" stopOpacity="1" />
          <stop offset="0.55" stopColor="#0c0c0c" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0c0c0c" stopOpacity="0" />
        </radialGradient>

        {/* Inverse: cream-on-ink for dark surfaces */}
        <radialGradient
          id="footerNebulaInverse"
          cx="0.42"
          cy="0.4"
          r="0.65"
        >
          <stop offset="0" stopColor="#F6F4EF" stopOpacity="1" />
          <stop offset="0.55" stopColor="#F6F4EF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F6F4EF" stopOpacity="0" />
        </radialGradient>

        {/*
          Brand-locked Nebula recipe (Adaptive widget).
          Turbulence → displacement → blur → alpha-threshold colour-matrix
          fuses three drifting circles into one organic blob.
          Kept under a distinct filter id so the lighter footer/header
          Nebula (uses #nebula-filter above) is unaffected.
        */}
        <filter id="nebula-organic-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.023" numOctaves={2} seed={7} result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale={11} result="d" />
          <feGaussianBlur in="d" stdDeviation={8} result="b" />
          <feColorMatrix
            in="b"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15"
          />
        </filter>

        {/* Default ambient Nebula — three circles drift on staggered 2.73s splines, group rotates 360°/15s */}
        <symbol id="nebula-symbol" viewBox="0 0 200 200">
          <g filter="url(#nebula-organic-filter)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="15s"
                repeatCount="indefinite"
              />
              <circle cx="108.26" cy="105.80" r="27.20" fill="#0c0c0c">
                <animate attributeName="cx" values="108.26;94.73;108.26" dur="2.73s" begin="0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="cy" values="105.80;121.86;105.80" dur="2.73s" begin="0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>
              <circle cx="89.84" cy="103.06" r="21.20" fill="#0c0c0c">
                <animate attributeName="cx" values="89.84;82.70;89.84" dur="2.73s" begin="0.49s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="cy" values="103.06;83.32;103.06" dur="2.73s" begin="0.49s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>
              <circle cx="101.90" cy="91.14" r="27.20" fill="#0c0c0c">
                <animate attributeName="cx" values="101.90;122.57;101.90" dur="2.73s" begin="0.98s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="cy" values="91.14;94.82;91.14" dur="2.73s" begin="0.98s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>
            </g>
          </g>
        </symbol>

        {/* Typing variant — same DNA, amplified drift cycle (1.6s) + faster rotation (6s) */}
        <symbol id="nebula-symbol-typing" viewBox="0 0 200 200">
          <g filter="url(#nebula-organic-filter)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="6s"
                repeatCount="indefinite"
              />
              <circle cx="108.26" cy="105.80" r="27.20" fill="#0c0c0c">
                <animate attributeName="cx" values="108.26;88.00;108.26" dur="1.6s" begin="0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="cy" values="105.80;128.00;105.80" dur="1.6s" begin="0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>
              <circle cx="89.84" cy="103.06" r="21.20" fill="#0c0c0c">
                <animate attributeName="cx" values="89.84;76.00;89.84" dur="1.6s" begin="0.27s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="cy" values="103.06;76.00;103.06" dur="1.6s" begin="0.27s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>
              <circle cx="101.90" cy="91.14" r="27.20" fill="#0c0c0c">
                <animate attributeName="cx" values="101.90;128.00;101.90" dur="1.6s" begin="0.54s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
                <animate attributeName="cy" values="91.14;100.00;91.14" dur="1.6s" begin="0.54s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
              </circle>
            </g>
          </g>
        </symbol>
      </defs>
    </svg>
  );
}

/**
 * AnimatedNebula — renders the brand-locked organic Nebula via <use href="#nebula-symbol">.
 * Distinct from the lighter Nebula component used in header/footer.
 */
export function AnimatedNebula({
  size = 32,
  variant = "ambient",
  className,
  ariaLabel = "Adaptive",
}: {
  size?: number;
  variant?: "ambient" | "typing";
  className?: string;
  ariaLabel?: string;
}) {
  const symbolId = variant === "typing" ? "#nebula-symbol-typing" : "#nebula-symbol";
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={{ display: "inline-block", width: size, height: size, lineHeight: 0 }}
    >
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <use href={symbolId} />
      </svg>
    </span>
  );
}
