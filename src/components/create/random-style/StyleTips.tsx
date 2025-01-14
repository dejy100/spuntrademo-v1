import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function StyleTips() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Style Tips</h2>
      <div className="space-y-4">
        <div className="p-4 bg-purple-50 rounded-xl">
          <h3 className="font-medium mb-2">Color Harmony</h3>
          <p className="text-sm text-gray-600">
            Drag items around to create your perfect outfit combination. 
            Try grouping complementary colors together.
          </p>
        </div>

        <div className="p-4 bg-purple-50 rounded-xl">
          <h3 className="font-medium mb-2">Layering Guide</h3>
          <p className="text-sm text-gray-600">
            Stack items in order: base layer at the bottom, 
            outer layers on top, accessories last.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Save to Wardrobe
        </motion.button>
      </div>
    </div>
  );
}