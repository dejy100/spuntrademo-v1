import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Tag } from 'lucide-react';

const deals = [
  {
    id: 'macys-deal',
    store: "Macy's",
    description: 'End of season sale on all items',
    discount: '25% OFF',
    code: 'MACYS25',
    expiresIn: '2 days'
  },
  {
    id: 'nordstrom-deal',
    store: 'Nordstrom',
    description: 'Holiday special discount',
    discount: '30% OFF',
    code: 'HOLIDAY30',
    expiresIn: '5 days'
  },
  {
    id: 'saks-deal',
    store: 'Saks Fifth Avenue',
    description: 'New year clearance sale',
    discount: '40% OFF',
    code: 'NEWYEAR40',
    expiresIn: '3 days'
  }
];

export default function DealsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 min-w-0 pr-6">
          <h2 className="text-lg font-semibold mb-1">Exclusive Deals</h2>
          <p className="text-sm text-gray-600">Limited time offers from premium brands</p>
        </div>
        <button className="flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium whitespace-nowrap">
          View all
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="text-base font-semibold mb-1 truncate">{deal.store}</h3>
                <p className="text-sm text-gray-600">{deal.description}</p>
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Tag className="w-4 h-4 text-purple-600" />
                <span className="text-base font-bold text-purple-600">{deal.discount}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="bg-purple-50 px-3 py-1.5 rounded-lg">
                <code className="text-sm font-mono text-purple-600 font-medium">{deal.code}</code>
              </div>
              <span className="text-xs text-gray-500">Expires in {deal.expiresIn}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}