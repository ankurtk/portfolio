import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  delay?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(value);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};