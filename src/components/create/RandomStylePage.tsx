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
                onClick={regenerateOutfit}
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

      {/* Main Content */}
      <div className="pt-24 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Canvas Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 aspect-square relative">
                <AnimatePresence>
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      drag
                      dragMomentum={false}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: (index % 3) * 150,
                        y: Math.floor(index / 3) * 150
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute cursor-move"
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      whileDrag={{ scale: 1.1, zIndex: 20 }}
                    >
                      <div className="w-40 h-40 rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Tips Panel */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Style Tips</h2>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-xl">
                  <h3 className="font-medium mb-2">Drag & Drop</h3>
                  <p className="text-sm text-gray-600">
                    Drag items around to create your perfect outfit combination. 
                    Try different arrangements to find the best look.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded-xl">
                  <h3 className="font-medium mb-2">Color Harmony</h3>
                  <p className="text-sm text-gray-600">
                    Group complementary colors together for a cohesive look.
                    Mix and match to create unique combinations.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
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