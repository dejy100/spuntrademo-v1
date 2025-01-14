import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ArchetypeCardProps {
  name: string;
  element: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  accentColor: string;
}

export default function ArchetypeCard({
  name,
  element,
  description,
  icon: Icon,
  bgColor,
  iconColor,
  accentColor
}: ArchetypeCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <h3 className="font-semibold text-lg leading-tight">{name}</h3>
        </div>
      </div>
      <p className="text-gray-600 mt-3 mb-4">{description}</p>
      <div className={`h-1 w-24 rounded-full ${accentColor}`} />
    </motion.div>
  );
}