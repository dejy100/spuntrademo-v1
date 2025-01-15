import React from 'react';
import { motion } from 'framer-motion';

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold mb-2">Create Page</h1>
          <p className="text-gray-600">Coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
}
