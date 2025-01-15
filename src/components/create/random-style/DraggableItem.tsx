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
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      style={{ position: 'absolute', ...position }}
      className="cursor-move touch-none select-none"
      whileHover={{ scale: 1.02, zIndex: 10 }}
      whileDrag={{ scale: 1.05, zIndex: 20 }}
    >
      <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg transition-shadow group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
          draggable={false}
          loading="eager"
        />
      </div>
    </motion.div>
  );
}