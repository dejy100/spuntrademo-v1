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
          <h2 className="text-lg md:text-xl font-semibold mb-1">Exclusive Deals</h2>
          <p className="text-sm md:text-base text-gray-600">Limited time offers from premium brands</p>
        </div>
        <button className="flex items-center text-sm md:text-base text-purple-600 hover:text-purple-700">
          View All
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base md:text-lg font-medium mb-1">{deal.store}</h3>
                <p className="text-sm md:text-base text-gray-600">{deal.description}</p>
              </div>
              <Tag className="w-4 h-4 md:w-5 md:h-5 text-purple-600 flex-shrink-0" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm md:text-base font-semibold text-purple-600">
                  {deal.discount}
                </span>
                <span className="text-xs md:text-sm px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                  {deal.code}
                </span>
              </div>
              <span className="text-xs md:text-sm text-gray-500">
                Expires in {deal.expiresIn}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}