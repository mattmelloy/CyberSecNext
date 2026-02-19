interface MagnifyingGlassProps {
  className?: string;
}

export function MagnifyingGlass({ className = "" }: MagnifyingGlassProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Document background */}
      <rect
        x="30"
        y="30"
        width="100"
        height="130"
        rx="8"
        className="fill-background stroke-muted-foreground/20"
        strokeWidth="2"
      />
      
      {/* Document lines */}
      <line x1="45" y1="55" x2="115" y2="55" className="stroke-muted-foreground/30" strokeWidth="3" strokeLinecap="round" />
      <line x1="45" y1="75" x2="100" y2="75" className="stroke-muted-foreground/30" strokeWidth="3" strokeLinecap="round" />
      <line x1="45" y1="95" x2="115" y2="95" className="stroke-muted-foreground/30" strokeWidth="3" strokeLinecap="round" />
      <line x1="45" y1="115" x2="85" y2="115" className="stroke-muted-foreground/30" strokeWidth="3" strokeLinecap="round" />
      
      {/* Magnifying glass circle */}
      <circle
        cx="120"
        cy="110"
        r="40"
        className="fill-background stroke-primary"
        strokeWidth="4"
      />
      
      {/* Magnifying glass handle */}
      <line
        x1="148"
        y1="138"
        x2="175"
        y2="165"
        className="stroke-primary"
        strokeWidth="8"
        strokeLinecap="round"
      />
      
      {/* Checkmark in magnifying glass */}
      <path
        d="M100 110 L115 125 L140 95"
        className="stroke-accent"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative elements */}
      <circle cx="50" cy="145" r="8" className="fill-accent/30" />
      <circle cx="70" cy="155" r="5" className="fill-primary/30" />
    </svg>
  );
}
