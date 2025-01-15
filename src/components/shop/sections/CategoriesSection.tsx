import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Shirt, ShoppingBag, Footprints, Watch, Palette, Scissors, Crown, Heart, Tag } from 'lucide-react';

const categories = [
  {
    id: 'all',
    name: 'All',
    icon: ShoppingBag
  },
  {
    id: 'clothing',
    name: 'Clothing',
    icon: Shirt,
    subcategories: [
      'All Clothing',
      'Tops',
      'Blouse',
      'Coats',
      'Cardigans',
      'Jackets',
      'Blazers',
      'Hoodies',
      'Sweaters',
      'Dresses',
      'Jumpsuits',
      'Skirts',
      'Jeans',
      'Pants',
      'Activewear'
    ]
  },
  {
    id: 'shoes',
    name: 'Shoes',
    icon: Footprints,
    subcategories: [
      'All Shoes',
      'Boots',
      'Booties',
      'Heels',
      'Sneakers',
      'Sandals',
      'Flats'
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: Watch,
    subcategories: [
      'All Accessories',
      'Bags',
      'Jewelry',
      'Belts',
      'Sunglasses',
      'Scarves',
      'Hats',
      'Gloves'
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty',
    icon: Palette,
    subcategories: [
      'All Beauty',
      'Makeup',
      'Skincare',
      'Haircare',
      'Fragrances',
      'Tools'
    ]
  },
  {
    id: 'designers',
    name: 'Designers',
    icon: Scissors,
    subcategories: [
      'All Designers',
      'Luxury',
      'Contemporary',
      'Emerging'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Crown
  },
  {
    id: 'favorites',
    name: 'Favorites',
    icon: Heart
  },
  {
    id: 'sale',
    name: 'Sale',
    icon: Tag
  }
];

export default function CategoriesSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section className="bg-white rounded-lg shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-semibold">Categories</h2>
      </div>

      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id}>
            <motion.button
              onClick={() => setExpandedCategory(
                expandedCategory === category.id ? null : category.id
              )}
              className="w-full flex items-center justify-between p-2 md:p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <category.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                <span className="text-sm md:text-base">{category.name}</span>
              </div>
              {category.subcategories && (
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 transition-transform ${
                    expandedCategory === category.id ? 'rotate-180' : ''
                  }`}
                />
              )}
            </motion.button>

            <AnimatePresence>
              {category.subcategories && expandedCategory === category.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-9 pr-2 py-1 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        className="w-full text-left p-2 rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}