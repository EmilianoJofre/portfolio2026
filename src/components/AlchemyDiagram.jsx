import { heroSignals } from '../data/portfolio';

export default function AlchemyDiagram() {
  return (
    <div className="alchemy-diagram">
      <svg viewBox="0 0 640 640" aria-hidden="true">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 226, 150, 0.92)" />
            <stop offset="40%" stopColor="rgba(234, 186, 82, 0.34)" />
            <stop offset="100%" stopColor="rgba(234, 186, 82, 0)" />
          </radialGradient>
          <linearGradient id="sigilStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3da92" />
            <stop offset="50%" stopColor="#c99733" />
            <stop offset="100%" stopColor="#77531a" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="diagram-grid">
          <path d="M120 320H520" />
          <path d="M320 120V520" />
          <path d="M166 166L474 474" />
          <path d="M166 474L474 166" />
        </g>

        <g className="diagram-rings">
          <circle cx="320" cy="320" r="210" className="ring ring--outer" />
          <circle cx="320" cy="320" r="148" className="ring ring--mid" />
          <circle cx="320" cy="320" r="86" className="ring ring--inner" />
        </g>

        <g className="diagram-orbits">
          <circle cx="320" cy="320" r="220" className="orbit orbit--one" />
          <circle cx="320" cy="320" r="180" className="orbit orbit--two" />
        </g>

        <g className="diagram-geometry" filter="url(#softGlow)">
          <path d="M320 154L430 258V382L320 486L210 382V258L320 154Z" />
          <path d="M320 194L390 260V380L320 446L250 380V260L320 194Z" />
          <circle cx="320" cy="320" r="14" className="diagram-core" />
        </g>

        <g className="diagram-nodes">
          <circle cx="320" cy="110" r="6" />
          <circle cx="516" cy="320" r="6" />
          <circle cx="320" cy="530" r="6" />
          <circle cx="124" cy="320" r="6" />
          <circle cx="450" cy="190" r="5" />
          <circle cx="452" cy="450" r="5" />
          <circle cx="190" cy="450" r="5" />
          <circle cx="190" cy="190" r="5" />
        </g>

        <g className="diagram-glow">
          <circle cx="320" cy="320" r="250" fill="url(#coreGlow)" />
        </g>
      </svg>

      <div className="alchemy-diagram__panels">
        {heroSignals.slice(0, 3).map((signal, index) => (
          <div
            key={signal.title}
            className="alchemy-diagram__panel"
            style={{ '--panel-index': index }}
          >
            <strong>{signal.title}</strong>
            <span>{signal.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
