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
        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 max-w-lg w-full mx-3 md:mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold">Resell Item</h2>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden mb-4 md:mb-6 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
              alt="Item for resale"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-green-50 rounded-lg md:rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
            <div>
              <p className="text-sm md:text-base font-medium text-green-800">High Demand Item</p>
              <p className="text-xs md:text-sm text-green-700">Similar items are selling quickly</p>
            </div>
          </div>

          <div>
            <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Set Your Price</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <button className="flex items-center justify-center gap-1.5 md:gap-2 p-3 md:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <Camera className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              <span className="text-xs md:text-sm font-medium text-purple-600">Add Photos</span>
            </button>
            <button className="flex items-center justify-center gap-1.5 md:gap-2 p-3 md:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <Share2 className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
              <span className="text-xs md:text-sm font-medium text-purple-600">Share</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-3 pt-4 md:pt-6 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 md:px-6 md:py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-xs md:text-sm"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-xs md:text-sm"
            >
              List Item
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}