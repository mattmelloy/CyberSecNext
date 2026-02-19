interface EssentialEightProps {
  className?: string;
}

export function EssentialEight({ className = "" }: EssentialEightProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <circle cx="100" cy="100" r="90" className="fill-primary/5" />
      
      {/* Central shield */}
      <path
        d="M100 30 L140 45 L140 85 C140 110 120 130 100 138 C80 130 60 110 60 85 L60 45 L100 30Z"
        className="fill-primary stroke-primary"
        strokeWidth="2"
      />
      <text x="100" y="85" textAnchor="middle" className="fill-white font-bold" fontSize="20">E8</text>
      <text x="100" y="100" textAnchor="middle" className="fill-white/80" fontSize="8">ACSC</text>
      
      {/* 8 surrounding icons */}
      {/* 1. Password */}
      <g transform="translate(85, 5)">
        <circle cx="15" cy="15" r="14" className="fill-background stroke-primary" strokeWidth="2" />
        <rect x="8" y="12" width="14" height="10" rx="2" className="fill-primary/60" />
        <circle cx="15" cy="17" r="2" className="fill-background" />
      </g>
      
      {/* 2. MFA */}
      <g transform="translate(140, 30)">
        <circle cx="15" cy="15" r="14" className="fill-background stroke-primary" strokeWidth="2" />
        <rect x="8" y="10" width="14" height="10" rx="2" className="fill-primary/60" />
        <circle cx="15" cy="15" r="3" className="fill-accent" />
      </g>
      
      {/* 3. Updates */}
      <g transform="translate(160, 85)">
        <circle cx="15" cy="15" r="14" className="fill-background stroke-primary" strokeWidth="2" />
        <path d="M15 8 L15 22 M8 15 L15 8 L22 15" className="stroke-primary stroke-[2] fill-none" strokeLinecap="round" />
      </g>
      
      {/* 4. Backup */}
      <g transform="translate(140, 140)">
        <circle cx="15" cy="15" r="14" className="fill-background stroke-primary" strokeWidth="2" />
        <path d="M8 18 L15 12 L22 18" className="stroke-primary stroke-[2] fill-none" strokeLinecap="round" />
        <rect x="10" y="18" width="10" height="6" className="fill-primary/60" rx="1" />
      </g>
      
      {/* 5. Admin */}
      <g transform="translate(85, 165)">
        <circle cx="15" cy="15" r="14" className="fill-background stroke-primary" strokeWidth="2" />
        <circle cx="15" cy="12" r="4" className="fill-primary/60" />
        <path d="M8 22 Q15 18 22 22" className="stroke-primary/60 stroke-[2] fill-none" />
        <rect x="18" y="8" width="6" height="6" className="fill-accent" rx="1" />
      </g>
      
      {/* 6. Macros */}
      <g transform="translate(30, 140)">
        <circle cx="15" cy="15" r="14" className="fill-background stroke-primary" strokeWidth="2" />
        <rect x="8" y="10" width="14" height="10" className="fill-primary/20 stroke-primary/60" strokeWidth="1" rx="1" />
        <line x1="10" y1="14" x2="20" y2="14" className="stroke-primary/60 stroke-[1]" />
        <line x1="10" y1="17" x2="16" y2="17" className="stroke-primary/60 stroke-[1]" />
      </g>
      
      {/* 7. Software */}
      <g transform="translate(10, 85)">
        <circle cx="15" cy="15" r="14" className="fill-background stroke-primary" strokeWidth="2" />
        <path d="M15 8 L15 22 M10 12 L15 8 L20 12" className="stroke-primary stroke-[2] fill-none" strokeLinecap="round" />
        <circle cx="15" cy="20" r="2" className="fill-accent" />
      </g>
      
      {/* 8. Physical */}
      <g transform="translate(30, 30)">
        <circle cx="15" cy="15" r="14" className="fill-background stroke-primary" strokeWidth="2" />
        <rect x="10" y="10" width="10" height="12" className="fill-primary/20 stroke-primary/60" strokeWidth="1" rx="1" />
        <circle cx="15" cy="18" r="2" className="fill-accent" />
      </g>
      
      {/* Connecting lines */}
      <g className="stroke-primary/20 stroke-[1]">
        <line x1="100" y1="35" x2="100" y2="20" />
        <line x1="135" y1="50" x2="148" y2="42" />
        <line x1="145" y1="90" x2="158" y2="95" />
        <line x1="135" y1="125" x2="148" y2="138" />
        <line x1="100" y1="140" x2="100" y2="165" />
        <line x1="65" y1="125" x2="52" y2="138" />
        <line x1="55" y1="90" x2="42" y2="95" />
        <line x1="65" y1="50" x2="52" y2="42" />
      </g>
      
      {/* Maturity Level badge */}
      <g transform="translate(70, 175)">
        <rect x="0" y="0" width="60" height="18" className="fill-accent/20 stroke-accent" strokeWidth="1" rx="4" />
        <text x="30" y="13" textAnchor="middle" className="fill-accent font-semibold" fontSize="8">Level 1</text>
      </g>
    </svg>
  );
}
