```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplet, Leaf, CircuitBoard, Sprout } from 'lucide-react';
import { useElementalPower } from '../../../hooks/useElementalPower';

interface ElementalPowerUpProps {
  element: 'fire' | 'water' | 'earth' | 'metal' | 'wood';
  onActivate: () => void;
}

const elementConfig = {
  fire: {
    name: 'Passion Burst',
    description: 'Temporarily boost your style score by 25%',
    icon: Flame,
    color: 'from-orange-500 to-red-500',
    duration: 10,
  },
  water: {
    name: 'Flow State',
    description: 'Swap items twice as fast for 15 seconds',
    icon: Droplet,
    color: 'from-blue-500 to-cyan-500',
    duration: 15,
  },
  earth: {
    name: 'Grounded Vision',
    description: 'Perfect color matching for your next 3 selections',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    duration: 20,
  },
  metal: {
    name: 'Precision Edge',
    description: 'Auto-coordinate accessories for your next outfit',
    icon: CircuitBoard,
    color: 'from-gray-500 to-slate-500',
    duration: 12,
  },
  wood: {
    name: 'Creative Bloom',
    description: 'Unique combination bonus for your next outfit',
    icon: Sprout,
    color: 'from-purple-500 to-violet-500',
    duration: 15,
  },
};

export default function ElementalPowerUp({ element, onActivate }: ElementalPowerUpProps) {
  const { isActive, cooldown, activate } = useElementalPower(element);
  const config = elementConfig[element];
  const Icon = config.icon;

  const handleActivate = () => {
    if (!isActive && cooldown === 0) {
      activate();
      onActivate();
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleActivate}
      disabled={isActive || cooldown > 0}
      className={`relative w-full p-4 rounded-xl ${
        isActive 
          ? `bg-gradient-to-r ${config.color} text-white`
          : 'bg-white hover:bg-gray-50'
      } ${cooldown > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${
          isActive ? 'bg-white/20' : `bg-gradient-to-r ${config.color}`
        }`}>
          <Icon className={isActive ? 'w-5 h-5 text-white' : 'w-5 h-5 text-white'} />
        </div>
        <div className="text-left">
          <h3 className="font-medium">{config.name}</h3>
          <p className="text-sm opacity-80">{config.description}</p>
        </div>
      </div>

      {cooldown > 0 && (
        <div className="absolute bottom-2 right-2">
          <span className="text-sm font-medium">{cooldown}s</span>
        </div>
      )}

      {isActive && (
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: config.duration, ease: 'linear' }}
          className="absolute bottom-0 left-0 h-1 bg-white/30"
        />
      )}
    </motion.button>
  );
}
```