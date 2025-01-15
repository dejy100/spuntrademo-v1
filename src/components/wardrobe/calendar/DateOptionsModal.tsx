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
        className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 max-w-md w-full mx-3 md:mx-4 max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="font-semibold text-base md:text-lg">{formattedDate}</h3>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Options */}
        <div className="space-y-3 md:space-y-4">
          <button
            onClick={onPlanOutfit}
            className="w-full flex items-center justify-between p-3 md:p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="p-2 bg-white rounded-lg">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-sm md:text-base">Plan Outfit</h4>
                <p className="text-xs md:text-sm text-gray-600">Create or edit your planned outfit</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
          </button>

          {weatherData && (
            <button
              onClick={onViewWeather}
              className="w-full flex items-center justify-between p-3 md:p-4 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors group"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 bg-white rounded-lg">
                  <Cloud className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-sm md:text-base">View Weather</h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    {weatherData.temperature}°F • {weatherData.condition}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-sky-600 transition-colors" />
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
