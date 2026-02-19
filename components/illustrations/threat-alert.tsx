interface ThreatAlertProps {
  className?: string;
}

export function ThreatAlert({ className = "" }: ThreatAlertProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main warning triangle */}
      <path
        d="M100 25 L175 155 L25 155 Z"
        className="fill-accent/10 stroke-accent"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      
      {/* Inner triangle */}
      <path
        d="M100 50 L155 140 L45 140 Z"
        className="fill-background"
      />
      
      {/* Exclamation mark */}
      <rect x="93" y="70" width="14" height="45" rx="4" className="fill-accent" />
      <circle cx="100" cy="125" r="7" className="fill-accent" />
      
      {/* Threat icons around the triangle */}
      {/* Phishing hook */}
      <g transform="translate(20, 50)">
        <circle cx="15" cy="15" r="12" className="fill-primary/10 stroke-primary" strokeWidth="2" />
        <path d="M10 20 Q15 10 20 20" className="stroke-primary stroke-[2] fill-none" />
        <circle cx="15" cy="22" r="2" className="fill-primary" />
      </g>
      
      {/* Email icon */}
      <g transform="translate(155, 50)">
        <circle cx="15" cy="15" r="12" className="fill-primary/10 stroke-primary" strokeWidth="2" />
        <rect x="6" y="10" width="18" height="12" className="fill-primary/20 stroke-primary" strokeWidth="1" rx="1" />
        <path d="M6 12 L15 18 L24 12" className="stroke-primary stroke-[1] fill-none" />
      </g>
      
      {/* Lock ransomware */}
      <g transform="translate(85, 160)">
        <circle cx="15" cy="15" r="12" className="fill-red-100 stroke-red-500" strokeWidth="2" />
        <rect x="9" y="14" width="12" height="10" rx="2" className="fill-red-500" />
        <path d="M12 14 L12 11 Q12 7 15 7 Q18 7 18 11 L18 14" className="stroke-red-500 stroke-[1.5] fill-none" />
      </g>
      
      {/* Warning indicators */}
      <circle cx="50" cy="100" r="5" className="fill-accent/60" />
      <circle cx="150" cy="100" r="5" className="fill-accent/60" />
      
      {/* Decorative elements */}
      <circle cx="35" cy="35" r="3" className="fill-primary/40" />
      <circle cx="170" cy="40" r="4" className="fill-accent/40" />
      <circle cx="100" cy="180" r="3" className="fill-primary/30" />
      
      {/* Alert lines */}
      <line x1="40" y1="70" x2="55" y2="80" className="stroke-accent/50 stroke-[2]" strokeLinecap="round" />
      <line x1="160" y1="70" x2="145" y2="80" className="stroke-accent/50 stroke-[2]" strokeLinecap="round" />
    </svg>
  );
}
