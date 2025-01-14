import React from 'react';
import { BattleProvider } from './context/BattleContext';
import BattleTimer from './components/BattleTimer';
import BattleControls from './components/BattleControls';
import ElementalPowerBar from './components/ElementalPowerBar';
import StyleMeter from './components/StyleMeter';
import OutfitCanvas from './components/OutfitCanvas';

interface BattleArenaProps {
  playerArchetype: string;
  opponentArchetype: string;
  onBattleEnd: (score: number) => void;
}

export default function BattleArena({ 
  playerArchetype, 
  opponentArchetype, 
  onBattleEnd 
}: BattleArenaProps) {
  return (
    <BattleProvider>
      <div className="relative h-full">
        <BattleTimer />

        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="space-y-6">
            <OutfitCanvas archetype={playerArchetype} />
            <ElementalPowerBar />
            <StyleMeter />
          </div>

          <div className="relative">
            <OutfitCanvas archetype={opponentArchetype} isOpponent />
            <BattleControls />
          </div>
        </div>
      </div>
    </BattleProvider>
  );
}