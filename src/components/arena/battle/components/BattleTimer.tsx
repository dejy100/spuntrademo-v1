import React from 'react';
import { Timer } from 'lucide-react';
import { useBattleTimer } from '../hooks/useBattleTimer';

export default function BattleTimer() {
  const timeLeft = useBattleTimer();

  return (
    <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
      <Timer className="w-5 h-5 text-orange-500" />
      <span className="text-xl font-bold">{timeLeft}s</span>
    </div>
  );
}