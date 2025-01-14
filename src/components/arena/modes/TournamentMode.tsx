import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X, Crown, Trophy, Users, Star, Shield } from 'lucide-react';
import { Archetype } from '../../../types/arena';

interface TournamentModeProps {
  archetype: Archetype;
  onBack: () => void;
  onClose: () => void;
}

export default function TournamentMode({ archetype, onBack, onClose }: TournamentModeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="relative"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-semibold">Style Tournament</h2>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center py-12">
        <Trophy className="w-12 h-12 text-orange-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Tournament Coming Soon!</h3>
        <p className="text-gray-600">
          Get ready for epic style battles in tournament mode.
          <br />
          Check back soon for the first tournament!
        </p>
      </div>
    </motion.div>
  );
}