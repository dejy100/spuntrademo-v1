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
      <div className="relative h-48 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-pink-500/20 to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            SPUNTRA GAMES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-sm md:text-base text-gray-300 max-w-md"
          >
            Play, compete, and unlock exclusive fashion rewards
          </motion.p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="px-4 md:px-6 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {games.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`
                relative overflow-hidden rounded-lg
                bg-gradient-to-br ${game.gradient}
                p-4 md:p-6
                cursor-pointer
                transform transition-transform hover:scale-[1.02]
                touch-action-manipulation
              `}
              onClick={() => !game.comingSoon && navigate(`/games/${game.id}`)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 md:p-3 bg-white/10 rounded-lg">
                  <game.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                {game.comingSoon && (
                  <span className="text-xs md:text-sm px-2 py-1 bg-white/10 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {game.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-300 mb-4">
                {game.description}
              </p>

              {!game.comingSoon && (
                <div className="flex items-center text-sm md:text-base font-medium">
                  Play Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
