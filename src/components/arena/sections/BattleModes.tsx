import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Crown, Users } from 'lucide-react';

interface BattleModesProps {
  selectedArchetype: string | null;
  onBattleStart: () => void;
  onTournamentStart: () => void;
}

export default function BattleModes({ selectedArchetype, onBattleStart, onTournamentStart }: BattleModesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Sword className="w-5 h-5 text-orange-500" />
          <h3 className="font-medium">Quick Battle</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Jump into a quick styling battle with a random opponent
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={onBattleStart}
          disabled={!selectedArchetype}
          className="w-full py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg disabled:opacity-50"
        >
          Start Battle
        </motion.button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-5 h-5 text-orange-500" />
          <h3 className="font-medium">Tournament</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Compete in high-stakes matches with escalating prizes
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={onTournamentStart}
          disabled={!selectedArchetype}
          className="w-full py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg disabled:opacity-50"
        >
          Enter Tournament
        </motion.button>
      </motion.div>
    </div>
  );
}