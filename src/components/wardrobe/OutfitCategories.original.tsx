import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import OutfitCalendar from './calendar/OutfitCalendar';
import OutfitCategoryCard from './outfit/OutfitCategoryCard';
import OutfitGrid from './outfit/OutfitGrid';
import { outfitCategories } from '../../data/outfitCategories';

export default function OutfitCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const selectedOutfits = selectedCategory 
    ? outfitCategories.find(cat => cat.id === selectedCategory)?.outfits 
    : [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">My Wardrobe Outfits</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCalendar(!showCalendar)}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <Calendar className="w-5 h-5 text-purple-600" />
          <span className="text-sm font-medium">Outfit Calendar</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {outfitCategories.map((category) => (
          <OutfitCategoryCard
            key={category.id}
            {...category}
            isSelected={selectedCategory === category.id}
            onClick={() => setSelectedCategory(
              selectedCategory === category.id ? null : category.id
            )}
          />
        ))}
      </div>

      {selectedCategory && selectedOutfits && (
        <OutfitGrid outfits={selectedOutfits} />
      )}

      <AnimatePresence>
        {showCalendar && (
          <OutfitCalendar onClose={() => setShowCalendar(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
