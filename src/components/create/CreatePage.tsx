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
      {/* White Card with Curved Corners */}
      <motion.div 
        className="absolute top-[5vh] bottom-[18vh] inset-x-0 bg-white rounded-[1.25rem] shadow-lg"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Top Navigation */}
        <div className="absolute top-6 inset-x-0 flex justify-between items-center px-5">
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
        <div className="flex flex-col items-center justify-center h-full px-6 pt-16 pb-8">
          <div className="w-20 h-20 mb-6">
            <img src="/octopus.png" alt="Octopus" className="w-full h-full" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">Create your outfit</h1>
          <p className="text-gray-500 mb-20">Start by selecting items</p>
          
          <div className="mt-auto w-full">
            <p className="text-center text-gray-500 mb-1.5">Looking for new ideas?</p>
            <button className="mx-auto px-8 py-3 bg-[#FF7043] text-white rounded-full flex items-center justify-center gap-2 text-sm shadow-md">
              <span className="text-lg">🎲</span>
              Style 5 random items
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
