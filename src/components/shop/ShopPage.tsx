import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Camera, Upload, X } from 'lucide-react';
import Header from '../navigation/Header';
import AIStylistSection from './sections/AIStylistSection';
import PersonalCatalogSection from './sections/PersonalCatalogSection';
import DealsSection from './sections/DealsSection';
import CategoriesSection from './sections/CategoriesSection';

export default function ShopPage() {
  const [showVisualSearch, setShowVisualSearch] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file);
      setShowVisualSearch(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <main className="px-3 md:px-6 pt-16 md:pt-24 pb-16 md:pb-24 max-w-screen-2xl mx-auto">
        {/* Header with Search */}
        <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-center md:gap-4 md:mb-12">
          <div className="w-full md:max-w-md relative">
            <input
              type="text"
              placeholder="Search products, brands, and more..."
              className="w-full pl-10 pr-3 py-2.5 text-sm bg-white rounded-full shadow-sm focus:shadow-md transition-shadow md:pl-12 md:pr-4 md:py-3 md:text-base"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 md:left-4 md:w-5 md:h-5" />
          </div>

          {/* Visual Search Button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVisualSearch(!showVisualSearch)}
              className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all md:p-3"
            >
              <Camera className="w-4 h-4 text-gray-600 md:w-5 md:h-5" />
            </motion.button>

            {/* Visual Search Dropdown */}
            <AnimatePresence>
              {showVisualSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-[calc(100vw-24px)] bg-white rounded-lg shadow-lg overflow-hidden md:w-64"
                >
                  <div className="p-3 md:p-4">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <h3 className="text-sm font-medium md:text-base">Visual Search</h3>
                      <button
                        onClick={() => setShowVisualSearch(false)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors md:h-32">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Upload className="w-5 h-5 text-gray-400 mb-2 md:w-6 md:h-6" />
                      <span className="text-xs text-gray-500 md:text-sm">
                        Upload an image to search
                      </span>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 md:gap-8 lg:grid lg:grid-cols-12">
          {/* Categories Section - Mobile: Top, Desktop: Left Sidebar */}
          <div className="order-1 lg:order-none lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <CategoriesSection />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="order-2 space-y-6 lg:order-none lg:col-span-9 lg:space-y-12">
            {/* AI Stylist Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AIStylistSection />
            </motion.div>

            {/* Price Comparison Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <PersonalCatalogSection />
            </motion.div>

            {/* Deals Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <DealsSection />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}