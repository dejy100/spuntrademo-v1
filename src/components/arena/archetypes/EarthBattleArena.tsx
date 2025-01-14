import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mountain, Sprout } from 'lucide-react';
import { BattleProvider } from '../battle/context/BattleContext';
import BattleTimer from '../battle/components/BattleTimer';
import StyleMeter from '../battle/StyleMeter';

export default function EarthBattleArena() {
  return (
    <BattleProvider>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Archetype Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Earth Archetype Arena</h1>
              <p className="text-gray-600">Master of sustainable and grounded styles</p>
            </div>
          </div>

          {/* Special Abilities */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Mountain className="w-6 h-6 text-green-500 mb-2" />
              <h3 className="font-medium mb-1">Grounded Vision</h3>
              <p className="text-sm text-gray-600">Perfect color matching</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Leaf className="w-6 h-6 text-green-500 mb-2" />
              <h3 className="font-medium mb-1">Natural Harmony</h3>
              <p className="text-sm text-gray-600">Boost eco-friendly items</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Sprout className="w-6 h-6 text-green-500 mb-2" />
              <h3 className="font-medium mb-1">Growth Cycle</h3>
              <p className="text-sm text-gray-600">Transform sustainable pieces</p>
            </motion.button>
          </div>

          {/* Battle Arena */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="aspect-square bg-white rounded-xl shadow-lg p-6">
                {/* Outfit Canvas */}
              </div>
              <StyleMeter score={85} />
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-white/50 rounded-xl border-2 border-dashed border-green-200">
                <div className="h-full flex items-center justify-center text-green-500">
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