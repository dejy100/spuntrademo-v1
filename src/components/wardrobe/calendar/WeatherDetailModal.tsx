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
        className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 max-w-lg w-full mx-3 md:mx-4 max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 md:mb-6 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Cloud className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
            <h2 className="text-lg md:text-xl font-semibold">{formattedDate}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="space-y-4 md:space-y-6 flex-1">
          {/* Current Weather */}
          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-lg p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-sky-600">
                  {weatherData.temperature}°F
                </p>
                <p className="text-sky-800 mt-1">{weatherData.condition}</p>
              </div>
              <div className="text-sky-600 text-6xl md:text-7xl">
                {weatherData.icon}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                <ThermometerSun className="w-5 h-5 md:w-6 md:h-6 text-amber-500 mx-auto" />
                <p className="text-sm mt-1">Feels like</p>
                <p className="font-medium">{weatherData.feelsLike}°F</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                <Droplets className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mx-auto" />
                <p className="text-sm mt-1">Humidity</p>
                <p className="font-medium">{weatherData.humidity}%</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                <Wind className="w-5 h-5 md:w-6 md:h-6 text-gray-500 mx-auto" />
                <p className="text-sm mt-1">Wind</p>
                <p className="font-medium">{weatherData.windSpeed} mph</p>
              </div>
            </div>
          </div>

          {/* Hourly Forecast */}
          <div>
            <h3 className="font-medium mb-3">Hourly Forecast</h3>
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {weatherData.hourlyForecast.map((hour, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-2 md:p-3 text-center"
                >
                  <p className="text-sm font-medium">{hour.time}</p>
                  <div className="text-2xl my-1">{hour.icon}</div>
                  <p className="text-sm font-medium">{hour.temp}°</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clothing Recommendations */}
          <div>
            <h3 className="font-medium mb-3">What to Wear</h3>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shirt className="w-5 h-5 text-purple-600" />
                <p className="font-medium text-purple-900">
                  {getClothingRecommendations(weatherData.temperature).title}
                </p>
              </div>
              <ul className="space-y-2">
                {getClothingRecommendations(weatherData.temperature).items.map((item, index) => (
                  <li key={index} className="text-sm text-purple-800">• {item}</li>
                ))}
              </ul>
              <p className="text-sm text-purple-700 mt-3">
                💡 {getClothingRecommendations(weatherData.temperature).tips}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 sticky bottom-0 bg-white pt-4 border-t">
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-sky-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-sky-700 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
