import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Shuffle, Share2, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RandomStyleHeaderProps {
  onRegenerate: () => void;
  isGenerating: boolean;
}

export default function RandomStyleHeader({ onRegenerate, isGenerating }: RandomStyleHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="w-full px-3 py-3 sm:px-4 sm:py-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors touch-manipulation"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <h1 className="text-lg sm:text-2xl font-bold line-clamp-1">Style 5 Random Items</h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRegenerate}
              disabled={isGenerating}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base rounded-full disabled:opacity-50 touch-manipulation"
            >
              {isGenerating ? (
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <Shuffle className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
              <span className="hidden xs:inline">Regenerate</span>
              <span className="xs:hidden">New</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-3 bg-white rounded-full shadow-sm hover:shadow-md active:shadow-sm transition-all touch-manipulation"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 sm:p-3 bg-white rounded-full shadow-sm hover:shadow-md active:shadow-sm transition-all touch-manipulation"
            >
              <Save className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}