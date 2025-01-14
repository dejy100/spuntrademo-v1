import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: '1',
    brand: 'THE ROW',
    name: 'Biggins stretch-satin camisole',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400',
    price: 590,
    description: 'Luxurious stretch-satin camisole perfect for layering or wearing alone'
  },
  {
    id: '2',
    brand: 'JACQUEMUS',
    name: 'La Robe Bahia Mini Dress',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=400',
    price: 790,
    description: 'Stunning mini dress with unique design elements'
  },
  {
    id: '3',
    brand: 'SAINT LAURENT',
    name: 'Classic Leather Shoulder Bag',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80&w=400',
    price: 2990,
    description: 'Timeless leather shoulder bag with signature YSL hardware'
  },
  {
    id: '4',
    brand: 'GUCCI',
    name: 'Flora Print Silk Dress',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400',
    price: 3200,
    description: 'Stunning floral print silk dress with signature Gucci details'
  },
  {
    id: '5',
    brand: 'PRADA',
    name: 'Saffiano Leather Tote',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400',
    price: 2800,
    description: 'Iconic Saffiano leather tote with minimal hardware'
  },
  {
    id: '6',
    brand: 'BOTTEGA VENETA',
    name: 'Intrecciato Clutch',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=400',
    price: 2100,
    description: 'Signature woven leather clutch in timeless design'
  }
];

interface ProductGridProps {
  likedItems: string[];
  onLikeToggle: (productId: string) => void;
}

export default function ProductGrid({ likedItems, onLikeToggle }: ProductGridProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative"
        >
          <div 
            onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
            className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-md cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onLikeToggle(product.id)}
            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
              likedItems.includes(product.id)
                ? 'bg-purple-500 text-white'
                : 'bg-white/80 text-gray-600 hover:bg-purple-500 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" />
          </motion.button>

          <div className="mt-4 px-2">
            <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
            <h3 className="font-medium mb-2">{product.name}</h3>
            <p className="text-lg font-semibold">${product.price.toLocaleString()}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}