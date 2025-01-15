import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ChevronRight } from 'lucide-react';

const deals = [
  {
    id: 1,
    store: 'Nordstrom',
    discount: '30% OFF',
    code: 'SUMMER30',
    description: 'Summer collection sale',
    expiresIn: '2 days'
  },
  {
    id: 2,
    store: 'Saks Fifth Avenue',
    discount: '25% OFF',
    code: 'LUXURY25',
    description: 'Designer bags and accessories',
    expiresIn: '5 days'
  },
  {
    id: 3,
    store: 'Bloomingdales',
    discount: '40% OFF',
    code: 'BLOOM40',
    description: 'Selected items only',
    expiresIn: '1 week'
  },
  {
    id: 4,
    store: 'Neiman Marcus',
    discount: '20% OFF',
    code: 'LUXURY20',
    description: 'New arrivals',
    expiresIn: '3 days'
  }
];

export default function DealsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">Exclusive Deals</h2>
          <p className="text-sm md:text-base text-gray-600">Limited time offers from premium brands</p>
        </div>
        <button className="text-sm md:text-base text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
          View all
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 md:p-6"
          >
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div>
                <h3 className="text-base md:text-xl font-semibold mb-1">{deal.store}</h3>
                <p className="text-sm md:text-base text-gray-600">{deal.description}</p>
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                <span className="text-base md:text-lg font-bold text-purple-600 ml-1">{deal.discount}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="bg-purple-50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg">
                <code className="text-sm md:text-base font-mono text-purple-600 font-medium">{deal.code}</code>
              </div>
              <span className="text-xs md:text-sm text-gray-500">Expires in {deal.expiresIn}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}