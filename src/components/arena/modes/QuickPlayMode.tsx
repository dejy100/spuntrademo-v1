import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X, Sword, Timer, Users } from 'lucide-react';
import { Archetype } from '../../../types/arena';
import StyleBattleArena from '../battle/StyleBattleArena';
import OpponentCard from '../battle/OpponentCard';
import BattleStats from '../battle/BattleStats';

interface QuickPlayModeProps {
  archetype: Archetype;
  onBack: () => void;
  onClose: () => void;
}

export default function QuickPlayMode({ archetype, onBack, onClose }: QuickPlayModeProps) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
            <Sword className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-semibold">Quick Battle</h2>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StyleBattleArena
            timeLeft={timeLeft}
            selectedItems={selectedItems}
            onItemSelect={(itemId) => {
              setSelectedItems(prev => [...prev, itemId]);
            }}
          />
        </div>

        <div className="space-y-6">
          <BattleStats />
          <OpponentCard />
        </div>
      </div>
    </motion.div>
  );
}