interface WarningFlagsProps {
  className?: string;
}

export function WarningFlags({ className = "" }: WarningFlagsProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <circle cx="100" cy="100" r="85" className="fill-red-50/50" />
      
      {/* Main flag pole */}
      <rect x="95" y="30" width="6" height="140" className="fill-primary/60" rx="2" />
      
      {/* Main red flag */}
      <path
        d="M101 35 L160 45 L160 95 L101 85 Z"
        className="fill-red-500 stroke-red-600"
        strokeWidth="2"
      />
      <text x="130" y="70" textAnchor="middle" className="fill-white font-bold" fontSize="14">!</text>
      
      {/* Second flag (warning) */}
      <path
        d="M101 90 L145 98 L145 135 L101 127 Z"
        className="fill-accent stroke-accent/80"
        strokeWidth="2"
      />
      <circle cx="123" cy="112" r="8" className="fill-white/90" />
      <text x="123" y="116" textAnchor="middle" className="fill-accent font-bold" fontSize="10">?</text>
      
      {/* Third flag (suspicious) */}
      <path
        d="M101 130 L135 136 L135 160 L101 154 Z"
        className="fill-primary stroke-primary/80"
        strokeWidth="2"
      />
      <path d="M115 142 L125 142 M120 137 L120 147" className="stroke-white stroke-[2]" strokeLinecap="round" />
      
      {/* Warning signs around */}
      {/* Urgent clock */}
      <g transform="translate(25, 60)">
        <circle cx="20" cy="20" r="18" className="fill-accent/10 stroke-accent" strokeWidth="2" />
        <circle cx="20" cy="20" r="14" className="fill-background" />
        <line x1="20" y1="20" x2="20" y2="12" className="stroke-accent stroke-[2]" strokeLinecap="round" />
        <line x1="20" y1="20" x2="26" y2="24" className="stroke-accent stroke-[2]" strokeLinecap="round" />
      </g>
      
      {/* Email warning */}
      <g transform="translate(145, 110)">
        <circle cx="20" cy="20" r="18" className="fill-red-100 stroke-red-400" strokeWidth="2" />
        <rect x="10" y="14" width="20" height="14" className="fill-red-200 stroke-red-400" strokeWidth="1" rx="2" />
        <path d="M10 16 L20 23 L30 16" className="stroke-red-400 stroke-[1] fill-none" />
      </g>
      
      {/* Spelling error indicator */}
      <g transform="translate(30, 130)">
        <rect x="0" y="0" width="40" height="25" className="fill-background stroke-primary/30" strokeWidth="1" rx="3" />
        <text x="8" y="17" className="fill-primary/60" fontSize="10">abc</text>
        <line x1="25" y1="8" x2="35" y2="18" className="stroke-red-500 stroke-[2]" strokeLinecap="round" />
      </g>
      
      {/* Decorative elements */}
      <circle cx="170" cy="50" r="4" className="fill-red-400/40" />
      <circle cx="180" cy="80" r="3" className="fill-accent/40" />
      <circle cx="25" cy="40" r="3" className="fill-primary/30" />
      
      {/* Alert lines */}
      <path d="M165 70 L175 75 L165 80" className="stroke-accent stroke-[2] fill-none" strokeLinecap="round" />
    </svg>
  );
}
