import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, HelpCircle, Star, Plus, Grid, CircleDot, Pencil, Heart, Image } from 'lucide-react';

export default function SwipePage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black">
      {/* Main Card */}
      <div className="h-screen relative">
        {/* White Card with Curved Corners */}
        <div className="absolute inset-0 bg-white rounded-2xl mx-2 mt-2 overflow-hidden">
          {/* Top Navigation */}
          <div className="flex justify-between p-4">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-gray-600" />
                </button>
                <span className="text-xs text-gray-600 mt-1">Help</span>
              </div>
              
              <div className="flex flex-col items-center">
                <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-gray-600" />
                </button>
                <span className="text-xs text-gray-600 mt-1">Overview</span>
              </div>
            </div>
          </div>

          {/* Outfit Templates */}
          <div className="flex flex-col items-center gap-12 px-8 mt-12">
            {/* Glasses */}
            <div className="relative w-full max-w-[200px]">
              <svg className="w-full" viewBox="0 0 100 30">
                <path
                  d="M20,15 L35,15 M65,15 L80,15 M35,15 C35,10 40,10 45,15 C50,20 50,20 45,25 C40,30 35,30 35,25 Z M65,15 C65,10 70,10 75,15 C80,20 80,20 75,25 C70,30 65,30 65,25 Z"
                  fill="none"
                  stroke="#666"
                  strokeWidth="1.5"
                />
              </svg>
              <button className="absolute -top-2 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* T-Shirt */}
            <div className="relative w-full max-w-[200px]">
              <svg className="w-full" viewBox="0 0 100 100">
                <path
                  d="M30,20 L70,20 L70,80 L30,80 Z M30,20 C30,20 45,25 50,25 C55,25 70,20 70,20"
                  fill="none"
                  stroke="#666"
                  strokeWidth="1.5"
                />
              </svg>
              <button className="absolute -top-2 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Bag and Pants Container */}
            <div className="relative w-full max-w-[200px] flex justify-between items-start">
              {/* Backpack */}
              <div className="relative w-1/2">
                <svg className="w-full" viewBox="0 0 50 70">
                  <path
                    d="M10,10 L40,10 L45,20 L45,60 L5,60 L5,20 Z M20,10 L20,5 L30,5 L30,10"
                    fill="none"
                    stroke="#666"
                    strokeWidth="1.5"
                  />
                </svg>
                <button className="absolute -top-2 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Pants */}
              <div className="relative w-1/3">
                <svg className="w-full" viewBox="0 0 30 100">
                  <path
                    d="M5,0 L25,0 L25,100 M5,0 L5,100"
                    fill="none"
                    stroke="#666"
                    strokeWidth="1.5"
                  />
                </svg>
                <button className="absolute -top-2 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Shoes */}
            <div className="relative w-full max-w-[200px]">
              <svg className="w-full" viewBox="0 0 100 30">
                <path
                  d="M20,15 C20,10 25,10 30,15 L40,15 L40,20 L20,20 Z M60,15 C60,10 65,10 70,15 L80,15 L80,20 L60,20 Z"
                  fill="none"
                  stroke="#666"
                  strokeWidth="1.5"
                />
              </svg>
              <button className="absolute -top-2 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-8 inset-x-0 flex justify-between items-center px-8">
            <span className="text-[#FF7043] font-medium">SWIPE</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">CANVAS</span>
              <button 
                onClick={() => navigate('/create/canvas')}
                className="px-6 py-2 bg-[#FF7043] text-white rounded-full flex items-center gap-2"
              >
                Next
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 inset-x-0">
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
