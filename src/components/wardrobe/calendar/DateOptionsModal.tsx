import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Cloud, ChevronRight } from 'lucide-react';

interface DateOptionsModalProps {
  date: string;
  onClose: () => void;
  onPlanOutfit: () => void;
  onViewWeather: () => void;
  weatherData?: {
    temperature: number;
    condition: string;
    icon: string;
  };
}

export default function DateOptionsModal({
  date,
  onClose,
  onPlanOutfit,
  onViewWeather,
  weatherData
}: DateOptionsModalProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

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
        className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 max-w-md w-full mx-3 md:mx-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="font-semibold text-base md:text-lg">{formattedDate}</h3>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Weather Preview */}
        {weatherData && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{weatherData.icon}</span>
              <div>
                <p className="font-medium">{weatherData.temperature}°F</p>
                <p className="text-sm text-gray-600">{weatherData.condition}</p>
              </div>
            </div>
          </div>
        )}

        {/* Options */}
        <div className="space-y-3 md:space-y-4">
          {/* Plan Outfit */}
          <button
            onClick={onPlanOutfit}
            className="w-full flex items-center justify-between p-3 md:p-4 bg-purple-50 hover:bg-purple-100 rounded-lg md:rounded-xl transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 group-hover:bg-purple-200 rounded-lg transition-colors">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-sm md:text-base">Plan Outfit</h4>
                <p className="text-xs md:text-sm text-gray-600">Choose what to wear</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-gray-600" />
          </button>

          {/* View Weather */}
          <button
            onClick={onViewWeather}
            className="w-full flex items-center justify-between p-3 md:p-4 bg-blue-50 hover:bg-blue-100 rounded-lg md:rounded-xl transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 group-hover:bg-blue-200 rounded-lg transition-colors">
                <Cloud className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-sm md:text-base">Weather</h4>
                <p className="text-xs md:text-sm text-gray-600">
                  {weatherData ? `${weatherData.temperature}°F, ${weatherData.condition}` : 'Check forecast'}
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
