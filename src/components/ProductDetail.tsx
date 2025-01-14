import React, { useState } from 'react';
import { ShoppingBag, Gamepad2, Heart, Share2, ArrowLeft, ShirtIcon } from 'lucide-react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import VirtualTryOn from './product/VirtualTryOn';

export default function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state as { product: Product } || {};
  const [showTryOn, setShowTryOn] = useState(false);

  if (!product) {
    return <Navigate to="/matches" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence>
        {showTryOn && (
          <VirtualTryOn 
            product={product} 
            onClose={() => setShowTryOn(false)} 
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Matches
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-square rounded-3xl overflow-hidden bg-white shadow-lg"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTryOn(true)}
                className="absolute top-4 right-4 flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-3"
              >
                <ShirtIcon className="w-6 h-6 text-purple-600 mb-1" />
                <span className="text-xs font-medium text-gray-600">Try On</span>
              </motion.button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square rounded-xl overflow-hidden bg-white shadow-md"
                >
                  <img
                    src={product.imageUrl}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-lg text-green-600 font-semibold">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => navigate('/games', { state: { product } })}
              >
                <Gamepad2 className="w-5 h-5" />
                Play & Win This Item
              </motion.button>

              <motion.a
                href="https://asos.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black text-white rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ShoppingBag className="w-5 h-5" />
                Buy Now on ASOS
              </motion.a>

              <div className="flex gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 border-2 border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Save
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 border-2 border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold">Product Details</h2>
              <p className="text-gray-600">{product.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality {product.category}</li>
                <li>• Sustainable materials</li>
                <li>• Perfect for any occasion</li>
                <li>• Easy care instructions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}