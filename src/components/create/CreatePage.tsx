import React from 'react';
import { motion } from 'framer-motion';
import { X, Shirt, LayoutGrid, Image, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Top Navigation with Glassmorphism */}
      <div className="h-[10vh] flex justify-between items-center px-4 bg-white/70 backdrop-blur-lg">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <X className="w-5 h-5 text-gray-700" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <Shirt className="w-5 h-5 text-gray-700" />
        </motion.button>
      </div>

      {/* Main Content with Enhanced Animation */}
      <div className="h-[75vh] flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* Animated Background Elements */}
          <motion.div 
            className="absolute -top-8 -left-8 w-16 h-16 bg-purple-200 rounded-full blur-3xl"
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
            className="absolute -bottom-8 -right-8 w-16 h-16 bg-pink-200 rounded-full blur-3xl"
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
          <div className="w-20 h-20 mx-auto mb-4 relative">
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
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Create your outfit
          </motion.h1>
          <p className="text-gray-500 text-sm">Start by selecting items</p>
        </motion.div>

        {/* Looking for new ideas section with Enhanced Design */}
        <div className="w-full max-w-md px-6 mt-auto mb-4">
          <motion.p 
            className="text-gray-500 text-center text-sm mb-2"
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
            className="w-full bg-gradient-to-r from-[#FF7A50] to-[#FF5B7F] text-white rounded-2xl py-3 flex items-center justify-center gap-2 shadow-lg relative overflow-hidden group"
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
            <Sparkles className="w-4 h-4" />
            <span className="font-medium text-sm">Style 5 random items</span>
          </motion.button>
        </div>
      </div>

      {/* Bottom Navigation with Glass Effect */}
      <div className="h-[15vh] bg-black/90 backdrop-blur-lg text-white flex items-center border-t border-white/10">
        <div className="flex justify-around items-center w-full max-w-md mx-auto px-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-1"
          >
            <LayoutGrid className="w-5 h-5" />
            <span className="text-[10px] font-medium">My Outfits</span>
          </motion.button>
          <div className="flex gap-6">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 cursor-pointer text-sm"
            >
              SWIPE
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-[#FF7A50] cursor-pointer text-sm"
            >
              CANVAS
            </motion.span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-1"
          >
            <Image className="w-5 h-5" />
            <span className="text-[10px] font-medium">Wallpapers</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
