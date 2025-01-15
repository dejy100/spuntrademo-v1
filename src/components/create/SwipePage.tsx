import React from 'react';
import { X, HelpCircle, Star, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * SwipePage component
 * 
 * This component renders the swipe page with outfit illustrations and plus buttons.
 * It includes a top navigation bar with close, help, and overview buttons,
 * outfit illustrations with plus buttons, and bottom navigation.
 * 
 * @returns {JSX.Element} The SwipePage component.
 */
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
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-gray-600" />
                <span className="absolute mt-14 text-xs text-gray-600">Help</span>
              </button>
              
              <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-gray-600" />
                <span className="absolute mt-14 text-xs text-gray-600">Overview</span>
              </button>
            </div>
          </div>

          {/* Outfit Illustrations */}
          <div className="flex flex-col items-center gap-8 px-8 mt-8">
            {/* Glasses */}
            <div className="relative w-full">
              <svg className="w-full" viewBox="0 0 200 40">
                <path
                  d="M60,20 C60,15 65,10 70,10 H90 C95,10 100,15 100,20 C100,25 95,30 90,30 H70 C65,30 60,25 60,20 Z M110,20 C110,15 115,10 120,10 H140 C145,10 150,15 150,20 C150,25 145,30 140,30 H120 C115,30 110,25 110,20 Z"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
              </svg>
              <button className="absolute top-0 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* T-Shirt */}
            <div className="relative w-full">
              <svg className="w-full" viewBox="0 0 200 100">
                <path
                  d="M70,20 L130,20 L140,40 L140,90 L60,90 L60,40 Z"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
                <path
                  d="M85,20 C85,25 95,30 100,30 C105,30 115,25 115,20"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
              </svg>
              <button className="absolute top-0 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Backpack and Pants */}
            <div className="relative w-full flex justify-between">
              {/* Backpack */}
              <div className="relative w-1/2">
                <svg className="w-full" viewBox="0 0 100 120">
                  <path
                    d="M30,20 L70,20 L80,40 L80,100 L20,100 L20,40 Z M40,20 L40,10 L60,10 L60,20"
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                  />
                </svg>
                <button className="absolute top-0 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Pants */}
              <div className="relative w-1/3">
                <svg className="w-full" viewBox="0 0 80 200">
                  <path
                    d="M20,0 L60,0 L65,180 L45,180 M60,0 L55,180 L35,180"
                    fill="none"
                    stroke="#666"
                    strokeWidth="2"
                  />
                </svg>
                <button className="absolute top-0 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Shoes */}
            <div className="relative w-full">
              <svg className="w-full" viewBox="0 0 200 60">
                <path
                  d="M60,30 C60,20 70,10 80,10 L100,10 L110,20 L120,20 L120,40 L70,40 C65,40 60,35 60,30 Z M140,30 C140,20 150,10 160,10 L180,10 L190,20 L200,20 L200,40 L150,40 C145,40 140,35 140,30 Z"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                />
              </svg>
              <button className="absolute top-0 right-0 w-8 h-8 bg-[#FF7043] rounded-full flex items-center justify-center shadow-md">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-8 inset-x-0 flex justify-between items-center px-8">
            <button className="text-[#FF7043] font-medium">SWIPE</button>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">CANVAS</span>
              <button className="px-6 py-2 bg-[#FF7043] text-white rounded-full flex items-center gap-2">
                Next
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
