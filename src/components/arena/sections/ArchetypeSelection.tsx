import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplet, Leaf, CircuitBoard, Sprout } from 'lucide-react';
import ArchetypeCard from '../ArchetypeCard';

interface ArchetypeSelectionProps {
  selectedArchetype: string | null;
  onSelect: (archetype: string) => void;
}

const archetypes = [
  {
    id: 'emberflare',
    name: 'Emberflare',
    description: 'Bold and dramatic, thrives in creating daring looks',
    icon: Flame,
    color: 'from-orange-500 to-red-500',
    iconColor: 'text-orange-500'
  },
  {
    id: 'aquarise',
    name: 'Aquarise',
    description: 'Elegant and fluid, excels in timeless styles',
    icon: Droplet,
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500'
  },
  {
    id: 'terraforge',
    name: 'Terraforge',
    description: 'Grounded and eco-conscious, masters sustainable designs',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-500'
  },
  {
    id: 'vermiluxe',
    name: 'Vermiluxe',
    description: 'Sharp and precise, dominates minimalist fashion',
    icon: CircuitBoard,
    color: 'from-gray-500 to-slate-500',
    iconColor: 'text-gray-500'
  },
  {
    id: 'sylvane',
    name: 'Sylvane',
    description: 'Creative and free-spirited, shines in avant-garde',
    icon: Sprout,
    color: 'from-purple-500 to-violet-500',
    iconColor: 'text-purple-500'
  }
];

export default function ArchetypeSelection({ selectedArchetype, onSelect }: ArchetypeSelectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Choose Your Archetype</h3>
      <p className="text-gray-600">Select your elemental style personality</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {archetypes.map((archetype) => (
          <ArchetypeCard
            key={archetype.id}
            archetype={archetype}
            isSelected={selectedArchetype === archetype.id}
            onSelect={() => onSelect(archetype.id)}
          />
        ))}
      </div>
    </div>
  );
}