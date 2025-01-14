import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';

const items = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=772',
    creator: 'Summer Style',
    type: 'Outfit Creator'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=772',
    creator: 'Trendy Looks',
    type: 'Fashion Expert'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?auto=format&fit=crop&q=80&w=772',
    creator: 'Cute Outfits',
    type: 'Style Curator'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=772',
    creator: 'Chic & Minimal',
    type: 'Fashion Designer'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=772',
    creator: 'Street Style',
    type: 'Style Influencer'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=772',
    creator: 'Elegant Vibes',
    type: 'Fashion Curator'
  }
];

export default function StoreItems() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-md">
            <img
              src={item.image}
              alt={`Item by ${item.creator}`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <button className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Bookmark className="w-4 h-4 text-gray-600" />
          </button>

          <div className="mt-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div>
                <p className="text-sm font-medium">{item.creator}</p>
                <p className="text-xs text-gray-500">{item.type}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}