import React from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';
import ItemGrid from './ItemGrid';

interface StyleBattleArenaProps {
  timeLeft: number;
  selectedItems: string[];
  onItemSelect: (itemId: string) => void;
}

const battleThemes = [
  'Summer Festival Vibes',
  'Urban Street Style',
  'Elegant Evening',
  'Sustainable Fashion',
  'Vintage Revival'
];

export default function StyleBattleArena({ timeLeft, selectedItems, onItemSelect }: StyleBattleArenaProps) {
  const theme = battleThemes[Math.floor(Math.random() * battleThemes.length)];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-medium mb-1">Theme: {theme}</h3>
            <p className="text-sm text-gray-600">Create an outfit that matches the theme</p>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-orange-500" />
            <span className="text-xl font-bold text-orange-500">{timeLeft}s</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {selectedItems.map((itemId, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
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

      <ItemGrid onItemSelect={onItemSelect} />
    </div>
  );
}