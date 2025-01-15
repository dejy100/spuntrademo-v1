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
      
      <main className="w-full px-4 md:px-6 pt-16 md:pt-24 pb-16 md:pb-24">
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6 md:mb-12">
          <div className="w-full md:flex-1 md:max-w-md relative">
            <input
              type="text"
              placeholder="Search products, brands, and more..."
              className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-white rounded-full text-sm md:text-base shadow-sm focus:shadow-md transition-shadow"
            />
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          </div>

          {/* Visual Search Button */}
          <motion.div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVisualSearch(!showVisualSearch)}
              className="p-2 md:p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Camera className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
            </motion.button>

            {/* Visual Search Dropdown */}
            <AnimatePresence>
              {showVisualSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm md:text-base font-medium">Visual Search</h3>
                      <button
                        onClick={() => setShowVisualSearch(false)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Upload className="w-6 h-6 text-gray-400 mb-2" />
                      <span className="text-xs md:text-sm text-gray-500">
                        Upload an image to search
                      </span>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 md:space-y-12">
          <AIStylistSection />
          <PersonalCatalogSection />
          <DealsSection />
          <CategoriesSection />
        </div>
      </main>
    </div>
  );
}