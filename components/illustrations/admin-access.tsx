interface AdminAccessProps {
  className?: string;
}

export function AdminAccess({ className = "" }: AdminAccessProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect x="15" y="15" width="170" height="170" className="fill-primary/5" rx="15" />
      
      {/* Admin user (larger, with key) */}
      <g transform="translate(30, 40)">
        {/* User circle */}
        <circle cx="35" cy="35" r="30" className="fill-primary/20 stroke-primary" strokeWidth="2" />
        
        {/* User icon */}
        <circle cx="35" cy="28" r="10" className="fill-primary" />
        <path d="M18 55 Q35 42 52 55" className="fill-primary" />
        
        {/* Key badge */}
        <g transform="translate(50, 45)">
          <circle cx="12" cy="12" r="12" className="fill-accent" />
          <circle cx="10" cy="10" r="5" className="stroke-white stroke-[1.5] fill-none" />
          <line x1="14" y1="14" x2="22" y2="14" className="stroke-white stroke-[1.5]" strokeLinecap="round" />
          <line x1="18" y1="14" x2="18" y2="18" className="stroke-white stroke-[1]" strokeLinecap="round" />
        </g>
        
        {/* Label */}
        <text x="35" y="85" textAnchor="middle" className="fill-primary font-semibold" fontSize="10">Admin</text>
      </g>
      
      {/* Regular users */}
      <g transform="translate(110, 50)">
        {/* User 1 */}
        <circle cx="20" cy="20" r="18" className="fill-background stroke-primary/60" strokeWidth="2" />
        <circle cx="20" cy="15" r="6" className="fill-primary/60" />
        <path d="M10 32 Q20 24 30 32" className="fill-primary/60" />
        
        {/* No key indicator */}
        <g transform="translate(25, 25)">
          <circle cx="8" cy="8" r="8" className="fill-slate-200" />
          <line x1="4" y1="4" x2="12" y2="12" className="stroke-slate-400 stroke-[2]" strokeLinecap="round" />
        </g>
      </g>
      
      <g transform="translate(110, 100)">
        {/* User 2 */}
        <circle cx="20" cy="20" r="18" className="fill-background stroke-primary/60" strokeWidth="2" />
        <circle cx="20" cy="15" r="6" className="fill-primary/60" />
        <path d="M10 32 Q20 24 30 32" className="fill-primary/60" />
        
        {/* No key indicator */}
        <g transform="translate(25, 25)">
          <circle cx="8" cy="8" r="8" className="fill-slate-200" />
          <line x1="4" y1="4" x2="12" y2="12" className="stroke-slate-400 stroke-[2]" strokeLinecap="round" />
        </g>
      </g>
      
      {/* Label for regular users */}
      <text x="130" y="150" textAnchor="middle" className="fill-primary/60 font-semibold" fontSize="10">Standard Users</text>
      
      {/* Divider line */}
      <line x1="95" y1="50" x2="95" y2="140" className="stroke-primary/20 stroke-[1] stroke-dashed" />
      
      {/* Document/Macro warning */}
      <g transform="translate(30, 130)">
        <rect x="0" y="0" width="50" height="40" className="fill-background stroke-accent" strokeWidth="2" rx="3" />
        <rect x="5" y="5" width="40" height="30" className="fill-accent/10" />
        <text x="25" y="18" textAnchor="middle" className="fill-primary/60" fontSize="6">Document</text>
        <g transform="translate(15, 20)">
          <rect x="0" y="0" width="20" height="10" className="fill-accent/30 stroke-accent" strokeWidth="1" rx="1" />
          <text x="10" y="8" textAnchor="middle" className="fill-accent font-bold" fontSize="5">MACRO</text>
        </g>
        {/* Warning triangle */}
        <path d="M40 5 L48 18 L32 18 Z" className="fill-accent/20 stroke-accent" strokeWidth="1" />
        <text x="40" y="15" textAnchor="middle" className="fill-accent font-bold" fontSize="6">!</text>
      </g>
      
      {/* Physical security - locked laptop */}
      <g transform="translate(85, 130)">
        <rect x="0" y="0" width="45" height="30" className="fill-background stroke-primary" strokeWidth="2" rx="3" />
        <rect x="5" y="5" width="35" height="20" className="fill-primary/10" />
        {/* Lock icon */}
        <g transform="translate(15, 8)">
          <rect x="0" y="6" width="12" height="8" className="fill-primary" rx="1" />
          <path d="M2 6 L2 3 Q2 0 6 0 Q10 0 10 3 L10 6" className="stroke-primary stroke-[1.5] fill-none" />
        </g>
        {/* Cable */}
        <path d="M40 15 Q50 15 50 25 Q50 35 40 35" className="stroke-accent stroke-[2] fill-none" />
        <circle cx="40" cy="35" r="3" className="fill-accent" />
      </g>
      
      {/* Decorative elements */}
      <circle cx="180" cy="30" r="4" className="fill-accent/40" />
      <circle cx="20" cy="180" r="3" className="fill-primary/30" />
    </svg>
  );
}
