import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

export default function SearchButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <input
              type="text"
              placeholder="Search wardrobe..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(true)}
          className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
        >
          <Search className="w-4 h-4 text-gray-600" />
        </motion.button>
      )}

      {isExpanded && (
        <div 
          className="fixed inset-0 z-10"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}