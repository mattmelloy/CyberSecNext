import { PieChart, Pie, Cell } from "recharts";

interface ScorePieChartProps {
  score: number;
  size?: number;
}

export function ScorePieChart({ score, size = 160 }: ScorePieChartProps) {
  const data = [
    { value: score },
    { value: 100 - score }
  ];

  const getColor = (score: number) => {
    if (score >= 80) return "#22c55e"; // green-500
    if (score >= 60) return "#3b82f6"; // blue-500
    return "#ef4444"; // red-500
  };

  // Calculate dimensions to prevent cutoff
  const margin = 10;
  const adjustedSize = size + (margin * 2);

  return (
    <div className="flex items-center justify-center" style={{ width: adjustedSize, height: adjustedSize }}>
      <PieChart width={adjustedSize} height={adjustedSize}>
        <Pie
          data={data}
          cx={adjustedSize / 2}
          cy={adjustedSize / 2}
          innerRadius={(size / 2) - 15}
          outerRadius={size / 2}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
        >
          <Cell fill={getColor(score)} />
          <Cell fill="#e5e7eb" /> {/* gray-200 */}
        </Pie>
      </PieChart>
    </div>
  );
}