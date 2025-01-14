import React from 'react';
import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';

export default function TryOnMode() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shirt className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Virtual Try-On</h2>
        <p className="text-gray-600">See how outfits look on you</p>
      </motion.div>
    </div>
  );
}