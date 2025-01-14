import React from 'react';
import { motion } from 'framer-motion';
import { Heart, X, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    brand: string;
    name: string;
    image: string;
    price: number;
    description: string;
  };
  isLiked: boolean;
  isDisliked: boolean;
  onLike: () => void;
  onDislike: () => void;
  onClick: () => void;
}

export default function ProductCard({
  product,
  isLiked,
  isDisliked,
  onLike,
  onDislike,
  onClick
}: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Feedback Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onDislike();
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isDisliked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <X className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onLike();
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              isLiked 
                ? 'bg-purple-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-purple-500 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" />
          </motion.button>
        </div>

        {/* View Details Button */}
        <div 
          onClick={onClick}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white rounded-full text-gray-900 flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Details
          </motion.button>
        </div>
      </div>

      <div className="mt-4 px-2">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="font-medium mb-2">{product.name}</h3>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>
    </div>
  );
}