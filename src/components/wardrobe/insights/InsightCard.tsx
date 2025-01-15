import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Gift, Tags, ArrowRight } from 'lucide-react';
import { WardrobeInsight } from '../../../types/wardrobe';
import UnwornItemModal from './modals/UnwornItemModal';
import DonateItemsModal from './modals/DonateItemsModal';
import ResellItemModal from './modals/ResellItemModal';

interface InsightCardProps {
  insight: WardrobeInsight;
}

const iconMap = {
  unworn: Clock,
  donate: Gift,
  resell: Tags,
};

export default function InsightCard({ insight }: InsightCardProps) {
  const [showModal, setShowModal] = useState(false);
  const Icon = iconMap[insight.type as keyof typeof iconMap];

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={handleClick}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg md:rounded-xl p-3 md:p-4 cursor-pointer group"
      >
        <div className="flex items-start gap-2 md:gap-3">
          <div className="p-1.5 md:p-2 bg-white rounded-lg">
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm md:text-base font-medium mb-0.5 md:mb-1">{insight.title}</h3>
            <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">{insight.description}</p>
            <div className="flex items-center gap-1.5 md:gap-2 text-purple-600 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Take action
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <>
            {insight.type === 'unworn' && (
              <UnwornItemModal
                insight={insight}
                onClose={() => setShowModal(false)}
              />
            )}
            {insight.type === 'donate' && (
              <DonateItemsModal
                insight={insight}
                onClose={() => setShowModal(false)}
              />
            )}
            {insight.type === 'resell' && (
              <ResellItemModal
                insight={insight}
                onClose={() => setShowModal(false)}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}