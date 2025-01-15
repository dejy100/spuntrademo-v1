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
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center relative">
                <HelpCircle className="w-6 h-6 text-gray-600" />
                <span className="absolute -bottom-5 text-xs text-gray-600">Help</span>
              </button>
              
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center relative">
                <Star className="w-6 h-6 text-gray-600" />
                <span className="absolute -bottom-5 text-xs text-gray-600">Overview</span>
              </button>
            </div>
          </div>

          {/* Outfit Templates */}
          <div className="flex flex-col items-center gap-8 px-8 mt-12">
            {/* Glasses */}
            <div className="relative w-full max-w-[240px]">
              <svg className="w-full" viewBox="0 0 240 60">
                <path
                  d="M70,30 C70,25 75,20 80,20 H100 C105,20 110,25 110,30 C110,35 105,40 100,40 H80 C75,40 70,35 70,30 Z M130,30 C130,25 135,20 140,20 H160 C165,20 170,25 170,30 C170,35 165,40 160,40 H140 C135,40 130,35 130,30 Z M110,30 L130,30"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
              </svg>
              <button className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF8A65] transition-colors">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* T-Shirt/Top */}
            <div className="relative w-full max-w-[240px]">
              <svg className="w-full" viewBox="0 0 240 160">
                <path
                  d="M80,40 L160,40 L170,60 L170,140 L70,140 L70,60 Z"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
                <path
                  d="M100,40 C100,45 110,50 120,50 C130,50 140,45 140,40"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
              </svg>
              <button className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF8A65] transition-colors">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Bag and Pants Container */}
            <div className="relative w-full max-w-[240px] flex justify-between items-start gap-4">
              {/* Backpack */}
              <div className="relative w-1/2">
                <svg className="w-full" viewBox="0 0 120 160">
                  <path
                    d="M30,30 L90,30 L100,50 L100,140 L20,140 L20,50 Z M50,30 L50,15 L70,15 L70,30"
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                  />
                </svg>
                <button className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF8A65] transition-colors">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Pants */}
              <div className="relative w-1/3">
                <svg className="w-full" viewBox="0 0 100 240">
                  <path
                    d="M20,0 L80,0 L85,220 L60,220 M80,0 L75,220 L50,220"
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                  />
                </svg>
                <button className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF8A65] transition-colors">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Shoes */}
            <div className="relative w-full max-w-[240px]">
              <svg className="w-full" viewBox="0 0 240 80">
                <path
                  d="M70,40 C70,30 80,20 90,20 L110,20 L120,30 L130,30 L130,50 L80,50 C75,50 70,45 70,40 Z M150,40 C150,30 160,20 170,20 L190,20 L200,30 L210,30 L210,50 L160,50 C155,50 150,45 150,40 Z"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
              </svg>
              <button className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF8A65] transition-colors">
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
                className="px-6 py-2 bg-[#FF7043] text-white rounded-full flex items-center gap-2 hover:bg-[#FF8A65] transition-colors"
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
