import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MatchesHeader from './MatchesHeader';
import FilterSection from './FilterSection';
import ProductGrid from './ProductGrid';
import { Product } from '../../types';

export default function MatchesPage() {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('');
  const [likedItems, setLikedItems] = useState<string[]>([]);

  const handleLikeToggle = (productId: string) => {
    setLikedItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <MatchesHeader />
        
        <div className="flex gap-8 mt-8">
          <FilterSection
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            selectedOccasion={selectedOccasion}
            setSelectedOccasion={setSelectedOccasion}
          />
          
          <div className="flex-1">
            <ProductGrid 
              likedItems={likedItems}
              onLikeToggle={handleLikeToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}