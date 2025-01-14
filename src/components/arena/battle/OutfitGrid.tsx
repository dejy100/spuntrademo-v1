```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface OutfitGridProps {
  selectedItems: string[];
}

export default function OutfitGrid({ selectedItems }: OutfitGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {selectedItems.map((_, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="aspect-square bg-white rounded-lg shadow-md cursor-pointer"
        />
      ))}
      {[...Array(6 - selectedItems.length)].map((_, i) => (
        <div
          key={`empty-${i}`}
          className="aspect-square bg-white/50 rounded-lg border-2 border-dashed border-gray-300"
        />
      ))}
    </div>
  );
}
```