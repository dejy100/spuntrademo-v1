import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'accessories', label: 'Accessories' },
  { id: 'top', label: 'Top' },
  { id: 'bag', label: 'Bag' },
  { id: 'pants', label: 'Pants' },
  { id: 'shoes', label: 'Shoes' }
];

export default function SwipeMode() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center gap-2"
        >
          <button className="w-14 h-14 rounded-full bg-purple-100 hover:bg-purple-200 active:bg-purple-300 flex items-center justify-center transition-colors touch-manipulation">
            <Plus className="w-6 h-6 text-purple-600" />
          </button>
          <span className="text-sm text-gray-600">{category.label}</span>
        </motion.div>
      ))}
    </div>
  );
}