import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface OutfitTemplateProps {
  onCategorySelect: (category: string) => void;
}

export default function OutfitTemplate({ onCategorySelect }: OutfitTemplateProps) {
  const categories = [
    { id: 'accessories', label: 'Accessories', yPercent: 10 },
    { id: 'top', label: 'Top', yPercent: 25 },
    { id: 'bag', label: 'Bag', yPercent: 45 },
    { id: 'pants', label: 'Pants', yPercent: 65 },
    { id: 'shoes', label: 'Shoes', yPercent: 85 }
  ];

  return (
    <div className="relative aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategorySelect(category.id)}
          className="absolute left-1/2 -translate-x-1/2 touch-manipulation"
          style={{ top: `${category.yPercent}%` }}
        >
          <div className="flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-50 flex items-center justify-center active:bg-purple-100 transition-colors">
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">{category.label}</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}