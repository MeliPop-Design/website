/* ==========================================================================
   MeliPop Design Lab — Procedural Architectural & Playful SVG Artwork
   Renders bespoke geometric visuals for projects/products without a photo yet.
   Once a project has `image: "path/to/photo.jpg"`, the app renders an <img>.
   ========================================================================== */

window.MELIPOP_ART = (function () {
  const PALETTES = {
    S: ['#FDE4EE', '#F58CB1', '#F2D246', '#141413'],
    M: ['#FDF5CC', '#F2D246', '#79C2E3', '#141413'],
    L: ['#E1F2FA', '#79C2E3', '#F58CB1', '#141413'],
    XL: ['#EFECE3', '#141413', '#F2D246', '#79C2E3'],
  };

  function getArtworkSVG(motif, scale) {
    const [bg, c1, c2, ink] = PALETTES[scale] || PALETTES.S;

    const motifs = {
      balance: `
        <line x1="60" y1="225" x2="340" y2="225" stroke="${ink}" stroke-width="2.5"/>
        <polygon points="200,155 168,225 232,225" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <g transform="rotate(-10 200 155)">
          <rect x="75" y="138" width="250" height="20" rx="4" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
          <rect x="95" y="96" width="42" height="42" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
          <circle cx="282" cy="112" r="26" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        </g>`,

      zoo: `
        <circle cx="135" cy="145" r="58" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="195" y="95" width="95" height="115" rx="48" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="118" cy="132" r="7" fill="${ink}"/>
        <circle cx="242" cy="135" r="7" fill="${ink}"/>
        <path d="M168 180 Q200 212 232 180" fill="none" stroke="${ink}" stroke-width="2.5"/>
        <rect x="90" y="210" width="220" height="16" rx="8" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>`,

      book: `
        <rect x="85" y="68" width="115" height="164" rx="4" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <rect x="200" y="68" width="115" height="164" rx="4" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="142" cy="130" r="30" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <line x1="222" y1="108" x2="292" y2="108" stroke="${ink}" stroke-width="2.5"/>
        <line x1="222" y1="128" x2="282" y2="128" stroke="${ink}" stroke-width="2.5"/>
        <line x1="222" y1="148" x2="292" y2="148" stroke="${ink}" stroke-width="2.5"/>
        <polygon points="222,200 257,168 292,200" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>`,

      vessels: `
        <path d="M95 220 L110 110 L165 110 L180 220 Z" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="248" cy="165" r="55" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="228" y="82" width="40" height="34" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>`,

      lantern: `
        <line x1="200" y1="20" x2="200" y2="66" stroke="${ink}" stroke-width="2.5"/>
        <polygon points="200,66 122,135 200,238 278,135" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <polygon points="200,66 158,135 200,238 242,135" fill="${c2}" stroke="${ink}" stroke-width="2"/>
        <line x1="122" y1="135" x2="278" y2="135" stroke="${ink}" stroke-width="2"/>`,

      chair: `
        <rect x="128" y="64" width="110" height="72" rx="12" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="116" y="148" width="168" height="22" rx="6" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <line x1="138" y1="170" x2="124" y2="236" stroke="${ink}" stroke-width="3.5"/>
        <line x1="262" y1="170" x2="276" y2="236" stroke="${ink}" stroke-width="3.5"/>
        <line x1="168" y1="136" x2="168" y2="148" stroke="${ink}" stroke-width="3.5"/>
        <line x1="208" y1="136" x2="208" y2="148" stroke="${ink}" stroke-width="3.5"/>`,

      daybed: `
        <rect x="64" y="152" width="272" height="24" rx="4" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="78" y="120" width="196" height="32" rx="14" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="298" cy="136" r="18" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <line x1="92" y1="176" x2="92" y2="220" stroke="${ink}" stroke-width="3.5"/>
        <line x1="308" y1="176" x2="308" y2="220" stroke="${ink}" stroke-width="3.5"/>`,

      rooms: `
        <rect x="65" y="60" width="270" height="180" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <rect x="65" y="60" width="118" height="180" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <path d="M183 240 L183 145 A46 46 0 0 1 275 145 L275 240 Z" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="124" cy="115" r="24" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>`,

      arch: `
        <path d="M85 235 L85 130 A115 115 0 0 1 315 130 L315 235 Z" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <path d="M135 235 L135 148 A65 65 0 0 1 265 148 L265 235 Z" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="200" cy="155" r="24" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>`,

      playground: `
        <path d="M55 215 Q130 70 200 155 T345 95" fill="none" stroke="${ink}" stroke-width="3.5"/>
        <circle cx="118" cy="132" r="28" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="195" y="135" width="54" height="54" rx="8" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <polygon points="295,120 265,180 325,180" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>`,

      blocks: `
        <rect x="75" y="145" width="78" height="78" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="153" y="145" width="78" height="78" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <rect x="231" y="145" width="78" height="78" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <polygon points="153,145 192,78 231,145" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="270" cy="108" r="32" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>`,

      tropical: `
        <polygon points="65,140 200,72 335,140" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="92" y="140" width="216" height="92" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <rect x="122" y="164" width="52" height="68" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <line x1="205" y1="140" x2="205" y2="232" stroke="${ink}" stroke-width="2"/>
        <line x1="242" y1="140" x2="242" y2="232" stroke="${ink}" stroke-width="2"/>
        <line x1="278" y1="140" x2="278" y2="232" stroke="${ink}" stroke-width="2"/>`,

      duo: `
        <polygon points="72,140 138,85 204,140 204,228 72,228" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <polygon points="196,120 264,65 332,120 332,228 196,228" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="116" y="162" width="44" height="66" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="242" y="144" width="46" height="46" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>`,

      courtyard: `
        <rect x="68" y="64" width="264" height="172" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <rect x="128" y="102" width="144" height="96" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="200" cy="150" r="30" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>`,

      complex: `
        <rect x="64" y="142" width="90" height="86" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <rect x="154" y="102" width="92" height="126" fill="${c1}" stroke="${ink}" stroke-width="2.5"/>
        <rect x="246" y="68" width="90" height="160" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <line x1="154" y1="142" x2="336" y2="142" stroke="${ink}" stroke-width="2"/>
        <line x1="154" y1="184" x2="336" y2="184" stroke="${ink}" stroke-width="2"/>`,

      bipv: `
        <g stroke="${ink}" stroke-width="1.8">
          <rect x="55" y="55" width="72" height="58" fill="${c1}"/>
          <rect x="127" y="55" width="72" height="58" fill="${c2}"/>
          <rect x="199" y="55" width="72" height="58" fill="${c1}"/>
          <rect x="271" y="55" width="72" height="58" fill="${c3(c2)}"/>
          <rect x="55" y="113" width="72" height="58" fill="${c2}"/>
          <rect x="127" y="113" width="72" height="58" fill="${c1}"/>
          <rect x="199" y="113" width="72" height="58" fill="#FFFFFF"/>
          <rect x="271" y="113" width="72" height="58" fill="${c1}"/>
          <rect x="55" y="171" width="72" height="58" fill="${c1}"/>
          <rect x="127" y="171" width="72" height="58" fill="${c3(c2)}"/>
          <rect x="199" y="171" width="72" height="58" fill="${c1}"/>
          <rect x="271" y="171" width="72" height="58" fill="${c2}"/>
        </g>`,

      prism: `
        <polygon points="200,48 318,118 282,232 118,232 82,118" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <polygon points="200,48 258,138 200,232 142,138" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <line x1="82" y1="118" x2="318" y2="118" stroke="${ink}" stroke-width="2"/>`,

      truss: `
        <rect x="60" y="96" width="280" height="108" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <polyline points="60,204 130,96 200,204 270,96 340,204" fill="none" stroke="${ink}" stroke-width="2.5"/>
        <circle cx="130" cy="96" r="10" fill="${c2}" stroke="${ink}" stroke-width="2"/>
        <circle cx="200" cy="204" r="10" fill="${c2}" stroke="${ink}" stroke-width="2"/>
        <circle cx="270" cy="96" r="10" fill="${c2}" stroke="${ink}" stroke-width="2"/>`,

      stadium: `
        <ellipse cx="200" cy="150" rx="135" ry="74" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <ellipse cx="200" cy="150" rx="88" ry="44" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <line x1="65" y1="150" x2="335" y2="150" stroke="${ink}" stroke-width="2" stroke-dasharray="6 5"/>`,

      tower: `
        <rect x="130" y="45" width="140" height="195" fill="#FFFFFF" stroke="${ink}" stroke-width="2.5"/>
        <rect x="130" y="45" width="140" height="46" fill="${c2}" stroke="${ink}" stroke-width="2.5"/>
        <line x1="130" y1="130" x2="270" y2="130" stroke="${ink}" stroke-width="2"/>
        <line x1="130" y1="170" x2="270" y2="170" stroke="${ink}" stroke-width="2"/>
        <line x1="130" y1="210" x2="270" y2="210" stroke="${ink}" stroke-width="2"/>
        <line x1="200" y1="91" x2="200" y2="240" stroke="${ink}" stroke-width="2"/>`,
    };

    function c3(fallback) {
      return scale === 'XL' ? '#79C2E3' : fallback;
    }

    const body = motifs[motif] || motifs.blocks;

    return `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometric illustration">
        <defs>
          <pattern id="grid-${motif}-${scale}" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="${ink}" stroke-opacity="0.08" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="400" height="300" fill="${bg}"/>
        <rect width="400" height="300" fill="url(#grid-${motif}-${scale})"/>
        ${body}
      </svg>`;
  }

  return { getArtworkSVG };
})();
