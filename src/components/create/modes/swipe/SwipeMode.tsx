import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import OutfitTemplate from './OutfitTemplate';
import ItemSwiper from './ItemSwiper';

export default function SwipeMode() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Template Section */}
        <div className="mb-8">
          <OutfitTemplate onCategorySelect={setSelectedCategory} />
        </div>

        {/* Item Swiper */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4"
          >
            <ItemSwiper category={selectedCategory} onClose={() => setSelectedCategory(null)} />
          </motion.div>
        )}
      </div>
    </div>
  );
}