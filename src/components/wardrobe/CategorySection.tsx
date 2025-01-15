import React from 'react';
import { Plus, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';

interface CategorySectionProps {
  title: string;
  categories: string[];
}

export default function CategorySection({ title, categories }: CategorySectionProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 md:mt-12"
    >
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-purple-50 transition-colors"
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
      
      <div className="-mx-4 md:-mx-6">
        <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar py-2 px-4 md:px-6 pb-3 md:pb-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 px-4 py-2.5 md:px-6 md:py-3 bg-white rounded-xl text-sm font-medium whitespace-nowrap shadow-sm hover:shadow-md transition-all border border-gray-100 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 active:bg-purple-100 active:border-purple-300"
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 mt-4 md:mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/add-item')}
          className="aspect-square bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col items-center justify-center gap-2 md:gap-3 border-2 border-dashed border-gray-200 hover:border-purple-300 transition-colors group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 duration-200">
              <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <p className="mt-2 text-xs md:text-sm font-medium text-gray-700 text-center">Add New Item</p>
          </div>
          <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </motion.button>
        
        {[1, 2, 3, 4].map((item) => (
          <ItemCard key={item} />
        ))}
      </div>
    </motion.div>
  );
}