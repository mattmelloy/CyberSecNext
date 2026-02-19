interface ShieldProtectedProps {
  className?: string;
}

export function ShieldProtected({ className = "" }: ShieldProtectedProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield body */}
      <path
        d="M100 25 L165 50 L165 100 C165 140 135 170 100 180 C65 170 35 140 35 100 L35 50 L100 25Z"
        className="fill-primary/10 stroke-primary"
        strokeWidth="3"
      />
      
      {/* Inner shield highlight */}
      <path
        d="M100 40 L150 60 L150 100 C150 130 125 155 100 165 C75 155 50 130 50 100 L50 60 L100 40Z"
        className="fill-background"
      />
      
      {/* Checkmark circle */}
      <circle
        cx="100"
        cy="100"
        r="35"
        className="fill-primary"
      />
      
      {/* Checkmark */}
      <path
        d="M80 100 L93 115 L122 85"
        className="stroke-background"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative sparkles */}
      <circle cx="45" cy="45" r="5" className="fill-accent" />
      <circle cx="160" cy="55" r="4" className="fill-accent/60" />
      <circle cx="155" cy="145" r="6" className="fill-primary/40" />
      <circle cx="40" cy="140" r="4" className="fill-accent/40" />
      
      {/* Small stars */}
      <path
        d="M170 90 L173 96 L180 96 L175 100 L177 107 L170 103 L163 107 L165 100 L160 96 L167 96 Z"
        className="fill-accent"
      />
    </svg>
  );
}
