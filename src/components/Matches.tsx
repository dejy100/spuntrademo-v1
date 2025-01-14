import React, { useState } from 'react';
import { Filter, Sparkles, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProfileCard from './shared/ProfileCard';
import ProductCard from './shared/ProductCard';
import { archetypeTheme } from '../theme/archetypeTheme';
import { archetypeData } from '../config/archetypeData';
import { getArchetypeDetails } from '../services/archetypeService';

const archetypeProducts = {
  Emberflare: [
    {
      id: "1",
      name: "Puff Sleeve Cotton Mini Dress",
      brand: "JOHANNA ORTIZ",
      price: 239.20,
      originalPrice: 299.00,
      imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500",
      description: "Stunning puff sleeve mini dress in gold orange cotton",
      category: "Dresses",
      discount: 20
    },
    {
      id: "2",
      name: "Silk Wrap Dress",
      brand: "Modern Essentials",
      price: 189.99,
      imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=500",
      description: "Elegant silk wrap dress perfect for any occasion",
      category: "Dresses"
    },
    {
      id: "3",
      name: "Linen Blazer",
      brand: "Sustainable Style",
      price: 245.00,
      imageUrl: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80&w=500",
      description: "Sustainable linen blazer in natural tones",
      category: "Outerwear"
    },
    {
      id: "4",
      name: "Floral Maxi Dress",
      brand: "Summer Vibes",
      price: Math.floor(Math.random() * 100) + 50,
      imageUrl: "/images/products/emberflare/floral-maxi-dress.jpg",
      description: "A beautiful floral maxi dress for summer.",
      category: "Dresses"
    },
    {
      id: "5",
      name: "Strappy Sandals",
      brand: "Beach Walk",
      price: Math.floor(Math.random() * 100) + 20,
      imageUrl: "/images/products/emberflare/strappy-sandals.jpg",
      description: "Stylish strappy sandals for the beach.",
      category: "Footwear"
    }
  ],
  Terraforge: [
    {
      id: "t1",
      name: "Structured Power Blazer",
      brand: "BOSS WOMAN",
      price: 299.00,
      imageUrl: "/images/products/terraforge/power-blazer.jpg",
      description: "Commanding structured blazer in classic black",
      category: "Outerwear"
    },
    {
      id: "t2",
      name: "Professional Pencil Skirt",
      brand: "Executive Line",
      price: 149.99,
      imageUrl: "/images/products/terraforge/pencil-skirt.jpg",
      description: "Sharp pencil skirt for the modern professional",
      category: "Bottoms"
    },
    {
      id: "t3",
      name: "Leather Business Tote",
      brand: "Power Elite",
      price: 199.00,
      imageUrl: "/images/products/terraforge/business-tote.jpg",
      description: "Sophisticated leather tote for the business leader",
      category: "Accessories"
    },
    {
      id: "t4",
      name: "Tailored Trousers",
      brand: "Classic Fit",
      price: 149.99,
      imageUrl: "/images/products/terraforge/tailored-trousers.jpg",
      description: "Elegant tailored trousers for a polished look.",
      category: "Bottoms"
    },
    {
      id: "t5",
      name: "Silk Scarf",
      brand: "Luxury Accessories",
      price: 79.99,
      imageUrl: "/images/products/terraforge/silk-scarf.jpg",
      description: "Soft silk scarf to elevate any outfit.",
      category: "Accessories"
    }
  ],
  Aquarise: [
    {
      id: "a1",
      name: "Flowing Chiffon Maxi",
      brand: "OCEAN BREEZE",
      price: 259.00,
      imageUrl: "/images/products/aquarise/chiffon-maxi.jpg",
      description: "Ethereal flowing maxi dress in ocean blues",
      category: "Dresses"
    },
    {
      id: "a2",
      name: "Watercolor Silk Blouse",
      brand: "Fluid Style",
      price: 179.99,
      imageUrl: "/images/products/aquarise/silk-blouse.jpg",
      description: "Soft silk blouse with watercolor print",
      category: "Tops"
    },
    {
      id: "a3",
      name: "Pearl Drop Necklace",
      brand: "Sea Jewels",
      price: 129.00,
      imageUrl: "/images/products/aquarise/pearl-necklace.jpg",
      description: "Delicate pearl necklace with oceanic charm",
      category: "Jewelry"
    },
    {
      id: "a4",
      name: "Maxi Skirt",
      brand: "Beach Vibes",
      price: 89.99,
      imageUrl: "/images/products/aquarise/maxi-skirt.jpg",
      description: "Flowy maxi skirt perfect for summer outings.",
      category: "Bottoms"
    },
    {
      id: "a5",
      name: "Ocean-Inspired Earrings",
      brand: "Sea Treasures",
      price: 49.99,
      imageUrl: "/images/products/aquarise/ocean-earrings.jpg",
      description: "Beautiful earrings inspired by ocean waves.",
      category: "Jewelry"
    }
  ],
  Vermiluxe: [
    {
      id: "v1",
      name: "Cashmere Wrap Coat",
      brand: "LUXURY HOUSE",
      price: 899.00,
      imageUrl: "/images/products/vermiluxe/cashmere-coat.jpg",
      description: "Premium cashmere coat in rich camel",
      category: "Outerwear"
    },
    {
      id: "v2",
      name: "Silk Evening Gown",
      brand: "Elite Couture",
      price: 799.99,
      imageUrl: "/images/products/vermiluxe/evening-gown.jpg",
      description: "Luxurious silk gown with elegant draping",
      category: "Dresses"
    },
    {
      id: "v3",
      name: "Gold Statement Watch",
      brand: "Timeless Luxury",
      price: 1299.00,
      imageUrl: "/images/products/vermiluxe/gold-watch.jpg",
      description: "Sophisticated gold watch with premium details",
      category: "Accessories"
    },
    {
      id: "v4",
      name: "Chic Clutch",
      brand: "Evening Elegance",
      price: 129.99,
      imageUrl: "/images/products/vermiluxe/chic-clutch.jpg",
      description: "Stylish clutch for your evening outings.",
      category: "Accessories"
    },
    {
      id: "v5",
      name: "Statement Necklace",
      brand: "Glamour Pieces",
      price: 199.99,
      imageUrl: "/images/products/vermiluxe/statement-necklace.jpg",
      description: "Bold statement necklace to enhance your look.",
      category: "Jewelry"
    }
  ],
  Sylvane: [
    {
      id: "s1",
      name: "Organic Linen Dress",
      brand: "EARTH CHILD",
      price: Math.floor(Math.random() * 100) + 50,
      imageUrl: "/images/products/sylvane/linen-dress.jpg",
      description: "Natural linen dress in earth tones",
      category: "Dresses"
    },
    {
      id: "s2",
      name: "Hemp Blend Jumpsuit",
      brand: "Eco Style",
      price: Math.floor(Math.random() * 100) + 50,
      imageUrl: "/images/products/sylvane/hemp-jumpsuit.jpg",
      description: "Sustainable hemp blend jumpsuit in sage",
      category: "Jumpsuits"
    },
    {
      id: "s3",
      name: "Wooden Bead Bracelet",
      brand: "Nature's Art",
      price: Math.floor(Math.random() * 50) + 10,
      imageUrl: "/images/products/sylvane/wooden-bracelet.jpg",
      description: "Handcrafted wooden bead bracelet",
      category: "Jewelry"
    },
    {
      id: "s4",
      name: "Sustainable Tote Bag",
      brand: "Eco-Friendly",
      price: Math.floor(Math.random() * 50) + 10,
      imageUrl: "/images/products/sylvane/sustainable-tote.jpg",
      description: "Durable tote bag made from sustainable materials.",
      category: "Accessories"
    },
    {
      id: "s5",
      name: "Natural Fiber Shawl",
      brand: "Earthy Styles",
      price: Math.floor(Math.random() * 100) + 20,
      imageUrl: "/images/products/sylvane/natural-shawl.jpg",
      description: "Soft shawl made from natural fibers.",
      category: "Outerwear"
    }
  ]
};

export default function Matches() {
  const navigate = useNavigate();
  const location = useLocation();
  const archetype = location.state?.archetype || 'Emberflare';
  const archetypeDetails = getArchetypeDetails(archetype);
  const [products] = useState<Product[]>(() => {
    return archetypeProducts[archetype as keyof typeof archetypeProducts] || archetypeProducts.Emberflare;
  });
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const toggleFilter = (category: string) => {
    setActiveFilters(current =>
      current.includes(category)
        ? current.filter(c => c !== category)
        : [...current, category]
    );
  };

  const filteredProducts = activeFilters.length > 0
    ? products.filter(p => activeFilters.includes(p.category))
    : products;

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Archetype Header */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-red-50 to-rose-50" />
        <div className="relative">
          <div className="max-w-3xl mx-auto text-center pt-16 pb-12">
            {/* Back to Results Link */}
            <button 
              onClick={() => navigate('/archetype-result')}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              View Your Results Again
            </button>

            {/* Archetype Symbol */}
            <div className="flex justify-center mb-6">
              <motion.div 
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
              >
                {(() => {
                  const Icon = archetypeTheme[archetype]?.icon || Sparkles;
                  const color = archetypeTheme[archetype]?.colors.primary || '#805AD5';
                  return <Icon size={32} style={{ color }} />;
                })()}
              </motion.div>
            </div>

            {/* Archetype Name */}
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${archetypeTheme[archetype]?.colors.primary || '#ED8936'}, ${archetypeTheme[archetype]?.colors.secondary || '#F56565'})`
              }}
            >
              {archetype}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
              {archetypeDetails.description}
            </p>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Mobile Filter Button */}
        <button 
          className="lg:hidden flex items-center justify-center gap-2 w-full py-3 px-4 bg-white rounded-xl shadow-sm mb-4"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <Filter className="w-5 h-5" />
          <span className="font-semibold">Filters</span>
        </button>

        {/* Filters Sidebar - Mobile Drawer */}
        <div className={`
          fixed inset-0 z-40 lg:hidden transform transition-transform duration-300 ease-in-out
          ${showMobileFilters ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)} />
          <div className="relative w-64 max-w-xs h-full bg-white shadow-xl flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h2>
              <button onClick={() => setShowMobileFilters(false)} className="p-2">
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      toggleFilter(category);
                      setShowMobileFilters(false);
                    }}
                    className={`w-full px-4 py-2 rounded-lg text-left transition-all ${
                      activeFilters.includes(category)
                        ? 'bg-purple-100 text-purple-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5" />
              <h2 className="font-semibold">Filters</h2>
            </div>
            
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleFilter(category)}
                  className={`w-full px-4 py-2 rounded-lg text-left transition-all ${
                    activeFilters.includes(category)
                      ? 'bg-purple-100 text-purple-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
