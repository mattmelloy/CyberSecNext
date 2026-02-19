interface ReportChartProps {
  className?: string;
}

export function ReportChart({ className = "" }: ReportChartProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Document body */}
      <rect
        x="35"
        y="20"
        width="130"
        height="160"
        rx="8"
        className="fill-background stroke-primary"
        strokeWidth="3"
      />
      
      {/* Document fold corner */}
      <path
        d="M135 20 L165 50 L135 50 Z"
        className="fill-muted stroke-primary"
        strokeWidth="2"
      />
      
      {/* Header line */}
      <rect
        x="55"
        y="40"
        width="60"
        height="8"
        rx="2"
        className="fill-primary/20"
      />
      
      {/* Chart area background */}
      <rect
        x="55"
        y="60"
        width="90"
        height="60"
        rx="4"
        className="fill-muted/50"
      />
      
      {/* Chart bars */}
      <rect
        x="65"
        y="100"
        width="15"
        height="15"
        className="fill-accent/60"
      />
      <rect
        x="85"
        y="85"
        width="15"
        height="30"
        className="fill-accent/60"
      />
      <rect
        x="105"
        y="75"
        width="15"
        height="40"
        className="fill-primary"
      />
      <rect
        x="125"
        y="90"
        width="15"
        height="25"
        className="fill-accent/60"
      />
      
      {/* Score circle */}
      <circle
        cx="100"
        cy="150"
        r="20"
        className="fill-primary/10 stroke-primary"
        strokeWidth="2"
      />
      <text
        x="100"
        y="156"
        textAnchor="middle"
        className="fill-primary text-xs font-semibold"
        style={{ fontSize: '14px' }}
      >
        78%
      </text>
      
      {/* Decorative elements */}
      <circle
        cx="30"
        cy="60"
        r="15"
        className="fill-accent/20"
      />
      <circle
        cx="175"
        cy="140"
        r="10"
        className="fill-primary/20"
      />
    </svg>
  );
}
