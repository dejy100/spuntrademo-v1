import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

const deals = [
  {
    title: '30% Off First Purchase',
    description: 'New members get 30% off their first purchase',
    code: 'WELCOME30'
  },
  {
    title: 'Creative Explorer Deal',
    description: 'Special discounts for Creative Explorer personality type',
    code: 'CREATIVE25'
  },
  {
    title: 'Weekend Special',
    description: 'Extra 20% off on weekend shopping',
    code: 'WEEKEND20'
  }
];

export default function DealsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Exclusive Coupons & Deals</h2>
          <p className="text-xl text-gray-600">
            Save more with personalized discounts based on your style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-6">
                <Tag className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{deal.title}</h3>
              <p className="text-gray-600 mb-6">{deal.description}</p>
              <div className="flex items-center justify-between">
                <code className="px-4 py-2 bg-gray-100 rounded-lg font-mono text-purple-600">
                  {deal.code}
                </code>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-purple-600 hover:text-purple-700"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}