interface ToolboxProps {
  className?: string;
}

export function Toolbox({ className = "" }: ToolboxProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Toolbox body */}
      <rect
        x="25"
        y="70"
        width="150"
        height="100"
        rx="8"
        className="fill-primary/10 stroke-primary"
        strokeWidth="3"
      />
      
      {/* Toolbox lid */}
      <rect
        x="25"
        y="55"
        width="150"
        height="25"
        rx="4"
        className="fill-primary stroke-primary"
        strokeWidth="2"
      />
      
      {/* Handle */}
      <rect
        x="75"
        y="40"
        width="50"
        height="20"
        rx="4"
        className="fill-background stroke-primary"
        strokeWidth="2"
      />
      
      {/* Tool slots/dividers */}
      <line x1="75" y1="85" x2="75" y2="160" className="stroke-primary/30" strokeWidth="2" />
      <line x1="125" y1="85" x2="125" y2="160" className="stroke-primary/30" strokeWidth="2" />
      
      {/* Wrench */}
      <rect x="35" y="95" width="8" height="50" rx="2" className="fill-accent/80" transform="rotate(-15 39 120)" />
      <circle cx="45" cy="100" r="10" className="stroke-accent stroke-2 fill-none" />
      
      {/* Shield icon in middle */}
      <path
        d="M100 90 L120 98 L120 120 C120 132 110 140 100 145 C90 140 80 132 80 120 L80 98 L100 90Z"
        className="fill-primary stroke-primary"
        strokeWidth="2"
      />
      <path
        d="M92 115 L98 122 L110 108"
        className="stroke-background"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Gear */}
      <circle cx="150" cy="120" r="18" className="fill-accent/60" />
      <circle cx="150" cy="120" r="8" className="fill-background" />
      {/* Gear teeth */}
      <rect x="147" y="95" width="6" height="10" className="fill-accent/60" />
      <rect x="147" y="135" width="6" height="10" className="fill-accent/60" />
      <rect x="125" y="117" width="10" height="6" className="fill-accent/60" />
      <rect x="165" y="117" width="10" height="6" className="fill-accent/60" />
      
      {/* Decorative elements */}
      <circle cx="30" cy="45" r="8" className="fill-accent/30" />
      <circle cx="175" cy="50" r="6" className="fill-primary/30" />
      
      {/* Lock icon on lid */}
      <rect x="90" y="60" width="20" height="15" rx="2" className="fill-accent" />
      <path d="M95 60 L95 55 C95 50 100 47 100 47 C100 47 105 50 105 55 L105 60" className="stroke-accent stroke-2 fill-none" />
    </svg>
  );
}
