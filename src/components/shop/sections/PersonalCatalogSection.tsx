import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const brands = [
  { id: 'nordstrom', name: 'Nordstrom', logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=150&h=150&fit=crop' },
  { id: 'saks', name: 'Saks Fifth Avenue', logo: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=150&h=150&fit=crop' },
  { id: 'bloomingdales', name: 'Bloomingdales', logo: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150&h=150&fit=crop' },
  { id: 'neiman', name: 'Neiman Marcus', logo: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=150&h=150&fit=crop' },
  { id: 'bergdorf', name: 'Bergdorf Goodman', logo: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=150&h=150&fit=crop' },
  { id: 'barneys', name: 'Barneys New York', logo: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150&h=150&fit=crop' },
  { id: 'ssense', name: 'SSENSE', logo: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=150&h=150&fit=crop' },
  { id: 'farfetch', name: 'Farfetch', logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=150&h=150&fit=crop' }
];

export default function PersonalCatalogSection() {
  return (
    <section>
      <div className="flex flex-col gap-2 mb-4 md:flex-row md:items-center md:justify-between md:mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">Compare Prices</h2>
          <p className="text-sm text-gray-600 md:text-base">Find the best deals across multiple luxury retailers</p>
        </div>
        <button className="flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium md:text-base">
          View all
          <ChevronRight className="w-4 h-4 ml-1 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[400px] scrollbar-hide md:grid-cols-4 md:gap-4">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-3 md:rounded-xl md:p-4"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full aspect-square object-cover rounded-lg mb-3 md:rounded-xl md:mb-4"
              />
              <p className="text-sm font-medium text-center md:text-base">{brand.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-purple-50 to-transparent pointer-events-none md:h-20" />
      </div>
    </section>
  );
}