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
        className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all group"
      >
        <Wand2 className="w-4 h-4 text-purple-600 group-hover:text-pink-600 transition-colors" />
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute right-0 top-full mt-2 whitespace-nowrap bg-gray-900 text-white text-xs py-1.5 px-3 rounded-lg z-50"
          >
            Analyze Style Match
            <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45" />
          </motion.div>
        )}

        {showModal && (
          <StyleMatchModal onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}