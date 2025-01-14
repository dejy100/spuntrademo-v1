import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function MatchesHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold mb-4">Your Matches</h1>
        <p className="text-gray-600">
          Our AI determined these to be your closest matches based on your personality.
          Use the filters to refine your feed.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center gap-4"
      >
        <button className="px-6 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          Not for me
        </button>
        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm hover:shadow-lg transition-shadow">
          Love it
        </button>
      </motion.div>
    </div>
  );
}