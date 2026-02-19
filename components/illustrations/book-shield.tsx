interface BookShieldProps {
  className?: string;
}

export function BookShield({ className = "" }: BookShieldProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Book back cover */}
      <rect
        x="35"
        y="30"
        width="110"
        height="140"
        rx="4"
        className="fill-primary/10 stroke-primary/30"
        strokeWidth="2"
      />
      
      {/* Book front cover */}
      <rect
        x="45"
        y="25"
        width="110"
        height="140"
        rx="4"
        className="fill-background stroke-primary"
        strokeWidth="2"
      />
      
      {/* Book spine */}
      <rect
        x="35"
        y="30"
        width="15"
        height="135"
        className="fill-primary/20"
      />
      
      {/* Book pages */}
      <rect
        x="55"
        y="35"
        width="90"
        height="120"
        className="fill-muted/30"
      />
      
      {/* Page lines */}
      <line x1="65" y1="55" x2="135" y2="55" className="stroke-muted-foreground/20" strokeWidth="2" strokeLinecap="round" />
      <line x1="65" y1="70" x2="125" y2="70" className="stroke-muted-foreground/20" strokeWidth="2" strokeLinecap="round" />
      <line x1="65" y1="85" x2="135" y2="85" className="stroke-muted-foreground/20" strokeWidth="2" strokeLinecap="round" />
      
      {/* Shield on book */}
      <path
        d="M100 95 L130 105 L130 130 C130 145 115 155 100 160 C85 155 70 145 70 130 L70 105 L100 95Z"
        className="fill-primary stroke-primary"
        strokeWidth="2"
      />
      
      {/* Shield checkmark */}
      <path
        d="M88 120 L96 128 L114 110"
        className="stroke-background"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative bookmark */}
      <rect
        x="120"
        y="25"
        width="15"
        height="40"
        className="fill-accent"
      />
      <polygon
        points="120,65 127.5,75 135,65"
        className="fill-accent"
      />
      
      {/* Decorative elements */}
      <circle cx="160" cy="50" r="8" className="fill-accent/30" />
      <circle cx="165" cy="150" r="6" className="fill-primary/30" />
    </svg>
  );
}
