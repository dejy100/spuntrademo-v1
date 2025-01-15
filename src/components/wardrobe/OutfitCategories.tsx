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
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">My Wardrobe Outfits</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCalendar(!showCalendar)}
          className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <Calendar className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
          <span className="text-xs md:text-sm font-medium">Outfit Calendar</span>
        </motion.button>
      </div>

      <div className="-mx-4 md:-mx-6">
        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar py-2 px-4 md:px-6">
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