import { Flame, Leaf, Mountain, CircuitBoard, Droplet } from 'lucide-react';

export const archetypes = [
  {
    name: 'Emberflare',
    element: 'Fire Element',
    description: 'Bold and dynamic, making statements through vibrant fashion choices',
    icon: Flame,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    accentColor: 'bg-gradient-to-r from-orange-500 to-red-500'
  },
  {
    name: 'Sylvane',
    element: 'Wood Element',
    description: 'Natural and flowing, embracing organic textures and patterns',
    icon: Leaf,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    accentColor: 'bg-gradient-to-r from-green-500 to-emerald-500'
  },
  {
    name: 'Terraforge',
    element: 'Earth Element',
    description: 'Timeless and practical, focusing on classic, enduring pieces',
    icon: Mountain,
    bgColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
    accentColor: 'bg-gradient-to-r from-amber-500 to-yellow-500'
  },
  {
    name: 'Vermiluxe',
    element: 'Metal Element',
    description: 'Refined and structured, with an eye for minimalist sophistication',
    icon: CircuitBoard,
    bgColor: 'bg-gray-100',
    iconColor: 'text-gray-600',
    accentColor: 'bg-gradient-to-r from-gray-500 to-slate-500'
  },
  {
    name: 'Aquarise',
    element: 'Water Element',
    description: 'Elegant and adaptable, flowing seamlessly between styles',
    icon: Droplet,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    accentColor: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  }
];