import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'tops', name: 'Tops & Jackets', color: 'bg-purple-500' },
  { id: 'dresses', name: 'Dresses', color: 'bg-pink-500' },
  { id: 'bottoms', name: 'Bottoms', color: 'bg-blue-500' },
  { id: 'shoes', name: 'Shoes', color: 'bg-green-500' },
  { id: 'accessories', name: 'Accessories', color: 'bg-yellow-500' },
  { id: 'jewelry', name: 'Jewelry', color: 'bg-rose-500' },
  { id: 'body', name: 'Body', color: 'bg-orange-500' },
  { id: 'hairstyle', name: 'Hairstyle', color: 'bg-indigo-500' },
  { id: 'makeup', name: 'Makeup', color: 'bg-violet-500' },
  { id: 'viral', name: 'Viral', color: 'bg-red-500' }
];

export default function StoreCategories() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`px-6 py-3 rounded-xl text-white whitespace-nowrap ${category.color}`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}