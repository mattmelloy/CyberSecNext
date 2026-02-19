interface StatisticsChartProps {
  className?: string;
}

export function StatisticsChart({ className = "" }: StatisticsChartProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="85" className="fill-primary/5 stroke-primary/20" strokeWidth="2" />
      
      {/* Chart base */}
      <rect x="35" y="50" width="130" height="100" className="fill-background stroke-primary/30" strokeWidth="2" rx="5" />
      
      {/* Grid lines */}
      <line x1="35" y1="80" x2="165" y2="80" className="stroke-primary/10" strokeWidth="1" />
      <line x1="35" y1="110" x2="165" y2="110" className="stroke-primary/10" strokeWidth="1" />
      <line x1="35" y1="140" x2="165" y2="140" className="stroke-primary/10" strokeWidth="1" />
      
      {/* Bars */}
      <rect x="50" y="100" width="20" height="45" className="fill-primary/40" rx="2" />
      <rect x="80" y="70" width="20" height="75" className="fill-primary/60" rx="2" />
      <rect x="110" y="85" width="20" height="60" className="fill-primary" rx="2" />
      <rect x="140" y="55" width="20" height="90" className="fill-accent" rx="2" />
      
      {/* Trend arrow */}
      <path d="M55 95 L145 60" className="stroke-accent stroke-[2] fill-none" strokeDasharray="4 2" />
      <path d="M140 55 L150 60 L145 70" className="fill-accent stroke-accent stroke-[2]" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Dollar value */}
      <circle cx="155" cy="45" r="18" className="fill-accent/20 stroke-accent" strokeWidth="2" />
      <text x="155" y="50" textAnchor="middle" className="fill-accent font-bold" fontSize="10">$56K</text>
      
      {/* Percentage indicator */}
      <g transform="translate(45, 35)">
        <rect x="0" y="0" width="45" height="20" className="fill-red-100" rx="3" />
        <text x="22" y="14" textAnchor="middle" className="fill-red-600 font-bold" fontSize="10">↑ 14%</text>
      </g>
      
      {/* Legend dots */}
      <circle cx="55" cy="160" r="4" className="fill-primary/40" />
      <circle cx="85" cy="160" r="4" className="fill-primary/60" />
      <circle cx="115" cy="160" r="4" className="fill-primary" />
      <circle cx="145" cy="160" r="4" className="fill-accent" />
      
      {/* Australia icon */}
      <g transform="translate(85, 170)">
        <circle cx="15" cy="10" r="8" className="fill-primary/20" />
        <text x="15" y="14" textAnchor="middle" className="fill-primary font-bold" fontSize="8">AU</text>
      </g>
      
      {/* Decorative elements */}
      <circle cx="30" cy="45" r="3" className="fill-accent/40" />
      <circle cx="175" cy="100" r="4" className="fill-primary/30" />
    </svg>
  );
}
