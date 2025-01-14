import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { archetypes } from '../data/archetypes';
import ArchetypeCard from './ArchetypeCard';
import PageContainer from '../shared/PageContainer';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <PageContainer className="bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] -mx-6 -mt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2070"
            alt="Fashion Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Find Your Fashion Element
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Your style is unique as your personality
            </p>
          </motion.div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-br from-purple-50 to-pink-50" style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%'
        }} />
      </div>

      {/* Archetype Preview */}
      <div className="px-6 py-12">
        <div className="space-y-8">
          {archetypes.map((archetype, index) => (
            <motion.div
              key={archetype.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ArchetypeCard {...archetype} />
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-20 left-4 right-4 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/value-proposition')}
            className="w-full max-w-md py-3.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg"
          >
            Get Started
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </PageContainer>
  );
}