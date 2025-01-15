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
      'Jewelry',
      'Watches',
      'Scarves',
      'Belts',
      'Hair Accessories',
      'Sunglasses'
    ]
  },
  {
    id: 'bags',
    name: 'Bags',
    icon: ShoppingBag,
    subcategories: [
      'All Bags',
      'Handbags',
      'Crossbody Bags',
      'Shoulder Bags',
      'Totes',
      'Backpacks',
      'Clutches'
    ]
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    icon: Crown,
    subcategories: [
      'All Jewelry',
      'Necklaces',
      'Earrings',
      'Bracelets',
      'Rings',
      'Fine Jewelry',
      'Fashion Jewelry'
    ]
  },
  {
    id: 'makeup',
    name: 'Makeup',
    icon: Palette,
    subcategories: [
      'All Makeup',
      'Face',
      'Eyes',
      'Lips',
      'Cheeks',
      'Brushes',
      'Sets'
    ]
  },
  {
    id: 'hair',
    name: 'Hair',
    icon: Scissors,
    subcategories: [
      'All Hair',
      'Shampoo',
      'Conditioner',
      'Treatments',
      'Styling',
      'Tools',
      'Accessories'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Crown
  },
  {
    id: 'sale',
    name: 'Sale',
    icon: Tag
  }
];

export default function CategoriesSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="bg-white rounded-xl shadow-sm p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Categories</h2>
      
      <div className="space-y-1 md:space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isExpanded = expandedCategory === category.id;
          
          return (
            <div key={category.id}>
              <motion.button
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => category.subcategories && toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-white transition-colors">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                  </div>
                  <span className="text-sm md:text-base font-medium">{category.name}</span>
                </div>
                {category.subcategories && (
                  <ChevronRight 
                    className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                )}
              </motion.button>

              <AnimatePresence>
                {isExpanded && category.subcategories && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-12 pr-3 py-1 md:py-2 space-y-1">
                      {category.subcategories.map((subcategory) => (
                        <motion.button
                          key={subcategory}
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full text-left py-2 px-3 rounded-lg text-sm md:text-base text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        >
                          {subcategory}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}