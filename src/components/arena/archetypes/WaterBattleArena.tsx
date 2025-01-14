import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Wave, Cloud } from 'lucide-react';
import { BattleProvider } from '../battle/context/BattleContext';
import BattleTimer from '../battle/components/BattleTimer';
import StyleMeter from '../battle/StyleMeter';

export default function WaterBattleArena() {
  return (
    <BattleProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Archetype Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Water Archetype Arena</h1>
              <p className="text-gray-600">Master of fluid and elegant styles</p>
            </div>
          </div>

          {/* Special Abilities */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Wave className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className="font-medium mb-1">Flow State</h3>
              <p className="text-sm text-gray-600">2x Item Swap Speed</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Cloud className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className="font-medium mb-1">Mist Veil</h3>
              <p className="text-sm text-gray-600">Hide next move</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Droplet className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className="font-medium mb-1">Tidal Wave</h3>
              <p className="text-sm text-gray-600">Reset opponent's combo</p>
            </motion.button>
          </div>

          {/* Battle Arena */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="aspect-square bg-white rounded-xl shadow-lg p-6">
                {/* Outfit Canvas */}
              </div>
              <StyleMeter score={80} />
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-white/50 rounded-xl border-2 border-dashed border-blue-200">
                <div className="h-full flex items-center justify-center text-blue-500">
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