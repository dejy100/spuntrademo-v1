import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, PenTool } from 'lucide-react';

export default function CanvasMode() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-12"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <PenTool className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold mb-3">Canvas Mode</h1>
        <p className="text-xl text-gray-600">Create your outfit with complete freedom</p>
        <p className="text-sm text-gray-500">Drag, resize, and layer items to create unique looks</p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate('/random-style')}
        className="w-full max-w-md bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow mb-6"
      >
        <Sparkles className="w-5 h-5" />
        Start Creating
      </motion.button>
    </div>
  );
}