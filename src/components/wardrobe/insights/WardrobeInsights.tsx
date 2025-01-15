import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Clock, Gift, Tags } from 'lucide-react';
import InsightCard from './InsightCard';
import { useWardrobeInsights } from '../../../hooks/useWardrobeInsights';

export default function WardrobeInsights() {
  const { insights } = useWardrobeInsights();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl md:rounded-2xl shadow-md p-4 md:p-6 mb-6 md:mb-8"
    >
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-1">Wardrobe Insights</h2>
          <p className="text-xs md:text-sm text-gray-600">Keep your wardrobe fresh and organized</p>
        </div>
        <Bell className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </motion.div>
  );
}