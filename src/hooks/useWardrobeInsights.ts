import { useState, useEffect } from 'react';
import { WardrobeInsight } from '../types/wardrobe';

export function useWardrobeInsights() {
  const [insights, setInsights] = useState<WardrobeInsight[]>([
    {
      id: '1',
      type: 'unworn',
      title: 'Rediscover Your Blue Blazer',
      description: 'You haven\'t worn this in 3 months. Try pairing it with your new white shirt!',
      itemId: 'blazer-1',
      lastWorn: '2024-01-15',
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500'
    },
    {
      id: '2',
      type: 'donate',
      title: 'Consider Donating',
      description: 'These 5 items haven\'t been worn in over 6 months. Want to donate them?',
      items: [
        {
          id: 'item-1',
          imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500',
          name: 'Vintage Denim Jacket'
        },
        {
          id: 'item-2',
          imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500',
          name: 'Floral Summer Dress'
        },
        {
          id: 'item-3',
          imageUrl: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=500',
          name: 'Classic White Blouse'
        },
        {
          id: 'item-4',
          imageUrl: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?auto=format&fit=crop&q=80&w=500',
          name: 'Leather Mini Skirt'
        },
        {
          id: 'item-5',
          imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500',
          name: 'Printed Maxi Dress'
        }
      ]
    },
    {
      id: '3',
      type: 'resell',
      title: 'Resell Opportunity',
      description: 'This designer bag is in high demand. Consider reselling it!',
      itemId: 'bag-1',
      estimatedValue: 450,
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500'
    }
  ]);

  // In a real app, you would fetch insights from an API
  useEffect(() => {
    // Fetch insights logic here
  }, []);

  return { insights };
}