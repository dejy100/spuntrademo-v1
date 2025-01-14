import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, CloudRain, Snowflake, Check, CloudLightning, CloudFog, Wind } from 'lucide-react';

interface SpecialDate {
  date: string;
  name: string;
  outfit: string;
}

interface CalendarDayProps {
  day: number;
  date: string;
  specialDate?: SpecialDate;
  outfitPlanned?: boolean;
  outfitLogged?: boolean;
  weatherIcon?: string;
  temperature?: number;
  isToday?: boolean;
  onClick: () => void;
}

export default function CalendarDay({
  day,
  date,
  specialDate,
  outfitPlanned,
  outfitLogged,
  weatherIcon,
  temperature,
  isToday,
  onClick
}: CalendarDayProps) {
  const getWeatherIcon = () => {
    switch (weatherIcon) {
      case 'sunny': return <Sun className="w-3 h-3 text-yellow-500" />;
      case 'cloudy': return <Cloud className="w-3 h-3 text-gray-500" />;
      case 'rainy': return <CloudRain className="w-3 h-3 text-blue-500" />;
      case 'snow': return <Snowflake className="w-3 h-3 text-blue-400" />;
      case 'storm': return <CloudLightning className="w-3 h-3 text-purple-500" />;
      case 'fog': return <CloudFog className="w-3 h-3 text-gray-400" />;
      case 'wind': return <Wind className="w-3 h-3 text-teal-500" />;
      default: return null;
    }
  };

  const getTemperatureColor = (temp: number) => {
    if (temp >= 85) return 'text-red-500';
    if (temp >= 75) return 'text-orange-500';
    if (temp >= 65) return 'text-yellow-600';
    if (temp >= 55) return 'text-green-500';
    if (temp >= 45) return 'text-blue-400';
    return 'text-blue-500';
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative aspect-square rounded-xl p-2 text-sm 
        ${isToday ? 'ring-2 ring-purple-400 ring-offset-2' : ''}
        ${specialDate ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}
        transition-all duration-200
      `}
    >
      {/* Status Indicators */}
      <div className="absolute top-1 right-1 flex flex-col gap-1">
        {outfitPlanned && (
          <div className="w-2 h-2 rounded-full bg-purple-400" />
        )}
        {outfitLogged && (
          <div className="w-2 h-2 rounded-full bg-green-400" />
        )}
      </div>

      {/* Date Number */}
      <span className="relative z-10 font-medium">{day}</span>

      {/* Weather Preview */}
      {(weatherIcon || temperature) && (
        <div className="absolute bottom-1 left-1 flex items-center gap-1 text-xs">
          {getWeatherIcon()}
          {temperature && (
            <span className={`${getTemperatureColor(temperature)}`}>
              {temperature}°
            </span>
          )}
        </div>
      )}
      
      {/* Special Date Hover */}
      {specialDate && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-purple-600 text-white rounded-xl transition-opacity">
          <span className="text-xs text-center px-1">
            {specialDate.name}
          </span>
        </div>
      )}

      {/* Event Indicator */}
      {specialDate && (
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-400" />
      )}
    </motion.button>
  );
}