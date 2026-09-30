/**
 * Original, hand-drawn line-art scenes for each service category.
 * Pure inline SVG (no external images), so there is nothing to license —
 * each piece is authored to fit the brand's rounded, minimal aesthetic and
 * sits as a translucent backdrop behind the icon badge in ServiceHero.
 */

function WebDevelopmentArt() {
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full">
      <rect x="60" y="34" width="240" height="152" rx="14" stroke="white" strokeOpacity="0.35" strokeWidth="2.5" />
      <path d="M60 66h240" stroke="white" strokeOpacity="0.35" strokeWidth="2.5" />
      <circle cx="78" cy="50" r="4" fill="white" fillOpacity="0.5" />
      <circle cx="92" cy="50" r="4" fill="white" fillOpacity="0.5" />
      <circle cx="106" cy="50" r="4" fill="white" fillOpacity="0.5" />
      <path
        d="M146 108l-20 20 20 20M214 108l20 20-20 20M192 100l-16 56"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileAppArt() {
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full">
      <rect x="140" y="28" width="112" height="164" rx="20" stroke="white" strokeOpacity="0.35" strokeWidth="2.5" />
      <rect x="152" y="48" width="88" height="108" rx="6" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
      <rect x="160" y="60" width="56" height="8" rx="4" fill="white" fillOpacity="0.5" />
      <rect x="160" y="78" width="72" height="6" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="160" y="92" width="72" height="6" rx="3" fill="white" fillOpacity="0.3" />
      <rect x="160" y="106" width="44" height="6" rx="3" fill="white" fillOpacity="0.3" />
      <circle cx="196" cy="174" r="8" stroke="white" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="94" cy="150" r="3.5" fill="white" fillOpacity="0.55" />
      <circle cx="284" cy="70" r="3.5" fill="white" fillOpacity="0.55" />
      <circle cx="270" cy="150" r="3.5" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

function AiDevelopmentArt() {
  const nodes = [
    [180, 110],
    [110, 70],
    [250, 70],
    [100, 150],
    [260, 150],
    [180, 48],
    [180, 172],
  ];
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full">
      {nodes.slice(1).map(([x, y], i) => (
        <line key={i} x1="180" y1="110" x2={x} y2={y} stroke="white" strokeOpacity="0.35" strokeWidth="2" />
      ))}
      <circle cx="180" cy="110" r="16" stroke="white" strokeOpacity="0.7" strokeWidth="2.5" />
      {nodes.slice(1).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="white" fillOpacity={i % 2 === 0 ? 0.55 : 0.35} />
      ))}
    </svg>
  );
}

function MvpDevelopmentArt() {
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full">
      <path
        d="M184 176c-28-10-46-34-46-66 0-38 30-70 46-78 16 8 46 40 46 78 0 32-18 56-46 66z"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="2.5"
      />
      <circle cx="184" cy="102" r="14" stroke="white" strokeOpacity="0.7" strokeWidth="2.5" />
      <path d="M162 158l-16 30M206 158l16 30" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M184 178c-4 14-4 24 0 34 4-10 4-20 0-34z"
        fill="white"
        fillOpacity="0.45"
      />
      <circle cx="120" cy="60" r="3" fill="white" fillOpacity="0.5" />
      <circle cx="256" cy="78" r="3.5" fill="white" fillOpacity="0.4" />
      <circle cx="240" cy="40" r="2.5" fill="white" fillOpacity="0.5" />
    </svg>
  );
}

function SaasDevelopmentArt() {
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full">
      <path
        d="M124 92a34 34 0 0 1 66-12 26 26 0 0 1 6 51H128a24 24 0 0 1-4-47z"
        stroke="white"
        strokeOpacity="0.45"
        strokeWidth="2.5"
      />
      <rect x="118" y="140" width="60" height="42" rx="8" stroke="white" strokeOpacity="0.4" strokeWidth="2.2" />
      <rect x="188" y="140" width="60" height="42" rx="8" stroke="white" strokeOpacity="0.55" strokeWidth="2.2" />
      <path d="M132 158h32M132 168h20" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
      <path d="M202 158h32M202 168h24" stroke="white" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DevOpsCloudArt() {
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full">
      <rect x="122" y="66" width="116" height="94" rx="10" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" />
      <path d="M122 96h116M122 126h116" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
      <circle cx="138" cy="81" r="3" fill="white" fillOpacity="0.6" />
      <circle cx="138" cy="111" r="3" fill="white" fillOpacity="0.6" />
      <circle cx="138" cy="141" r="3" fill="white" fillOpacity="0.6" />
      <circle cx="242" cy="60" r="20" stroke="white" strokeOpacity="0.45" strokeWidth="2.2" />
      <path
        d="M232 60l6 6 12-12"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductDesignArt() {
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full">
      <rect x="118" y="54" width="90" height="112" rx="10" stroke="white" strokeOpacity="0.3" strokeWidth="2.2" transform="rotate(-6 163 110)" />
      <rect x="152" y="66" width="90" height="112" rx="10" stroke="white" strokeOpacity="0.55" strokeWidth="2.5" />
      <circle cx="176" cy="92" r="7" fill="white" fillOpacity="0.5" />
      <path d="M170 130h44M170 146h30" stroke="white" strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M244 150l14 14M258 150l-14 14" stroke="white" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SoftwareScalingArt() {
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full">
      <rect x="118" y="132" width="26" height="40" rx="4" fill="white" fillOpacity="0.35" />
      <rect x="154" y="108" width="26" height="64" rx="4" fill="white" fillOpacity="0.45" />
      <rect x="190" y="80" width="26" height="92" rx="4" fill="white" fillOpacity="0.55" />
      <rect x="226" y="54" width="26" height="118" rx="4" fill="white" fillOpacity="0.7" />
      <path
        d="M118 118l40-22 36 14 46-46"
        stroke="white"
        strokeOpacity="0.8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M222 64h20v20" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const artBySlug: Record<string, () => JSX.Element> = {
  "web-development": WebDevelopmentArt,
  "mobile-app-development": MobileAppArt,
  "ai-development": AiDevelopmentArt,
  "mvp-development": MvpDevelopmentArt,
  "saas-development": SaasDevelopmentArt,
  "devops-cloud": DevOpsCloudArt,
  "product-design": ProductDesignArt,
  "software-scaling": SoftwareScalingArt,
};

export function ServiceArt({ slug, className }: { slug: string; className?: string }) {
  const Art = artBySlug[slug];
  if (!Art) return null;
  return (
    <div aria-hidden className={className}>
      <Art />
    </div>
  );
}
