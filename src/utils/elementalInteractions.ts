import { Sparkles, CircuitBoard, Flame } from 'lucide-react';

export const elementalInteractions = {
  'fire-water': {
    name: 'Steam Style',
    description: 'Create ethereal, avant-garde looks',
    icon: Sparkles,
    color: 'from-orange-500 to-blue-500',
    bonus: 25
  },
  'earth-metal': {
    name: 'Industrial Chic',
    description: 'Blend natural and structured elements',
    icon: CircuitBoard,
    color: 'from-green-500 to-gray-500',
    bonus: 20
  },
  'wood-fire': {
    name: 'Phoenix Rising',
    description: 'Transform classic pieces into bold statements',
    icon: Flame,
    color: 'from-purple-500 to-orange-500',
    bonus: 30
  }
};

export const getInteractionKey = (element1: string, element2: string): string => {
  return [element1, element2].sort().join('-');
};