import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplet, Leaf, CircuitBoard, Sprout } from 'lucide-react';

interface ElementalAbilitiesPanelProps {
  archetype: string;
  onAbilityUse: (ability: string) => void;
}

const abilities = {
  emberflare: {
    name: 'Emberflare',
    description: 'Harness the power of dynamic flames',
    icon: Flame,
    color: 'bg-orange-500'
  },
  aquarise: {
    name: 'Aquarise',
    description: 'Command the flow of water',
    icon: Droplet,
    color: 'bg-blue-500'
  },
  terraforge: {
    name: 'Terraforge',
    description: 'Shape the strength of earth',
    icon: Leaf,
    color: 'bg-green-500'
  },
  vermiluxe: {
    name: 'Vermiluxe',
    description: 'Manifest metallic precision',
    icon: CircuitBoard,
    color: 'bg-gray-500'
  },
  sylvane: {
    name: 'Sylvane',
    description: 'Channel the essence of nature',
    icon: Sprout,
    color: 'bg-purple-500'
  }
};

export default function ElementalAbilitiesPanel({ archetype, onAbilityUse }: ElementalAbilitiesPanelProps) {
  const ability = abilities[archetype.toLowerCase() as keyof typeof abilities];
  const Icon = ability?.icon || Flame;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4"
    >
      <h3 className="font-medium mb-4">Elemental Powers</h3>
      <motion.button
        whileHover={{ scale: 1.02 }}
        onClick={() => onAbilityUse(archetype)}
        className="w-full p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${ability?.color} bg-opacity-10`}>
            <Icon className={`w-5 h-5 ${ability?.color.replace('bg-', 'text-')}`} />
          </div>
          <div className="text-left">
            <h4 className="font-medium">{ability?.name}</h4>
            <p className="text-sm text-gray-600">{ability?.description}</p>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}