import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ArchetypeCardProps {
  archetype: {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    color: string;
    iconColor: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export default function ArchetypeCard({ archetype, isSelected, onSelect }: ArchetypeCardProps) {
  const Icon = archetype.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onSelect}
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer ${
        isSelected ? 'ring-2 ring-orange-500' : ''
      }`}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${archetype.color} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-medium text-lg mb-2">{archetype.name}</h3>
      <p className="text-sm text-gray-600">{archetype.description}</p>
    </motion.div>
  );
}