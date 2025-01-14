import React from 'react';
import { motion } from 'framer-motion';

interface SuggestedPromptProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  prompt: string;
  onClick: () => void;
}

export default function SuggestedPrompt({
  icon,
  title,
  description,
  onClick
}: SuggestedPromptProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="w-full text-left bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.button>
  );
}