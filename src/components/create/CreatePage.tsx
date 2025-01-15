import React from 'react';
import { motion } from 'framer-motion';
import { X, Shirt, LayoutGrid, Image, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Top Navigation with Glassmorphism */}
      <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-lg">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <X className="w-6 h-6 text-gray-700" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <Shirt className="w-6 h-6 text-gray-700" />
        </motion.button>
      </div>

      {/* Main Content with Enhanced Animation */}
      <div className="flex flex-col items-center justify-center px-6 mt-16">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* Animated Background Elements */}
          <motion.div 
            className="absolute -top-10 -left-10 w-20 h-20 bg-purple-200 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-200 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Octopus Icon with Enhanced Animation */}
          <div className="w-28 h-28 mx-auto mb-8 relative">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
                <circle cx="50" cy="50" r="35" className="fill-purple-600" />
                <circle cx="42" cy="45" r="4" fill="white" />
                <circle cx="58" cy="45" r="4" fill="white" />
                <path
                  d="M 35 55 Q 50 65 65 55"
                  stroke="white"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {[0, 1, 2, 3].map((i) => (
                  <motion.path
                    key={i}
                    d={`M ${40 + i * 7} ${70} Q ${35 + i * 10} ${85} ${30 + i * 15} ${90}`}
                    className="stroke-purple-600"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      y: [0, -2, 0],
                    }}
                    transition={{
                      pathLength: { duration: 1, delay: i * 0.2 },
                      y: { 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.3
                      }
                    }}
                  />
                ))}
              </svg>
            </motion.div>
          </div>

          <motion.h1 
            className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Create your outfit
          </motion.h1>
          <p className="text-gray-500 mb-24 text-lg">Start by selecting items</p>
        </motion.div>

        {/* Looking for new ideas section with Enhanced Design */}
        <div className="fixed bottom-32 w-full max-w-md px-6">
          <motion.p 
            className="text-gray-500 text-center mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Looking for new ideas?
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(255, 122, 80, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="w-full bg-gradient-to-r from-[#FF7A50] to-[#FF5B7F] text-white rounded-2xl py-4 flex items-center justify-center gap-3 shadow-lg relative overflow-hidden group"
            onClick={() => navigate('/random-style')}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Style 5 random items</span>
          </motion.button>
        </div>

        {/* Bottom Navigation with Glass Effect */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg text-white py-6 border-t border-white/10">
          <div className="flex justify-around items-center max-w-md mx-auto px-6">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1"
            >
              <LayoutGrid className="w-6 h-6" />
              <span className="text-xs font-medium">My Outfits</span>
            </motion.button>
            <div className="flex gap-8">
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 cursor-pointer"
              >
                SWIPE
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="text-[#FF7A50] cursor-pointer"
              >
                CANVAS
              </motion.span>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1"
            >
              <Image className="w-6 h-6" />
              <span className="text-xs font-medium">Wallpapers</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
