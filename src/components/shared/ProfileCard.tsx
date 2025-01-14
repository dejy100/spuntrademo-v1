import React from 'react';
import { Sparkles } from 'lucide-react';
import { PersonalityTrait } from '../../types';

interface ProfileCardProps {
  name: string;
  personalityType: string;
  score: number;
  description: string;
}

export default function ProfileCard({ name, personalityType, score, description }: ProfileCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-3 shadow-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">
          Hi {name}, your style personality is{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {personalityType}
          </span>
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Your overall style score is {score}% - {description}
        </p>
      </div>
    </div>
  );
}