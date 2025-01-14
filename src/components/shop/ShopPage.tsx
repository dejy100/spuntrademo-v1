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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle file upload logic here
      console.log('File uploaded:', file);
      setShowVisualSearch(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-24">
        {/* Header with Search */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Search products, brands, and more..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-full shadow-sm focus:shadow-md transition-shadow"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Visual Search Button */}
          <motion.div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVisualSearch(!showVisualSearch)}
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Camera className="w-5 h-5 text-gray-600" />
            </motion.button>

            {/* Visual Search Dropdown */}
            <AnimatePresence>
              {showVisualSearch && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg p-4 z-50"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Visual Search</h3>
                    <button 
                      onClick={() => setShowVisualSearch(false)}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    Upload an image to find similar items
                  </p>

                  <div className="space-y-2">
                    <label className="block">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <div className="flex items-center gap-2 p-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                        <Upload className="w-4 h-4" />
                        <span className="text-sm font-medium">Upload Image</span>
                      </div>
                    </label>

                    <label className="block">
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <div className="flex items-center gap-2 p-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                        <Camera className="w-4 h-4" />
                        <span className="text-sm font-medium">Take Photo</span>
                      </div>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-24">
              <CategoriesSection />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-16">
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