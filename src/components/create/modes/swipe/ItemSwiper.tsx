import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Heart } from 'lucide-react';

interface ItemSwiperProps {
  category: string;
  onClose: () => void;
}

const items = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500',
    name: 'White Blazer'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=500',
    name: 'Denim Jacket'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500',
    name: 'Black Dress'
  }
];

export default function ItemSwiper({ category, onClose }: ItemSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipe = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === items.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? items.length - 1 : prev - 1;
    });
  };

  return (
    <div className="relative h-[80vh] sm:h-96">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-medium capitalize">{category}</h3>
        <button 
          onClick={onClose} 
          className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors touch-manipulation"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="relative h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              mass: 0.8,
              velocity: 5 
            }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <img
                src={items[currentIndex].image}
                alt={items[currentIndex].name}
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg sm:rounded-b-xl">
                <h4 className="text-sm sm:text-base font-medium">{items[currentIndex].name}</h4>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => swipe(-1)}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg active:shadow-sm transition-shadow touch-manipulation"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => swipe(1)}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg active:shadow-sm transition-shadow touch-manipulation"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button 
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 sm:p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg active:shadow-sm transition-shadow touch-manipulation"
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
        </button>
      </div>
    </div>
  );
}