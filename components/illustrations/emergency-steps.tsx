interface EmergencyStepsProps {
  className?: string;
}

export function EmergencySteps({ className = "" }: EmergencyStepsProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect x="20" y="20" width="160" height="160" className="fill-primary/5" rx="10" />
      
      {/* Step 1 - STOP */}
      <g transform="translate(30, 30)">
        <circle cx="20" cy="20" r="18" className="fill-red-500" />
        <text x="20" y="25" textAnchor="middle" className="fill-white font-bold" fontSize="14">1</text>
        <rect x="5" y="42" width="30" height="12" className="fill-red-500" rx="2" />
        <text x="20" y="51" textAnchor="middle" className="fill-white font-bold" fontSize="8">STOP</text>
      </g>
      
      {/* Step 2 - Disconnect */}
      <g transform="translate(80, 30)">
        <circle cx="20" cy="20" r="18" className="fill-accent" />
        <text x="20" y="25" textAnchor="middle" className="fill-white font-bold" fontSize="14">2</text>
        {/* WiFi off icon */}
        <path d="M12 35 Q20 28 28 35" className="stroke-white stroke-[2] fill-none" />
        <line x1="10" y1="38" x2="30" y2="28" className="stroke-white stroke-[2]" strokeLinecap="round" />
      </g>
      
      {/* Step 3 - Report */}
      <g transform="translate(130, 30)">
        <circle cx="20" cy="20" r="18" className="fill-primary" />
        <text x="20" y="25" textAnchor="middle" className="fill-white font-bold" fontSize="14">3</text>
        {/* Person icon */}
        <circle cx="20" cy="35" r="5" className="fill-white" />
        <path d="M12 48 Q20 42 28 48" className="stroke-white stroke-[2] fill-none" />
      </g>
      
      {/* Step 4 - Call Bank */}
      <g transform="translate(55, 90)">
        <circle cx="20" cy="20" r="18" className="fill-green-600" />
        <text x="20" y="25" textAnchor="middle" className="fill-white font-bold" fontSize="14">4</text>
        {/* Phone icon */}
        <path d="M12 35 Q12 42 18 42 L22 38 Q25 40 28 37 L30 35 Q27 32 24 35 L22 37 L18 33 Q15 30 12 35" className="fill-white" />
      </g>
      
      {/* Step 5 - ACSC */}
      <g transform="translate(105, 90)">
        <circle cx="20" cy="20" r="18" className="fill-primary/80" />
        <text x="20" y="25" textAnchor="middle" className="fill-white font-bold" fontSize="14">5</text>
        {/* Shield icon */}
        <path d="M20 32 L28 35 L28 42 Q28 48 20 50 Q12 48 12 42 L12 35 Z" className="stroke-white stroke-[1.5] fill-none" />
      </g>
      
      {/* Connecting arrows */}
      <path d="M68 50 L75 50" className="stroke-primary/40 stroke-[2]" markerEnd="url(#arrow)" />
      <path d="M118 50 L125 50" className="stroke-primary/40 stroke-[2]" />
      <path d="M100 68 L100 75" className="stroke-primary/40 stroke-[2]" />
      <path d="M93 85 L86 85" className="stroke-primary/40 stroke-[2]" />
      
      {/* Arrow markers */}
      <polygon points="75,47 75,53 80,50" className="fill-primary/40" />
      <polygon points="125,47 125,53 130,50" className="fill-primary/40" />
      <polygon points="97,75 103,75 100,80" className="fill-primary/40" />
      
      {/* Emergency hotline */}
      <g transform="translate(40, 145)">
        <rect x="0" y="0" width="120" height="30" className="fill-accent/20 stroke-accent" strokeWidth="1" rx="5" />
        <text x="60" y="12" textAnchor="middle" className="fill-primary font-semibold" fontSize="8">ACSC Hotline</text>
        <text x="60" y="24" textAnchor="middle" className="fill-accent font-bold" fontSize="10">1300 292 371</text>
      </g>
      
      {/* Decorative elements */}
      <circle cx="25" cy="175" r="3" className="fill-primary/30" />
      <circle cx="175" cy="175" r="3" className="fill-accent/30" />
    </svg>
  );
}
