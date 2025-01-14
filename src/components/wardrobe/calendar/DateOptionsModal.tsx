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
        className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">{formattedDate}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
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
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={onPlanOutfit}
            className="w-full p-4 bg-purple-50 rounded-lg flex items-center justify-between hover:bg-purple-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-purple-600" />
              <div className="text-left">
                <p className="font-medium">Plan Outfit</p>
                <p className="text-sm text-gray-600">Create or modify your outfit</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={onViewWeather}
            className="w-full p-4 bg-blue-50 rounded-lg flex items-center justify-between hover:bg-blue-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Cloud className="w-5 h-5 text-blue-600" />
              <div className="text-left">
                <p className="font-medium">View Weather</p>
                <p className="text-sm text-gray-600">See detailed forecast</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
