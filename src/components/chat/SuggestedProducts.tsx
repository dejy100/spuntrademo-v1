import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const suggestedProducts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=200',
    name: 'Leopard Print Jacket'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=200',
    name: 'Air Jordan 1 High'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1594495024437-db507fd23fbe?auto=format&fit=crop&q=80&w=200',
    name: 'Premium Perfume Set'
  }
];

export default function SuggestedProducts() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h3 className="text-sm font-medium text-gray-500 mb-4">
        Things I can help you find
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {suggestedProducts.map(product => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}