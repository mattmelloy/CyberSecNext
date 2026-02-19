interface SuccessBadgeProps {
  className?: string;
}

export function SuccessBadge({ className = "" }: SuccessBadgeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background celebration circles */}
      <circle cx="100" cy="100" r="90" className="fill-green-50/50" />
      <circle cx="100" cy="100" r="70" className="fill-green-100/30" />
      
      {/* Main badge */}
      <circle cx="100" cy="100" r="55" className="fill-green-500" />
      <circle cx="100" cy="100" r="45" className="fill-green-600" />
      
      {/* Checkmark */}
      <path
        d="M70 100 L90 120 L130 80"
        className="stroke-white stroke-[8] fill-none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Ribbon */}
      <path d="M75 145 L85 130 L100 145 L115 130 L125 145 L125 175 L100 160 L75 175 Z" className="fill-accent" />
      
      {/* Stars around */}
      <g className="fill-accent">
        <polygon points="40,50 43,58 52,58 45,63 48,72 40,67 32,72 35,63 28,58 37,58" />
        <polygon points="160,50 163,58 172,58 165,63 168,72 160,67 152,72 155,63 148,58 157,58" />
        <polygon points="30,100 33,108 42,108 35,113 38,122 30,117 22,122 25,113 18,108 27,108" />
        <polygon points="170,100 173,108 182,108 175,113 178,122 170,117 162,122 165,113 158,108 167,108" />
      </g>
      
      {/* Small celebration dots */}
      <circle cx="55" cy="70" r="4" className="fill-primary/40" />
      <circle cx="145" cy="70" r="4" className="fill-primary/40" />
      <circle cx="50" cy="130" r="3" className="fill-accent/50" />
      <circle cx="150" cy="130" r="3" className="fill-accent/50" />
      
      {/* Confetti lines */}
      <g className="stroke-primary/30 stroke-[2]">
        <line x1="25" y1="60" x2="35" y2="65" />
        <line x1="165" y1="60" x2="175" y2="65" />
        <line x1="20" y1="110" x2="30" y2="115" />
        <line x1="170" y1="110" x2="180" y2="115" />
      </g>
      
      {/* Shield accent */}
      <g transform="translate(130, 25)">
        <path d="M15 5 L25 10 L25 20 C25 25 20 28 15 30 C10 28 5 25 5 20 L5 10 Z" className="fill-primary/60" />
        <path d="M12 17 L15 20 L20 14" className="stroke-white stroke-[1.5] fill-none" strokeLinecap="round" />
      </g>
      
      {/* Team icons at bottom */}
      <g transform="translate(60, 180)">
        <circle cx="10" cy="5" r="5" className="fill-primary/40" />
        <circle cx="25" cy="5" r="5" className="fill-primary/50" />
        <circle cx="40" cy="5" r="5" className="fill-primary/40" />
        <circle cx="55" cy="5" r="5" className="fill-primary/50" />
        <circle cx="70" cy="5" r="5" className="fill-primary/40" />
      </g>
      
      {/* "We've Got This" text area */}
      <text x="100" y="185" textAnchor="middle" className="fill-primary font-bold" fontSize="8">Together We're Secure!</text>
    </svg>
  );
}
