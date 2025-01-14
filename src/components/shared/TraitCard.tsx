import React from 'react';
import { Palette, Brain, Flame, Heart, Shield, Sparkles } from 'lucide-react';
import { PersonalityTrait } from '../../types';
import { motion } from 'framer-motion';

const traitIcons = {
  openness: Palette,
  conscientiousness: Brain,
  extraversion: Flame,
  agreeableness: Heart,
  neuroticism: Shield,
};

interface TraitCardProps {
  trait: PersonalityTrait;
}

export default function TraitCard({ trait }: TraitCardProps) {
  const IconComponent = traitIcons[trait.id as keyof typeof traitIcons] || Sparkles;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className={`h-2 bg-gradient-to-r from-${trait.id === 'openness' ? 'purple' : trait.id === 'conscientiousness' ? 'blue' : trait.id === 'extraversion' ? 'orange' : trait.id === 'agreeableness' ? 'green' : 'indigo'}-500 to-${trait.id === 'openness' ? 'pink' : trait.id === 'conscientiousness' ? 'cyan' : trait.id === 'extraversion' ? 'red' : trait.id === 'agreeableness' ? 'emerald' : 'violet'}-500`} />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100">
            <IconComponent className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{trait.name}</h3>
            <p className="text-sm text-gray-500">{trait.description}</p>
          </div>
        </div>
        <div className="relative pt-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gradient-to-r from-purple-200 to-pink-200">
              Trait Score
            </span>
            <span className="text-xs font-semibold inline-block text-purple-600">
              {trait.score}%
            </span>
          </div>
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
            <div
              style={{ width: `${trait.score}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}