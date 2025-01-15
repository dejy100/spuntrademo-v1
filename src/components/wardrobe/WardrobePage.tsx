import React from 'react';
import { motion } from 'framer-motion';
import WardrobeHeader from './WardrobeHeader';
import WardrobeStats from './WardrobeStats';
import CategorySection from './CategorySection';
import BottomNavigation from './BottomNavigation';
import OutfitCategories from './OutfitCategories';
import WardrobeInsights from './insights/WardrobeInsights';
import { 
  upperBodyCategories, 
  lowerBodyCategories, 
  footwearCategories, 
  accessoryCategories 
} from '../../utils/wardrobeCategories';

export default function WardrobePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="px-4 py-4 md:px-8 md:py-8 max-w-[1400px] mx-auto">
        <WardrobeHeader />
        <WardrobeStats />
        <WardrobeInsights />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <OutfitCategories />
        </motion.div>

        <CategorySection 
          title="Upper Body"
          categories={upperBodyCategories}
        />

        <CategorySection 
          title="Lower Body"
          categories={lowerBodyCategories}
        />

        <CategorySection 
          title="Footwear"
          categories={footwearCategories}
        />

        <CategorySection 
          title="Accessories"
          categories={accessoryCategories}
        />
      </div>

      <BottomNavigation />
    </div>
  );
}