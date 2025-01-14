import React from 'react';
import { motion } from 'framer-motion';
import { Heart, X, Info } from 'lucide-react';

interface RefineFeedTooltipProps {
  onClose: () => void;
}

export default function RefineFeedTooltip({ onClose }: RefineFeedTooltipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-2xl shadow-xl p-6 mb-8"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-purple-100">
          <Info className="w-6 h-6 text-purple-600" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Refine Your Feed</h3>
          <p className="text-gray-600 mb-4">
            Help us understand your style preferences better. Use these buttons on each item:
          </p>
          
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white shadow-md rounded-full">
                <Heart className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600">Love it</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white shadow-md rounded-full">
                <X className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-sm text-gray-600">Not for me</span>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </motion.div>
  );
}