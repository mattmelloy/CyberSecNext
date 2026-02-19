interface ClipboardCheckProps {
  className?: string;
}

export function ClipboardCheck({ className = "" }: ClipboardCheckProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Clipboard body */}
      <rect
        x="40"
        y="30"
        width="120"
        height="150"
        rx="8"
        className="fill-background stroke-primary"
        strokeWidth="3"
      />
      
      {/* Clipboard clip */}
      <rect
        x="70"
        y="20"
        width="60"
        height="20"
        rx="4"
        className="fill-primary"
      />
      
      {/* Check lines */}
      <line
        x1="60"
        y1="70"
        x2="80"
        y2="90"
        className="stroke-accent"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="80"
        y1="90"
        x2="120"
        y2="60"
        className="stroke-accent"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* List lines */}
      <line
        x1="60"
        y1="110"
        x2="140"
        y2="110"
        className="stroke-muted-foreground/30"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="60"
        y1="130"
        x2="140"
        y2="130"
        className="stroke-muted-foreground/30"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="60"
        y1="150"
        x2="110"
        y2="150"
        className="stroke-muted-foreground/30"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Decorative circle */}
      <circle
        cx="160"
        cy="50"
        r="25"
        className="fill-accent/20"
      />
    </svg>
  );
}
