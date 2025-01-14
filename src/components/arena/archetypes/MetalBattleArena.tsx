import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard, Shield, Sword } from 'lucide-react';
import { BattleProvider } from '../battle/context/BattleContext';
import BattleTimer from '../battle/components/BattleTimer';
import StyleMeter from '../battle/StyleMeter';

export default function MetalBattleArena() {
  return (
    <BattleProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Archetype Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-500 to-slate-500 flex items-center justify-center">
              <CircuitBoard className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Metal Archetype Arena</h1>
              <p className="text-gray-600">Master of structured and precise styles</p>
            </div>
          </div>

          {/* Special Abilities */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Shield className="w-6 h-6 text-gray-500 mb-2" />
              <h3 className="font-medium mb-1">Steel Defense</h3>
              <p className="text-sm text-gray-600">Block opponent's effects</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <Sword className="w-6 h-6 text-gray-500 mb-2" />
              <h3 className="font-medium mb-1">Precision Strike</h3>
              <p className="text-sm text-gray-600">Perfect accessory matching</p>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white rounded-xl shadow-md"
            >
              <CircuitBoard className="w-6 h-6 text-gray-500 mb-2" />
              <h3 className="font-medium mb-1">Industrial Edge</h3>
              <p className="text-sm text-gray-600">Enhance structured pieces</p>
            </motion.button>
          </div>

          {/* Battle Arena */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="aspect-square bg-white rounded-xl shadow-lg p-6">
                {/* Outfit Canvas */}
              </div>
              <StyleMeter score={90} />
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-white/50 rounded-xl border-2 border-dashed border-gray-200">
                <div className="h-full flex items-center justify-center text-gray-500">
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