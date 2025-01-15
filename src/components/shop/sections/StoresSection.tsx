import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const stores = [
  { id: 'macys', name: "Macy's", logo: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=100&h=100&fit=crop' },
  { id: 'nordstrom', name: 'Nordstrom', logo: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=100&h=100&fit=crop' },
  { id: 'bloomingdales', name: "Bloomingdale's", logo: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=100&h=100&fit=crop' },
  { id: 'saks', name: 'Saks Fifth Avenue', logo: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=100&h=100&fit=crop' },
];

export default function StoresSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 min-w-0 pr-6">
          <h2 className="text-lg font-semibold mb-1">Compare Prices</h2>
          <p className="text-sm text-gray-600">Find the best deals from your favorite stores.</p>
        </div>
        <button className="flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium whitespace-nowrap">
          View all
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stores.map((store) => (
          <motion.div
            key={store.id}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3">
              <p className="text-sm font-medium text-center truncate">
                {store.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}