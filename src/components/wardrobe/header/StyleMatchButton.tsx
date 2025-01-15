import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import StyleMatchModal from '../analysis/StyleMatchModal';

export default function StyleMatchButton() {
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowModal(true)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="p-2.5 md:p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all group"
      >
        <Wand2 className="w-5 h-5 md:w-6 md:h-6 text-purple-600 group-hover:text-pink-600 transition-colors" />
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute right-0 top-full mt-1.5 md:mt-2 whitespace-nowrap bg-gray-900 text-white text-[10px] md:text-xs py-1 md:py-1.5 px-2 md:px-3 rounded md:rounded-lg z-50"
          >
            Analyze Style Match
            <div className="absolute -top-1 right-3 md:right-4 w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-900 transform rotate-45" />
          </motion.div>
        )}

        {showModal && (
          <StyleMatchModal onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}