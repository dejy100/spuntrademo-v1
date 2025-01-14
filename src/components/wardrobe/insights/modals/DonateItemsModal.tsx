import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Heart, Gift, Truck, ArrowRight } from 'lucide-react';
import { WardrobeInsight } from '../../../../types/wardrobe';

interface DonateItemsModalProps {
  insight: WardrobeInsight;
  onClose: () => void;
}

export default function DonateItemsModal({ insight, onClose }: DonateItemsModalProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemToggle = (itemId: string) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

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
          <h2 className="text-xl font-semibold">Consider Donating</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Featured Item Display */}
          <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
            <img
              src={insight.items?.[0].imageUrl}
              alt={insight.items?.[0].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors"
            >
              <Truck className="w-5 h-5 text-purple-600 mb-2" />
              <p className="font-medium mb-1">Schedule Pickup</p>
              <p className="text-sm text-gray-600">Free collection service</p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors"
            >
              <Gift className="w-5 h-5 text-purple-600 mb-2" />
              <p className="font-medium mb-1">Drop-off</p>
              <p className="text-sm text-gray-600">Find nearest center</p>
            </motion.button>
          </div>

          {/* Other Items Preview */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium">Other Items to Consider</h3>
              <span className="text-sm text-purple-600">{insight.items?.length} items</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {insight.items?.slice(1).map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ${
                    selectedItems.includes(item.id) ? 'ring-2 ring-purple-500' : ''
                  }`}
                  onClick={() => handleItemToggle(item.id)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 flex items-center justify-center ${
                    selectedItems.includes(item.id) ? 'bg-purple-500/20' : 'bg-black/40 opacity-0 hover:opacity-100'
                  }`}>
                    <Gift className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {selectedItems.length} items selected
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={onClose}
              className="px-6 py-3 bg-purple-600 text-white rounded-xl flex items-center gap-2"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}