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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 max-w-lg w-full mx-3 md:mx-4 max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold">Consider Donating</h2>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-1">
          {/* Featured Item Display */}
          <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden bg-gray-100">
            <img
              src={insight.items?.[0].imageUrl}
              alt="Item to donate"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            <div className="bg-purple-50 rounded-lg p-3 md:p-4 text-center">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mx-auto mb-1 md:mb-2" />
              <p className="text-xs md:text-sm text-purple-600 font-medium">Make an Impact</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 md:p-4 text-center">
              <Gift className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mx-auto mb-1 md:mb-2" />
              <p className="text-xs md:text-sm text-purple-600 font-medium">Help Others</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 md:p-4 text-center">
              <Truck className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mx-auto mb-1 md:mb-2" />
              <p className="text-xs md:text-sm text-purple-600 font-medium">Free Pickup</p>
            </div>
          </div>

          {/* Item Selection */}
          <div>
            <h3 className="text-sm md:text-base font-medium mb-2 md:mb-3">Select Items to Donate</h3>
            <div className="space-y-2 md:space-y-3">
              {insight.items?.map(item => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg border transition-colors cursor-pointer
                    ${selectedItems.includes(item.id)
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-200'
                    }`}
                  onClick={() => handleItemToggle(item.id)}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-medium">{item.name}</h4>
                    <p className="text-xs md:text-sm text-gray-600">Last worn {item.lastWorn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 sticky bottom-0 bg-white border-t">
          <button
            onClick={() => {}}
            className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2"
          >
            Continue to Donation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}