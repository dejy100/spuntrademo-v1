export interface WardrobeItem {
  id: string;
  imageUrl: string;
  name: string;
}

export interface WardrobeInsight {
  id: string;
  type: 'unworn' | 'donate' | 'resell';
  title: string;
  description: string;
  itemId?: string;
  items?: WardrobeItem[];
  lastWorn?: string;
  estimatedValue?: number;
  imageUrl?: string;
}