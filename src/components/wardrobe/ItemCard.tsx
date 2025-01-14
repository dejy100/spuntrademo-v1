import React from 'react';
import { Shirt, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const itemImages = [
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=300",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=300"
];

export default function ItemCard() {
  const randomImage = itemImages[Math.floor(Math.random() * itemImages.length)];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="aspect-square bg-white rounded-xl p-3 relative shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
    >
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 z-10">
        <Shirt className="w-4 h-4 text-gray-600" />
      </div>
      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 z-10">
        <Headphones className="w-4 h-4 text-gray-600" />
      </div>
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          src={randomImage}
          alt="Wardrobe item"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
}