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
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex-1 min-w-0 pr-4 md:pr-6">
          <h2 className="text-base md:text-lg font-semibold mb-0.5 md:mb-1">Shop with your AI Stylist</h2>
          <p className="text-xs md:text-sm text-gray-600">Browse stores you love and check if a piece fits your style.</p>
        </div>
        <button className="flex items-center text-xs md:text-sm text-purple-600 hover:text-purple-700 font-medium whitespace-nowrap">
          View all
          <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1" />
        </button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 gap-2 md:gap-3 overflow-y-auto max-h-[300px] md:max-h-[400px] scrollbar-hide">
          {aiStores.map((store) => (
            <motion.div
              key={store.id}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
            >
              <img
                src={store.logo}
                alt={store.name}
                className="w-full h-full object-cover"
              />
              {/* Spuntra Hanger Logo Overlay */}
              <div className="absolute top-2 md:top-3 right-2 md:right-3 p-1 md:p-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                <Shirt className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-600" />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Brand Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-2 md:p-3">
                <p className="text-xs md:text-sm font-medium text-center truncate">{store.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-12 md:h-16 bg-gradient-to-t from-purple-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}