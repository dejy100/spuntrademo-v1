export interface PersonalityTrait {
  id: string;
  name: string;
  description: string;
  score: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
  discount?: number;
  originalPrice?: number;
}

export interface StyleProfile {
  traits: PersonalityTrait[];
  preferences: string[];
  styleValues: string[];
}

export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}