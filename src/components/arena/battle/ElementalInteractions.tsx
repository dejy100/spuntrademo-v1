import React from 'react';
import { motion } from 'framer-motion';
import { elementalInteractions, getInteractionKey } from '../../../utils/elementalInteractions';

interface ElementalInteractionsProps {
  playerElement: string;
  opponentElement: string;
  onInteractionActivate: (effect: string) => void;
}

export default function ElementalInteractions({
  playerElement,
  opponentElement,
  onInteractionActivate
}: ElementalInteractionsProps) {
  const interactionKey = getInteractionKey(playerElement, opponentElement);
  const interaction = elementalInteractions[interactionKey as keyof typeof elementalInteractions];

  if (!interaction) return null;

  const Icon = interaction.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 mb-4"
    >
      <h3 className="font-medium mb-4">Special Interaction Available!</h3>
      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={() => onInteractionActivate(interaction.name)}
        className="w-full p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-blue-500">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <h4 className="font-medium">{interaction.name}</h4>
            <p className="text-sm text-gray-600">{interaction.description}</p>
            <p className="text-sm text-orange-600 font-medium mt-1">
              +{interaction.bonus}% Style Points
            </p>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}