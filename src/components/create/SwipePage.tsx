import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, CircleDot, Pencil, Heart, Image, Plus } from 'lucide-react';

export default function SwipePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('tops');
  
  const categories = [
    { id: 'tops', label: 'Tops' },
    { id: 'bottoms', label: 'Bottoms' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'shoes', label: 'Shoes' },
    { id: 'accessories', label: 'Accessories' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Main Content Area */}
      <div className="h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-900 to-black p-4">
        {/* Category Navigation */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-white text-xl font-semibold">Create Your Look</h1>
            <button className="bg-[#FF7043] p-2 rounded-full">
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-[#FF7043] text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Outfit Display Area */}
        <div className="grid grid-cols-2 gap-4">
          {/* These would be populated dynamically from your data */}
          <div className="aspect-square bg-gray-800 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex justify-end">
              <button className="w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="text-white text-sm">White T-Shirt</div>
          </div>
          <div className="aspect-square bg-gray-800 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex justify-end">
              <button className="w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="text-white text-sm">Black Jeans</div>
          </div>
          <div className="aspect-square bg-gray-800 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex justify-end">
              <button className="w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="text-white text-sm">Leather Jacket</div>
          </div>
          <div className="aspect-square bg-gray-800 rounded-xl p-4 flex flex-col justify-between">
            <div className="flex justify-end">
              <button className="w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="text-white text-sm">Sneakers</div>
          </div>
        </div>

        {/* Preview Area */}
        <div className="mt-6 bg-gray-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white">Current Outfit</span>
            <button 
              onClick={() => navigate('/create/canvas')}
              className="px-4 py-2 bg-[#FF7043] text-white rounded-full text-sm"
            >
              Next
            </button>
          </div>
          <div className="h-24 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Selected items will appear here</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Same as CreatePage */}
      <div className="fixed bottom-0 inset-x-0 h-16">
        <div className="bg-black/90 backdrop-blur-md py-3 border-t border-white/5">
          <div className="max-w-md mx-auto flex justify-between px-8">
            <button 
              onClick={() => navigate('/create')}
              className="flex flex-col items-center justify-center w-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Grid className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[10px] text-white mt-1.5">My Outfits</span>
            </button>

            <button className="flex flex-col items-center justify-center w-16">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-3 bg-[#FF7043]/10 rounded-full"></div>
                <CircleDot className="w-5 h-5 text-[#FF7043]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] text-[#FF7043] mt-1.5">Swipe</span>
            </button>

            <button 
              onClick={() => navigate('/create/canvas')}
              className="flex flex-col items-center justify-center w-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Pencil className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[10px] text-white mt-1.5">Canvas</span>
            </button>

            <button 
              onClick={() => navigate('/create/try-on')}
              className="flex flex-col items-center justify-center w-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Heart className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[10px] text-white mt-1.5">Try On</span>
            </button>

            <button 
              onClick={() => navigate('/create/wallpaper')}
              className="flex flex-col items-center justify-center w-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image className="w-5 h-5 text-white" strokeWidth={1.5} />
              <span className="text-[10px] text-white mt-1.5">Wallpaper</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
