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
      <div className="flex flex-col gap-2 mb-4 md:flex-row md:items-center md:justify-between md:mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">Exclusive Deals</h2>
          <p className="text-sm text-gray-600 md:text-base">Limited time offers from premium brands</p>
        </div>
        <button className="flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium md:text-base">
          View all
          <ChevronRight className="w-4 h-4 ml-1 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-all md:rounded-xl md:p-4"
          >
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div>
                <h3 className="text-base font-semibold mb-1 md:text-xl">{deal.store}</h3>
                <p className="text-sm text-gray-600 md:text-base">{deal.description}</p>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-purple-600 md:w-5 md:h-5" />
                <span className="text-base font-bold text-purple-600 md:text-lg">{deal.discount}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="bg-purple-50 px-3 py-1.5 rounded-lg md:px-4 md:py-2">
                <code className="text-sm font-mono text-purple-600 font-medium md:text-base">{deal.code}</code>
              </div>
              <span className="text-xs text-gray-500 md:text-sm">Expires in {deal.expiresIn}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}