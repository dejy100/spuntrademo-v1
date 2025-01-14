import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PowerUpEffectsProps {
  activeEffects: {
    type: string;
    remainingTime: number;
  }[];
}

export default function PowerUpEffects({ activeEffects }: PowerUpEffectsProps) {
  if (activeEffects.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      <AnimatePresence>
        {activeEffects.map((effect) => (
          <motion.div
            key={effect.type}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-lg shadow-lg p-3 flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-medium">{effect.type} Active</span>
            <span className="text-sm text-gray-500">{effect.remainingTime}s</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}