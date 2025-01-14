import React from 'react';
import { motion } from 'framer-motion';

interface ItemGridProps {
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
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=150'
  }
];

export default function ItemGrid({ onItemSelect }: ItemGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          onClick={() => onItemSelect(item.id)}
          className="aspect-square bg-white rounded-lg shadow-md cursor-pointer overflow-hidden"
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