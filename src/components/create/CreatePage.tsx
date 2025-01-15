import React from 'react';
import { X, Shirt } from 'lucide-react';
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
      {/* Top Navigation */}
      <div className="absolute top-5 inset-x-0 flex justify-between items-center px-5 z-[60]">
        <button 
          onClick={() => navigate(-1)}
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <button 
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <Shirt className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
        </button>
      </div>

      {/* White Card with Curved Corners */}
      <motion.div 
        className="absolute top-[5vh] bottom-[12vh] inset-x-0 bg-white rounded-[2rem] shadow-lg"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full px-6 pt-16 pb-8">
          <div className="w-20 h-20 mb-6">
            <img src="/octopus.png" alt="Octopus" className="w-full h-full" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">Create your outfit</h1>
          <p className="text-gray-500 mb-20">Start by selecting items</p>
          
          <div className="mt-auto w-full">
            <p className="text-center text-gray-500 mb-4">Looking for new ideas?</p>
            <button className="w-full bg-[#FF7043] text-white rounded-full py-4 px-6 flex items-center justify-center gap-2">
              <span className="text-xl">🎲</span>
              Style 5 random items
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
