interface ChecklistWinProps {
  className?: string;
}

export function ChecklistWin({ className = "" }: ChecklistWinProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect x="20" y="20" width="160" height="160" className="fill-primary/5" rx="15" />
      
      {/* Checklist paper */}
      <rect x="40" y="35" width="120" height="130" className="fill-background stroke-primary" strokeWidth="2" rx="5" />
      
      {/* Header */}
      <rect x="40" y="35" width="120" height="25" className="fill-primary" rx="5" />
      <rect x="40" y="50" width="120" height="10" className="fill-primary" />
      <text x="100" y="52" textAnchor="middle" className="fill-white font-bold" fontSize="10">Quick-Win Checklist</text>
      
      {/* Checklist items */}
      {/* Item 1 - MFA */}
      <g transform="translate(50, 70)">
        <rect x="0" y="0" width="16" height="16" className="fill-green-100 stroke-green-500" strokeWidth="1.5" rx="3" />
        <path d="M4 8 L7 11 L12 5" className="stroke-green-500 stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="22" y="12" className="fill-primary" fontSize="9">Turn on MFA today</text>
        <circle cx="95" cy="8" r="6" className="fill-green-500" />
        <path d="M92 8 L94 10 L98 6" className="stroke-white stroke-[1.5] fill-none" strokeLinecap="round" />
      </g>
      
      {/* Item 2 - Updates */}
      <g transform="translate(50, 95)">
        <rect x="0" y="0" width="16" height="16" className="fill-green-100 stroke-green-500" strokeWidth="1.5" rx="3" />
        <path d="M4 8 L7 11 L12 5" className="stroke-green-500 stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="22" y="12" className="fill-primary" fontSize="9">Enable auto-updates</text>
        <circle cx="95" cy="8" r="6" className="fill-green-500" />
        <path d="M92 8 L94 10 L98 6" className="stroke-white stroke-[1.5] fill-none" strokeLinecap="round" />
      </g>
      
      {/* Item 3 - Backup */}
      <g transform="translate(50, 120)">
        <rect x="0" y="0" width="16" height="16" className="fill-green-100 stroke-green-500" strokeWidth="1.5" rx="3" />
        <path d="M4 8 L7 11 L12 5" className="stroke-green-500 stroke-[2] fill-none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="22" y="12" className="fill-primary" fontSize="9">Test your backup</text>
        <circle cx="95" cy="8" r="6" className="fill-green-500" />
        <path d="M92 8 L94 10 L98 6" className="stroke-white stroke-[1.5] fill-none" strokeLinecap="round" />
      </g>
      
      {/* Item 4 - Admin */}
      <g transform="translate(50, 145)">
        <rect x="0" y="0" width="16" height="16" className="fill-accent/20 stroke-accent" strokeWidth="1.5" rx="3" />
        <text x="22" y="12" className="fill-primary" fontSize="9">Review admin access</text>
        <circle cx="95" cy="8" r="6" className="fill-accent/50" />
        <text x="95" y="11" textAnchor="middle" className="fill-white font-bold" fontSize="7">?</text>
      </g>
      
      {/* Trophy badge */}
      <g transform="translate(145, 45)">
        <circle cx="20" cy="20" r="18" className="fill-accent/20 stroke-accent" strokeWidth="2" />
        {/* Trophy */}
        <path d="M12 12 L12 22 Q12 28 20 28 Q28 28 28 22 L28 12 Z" className="fill-accent" />
        <rect x="17" y="28" width="6" height="4" className="fill-accent" />
        <rect x="14" y="32" width="12" height="3" className="fill-accent" rx="1" />
        <path d="M12 14 Q6 14 6 20 Q6 24 12 24" className="stroke-accent stroke-[1.5] fill-none" />
        <path d="M28 14 Q34 14 34 20 Q34 24 28 24" className="stroke-accent stroke-[1.5] fill-none" />
      </g>
      
      {/* Progress indicator */}
      <g transform="translate(50, 170)">
        <rect x="0" y="0" width="100" height="8" className="fill-slate-200" rx="4" />
        <rect x="0" y="0" width="75" height="8" className="fill-green-500" rx="4" />
        <text x="50" y="18" textAnchor="middle" className="fill-primary/60" fontSize="8">3 of 4 complete this week!</text>
      </g>
      
      {/* Decorative elements */}
      <circle cx="30" cy="30" r="4" className="fill-accent/40" />
      <circle cx="175" cy="175" r="3" className="fill-primary/30" />
      <circle cx="25" cy="175" r="3" className="fill-green-500/30" />
    </svg>
  );
}
