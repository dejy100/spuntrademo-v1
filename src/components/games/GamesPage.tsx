import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Clock, Diamond } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const games = [
  {
    id: 'fashion-heist',
    title: 'Fashion Heist',
    icon: Diamond,
    description: 'Master the art of acquiring exclusive designer pieces through thrilling challenges. Navigate virtual fashion shows and complete missions to build your luxury collection.',
    gradient: 'from-black via-gray-800 to-gray-700',
    comingSoon: false
  },
  {
    id: 'time-machine',
    title: 'Fashion Time Machine',
    icon: Clock,
    description: 'Travel through iconic fashion eras. Mix vintage glamour with contemporary edge to create groundbreaking styles that transcend time.',
    gradient: 'from-purple-900 via-purple-800 to-pink-800',
    comingSoon: true
  },
  {
    id: 'fashion-royale',
    title: 'Global Fashion Royale',
    icon: Crown,
    description: 'Compete in worldwide style battles. Showcase your cultural fashion fusion and reign supreme in this international arena of fashion excellence.',
    gradient: 'from-amber-900 via-yellow-800 to-yellow-700',
    comingSoon: true
  }
];

export default function GamesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-pink-500/20 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            SPUNTRA GAMES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-md"
          >
            Where Fashion Meets Fantasy. Play, Compete, and Win Exclusive Fashion Pieces
          </motion.p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${game.gradient} p-6 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <game.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-300 text-sm">{game.description}</p>
                </div>
                <button 
                  onClick={() => !game.comingSoon && navigate(`/games/${game.id}`)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
                    game.comingSoon 
                      ? 'bg-white/10 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-100'
                  } transition-colors`}
                >
                  {game.comingSoon ? (
                    'Coming Soon'
                  ) : (
                    <>
                      Play Now
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-t from-purple-900/50 to-transparent py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Play?</h2>
          <p className="text-gray-400 mb-8">
            Win exclusive fashion pieces and showcase your style mastery
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Start Your Fashion Game Journey
          </motion.button>
        </div>
      </div>
    </div>
  );
}
