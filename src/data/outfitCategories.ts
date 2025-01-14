import { Briefcase, Dumbbell, Sun, PartyPopper, Umbrella } from 'lucide-react';

export const outfitCategories = [
  {
    id: 'work',
    name: 'Work',
    icon: Briefcase,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    outfits: [
      {
        id: 1,
        name: 'Business Casual',
        image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 2,
        name: 'Professional Meeting',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=300',
      }
    ]
  },
  {
    id: 'workout',
    name: 'Workout',
    icon: Dumbbell,
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    outfits: [
      {
        id: 3,
        name: 'Yoga Session',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 4,
        name: 'Running Gear',
        image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=300',
      }
    ]
  },
  {
    id: 'everyday',
    name: 'Everyday',
    icon: Sun,
    color: 'bg-amber-100',
    iconColor: 'text-amber-600',
    outfits: [
      {
        id: 5,
        name: 'Casual Day Out',
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 6,
        name: 'Coffee Shop Look',
        image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300',
      }
    ]
  },
  {
    id: 'party',
    name: 'Party',
    icon: PartyPopper,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    outfits: [
      {
        id: 7,
        name: 'Night Out',
        image: 'https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 8,
        name: 'Cocktail Party',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=300',
      }
    ]
  },
  {
    id: 'weekend',
    name: 'Weekend',
    icon: Umbrella,
    color: 'bg-pink-100',
    iconColor: 'text-pink-600',
    outfits: [
      {
        id: 9,
        name: 'Brunch Style',
        image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 10,
        name: 'Shopping Day',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300',
      }
    ]
  }
];