
import { Card, CardContent } from "@/components/ui/card";
import PriceChange from "@/components/PriceChange";
import { LineChart, TrendingUp } from "lucide-react";

interface CryptoCardProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  chartData?: number[];
}

const CryptoCard = ({ name, symbol, price, change, chartData }: CryptoCardProps) => {
  // Generate some random chart data if none is provided
  const chartPoints = chartData || Array.from({ length: 20 }, () => 
    Math.floor(Math.random() * 100)
  );
  
  // Generate SVG path for mini chart
  const minValue = Math.min(...chartPoints);
  const maxValue = Math.max(...chartPoints);
  const range = maxValue - minValue;
  
  const chartHeight = 40;
  const chartWidth = 100;
  
  const points = chartPoints.map((point, i) => {
    const x = (i / (chartPoints.length - 1)) * chartWidth;
    const y = chartHeight - ((point - minValue) / range) * chartHeight;
    return `${x},${y}`;
  }).join(' ');
  
  // Color based on price change
  const chartColor = change >= 0 ? "#10b981" : "#ef4444";
  
  return (
    <Card className="bg-guru-dark border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
              <TrendingUp className="w-4 h-4 text-guru-blue" />
            </div>
            <div>
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-gray-400">{symbol}</p>
            </div>
          </div>
          <PriceChange value={change} compact />
        </div>
        
        <div className="mt-2">
          <p className="text-2xl font-bold">${price.toLocaleString()}</p>
        </div>
        
        <div className="mt-3 relative h-10">
          <svg width="100%" height="40" viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible">
            <defs>
              <linearGradient id={`gradient-${symbol}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={chartColor} stopOpacity="0.2" />
                <stop offset="100%" stopColor={chartColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Area fill */}
            <path 
              d={`M0,${chartHeight} ${points} ${chartWidth},${chartHeight} Z`}
              fill={`url(#gradient-${symbol})`} 
            />
            
            {/* Line */}
            <polyline
              points={points}
              fill="none"
              stroke={chartColor}
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
