import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import OutfitTemplate from './OutfitTemplate';
import ItemSwiper from './ItemSwiper';

export default function SwipeMode() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {/* Template Section */}
        <div className="mb-4 sm:mb-8">
          <OutfitTemplate onCategorySelect={setSelectedCategory} />
        </div>

        {/* Item Swiper */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-100 p-3 sm:p-4 pb-safe"
          >
            <ItemSwiper category={selectedCategory} onClose={() => setSelectedCategory(null)} />
          </motion.div>
        )}
      </div>
    </div>
  );
}