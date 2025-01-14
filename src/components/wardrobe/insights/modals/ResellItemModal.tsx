import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, DollarSign, TrendingUp, Camera, Share2, ArrowRight } from 'lucide-react';
import { WardrobeInsight } from '../../../../types/wardrobe';

interface ResellItemModalProps {
  insight: WardrobeInsight;
  onClose: () => void;
}

export default function ResellItemModal({ insight, onClose }: ResellItemModalProps) {
  const [price, setPrice] = useState(insight.estimatedValue?.toString() || '');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Resell Item</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
              alt="Item for resale"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-green-800">High Demand Item</p>
              <p className="text-sm text-green-700">
                Similar items are selling quickly at ${insight.estimatedValue}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Set Your Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors"
              >
                <Camera className="w-5 h-5 text-purple-600 mb-2" />
                <p className="font-medium mb-1">Add Photos</p>
                <p className="text-sm text-gray-600">Upload item photos</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors"
              >
                <Share2 className="w-5 h-5 text-purple-600 mb-2" />
                <p className="font-medium mb-1">Share Listing</p>
                <p className="text-sm text-gray-600">Post to marketplaces</p>
              </motion.button>
            </div>
          </div>

          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={onClose}
              className="px-6 py-3 bg-purple-600 text-white rounded-xl flex items-center gap-2"
            >
              List Item
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}