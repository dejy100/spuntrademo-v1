import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Props {
  onClick: () => void;
}

export default function StyleMatchButton({ onClick }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all"
    >
      <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
    </motion.button>
  );
}