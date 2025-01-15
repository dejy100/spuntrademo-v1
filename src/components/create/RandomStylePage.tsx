import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Shuffle, Share2, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const randomItems = [
  {
    id: '1',
    name: 'White Blazer',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '2',
    name: 'Denim Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '3',
    name: 'Pink Handbag',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '4',
    name: 'Red Beanie',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: '5',
    name: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=500'
  }
];

export default function RandomStylePage() {
  const navigate = useNavigate();
  const [items, setItems] = useState(randomItems);
  const [isGenerating, setIsGenerating] = useState(false);

  const regenerateOutfit = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setItems([...items].sort(() => Math.random() - 0.5));
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
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
                onClick={regenerateOutfit}
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

      {/* Main Content */}
      <div className="pt-16 sm:pt-24 px-3 sm:px-4 pb-6 sm:pb-8">
        <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Canvas Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-6 aspect-square relative touch-none">
                <AnimatePresence mode="popLayout">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      drag
                      dragMomentum={false}
                      dragElastic={0.1}
                      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: (index % 3) * (window.innerWidth < 640 ? 100 : 150),
                        y: Math.floor(index / 3) * (window.innerWidth < 640 ? 100 : 150)
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="absolute cursor-move touch-none select-none"
                      whileHover={{ scale: 1.02, zIndex: 10 }}
                      whileDrag={{ scale: 1.05, zIndex: 20 }}
                    >
                      <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg transition-shadow group">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                          draggable={false}
                          loading="eager"
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Tips Panel */}
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Style Tips</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-purple-50 rounded-lg sm:rounded-xl">
                  <h3 className="text-sm sm:text-base font-medium mb-1.5 sm:mb-2">Drag & Drop</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Drag items around to create your perfect outfit combination. 
                    Try different arrangements to find the best look.
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-purple-50 rounded-lg sm:rounded-xl">
                  <h3 className="text-sm sm:text-base font-medium mb-1.5 sm:mb-2">Color Harmony</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Group complementary colors together for a cohesive look.
                    Mix and match to create unique combinations.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation"
                >
                  <Save className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Save to Wardrobe
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}