import React from 'react';
import { motion } from 'framer-motion';
import SearchButton from './header/SearchButton';
import StyleMatchButton from './header/StyleMatchButton';

export default function WardrobeHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
      >
        My Wardrobe
      </motion.h1>

      <div className="flex items-center gap-3">
        <StyleMatchButton />
        <SearchButton />
      </div>
    </div>
  );
}