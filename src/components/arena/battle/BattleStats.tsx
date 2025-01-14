import React from 'react';
import { motion } from 'framer-motion';

export default function BattleStats() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4">
      <h3 className="font-medium mb-4">Battle Stats</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm">Win Streak</span>
          <span className="font-medium">3 🔥</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Total Battles</span>
          <span className="font-medium">12</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Win Rate</span>
          <span className="font-medium">75%</span>
        </div>
      </div>
    </div>
  );
}