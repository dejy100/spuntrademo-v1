import React from 'react';
import { AnimatePresence } from 'framer-motion';
import DraggableItem from './DraggableItem';
import { Item } from '../../../types/items';

interface StyleCanvasProps {
  items: Item[];
}

export default function StyleCanvas({ items }: StyleCanvasProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 aspect-square relative overflow-hidden">
      <AnimatePresence>
        {items.map((item) => (
          <DraggableItem key={item.id} {...item} />
        ))}
      </AnimatePresence>
    </div>
  );
}