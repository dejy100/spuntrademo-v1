import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImagePlus, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../navigation/Header';
import CreateNavigation from './CreateNavigation';
import SwipeMode from './modes/swipe/SwipeMode';
import CanvasMode from './modes/canvas/CanvasMode';
import TryOnMode from './modes/tryon/TryOnMode';

type CreateMode = 'swipe' | 'canvas' | 'tryon';

export default function CreatePage() {
  const [mode, setMode] = useState<CreateMode>('canvas');
  const navigate = useNavigate();

  const renderMode = () => {
    switch (mode) {
      case 'swipe':
        return <SwipeMode />;
      case 'canvas':
        return <CanvasMode />;
      case 'tryon':
        return <TryOnMode />;
      default:
        return <CanvasMode />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <main className="w-full px-4 pt-16 pb-20 sm:pt-24 sm:pb-24">
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors touch-manipulation"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/add-item')}
            className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transition-all touch-manipulation"
          >
            <ImagePlus className="w-4 h-4 sm:w-5 sm:h-5" />
            Add New Item
          </motion.button>
        </div>

        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="min-h-[calc(100vh-13rem)] sm:min-h-[calc(100vh-16rem)]"
        >
          {renderMode()}
        </motion.div>
      </main>

      <CreateNavigation mode={mode} setMode={setMode} />
    </div>
  );
}