import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const brands = [
  {
    id: 'gucci',
    name: 'Gucci',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop',
    discount: '20% Off'
  },
  {
    id: 'prada',
    name: 'Prada',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    discount: 'New Collection'
  },
  {
    id: 'dior',
    name: 'Dior',
    image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=400&h=300&fit=crop',
    discount: '15% Off'
  },
  {
    id: 'zara',
    name: 'Zara',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=300&fit=crop',
    discount: 'Premium'
  }
];

export default function BrandsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Featured Brands</h2>
        <button className="text-purple-600 hover:text-purple-700 font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-white/80">{brand.discount}</p>
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}