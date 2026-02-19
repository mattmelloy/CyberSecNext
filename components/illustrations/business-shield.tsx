interface BusinessShieldProps {
  className?: string;
}

export function BusinessShield({ className = "" }: BusinessShieldProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main shield */}
      <path
        d="M100 25 L160 50 L160 100 C160 138 130 165 100 175 C70 165 40 138 40 100 L40 50 L100 25Z"
        className="fill-primary/10 stroke-primary"
        strokeWidth="3"
      />
      
      {/* Inner shield */}
      <path
        d="M100 40 L145 60 L145 100 C145 128 120 150 100 158 C80 150 55 128 55 100 L55 60 L100 40Z"
        className="fill-background"
      />
      
      {/* Business building icon */}
      <rect x="75" y="75" width="50" height="55" className="fill-primary/20 stroke-primary" strokeWidth="2" />
      <rect x="82" y="85" width="10" height="10" className="fill-primary" />
      <rect x="108" y="85" width="10" height="10" className="fill-primary" />
      <rect x="82" y="105" width="10" height="10" className="fill-primary" />
      <rect x="108" y="105" width="10" height="10" className="fill-primary" />
      <rect x="93" y="110" width="14" height="20" className="fill-accent" />
      
      {/* Dollar sign with protection circle */}
      <circle cx="100" cy="65" r="12" className="fill-accent/20 stroke-accent" strokeWidth="2" />
      <text x="100" y="70" textAnchor="middle" className="fill-accent font-bold" fontSize="14">$</text>
      
      {/* Protection arrows */}
      <path d="M60 90 L50 100 L60 110" className="stroke-primary stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 90 L150 100 L140 110" className="stroke-primary stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Decorative elements */}
      <circle cx="50" cy="50" r="4" className="fill-accent/50" />
      <circle cx="155" cy="55" r="3" className="fill-primary/40" />
      <circle cx="150" cy="145" r="5" className="fill-accent/30" />
      <circle cx="45" cy="140" r="3" className="fill-primary/30" />
      
      {/* Warning indicators */}
      <path d="M70 145 L75 155 L65 155 Z" className="fill-accent" />
      <path d="M130 145 L135 155 L125 155 Z" className="fill-accent" />
    </svg>
  );
}
