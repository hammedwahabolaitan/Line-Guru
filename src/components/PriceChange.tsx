
import { ArrowDown, ArrowUp } from "lucide-react";

interface PriceChangeProps {
  value: number;
  className?: string;
  showIcon?: boolean;
  compact?: boolean;
}

const PriceChange = ({ 
  value, 
  className = "", 
  showIcon = true,
  compact = false
}: PriceChangeProps) => {
  const isPositive = value >= 0;
  const textColor = isPositive ? "text-green-500" : "text-red-500";
  
  return (
    <div className={`flex items-center ${textColor} ${className}`}>
      {showIcon && (
        <span className="mr-1">
          {isPositive ? 
            <ArrowUp className="h-3 w-3" /> : 
            <ArrowDown className="h-3 w-3" />}
        </span>
      )}
      <span>{isPositive ? "+" : ""}{compact ? value.toFixed(1) : value.toFixed(2)}%</span>
    </div>
  );
};

export default PriceChange;
