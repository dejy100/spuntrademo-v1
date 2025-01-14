import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Brain, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../shared/PageContainer';

export default function HowItWorks() {
  const navigate = useNavigate();
  
  const steps = [
    {
      icon: Brain,
      title: 'Take the Quiz',
      description: 'Answer fun questions about your personality',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Get Your Results',
      description: 'Discover your fashion element archetype',
      color: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: Star,
      title: 'Style Journey',
      description: 'Get personalized recommendations and build your wardrobe',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <PageContainer className="bg-gradient-to-br from-purple-50 to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <p className="text-gray-600">
          Your journey to discovering your unique style starts here
        </p>
      </motion.div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center`}>
                <step.icon className={`w-6 h-6 ${step.iconColor}`} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-20 left-4 right-4 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/register')}
          className="w-full max-w-md py-3.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg"
        >
          Continue
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </PageContainer>
  );
}