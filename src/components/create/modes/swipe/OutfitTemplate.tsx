import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface OutfitTemplateProps {
  onCategorySelect: (category: string) => void;
}

export default function OutfitTemplate({ onCategorySelect }: OutfitTemplateProps) {
  const categories = [
    { id: 'accessories', label: 'Accessories', y: 50 },
    { id: 'top', label: 'Top', y: 150 },
    { id: 'bag', label: 'Bag', y: 250 },
    { id: 'pants', label: 'Pants', y: 350 },
    { id: 'shoes', label: 'Shoes', y: 450 }
  ];

  return (
    <div className="relative aspect-[3/4] bg-white rounded-2xl shadow-lg p-6">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategorySelect(category.id)}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: category.y }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
              <Plus className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">{category.label}</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}