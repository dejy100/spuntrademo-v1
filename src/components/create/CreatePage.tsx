import React from 'react';
import { X, Shirt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CreatePage() {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black/50"
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
        className="absolute inset-x-0 bottom-[18vh] bg-white rounded-t-[60px] min-h-[90vh]"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
      </motion.div>
    </motion.div>
  );
}
