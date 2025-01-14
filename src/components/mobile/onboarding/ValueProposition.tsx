import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Shirt, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../shared/PageContainer';

export default function ValueProposition() {
  const navigate = useNavigate();

  return (
    <PageContainer className="bg-gradient-to-br from-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">Transform Your Style</h1>
        <p className="text-gray-600">
          Discover how Spuntra helps you express your unique personality through fashion
        </p>
      </motion.div>

      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center`}>
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-20 left-4 right-4 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/how-it-works')}
          className="w-full max-w-md py-3.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg"
        >
          Continue
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </PageContainer>
  );
}

const benefits = [
  {
    title: 'Personalized Style Guide',
    description: 'Get curated outfit recommendations based on your personality',
    icon: Sparkles,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    title: 'Smart Wardrobe',
    description: 'Organize and optimize your clothing collection effortlessly',
    icon: Shirt,
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600'
  },
  {
    title: 'Style Confidence',
    description: 'Feel confident in outfits that truly represent you',
    icon: Heart,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
];