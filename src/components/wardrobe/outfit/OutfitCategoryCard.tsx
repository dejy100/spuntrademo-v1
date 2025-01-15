import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface OutfitCategoryCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
  outfitCount: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function OutfitCategoryCard({
  name,
  icon: Icon,
  color,
  iconColor,
  outfitCount,
  isSelected,
  onClick
}: OutfitCategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-all cursor-pointer w-[100px] md:w-[120px] h-[120px] md:h-[140px] flex-shrink-0 flex flex-col items-center justify-between ${
        isSelected ? 'ring-2 ring-purple-500' : ''
      }`}
    >
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${color} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${iconColor}`} />
      </div>
      <div className="flex flex-col items-center w-full">
        <h3 className="font-medium text-xs md:text-sm mb-0.5 text-center w-full line-clamp-1">{name}</h3>
        <p className="text-[10px] md:text-xs text-gray-500 text-center w-full">
          {outfitCount} outfits
        </p>
      </div>
    </motion.div>
  );
}