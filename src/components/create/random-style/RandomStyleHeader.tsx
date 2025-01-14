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
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Style 5 Random Items</h1>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRegenerate}
              disabled={isGenerating}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full disabled:opacity-50"
            >
              {isGenerating ? (
                <Sparkles className="w-5 h-5 animate-spin" />
              ) : (
                <Shuffle className="w-5 h-5" />
              )}
              Regenerate
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Share2 className="w-5 h-5 text-gray-600" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Save className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}