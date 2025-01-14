import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Sparkles, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { WardrobeInsight } from '../../../../types/wardrobe';
import { useNavigate } from 'react-router-dom';

interface UnwornItemModalProps {
  insight: WardrobeInsight;
  onClose: () => void;
}

export default function UnwornItemModal({ insight, onClose }: UnwornItemModalProps) {
  const navigate = useNavigate();
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const handleCreateOutfit = () => {
    navigate('/create');
    onClose();
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
          <h2 className="text-xl font-semibold">Rediscover Your Style</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea"
            alt="Item"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">What would you like to do with this item?</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={handleCreateOutfit}
                className="p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors"
              >
                <Sparkles className="w-5 h-5 text-purple-600 mb-2" />
                <p className="font-medium mb-1">Create New Outfit</p>
                <p className="text-sm text-gray-600">Get AI suggestions for styling</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors"
              >
                <Calendar className="w-5 h-5 text-purple-600 mb-2" />
                <p className="font-medium mb-1">Plan to Wear</p>
                <p className="text-sm text-gray-600">Schedule for a future date</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-purple-600 mb-2" />
                <p className="font-medium mb-1">Shop Complements</p>
                <p className="text-sm text-gray-600">Find items that match</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors"
              >
                <Heart className="w-5 h-5 text-purple-600 mb-2" />
                <p className="font-medium mb-1">Save for Later</p>
                <p className="text-sm text-gray-600">Add to favorites</p>
              </motion.button>
            </div>
          </div>

          <div className="flex justify-end">
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