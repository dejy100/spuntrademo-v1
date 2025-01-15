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
  const [isVisualSearchOpen, setIsVisualSearchOpen] = useState(false);

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
      
      <main className="px-4 pt-16 pb-16">
        {/* Header with Search */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search products, brands..."
              className="w-full bg-white rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsVisualSearchOpen(true)}
              className="bg-white rounded-lg p-2.5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Upload image"
            >
              <Upload className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={() => setIsVisualSearchOpen(true)}
              className="bg-white rounded-lg p-2.5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Take photo"
            >
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isVisualSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black/50 z-50 p-4"
              onClick={() => setIsVisualSearchOpen(false)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl p-4 mx-auto max-w-lg mt-20"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Visual Search</h3>
                    <button
                      onClick={() => setIsVisualSearchOpen(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      Close
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Upload className="w-5 h-5 text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 text-center">
                        Upload an image
                      </span>
                    </label>
                    <button className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Camera className="w-5 h-5 text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 text-center">
                        Take a photo
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Categories Section */}
          <CategoriesSection />

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
      </main>
    </div>
  );
}