import React from 'react';
import { Cloud } from 'lucide-react';

interface WeatherDayProps {
  day: string;
  temp: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function WeatherDay({ day, temp, isSelected, onClick }: WeatherDayProps) {
  return (
    <div
      className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all w-[14.28%] mx-0
        ${isSelected ? 'border-2 border-purple-500 bg-purple-50' : 'border border-gray-100'}
      `}
      onClick={onClick}
    >
      <span className="text-sm font-medium">{day}</span>
      <span className="text-blue-500 font-semibold mt-1">{temp}°</span>
      <Cloud className="w-4 h-4 text-gray-400 mt-1" />
    </div>
  );
}
