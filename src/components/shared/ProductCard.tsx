import React, { useState } from 'react';
import { Heart, X, Plus, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(true);
    setIsDisliked(false);
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDisliked(true);
    setIsLiked(false);
  };

  const handleAddToWardrobe = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/wardrobe');
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-[3/4]">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover pl-8"
        />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
          </button>

          {/* Dislike Button */}
          <button
            onClick={handleDislike}
            className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
              isDisliked 
                ? 'bg-gray-800 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <ThumbsDown className="w-5 h-5" />
          </button>

          {/* Add to Wardrobe Button */}
          {isLiked && (
            <button
              onClick={handleAddToWardrobe}
              className="p-3 rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-all duration-200"
            >
              <Plus className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Discount Tag */}
        {product.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            {product.discount}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h3 className="font-medium text-gray-900 mb-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onClick(product)}
          className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;