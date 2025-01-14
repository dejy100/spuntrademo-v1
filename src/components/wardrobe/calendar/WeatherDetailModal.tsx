import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Cloud, 
  Droplets, 
  Wind, 
  Sun, 
  Umbrella,
  ThermometerSun,
  ThermometerSnowflake,
  Shirt
} from 'lucide-react';

interface WeatherDetailModalProps {
  date: string;
  onClose: () => void;
  weatherData: {
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    condition: string;
    icon: string;
    hourlyForecast: Array<{
      time: string;
      temp: number;
      condition: string;
      icon: string;
    }>;
  };
}

export default function WeatherDetailModal({
  date,
  onClose,
  weatherData
}: WeatherDetailModalProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const getClothingRecommendations = (temp: number) => {
    if (temp >= 80) return {
      title: 'Hot Weather',
      items: ['Lightweight fabrics', 'Breathable materials', 'Sun protection'],
      tips: 'Choose moisture-wicking fabrics and loose-fitting clothes'
    };
    if (temp >= 70) return {
      title: 'Warm Weather',
      items: ['Light layers', 'Cotton blends', 'Breathable shoes'],
      tips: 'Layer light pieces for temperature changes'
    };
    if (temp >= 60) return {
      title: 'Mild Weather',
      items: ['Medium layers', 'Light jackets', 'Versatile pieces'],
      tips: 'Perfect for layering different pieces'
    };
    if (temp >= 50) return {
      title: 'Cool Weather',
      items: ['Light sweaters', 'Jackets', 'Closed shoes'],
      tips: 'Consider bringing an extra layer'
    };
    return {
      title: 'Cold Weather',
      items: ['Warm layers', 'Insulated pieces', 'Winter accessories'],
      tips: 'Focus on warmth and layering'
    };
  };

  const recommendations = getClothingRecommendations(weatherData.temperature);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-lg">{formattedDate}</h3>
            <p className="text-sm text-gray-600">Weather Details</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Weather */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{weatherData.icon}</span>
              <div>
                <h4 className="text-2xl font-semibold">{weatherData.temperature}°F</h4>
                <p className="text-gray-600">{weatherData.condition}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <ThermometerSun className="w-4 h-4 text-orange-500" />
              <span className="text-sm">Feels like {weatherData.feelsLike}°F</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span className="text-sm">Humidity {weatherData.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-gray-500" />
              <span className="text-sm">Wind {weatherData.windSpeed} mph</span>
            </div>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Hourly Forecast</h4>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {weatherData.hourlyForecast.map((hour, index) => (
              <div 
                key={index}
                className="flex flex-col items-center min-w-[60px] p-2 rounded-lg bg-gray-50"
              >
                <span className="text-sm text-gray-600">{hour.time}</span>
                <span className="text-xl my-1">{hour.icon}</span>
                <span className="font-medium">{hour.temp}°</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clothing Recommendations */}
        <div className="bg-purple-50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shirt className="w-5 h-5 text-purple-600" />
            <h4 className="font-medium">{recommendations.title} Outfit Tips</h4>
          </div>
          
          <ul className="space-y-2 mb-4">
            {recommendations.items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-sm text-purple-700 bg-purple-100 p-3 rounded-lg">
            <span className="font-medium">Pro Tip:</span> {recommendations.tips}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
