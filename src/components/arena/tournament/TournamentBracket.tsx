import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Star } from 'lucide-react';

interface TournamentBracketProps {
  rounds: any[];
  currentRound: number;
}

export default function TournamentBracket({ rounds, currentRound }: TournamentBracketProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-orange-500" />
          <h3 className="text-xl font-semibold">Tournament Bracket</h3>
        </div>
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-yellow-500" />
          <span className="font-medium">Round {currentRound}</span>
        </div>
      </div>

      <div className="space-y-6">
        {rounds.map((round, index) => (
          <div key={index} className="flex justify-around">
            {round.matches.map((match: any) => (
              <motion.div
                key={match.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl"
              >
                {/* Match details */}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}