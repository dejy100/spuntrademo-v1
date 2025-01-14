import React from 'react';
import { motion } from 'framer-motion';

interface OutfitCardProps {
  image: string;
  name: string;
}

export default function OutfitCard({ image, name }: OutfitCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="font-medium">{name}</h4>
      </div>
    </motion.div>
  );
}