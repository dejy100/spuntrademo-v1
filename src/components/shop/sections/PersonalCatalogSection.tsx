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
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-1">Compare Prices</h2>
          <p className="text-sm md:text-base text-gray-600">Find the best deals across retailers</p>
        </div>
        <button className="flex items-center text-sm md:text-base text-purple-600 hover:text-purple-700">
          View All
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-3 md:p-4"
          >
            <div className="aspect-square w-full mb-2 md:mb-3">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-cover rounded-md"
                loading="lazy"
              />
            </div>
            <p className="text-sm md:text-base font-medium text-center truncate">
              {brand.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}