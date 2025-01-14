import { useState, useCallback } from 'react';
import { Item } from '../types/items';

const initialItems: Item[] = [
  {
    id: '1',
    name: 'White Blazer',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500',
    position: { x: 0, y: 0 }
  },
  // ... other items
];

export function useRandomItems() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isGenerating, setIsGenerating] = useState(false);

  const regenerateOutfit = useCallback(() => {
    setIsGenerating(true);
    setTimeout(() => {
      const newPositions = items.map(item => ({
        ...item,
        position: {
          x: Math.random() * 300,
          y: Math.random() * 300
        }
      }));
      setItems(newPositions);
      setIsGenerating(false);
    }, 1000);
  }, [items]);

  return { items, isGenerating, regenerateOutfit };
}