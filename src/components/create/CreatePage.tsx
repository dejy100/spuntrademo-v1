import React from 'react';
import { X, Shirt, Wand2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CreatePage() {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* White Card with Curved Corners */}
      <motion.div 
        className="absolute top-[5vh] bottom-[18vh] inset-x-0 bg-white rounded-[1.25rem] shadow-lg"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Top Navigation */}
        <div className="absolute top-6 inset-x-0 flex justify-between items-start px-5">
          <button 
            onClick={() => navigate(-1)}
            className="w-11 h-11 bg-[#E0E0E0] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          <div className="flex flex-col items-center">
            <button 
              className="w-11 h-11 bg-[#E0E0E0] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <Shirt className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
            </button>
            <span className="text-sm text-gray-600 mt-1">Items</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full px-6">
          <div className="flex flex-col items-center -mt-20">
            <motion.div
              className="w-16 h-16 mb-8 relative"
              initial={{ y: 0, rotate: 0 }}
              animate={{ 
                y: [-3, 3, -3],
                rotate: [-4, 4, -4]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                },
                rotate: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-[#FF7043] via-[#FF9D80] to-[#FFB74D] rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Creative Elements */}
                <motion.div 
                  className="absolute w-12 h-12 bg-white/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="absolute w-8 h-8 bg-white/30 rounded-full"
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Fashion Icon */}
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 3L4 10l2 11h12l2-11-8-7z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 15l4-4 4 4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              {/* Enhanced Shadow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-white/10 via-[#FF7043]/20 to-transparent rounded-lg blur-xl" />
            </motion.div>

            <motion.h1 
              className="text-2xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Create your outfit
            </motion.h1>
            <motion.p 
              className="text-gray-500 -mt-0.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Start by selecting items
            </motion.p>
          </div>
          
          <div className="absolute bottom-12 w-full flex flex-col items-center">
            <p className="text-gray-500 mb-0.5 w-[200px] text-center">Need some inspiration?</p>
            <button className="w-[200px] px-6 py-2.5 bg-[#FF7043] text-white rounded-full flex items-center justify-center gap-1.5 text-xs shadow-md">
              <Wand2 className="w-3.5 h-3.5" />
              Get creative ideas
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
