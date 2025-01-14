import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Droplet, Leaf, CircuitBoard } from 'lucide-react';

interface ElementalFusionProps {
  selectedArchetype: string | null;
}

export default function ElementalFusion({ selectedArchetype }: ElementalFusionProps) {
  const fusions = [
    {
      elements: ['fire', 'water'],
      name: 'Steam Style',
      description: 'Bold meets fluid for ethereal looks',
      icon: Sparkles,
      color: 'from-orange-500 to-blue-500'
    },
    {
      elements: ['earth', 'metal'],
      name: 'Industrial Nature',
      description: 'Structured designs with organic elements',
      icon: CircuitBoard,
      color: 'from-green-500 to-gray-500'
    },
    {
      elements: ['wood', 'fire'],
      name: 'Creative Flame',
      description: 'Artistic flair with passionate energy',
      icon: Flame,
      color: 'from-purple-500 to-orange-500'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">Elemental Fusion</h3>
      <p className="text-gray-600 mb-6">
        Experiment with different elements to create unique style combinations
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fusions.map((fusion) => (
          <motion.div
            key={fusion.name}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${fusion.color} flex items-center justify-center mb-4`}>
              <fusion.icon className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-medium mb-1">{fusion.name}</h4>
            <p className="text-sm text-gray-600">{fusion.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}