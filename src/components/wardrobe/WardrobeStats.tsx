import React from 'react';
import { Shirt, Plus, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface WardrobeCategory {
  name: string;
  current: number;
  total: number;
  color: string;
}

export default function WardrobeStats() {
  const navigate = useNavigate();
  
  const categories: WardrobeCategory[] = [
    { name: 'Tops', current: 0, total: 10, color: 'from-purple-500 to-pink-500' },
    { name: 'Bottoms', current: 0, total: 10, color: 'from-blue-500 to-cyan-500' },
    { name: 'Dresses', current: 0, total: 5, color: 'from-rose-500 to-orange-500' },
    { name: 'Shoes', current: 0, total: 5, color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      {/* Add Item Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg"
      >
        <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
            <Shirt className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              0 / 30 ITEMS
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Add items to your wardrobe and let AI create perfect outfits
            </p>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/add-item')}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl md:rounded-2xl py-4 md:py-6 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
        >
          <Plus className="w-5 h-5" />
          Add Item
        </motion.button>
      </motion.div>

      {/* Categories Progress */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Wardrobe Categories</h3>
          <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1 text-sm md:text-base font-medium">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div key={category.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">{category.name}</span>
                <span className="text-sm md:text-base text-gray-500">
                  {category.current}/{category.total}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(category.current / category.total) * 100}%` }}
                  transition={{ delay: index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}