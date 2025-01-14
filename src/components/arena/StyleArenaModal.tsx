import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Users, Star } from 'lucide-react';
import ArchetypeSelection from './sections/ArchetypeSelection';
import ArenaLeaderboard from './sections/ArenaLeaderboard';
import BattleModes from './sections/BattleModes';
import ElementalFusion from './sections/ElementalFusion';
import CommunityEvents from './sections/CommunityEvents';
import { Archetype } from '../../types/arena';

interface StyleArenaModalProps {
  onClose: () => void;
}

export default function StyleArenaModal({ onClose }: StyleArenaModalProps) {
  const [selectedArchetype, setSelectedArchetype] = useState<string | null>(null);
  const [view, setView] = useState<'select' | 'battle' | 'tournament'>('select');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-orange-500" />
            <div>
              <h2 className="text-2xl font-bold">Style Arena</h2>
              <p className="text-gray-600">Express your style, connect with others</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ArchetypeSelection
              selectedArchetype={selectedArchetype}
              onSelect={setSelectedArchetype}
            />
            
            <BattleModes
              selectedArchetype={selectedArchetype}
              onBattleStart={() => setView('battle')}
              onTournamentStart={() => setView('tournament')}
            />

            <ElementalFusion selectedArchetype={selectedArchetype} />
          </div>

          <div className="space-y-6">
            <ArenaLeaderboard />
            <CommunityEvents />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}