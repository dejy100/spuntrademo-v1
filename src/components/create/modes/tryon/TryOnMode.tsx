import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function TryOnMode() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-13rem)] sm:min-h-[calc(100vh-16rem)] px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="text-center mb-8 sm:mb-12"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Camera className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Virtual Try-On</h2>
        <p className="text-sm sm:text-base text-gray-600">
          See how outfits look on you
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full max-w-[280px] sm:max-w-md bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center gap-1.5 sm:gap-2 shadow-md hover:shadow-lg active:shadow-sm transition-shadow touch-manipulation"
      >
        Start Try-On
      </motion.button>
    </div>
  );
}
