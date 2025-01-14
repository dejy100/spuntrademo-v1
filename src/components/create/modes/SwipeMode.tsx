import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SwipeMode() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-3">spuntra</h1>
        <p className="text-xl text-gray-600">Create your outfit</p>
        <p className="text-sm text-gray-500">Start by selecting items</p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate('/random-style')}
        className="w-full max-w-md bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow mb-6"
      >
        <Sparkles className="w-5 h-5" />
        Style 5 random items
      </motion.button>
    </div>
  );
}