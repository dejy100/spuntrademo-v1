import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface StyleMeterProps {
  score: number;
}

export default function StyleMeter({ score }: StyleMeterProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-orange-500" />
          <span className="font-medium">Style Score</span>
        </div>
        <span className="text-sm font-medium">{score} points</span>
      </div>
      
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: score > i * 20 ? 1 : 0 }}
            className="flex-1 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}