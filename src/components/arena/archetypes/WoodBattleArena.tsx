import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Palette, Wand2 } from 'lucide-react';
import { BattleProvider } from '../battle/context/BattleContext';
import BattleTimer from '../battle/components/BattleTimer';
import StyleMeter from '../battle/StyleMeter';

export default function WoodBattleArena() {
  return (
    <BattleProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Archetype Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Wood Archetype Arena</h1>
              <p className="text-gray-600">Master of creative and artistic styles</p>
            </div>
          </div>

          {/* Special Abilities */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Palette className="w-6 h-6 text-purple-500 mb-2" />
              <h3 className="font-medium mb-1">Creative Bloom</h3>
              <p className="text-sm text-gray-600">Unique combination bonus</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Wand2 className="w-6 h-6 text-purple-500 mb-2" />
              <h3 className="font-medium mb-1">Style Magic</h3>
              <p className="text-sm text-gray-600">Transform any piece</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Sprout className="w-6 h-6 text-purple-500 mb-2" />
              <h3 className="font-medium mb-1">Natural Fusion</h3>
              <p className="text-sm text-gray-600">Mix styles seamlessly</p>
            </motion.button>
          </div>

          {/* Battle Arena */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="aspect-square bg-white rounded-xl shadow-lg p-6">
                {/* Outfit Canvas */}
              </div>
              <StyleMeter score={88} />
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-white/50 rounded-xl border-2 border-dashed border-purple-200">
                <div className="h-full flex items-center justify-center text-purple-500">
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