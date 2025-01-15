import React from 'react';
import { Image as ImageIcon, ArrowLeft, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreateHeader() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="w-full px-3 py-3 sm:px-4 sm:py-4 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors touch-manipulation"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => navigate('/add-item')}
              className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base rounded-full hover:shadow-lg active:shadow-md transition-shadow touch-manipulation"
            >
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Add New Item</span>
              <span className="xs:hidden">Add</span>
            </button>

            <button className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors touch-manipulation">
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}