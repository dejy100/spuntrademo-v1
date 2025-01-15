import React from 'react';
import { AnimatePresence } from 'framer-motion';
import DraggableItem from './DraggableItem';
import { Item } from '../../../types/items';

interface StyleCanvasProps {
  items: Item[];
}

export default function StyleCanvas({ items }: StyleCanvasProps) {
  return (
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-6 aspect-square relative overflow-hidden touch-none">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <DraggableItem key={item.id} {...item} />
        ))}
      </AnimatePresence>
    </div>
  );
}