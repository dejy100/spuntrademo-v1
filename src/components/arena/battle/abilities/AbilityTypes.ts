```typescript
export interface Ability {
  name: string;
  description: string;
  icon: any;
  color: string;
  duration: number;
}

export const ELEMENT_ABILITIES: Record<string, Ability> = {
  fire: {
    name: 'Passion Burst',
    description: 'Boost style score by 25%',
    icon: 'Flame',
    color: 'bg-orange-500',
    duration: 10
  },
  water: {
    name: 'Flow State',
    description: 'Swap items twice as fast',
    icon: 'Droplet',
    color: 'bg-blue-500',
    duration: 15
  },
  earth: {
    name: 'Grounded Vision',
    description: 'Perfect color matching',
    icon: 'Leaf',
    color: 'bg-green-500',
    duration: 20
  },
  metal: {
    name: 'Precision Edge',
    description: 'Auto-coordinate accessories',
    icon: 'CircuitBoard',
    color: 'bg-gray-500',
    duration: 12
  },
  wood: {
    name: 'Creative Bloom',
    description: 'Unique combination bonus',
    icon: 'Sprout',
    color: 'bg-purple-500',
    duration: 15
  }
};
```