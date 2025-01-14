import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Star, Bookmark, Cloud, Grid, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StoreCategories from './StoreCategories';
import StoreItems from './StoreItems';

export default function InStoreShoppingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'popular' | 'items'>('popular');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Browse Items</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setActiveTab('popular')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === 'popular' 
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Flame className="w-4 h-4" />
              Popular
            </button>
            <button 
              onClick={() => setActiveTab('items')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === 'items' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Grid className="w-4 h-4" />
              Shop Items
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Quick Actions */}
        <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar">
          <QuickAction icon={Star} label="Favorites" />
          <QuickAction icon={Bookmark} label="Collections" />
          <QuickAction icon={Cloud} label="Uploaded" />
        </div>

        {/* Categories */}
        <StoreCategories />

        {/* Items Grid */}
        <StoreItems />
      </div>
    </div>
  );
}

function QuickAction({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-2 p-3"
    >
      <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </motion.button>
  );
}