import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImagePlus, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../navigation/Header';

type CreateMode = 'swipe' | 'canvas' | 'tryon';

export default function CreatePage() {
  const [mode, setMode] = useState<CreateMode>('canvas');
  const navigate = useNavigate();

  const renderMode = () => {
    switch (mode) {
      case 'swipe':
        return (
          <div className="flex flex-col items-center justify-center gap-8 py-4">
            {['Accessories', 'Top', 'Bag', 'Pants', 'Shoes'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <button className="w-14 h-14 rounded-full bg-purple-100 hover:bg-purple-200 active:bg-purple-300 flex items-center justify-center transition-colors touch-manipulation">
                  <span className="text-2xl text-purple-600">+</span>
                </button>
                <span className="text-sm text-gray-600">{category}</span>
              </motion.div>
            ))}
          </div>
        );
      case 'canvas':
        return (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-13rem)] sm:min-h-[calc(100vh-16rem)] px-4">
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
              <span className="text-lg">✨</span>
              Style 5 random items
            </motion.button>
          </div>
        );
      case 'tryon':
        return (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-13rem)] sm:min-h-[calc(100vh-16rem)] px-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl text-purple-600">📸</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Virtual Try-On</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-[250px] sm:max-w-none mx-auto">
                See how outfits look on you
              </p>
            </motion.div>
          </div>
        );
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

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe">
        <div className="w-full max-w-md mx-auto px-3 py-1 sm:px-6 sm:py-2">
          <div className="flex justify-between items-center">
            {[
              { id: 'swipe', label: 'SWIPE', icon: '📱' },
              { id: 'canvas', label: 'CANVAS', icon: '✏️' },
              { id: 'tryon', label: 'TRY ON', icon: '👕' }
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setMode(id as CreateMode)}
                className="relative flex-1 px-2 sm:px-6 py-2 sm:py-3 flex flex-col items-center gap-0.5 sm:gap-1 touch-manipulation"
              >
                <span className="text-xl">
                  {icon}
                </span>
                <span 
                  className={`text-[10px] sm:text-xs ${
                    mode === id 
                      ? 'text-purple-600 font-medium' 
                      : 'text-gray-400'
                  }`}
                >
                  {label}
                </span>
                {mode === id && (
                  <motion.div
                    layoutId="activeCreateTab"
                    className="absolute -bottom-1 left-2 right-2 sm:-bottom-2 sm:left-0 sm:right-0 h-0.5 bg-purple-600"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}