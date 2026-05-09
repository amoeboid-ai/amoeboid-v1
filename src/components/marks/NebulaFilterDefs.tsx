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
      </defs>
    </svg>
  );
}
