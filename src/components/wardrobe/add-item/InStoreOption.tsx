import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function InStoreOption() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-700">In-store shopping</h2>
      <motion.button
        onClick={() => navigate('/in-store-shopping')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
            <ShoppingBag className="w-8 h-8 text-purple-600" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-800 mb-1">Browse stores</h3>
            <p className="text-sm text-gray-600">Find items from your favorite retailers</p>
          </div>
        </div>
      </motion.button>
    </div>
  );
}