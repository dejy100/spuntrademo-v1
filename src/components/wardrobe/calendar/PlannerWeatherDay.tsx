import React from 'react';
import { Cloud, Sun, CloudSun, CloudSnow, CloudRain } from 'lucide-react';

interface PlannerWeatherDayProps {
  day: string;
  date: string;
  temp: number;
  weather: 'sunny' | 'cloudy' | 'partly-cloudy' | 'snow' | 'rain';
  isSelected?: boolean;
  hasOutfit?: boolean;
  onClick?: () => void;
}

export default function PlannerWeatherDay({ day, date, temp, weather, isSelected, hasOutfit, onClick }: PlannerWeatherDayProps) {
  const getWeatherIcon = () => {
    switch (weather) {
      case 'sunny':
        return <Sun className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />;
      case 'partly-cloudy':
        return <CloudSun className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />;
      case 'snow':
        return <CloudSnow className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />;
      case 'rain':
        return <CloudRain className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500" />;
      default:
        return <Cloud className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />;
    }
  };

  // Format date to show just "Dec 20"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div
      className={`flex flex-col items-center p-1.5 md:p-2 rounded-lg cursor-pointer transition-all w-[14.28%] mx-0 relative
        ${isSelected ? 'border-2 border-purple-500 bg-purple-50' : 'border border-gray-100'}
      `}
      onClick={onClick}
    >
      <span className="text-xs md:text-sm font-medium">{day}</span>
      <span className="text-[10px] md:text-xs text-gray-500">{formatDate(date)}</span>
      <div className="flex items-center gap-0.5 md:gap-1 mt-1">
        {getWeatherIcon()}
        <span className="text-xs md:text-sm text-blue-500 font-semibold">{temp}°</span>
      </div>
      {hasOutfit && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500"></div>
        </div>
      )}
    </div>
  );
}
