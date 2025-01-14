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
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 cursor-pointer group"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 bg-white rounded-lg">
            <Icon className="w-5 h-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium mb-1">{insight.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
            <div className="flex items-center gap-2 text-purple-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Take action
              <ArrowRight className="w-4 h-4" />
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