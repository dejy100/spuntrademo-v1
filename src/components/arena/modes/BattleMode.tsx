import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X, Sword } from 'lucide-react';
import { Archetype } from '../../../types/arena';
import ElementalAbilitiesPanel from '../abilities/ElementalAbilitiesPanel';
import PowerUpEffects from '../battle/PowerUpEffects';
import BattleStats from '../battle/BattleStats';
import OpponentCard from '../battle/OpponentCard';
import ElementalInteractions from '../battle/ElementalInteractions';
import { useBattleTimer } from '../../../hooks/useBattleTimer';
import { useActiveEffects } from '../../../hooks/useActiveEffects';
import ItemSelector from '../battle/ItemSelector';

interface BattleModeProps {
  archetype: Archetype;
  onBack: () => void;
  onClose: () => void;
}

const battleThemes = [
  'Summer Festival Vibes',
  'Urban Street Style',
  'Elegant Evening',
  'Sustainable Fashion',
  'Vintage Revival'
];

export default function BattleMode({ archetype, onBack, onClose }: BattleModeProps) {
  const { timeLeft } = useBattleTimer(60);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { activeEffects, addEffect } = useActiveEffects();
  const [theme] = useState(battleThemes[Math.floor(Math.random() * battleThemes.length)]);
  const [opponentElement] = useState('water');

  const handleAbilityUse = (abilityType: string) => {
    addEffect(abilityType, 10);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="relative"
    >
      <PowerUpEffects activeEffects={activeEffects} />

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
            <h2 className="text-xl font-semibold">Style Battle</h2>
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
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Theme: {theme}</h3>
                <p className="text-sm text-gray-600">Create an outfit that matches the theme</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-orange-500">{timeLeft}s</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {selectedItems.map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-white rounded-lg shadow-md"
                />
              ))}
              {[...Array(6 - selectedItems.length)].map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="aspect-square bg-white/50 rounded-lg border-2 border-dashed border-gray-300"
                />
              ))}
            </div>
          </div>

          <ItemSelector onItemSelect={(id) => setSelectedItems(prev => [...prev, id])} />
        </div>

        <div className="space-y-6">
          <ElementalInteractions
            playerElement={archetype.id}
            opponentElement={opponentElement}
            onInteractionActivate={(effect) => addEffect(effect, 10)}
          />
          <ElementalAbilitiesPanel
            archetype={archetype.id}
            onAbilityUse={handleAbilityUse}
          />
          <BattleStats />
          <OpponentCard />
        </div>
      </div>
    </motion.div>
  );
}