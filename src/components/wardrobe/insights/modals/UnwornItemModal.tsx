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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 max-w-lg w-full mx-3 md:mx-4 max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold">Rediscover Your Style</h2>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden mb-4 md:mb-6 bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea"
            alt="Item"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <button
            onClick={() => setSelectedAction('outfit')}
            className={`flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-colors ${
              selectedAction === 'outfit'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-100 hover:border-purple-100'
            }`}
          >
            <div className="p-2 bg-white rounded-lg">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-sm md:text-base font-medium mb-0.5 md:mb-1">Create Outfit</h3>
              <p className="text-xs md:text-sm text-gray-600">Mix and match with your wardrobe</p>
            </div>
            {selectedAction === 'outfit' && (
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            )}
          </button>

          <button
            onClick={() => setSelectedAction('plan')}
            className={`flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-colors ${
              selectedAction === 'plan'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-100 hover:border-purple-100'
            }`}
          >
            <div className="p-2 bg-white rounded-lg">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-sm md:text-base font-medium mb-0.5 md:mb-1">Plan to Wear</h3>
              <p className="text-xs md:text-sm text-gray-600">Schedule for a future date</p>
            </div>
            {selectedAction === 'plan' && (
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            )}
          </button>

          <button
            onClick={() => setSelectedAction('shop')}
            className={`flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-colors ${
              selectedAction === 'shop'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-100 hover:border-purple-100'
            }`}
          >
            <div className="p-2 bg-white rounded-lg">
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-sm md:text-base font-medium mb-0.5 md:mb-1">Shop Complements</h3>
              <p className="text-xs md:text-sm text-gray-600">Find items that match</p>
            </div>
            {selectedAction === 'shop' && (
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            )}
          </button>

          <button
            onClick={() => setSelectedAction('save')}
            className={`flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-colors ${
              selectedAction === 'save'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-100 hover:border-purple-100'
            }`}
          >
            <div className="p-2 bg-white rounded-lg">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-sm md:text-base font-medium mb-0.5 md:mb-1">Save for Later</h3>
              <p className="text-xs md:text-sm text-gray-600">Add to favorites</p>
            </div>
            {selectedAction === 'save' && (
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            )}
          </button>
        </div>

        <div className="flex justify-end mt-4 md:mt-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={onClose}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl flex items-center gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}