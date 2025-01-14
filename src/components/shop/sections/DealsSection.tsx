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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Exclusive Deals</h2>
          <p className="text-gray-600">Limited time offers from premium brands</p>
        </div>
        <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
          View all
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{deal.store}</h3>
                <p className="text-gray-600">{deal.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-purple-600" />
                <span className="text-lg font-bold text-purple-600">{deal.discount}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="bg-purple-50 px-4 py-2 rounded-lg">
                <code className="font-mono text-purple-600 font-medium">{deal.code}</code>
              </div>
              <span className="text-sm text-gray-500">Expires in {deal.expiresIn}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}