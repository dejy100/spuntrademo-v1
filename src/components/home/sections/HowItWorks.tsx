import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Shirt, Users } from 'lucide-react';

const steps = [
  {
    icon: Brain,
    title: 'Take the Personality Test',
    description: 'Answer a few questions to help us understand your unique style preferences.'
  },
  {
    icon: Sparkles,
    title: 'Get Tailored Fashion Suggestions',
    description: 'Receive personalized recommendations based on your personality profile.'
  },
  {
    icon: Shirt,
    title: 'Try on Outfits Virtually',
    description: 'See how clothes look on you before making a purchase.'
  },
  {
    icon: Users,
    title: 'Join the Fashion Community',
    description: 'Connect with others who share your style and get inspired.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How Spuntra Works</h2>
          <p className="text-xl text-gray-600">
            Your journey to personalized fashion starts here
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                <step.icon className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}