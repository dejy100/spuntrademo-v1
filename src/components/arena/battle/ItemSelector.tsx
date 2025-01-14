import React from 'react';
import { motion } from 'framer-motion';

interface ItemSelectorProps {
  onItemSelect: (itemId: string) => void;
}

const items = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=150'
  }
];

export default function ItemSelector({ onItemSelect }: ItemSelectorProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          className="aspect-square bg-white rounded-lg shadow-md cursor-pointer overflow-hidden"
          onClick={() => onItemSelect(item.id)}
        >
          <img
            src={item.image}
            alt={`Item ${item.id}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}