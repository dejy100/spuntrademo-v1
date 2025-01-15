import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SwipeMode() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-12rem)] px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">spuntra</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-1 sm:mb-2">Create your outfit</p>
        <p className="text-xs sm:text-sm text-gray-500">Start by selecting items</p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate('/random-style')}
        className="w-full max-w-[280px] sm:max-w-md bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm sm:text-base rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center gap-1.5 sm:gap-2 shadow-md hover:shadow-lg active:shadow-sm transition-shadow mb-4 sm:mb-6 touch-manipulation"
      >
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        Style 5 random items
      </motion.button>
    </div>
  );
}