import React from 'react';
import { motion } from 'framer-motion';

const stores = [
  { id: 'macys', name: "Macy's", logo: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=100&h=100&fit=crop' },
  { id: 'nordstrom', name: 'Nordstrom', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop' },
  { id: 'saks', name: 'Saks', logo: 'https://images.unsplash.com/photo-1583705176130-a63a2e9b7447?w=100&h=100&fit=crop' },
  { id: 'bloomingdales', name: 'Bloomingdales', logo: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=100&h=100&fit=crop' }
];

export default function StoresSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Popular Stores</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stores.map((store) => (
          <motion.button
            key={store.id}
            whileHover={{ scale: 1.05 }}
            className="aspect-square bg-white rounded-2xl shadow-md overflow-hidden p-6 hover:shadow-lg transition-shadow"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="w-full h-full object-contain"
            />
          </motion.button>
        ))}
      </div>
    </section>
  );
}