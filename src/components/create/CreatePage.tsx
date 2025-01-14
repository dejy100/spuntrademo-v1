import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImagePlus, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../navigation/Header';
import CreateModeNavigation from './CreateModeNavigation';
import SwipeMode from './modes/swipe/SwipeMode';
import CanvasMode from './modes/CanvasMode';
import TryOnMode from './modes/TryOnMode';

type CreateMode = 'swipe' | 'canvas' | 'tryon';

export default function CreatePage() {
  const [mode, setMode] = useState<CreateMode>('swipe');
  const navigate = useNavigate();

  const renderMode = () => {
    switch (mode) {
      case 'swipe':
        return <SwipeMode />;
      case 'canvas':
        return <CanvasMode />;
      case 'tryon':
        return <TryOnMode />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-24">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/add-item')}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <ImagePlus className="w-5 h-5" />
            Add New Item
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[calc(100vh-16rem)]"
        >
          {renderMode()}
        </motion.div>
      </main>

      <CreateModeNavigation mode={mode} onModeChange={setMode} />
    </div>
  );
}