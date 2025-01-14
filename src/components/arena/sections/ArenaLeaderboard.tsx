import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Medal } from 'lucide-react';

export default function ArenaLeaderboard() {
  const topPlayers = [
    {
      rank: 1,
      name: 'Emma S.',
      archetype: 'Fire',
      score: 2850,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'
    },
    {
      rank: 2,
      name: 'Alex M.',
      archetype: 'Water',
      score: 2720,
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100'
    },
    {
      rank: 3,
      name: 'Sarah K.',
      archetype: 'Earth',
      score: 2680,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold">Top Players</h3>
        </div>
        <span className="text-sm text-orange-600 font-medium">This Week</span>
      </div>

      <div className="space-y-3">
        {topPlayers.map((player) => (
          <motion.div
            key={player.rank}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              {player.rank === 1 ? (
                <Crown className="w-5 h-5 text-yellow-500" />
              ) : player.rank === 2 ? (
                <Medal className="w-5 h-5 text-gray-400" />
              ) : (
                <Medal className="w-5 h-5 text-orange-400" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-6 h-6 rounded-full"
                />
                <p className="font-medium">{player.name}</p>
              </div>
              <p className="text-sm text-gray-600">{player.archetype} Archetype</p>
            </div>
            <span className="font-medium text-orange-600">{player.score}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}