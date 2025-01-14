import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface ElementalPowerBarProps {
  power: number;
}

export default function ElementalPowerBar({ power }: ElementalPowerBarProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-orange-500" />
          <span className="font-medium">Elemental Power</span>
        </div>
        <span className="text-sm font-medium">{power}%</span>
      </div>
      
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${power}%` }}
          className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
        />
      </div>
    </div>
  );
}