interface TitleShieldProps {
  className?: string;
}

export function TitleShield({ className = "" }: TitleShieldProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main shield */}
      <path
        d="M100 20 L170 50 L170 105 C170 145 135 175 100 185 C65 175 30 145 30 105 L30 50 L100 20Z"
        className="fill-primary/10 stroke-primary"
        strokeWidth="3"
      />
      
      {/* Inner shield */}
      <path
        d="M100 35 L155 60 L155 105 C155 135 125 162 100 172 C75 162 45 135 45 105 L45 60 L100 35Z"
        className="fill-background"
      />
      
      {/* Australian star cluster */}
      <g className="fill-accent">
        {/* Federation star representation */}
        <polygon points="100,55 103,65 114,65 105,72 108,82 100,76 92,82 95,72 86,65 97,65" />
      </g>
      
      {/* Southern Cross stars */}
      <circle cx="70" cy="85" r="3" className="fill-primary" />
      <circle cx="130" cy="85" r="3" className="fill-primary" />
      <circle cx="85" cy="130" r="2.5" className="fill-primary" />
      <circle cx="115" cy="130" r="2.5" className="fill-primary" />
      <circle cx="100" cy="145" r="2" className="fill-primary" />
      
      {/* Lock icon in center */}
      <rect x="85" y="95" width="30" height="25" rx="3" className="fill-primary" />
      <path
        d="M92 95 L92 88 C92 82 96 78 100 78 C104 78 108 82 108 88 L108 95"
        className="stroke-primary stroke-[4] fill-none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="107" r="3" className="fill-background" />
      
      {/* Decorative elements */}
      <circle cx="45" cy="45" r="4" className="fill-accent/60" />
      <circle cx="160" cy="55" r="3" className="fill-accent/40" />
      <circle cx="155" cy="150" r="5" className="fill-primary/30" />
      <circle cx="40" cy="145" r="3" className="fill-accent/30" />
    </svg>
  );
}
