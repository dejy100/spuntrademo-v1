import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Zap } from 'lucide-react';
import { BattleProvider } from '../battle/context/BattleContext';
import BattleTimer from '../battle/components/BattleTimer';
import StyleMeter from '../battle/StyleMeter';

export default function FireBattleArena() {
  return (
    <BattleProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Archetype Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Fire Archetype Arena</h1>
              <p className="text-gray-600">Master of bold and dramatic styles</p>
            </div>
          </div>

          {/* Special Abilities */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Sparkles className="w-6 h-6 text-orange-500 mb-2" />
              <h3 className="font-medium mb-1">Passion Burst</h3>
              <p className="text-sm text-gray-600">+25% Style Score for 10s</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Zap className="w-6 h-6 text-orange-500 mb-2" />
              <h3 className="font-medium mb-1">Heat Wave</h3>
              <p className="text-sm text-gray-600">Stun opponent for 3s</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Flame className="w-6 h-6 text-orange-500 mb-2" />
              <h3 className="font-medium mb-1">Phoenix Rising</h3>
              <p className="text-sm text-gray-600">Transform one item</p>
            </motion.button>
          </div>

          {/* Battle Arena */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="aspect-square bg-white rounded-xl shadow-lg p-6">
                {/* Outfit Canvas */}
              </div>
              <StyleMeter score={75} />
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-white/50 rounded-xl border-2 border-dashed border-orange-200">
                <div className="h-full flex items-center justify-center text-orange-500">
                  Opponent's Arena
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BattleProvider>
  );
}