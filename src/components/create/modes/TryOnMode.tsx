import React from 'react';
import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';

export default function TryOnMode() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-12rem)] px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="text-center"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Shirt className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Virtual Try-On</h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-[250px] sm:max-w-none mx-auto">
          See how outfits look on you
        </p>
      </motion.div>
    </div>
  );
}