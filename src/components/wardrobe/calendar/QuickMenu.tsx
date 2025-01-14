import React from 'react';
import OutfitItem from './OutfitItem';

interface QuickMenuProps {
  outfits: Array<{
    text: string;
    image: string;
    category: 'work' | 'casual' | 'formal';
  }>;
  onSelectOutfit: (outfit: any) => void;
}

export default function QuickMenu({ outfits, onSelectOutfit }: QuickMenuProps) {
  const categories = ['work', 'casual', 'formal'] as const;
  
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
      <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase">
        Recent Outfits
      </div>
      
      {categories.map(category => {
        const categoryOutfits = outfits.filter(o => o.category === category);
        if (categoryOutfits.length === 0) return null;
        
        return (
          <div key={category}>
            <div className="px-4 py-1 text-xs text-gray-400 capitalize">
              {category}
            </div>
            {categoryOutfits.map((outfit, index) => (
              <OutfitItem
                key={index}
                {...outfit}
                onClick={() => onSelectOutfit(outfit)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
