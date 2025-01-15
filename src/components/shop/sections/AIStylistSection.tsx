import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shirt } from 'lucide-react';

const aiStores = [
  { 
    id: 'gucci',
    name: 'Gucci',
    logo: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=400&fit=crop'
  },
  {
    id: 'prada', 
    name: 'Prada',
    logo: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=400&fit=crop'
  },
  {
    id: 'dior',
    name: 'Dior', 
    logo: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop'
  },
  {
    id: 'zara',
    name: 'Zara',
    logo: 'https://images.unsplash.com/photo-1589363358751-ab05797e5629?w=400&h=400&fit=crop'
  },
  {
    id: 'hermes',
    name: 'Hermès',
    logo: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=400&h=400&fit=crop'
  },
  {
    id: 'burberry',
    name: 'Burberry',
    logo: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=400&fit=crop'
  },
  {
    id: 'chanel',
    name: 'Chanel',
    logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop'
  },
  {
    id: 'versace',
    name: 'Versace',
    logo: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop'
  }
];

export default function AIStylistSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-1">AI Fashion Stylist</h2>
          <p className="text-sm md:text-base text-gray-600">Get personalized recommendations</p>
        </div>
        <button className="flex items-center text-sm md:text-base text-purple-600 hover:text-purple-700">
          View All
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {aiStores.map((store) => (
          <motion.div
            key={store.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex items-center space-x-2 px-3 py-2 bg-white/90 rounded-full text-sm font-medium">
                <Shirt className="w-4 h-4" />
                <span>Style Me</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}