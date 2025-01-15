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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Shop with your AI Stylist</h2>
          <p className="text-gray-600">Browse stores you love and check if a piece fits your style and closet before you buy it.</p>
        </div>
        <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
          View all
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto max-h-[400px] scrollbar-hide">
          {aiStores.map((store) => (
            <motion.div
              key={store.id}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square bg-white rounded-2xl shadow-md overflow-hidden group"
            >
              <img
                src={store.logo}
                alt={store.name}
                className="w-full h-full object-cover"
              />
              {/* Spuntra Hanger Logo Overlay */}
              <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                <Shirt className="w-5 h-5 text-purple-600" />
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Brand Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                <p className="font-medium text-center">{store.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-purple-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}