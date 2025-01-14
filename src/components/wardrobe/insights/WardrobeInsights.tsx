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
      className="bg-white rounded-2xl shadow-md p-6 mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Wardrobe Insights</h2>
          <p className="text-sm text-gray-600">Keep your wardrobe fresh and organized</p>
        </div>
        <Bell className="w-5 h-5 text-purple-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </motion.div>
  );
}