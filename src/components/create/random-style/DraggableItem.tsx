import React from 'react';
import { motion } from 'framer-motion';

interface DraggableItemProps {
  id: string;
  name: string;
  image: string;
  position: { x: number; y: number };
}

export default function DraggableItem({ id, name, image, position }: DraggableItemProps) {
  return (
    <motion.div
      key={id}
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      style={{ position: 'absolute', ...position }}
      className="cursor-move"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileDrag={{ scale: 1.1, zIndex: 20 }}
    >
      <div className="w-40 h-40 rounded-xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}