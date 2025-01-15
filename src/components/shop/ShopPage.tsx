import React, { useState } from 'react';
import { Search, Camera, Upload, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
      // Handle the uploaded file here
      console.log('Uploaded file:', file);
      setShowVisualSearch(false);
    }
  };

  const handleTakePhoto = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // This opens the back camera
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log('Photo taken:', file);
        setShowVisualSearch(false);
      }
    };
    input.click();
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
              className="w-full bg-white rounded-full pl-10 pr-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm hover:shadow-md transition-shadow"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* Visual Search Button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVisualSearch(!showVisualSearch)}
              className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Camera className="w-4 h-4 text-gray-600" />
            </motion.button>

            {/* Visual Search Dropdown */}
            <AnimatePresence>
              {showVisualSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-[280px] bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-medium">Visual Search</h3>
                      <button
                        onClick={() => setShowVisualSearch(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Upload an image to find similar items</p>
                    
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 w-full p-3 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <Upload className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-purple-600 font-medium">Upload Image</span>
                      </label>
                      <button 
                        onClick={handleTakePhoto}
                        className="flex items-center gap-3 w-full p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        <Camera className="w-5 h-5 text-purple-600" />
                        <span className="text-sm text-purple-600 font-medium">Take Photo</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

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