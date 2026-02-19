interface ChatAdvisorProps {
  className?: string;
}

export function ChatAdvisor({ className = "" }: ChatAdvisorProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main chat bubble */}
      <path
        d="M30 50 C30 35 45 25 80 25 L140 25 C165 25 175 35 175 50 L175 110 C175 125 165 135 140 135 L80 135 L55 160 L55 135 L50 135 C35 135 30 125 30 110 Z"
        className="fill-primary stroke-primary"
        strokeWidth="2"
      />
      
      {/* Chat dots */}
      <circle cx="65" cy="75" r="8" className="fill-background" />
      <circle cx="100" cy="75" r="8" className="fill-background" />
      <circle cx="135" cy="75" r="8" className="fill-background" />
      
      {/* Small response bubble */}
      <path
        d="M140 145 C140 135 150 130 165 130 L180 130 C190 130 195 135 195 145 L195 170 C195 180 190 185 180 185 L165 185 L155 195 L155 185 L150 185 C142 185 140 180 140 170 Z"
        className="fill-accent stroke-accent"
        strokeWidth="2"
      />
      
      {/* Checkmark in response bubble */}
      <path
        d="M158 160 L168 170 L182 152"
        className="stroke-background"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative elements */}
      <circle cx="25" cy="90" r="10" className="fill-accent/20" />
      <circle cx="20" cy="130" r="6" className="fill-primary/20" />
      
      {/* Sparkle */}
      <path
        d="M185 100 L188 106 L195 106 L190 110 L192 117 L185 113 L178 117 L180 110 L175 106 L182 106 Z"
        className="fill-accent"
      />
    </svg>
  );
}
