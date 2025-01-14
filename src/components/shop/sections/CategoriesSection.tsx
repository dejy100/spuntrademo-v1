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

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isExpanded = expandedCategory === category.id;
          
          return (
            <div key={category.id}>
              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => category.subcategories && toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-purple-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-white transition-colors">
                    <Icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
                {category.subcategories ? (
                  isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )
                ) : null}
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
                    <div className="pl-12 pr-4 py-2 space-y-1">
                      {category.subcategories.map((subcategory) => (
                        <motion.button
                          key={subcategory}
                          whileHover={{ x: 4 }}
                          className="w-full text-left py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
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