import React from 'react';
import { motion } from 'framer-motion';
import { X, Shirt, LayoutGrid, Image } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-gray-300/80 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        <button className="w-12 h-12 bg-gray-300/80 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Shirt className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 mt-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          {/* Octopus Icon */}
          <div className="w-24 h-24 mx-auto mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="35" fill="black" />
              <circle cx="42" cy="45" r="4" fill="white" />
              <circle cx="58" cy="45" r="4" fill="white" />
              <path
                d="M 35 55 Q 50 65 65 55"
                stroke="white"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Tentacles */}
              {[0, 1, 2, 3].map((i) => (
                <motion.path
                  key={i}
                  d={`M ${40 + i * 7} ${70} Q ${35 + i * 10} ${85} ${30 + i * 15} ${90}`}
                  stroke="black"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              ))}
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-2">Create your outfit</h1>
          <p className="text-gray-500 mb-24">Start by selecting items</p>
        </motion.div>

        {/* Looking for new ideas section */}
        <div className="fixed bottom-32 w-full max-w-md px-6">
          <p className="text-gray-500 text-center mb-4">Looking for new ideas?</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#FF7A50] text-white rounded-full py-4 flex items-center justify-center gap-2 shadow-lg"
            onClick={() => navigate('/random-style')}
          >
            <span className="text-xl">🎲</span>
            Style 5 random items
          </motion.button>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-6">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <button className="flex flex-col items-center gap-1">
              <LayoutGrid className="w-6 h-6" />
              <span className="text-xs">My Outfits</span>
            </button>
            <div className="flex gap-6">
              <span className="text-gray-500">SWIPE</span>
              <span className="text-[#FF7A50]">CANVAS</span>
            </div>
            <button className="flex flex-col items-center gap-1">
              <Image className="w-6 h-6" />
              <span className="text-xs">Wallpapers</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
