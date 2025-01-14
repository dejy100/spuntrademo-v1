import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield } from 'lucide-react';
import { useBattle } from '../context/BattleContext';

export default function BattleControls() {
  const { dispatch } = useBattle();

  const activatePower = (type: string) => {
    dispatch({
      type: 'ACTIVATE_POWER',
      payload: {
        type,
        power: 25,
        duration: 10
      }
    });
  };

  return (
    <div className="absolute bottom-4 right-4 space-y-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => activatePower('attack')}
        className="p-3 bg-orange-500 text-white rounded-full"
      >
        <Zap className="w-5 h-5" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => activatePower('defense')}
        className="p-3 bg-purple-500 text-white rounded-full"
      >
        <Shield className="w-5 h-5" />
      </motion.button>
    </div>
  );
}