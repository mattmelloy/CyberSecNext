interface PasswordMFAProps {
  className?: string;
}

export function PasswordMFA({ className = "" }: PasswordMFAProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect x="15" y="15" width="170" height="170" className="fill-primary/5" rx="15" />
      
      {/* Password section */}
      <g transform="translate(25, 35)">
        {/* Password field */}
        <rect x="0" y="0" width="70" height="35" className="fill-background stroke-primary" strokeWidth="2" rx="5" />
        <text x="35" y="22" textAnchor="middle" className="fill-primary/60" fontSize="12">••••••••</text>
        
        {/* Key icon */}
        <g transform="translate(55, 40)">
          <circle cx="10" cy="10" r="8" className="fill-accent/20 stroke-accent" strokeWidth="2" />
          <line x1="16" y1="14" x2="30" y2="14" className="stroke-accent stroke-[2]" strokeLinecap="round" />
          <line x1="24" y1="14" x2="24" y2="20" className="stroke-accent stroke-[2]" strokeLinecap="round" />
          <line x1="28" y1="14" x2="28" y2="18" className="stroke-accent stroke-[2]" strokeLinecap="round" />
        </g>
        
        {/* Label */}
        <text x="35" y="70" textAnchor="middle" className="fill-primary font-semibold" fontSize="10">Strong Password</text>
      </g>
      
      {/* Plus sign */}
      <g transform="translate(100, 55)">
        <circle cx="0" cy="0" r="12" className="fill-accent/20" />
        <line x1="-6" y1="0" x2="6" y2="0" className="stroke-accent stroke-[2]" strokeLinecap="round" />
        <line x1="0" y1="-6" x2="0" y2="6" className="stroke-accent stroke-[2]" strokeLinecap="round" />
      </g>
      
      {/* MFA section */}
      <g transform="translate(105, 35)">
        {/* Phone */}
        <rect x="5" y="0" width="50" height="80" className="fill-background stroke-primary" strokeWidth="2" rx="8" />
        <rect x="10" y="10" width="40" height="55" className="fill-primary/10" rx="3" />
        <circle cx="30" cy="72" r="4" className="fill-primary/30" />
        
        {/* MFA code on screen */}
        <text x="30" y="35" textAnchor="middle" className="fill-primary font-bold" fontSize="14">2847</text>
        <text x="30" y="50" textAnchor="middle" className="fill-primary/60" fontSize="8">Enter code</text>
        
        {/* Notification badge */}
        <circle cx="50" cy="15" r="10" className="fill-accent" />
        <text x="50" y="19" textAnchor="middle" className="fill-white font-bold" fontSize="8">2FA</text>
        
        {/* Label */}
        <text x="30" y="95" textAnchor="middle" className="fill-primary font-semibold" fontSize="10">MFA Enabled</text>
      </g>
      
      {/* Update section */}
      <g transform="translate(25, 120)">
        {/* Computer */}
        <rect x="0" y="0" width="60" height="40" className="fill-background stroke-primary" strokeWidth="2" rx="3" />
        <rect x="5" y="5" width="50" height="28" className="fill-primary/10" />
        
        {/* Update arrow */}
        <g transform="translate(20, 12)">
          <circle cx="10" cy="10" r="12" className="fill-accent/20" />
          <path d="M10 4 L10 16 M5 10 L10 4 L15 10" className="stroke-accent stroke-[2] fill-none" strokeLinecap="round" />
        </g>
        
        {/* Stand */}
        <rect x="22" y="40" width="16" height="5" className="fill-primary/60" />
        <rect x="15" y="45" width="30" height="3" className="fill-primary/40" rx="1" />
        
        {/* Label */}
        <text x="30" y="65" textAnchor="middle" className="fill-primary font-semibold" fontSize="10">Auto Updates</text>
      </g>
      
      {/* Backup section */}
      <g transform="translate(105, 120)">
        {/* Cloud */}
        <path d="M15 35 Q5 35 5 25 Q5 15 18 15 Q20 8 30 8 Q42 8 45 18 Q55 18 55 28 Q55 35 45 35 Z" className="fill-primary/20 stroke-primary" strokeWidth="2" />
        
        {/* Checkmark */}
        <circle cx="30" cy="25" r="10" className="fill-accent" />
        <path d="M24 25 L28 29 L36 21" className="stroke-white stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Label */}
        <text x="30" y="55" textAnchor="middle" className="fill-primary font-semibold" fontSize="10">Backup & Test</text>
      </g>
      
      {/* Decorative elements */}
      <circle cx="180" cy="30" r="4" className="fill-accent/40" />
      <circle cx="20" cy="180" r="3" className="fill-primary/30" />
      <circle cx="180" cy="175" r="3" className="fill-accent/30" />
    </svg>
  );
}
