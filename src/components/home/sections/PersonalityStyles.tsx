import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Zap, Leaf } from 'lucide-react';

const personalityTypes = [
  {
    icon: Palette,
    title: 'Creative Explorer',
    description: 'For those who love unique, artistic pieces that tell a story.',
    styles: ['Bohemian', 'Eclectic', 'Artistic'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Bold Leader',
    description: 'Perfect for those who make strong fashion statements.',
    styles: ['Power Suits', 'Monochrome', 'Statement Pieces'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Leaf,
    title: 'Calm Harmonizer',
    description: 'Balanced, comfortable styles that reflect inner peace.',
    styles: ['Comfortable', 'Earthy Tones', 'Minimalist'],
    gradient: 'from-green-500 to-teal-500'
  }
];

export default function PersonalityStyles() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Your Personalized Style</h2>
          <p className="text-xl text-gray-600">
            See which styles suit you best based on your unique personality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalityTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${type.gradient}`} />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  {type.styles.map((style, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700"
                    >
                      {style}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}