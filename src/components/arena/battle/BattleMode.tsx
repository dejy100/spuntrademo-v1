import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useBattleTimer } from '../../../hooks/useBattleTimer';
import { getBattleTheme, getElementalMatchup } from '../../../utils/battleUtils';
import ElementalInteractions from './ElementalInteractions';
import BattleStats from './BattleStats';
import ItemSelector from './ItemSelector';

interface BattleModeProps {
  archetype: {
    id: string;
    name: string;
  };
  onBack: () => void;
  onClose: () => void;
}

export default function BattleMode({ archetype, onBack, onClose }: BattleModeProps) {
  const { timeLeft } = useBattleTimer(60);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [theme] = useState(getBattleTheme());
  const [opponentElement] = useState('water');

  const elementalMatchup = getElementalMatchup(archetype.id, opponentElement);

  const handleInteractionActivate = (effect: string) => {
    // Handle elemental interaction activation
    console.log('Activated:', effect, 'Bonus:', elementalMatchup.bonus);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Theme: {theme}</h3>
                <p className="text-sm text-gray-600">{elementalMatchup.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-orange-500">{timeLeft}s</span>
              </div>
            </div>

            <ItemSelector 
              selectedItems={selectedItems}
              onItemSelect={(id) => setSelectedItems(prev => [...prev, id])} 
            />
          </div>
        </div>

        <div className="space-y-6">
          <ElementalInteractions
            playerElement={archetype.id}
            opponentElement={opponentElement}
            onInteractionActivate={handleInteractionActivate}
          />
          <BattleStats />
        </div>
      </div>
    </motion.div>
  );
}