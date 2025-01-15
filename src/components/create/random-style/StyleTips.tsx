import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function StyleTips() {
  return (
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Style Tips</h2>
      <div className="space-y-3 sm:space-y-4">
        <div className="p-3 sm:p-4 bg-purple-50 rounded-lg sm:rounded-xl">
          <h3 className="text-sm sm:text-base font-medium mb-1.5 sm:mb-2">Color Harmony</h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Drag items around to create your perfect outfit combination. 
            Try grouping complementary colors together.
          </p>
        </div>

        <div className="p-3 sm:p-4 bg-purple-50 rounded-lg sm:rounded-xl">
          <h3 className="text-sm sm:text-base font-medium mb-1.5 sm:mb-2">Layering Guide</h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Stack items in order: base layer at the bottom, 
            outer layers on top, accessories last.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation"
        >
          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Save to Wardrobe
        </motion.button>
      </div>
    </div>
  );
}