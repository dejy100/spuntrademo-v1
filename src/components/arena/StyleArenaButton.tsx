import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import StyleArenaModal from './StyleArenaModal';
import { useLocation } from 'react-router-dom';

export default function StyleArenaButton() {
  const location = useLocation();

  // Hide on create page
  if (location.pathname === '/create') {
    return null;
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowModal(true)}
        className="fixed left-4 bottom-20 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg flex items-center justify-center z-50"
      >
        <Gamepad2 className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <StyleArenaModal onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </>
  );
}