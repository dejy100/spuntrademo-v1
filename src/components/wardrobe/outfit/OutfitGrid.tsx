import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OutfitCard from './OutfitCard';

interface Outfit {
  id: number;
  name: string;
  image: string;
}

interface OutfitGridProps {
  outfits: Outfit[];
}

export default function OutfitGrid({ outfits }: OutfitGridProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {outfits.map((outfit) => (
          <OutfitCard
            key={outfit.id}
            image={outfit.image}
            name={outfit.name}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}