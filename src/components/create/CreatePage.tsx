import React from 'react';
import { X, Shirt, LayoutGrid, Image, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Top Navigation */}
      <div className="h-[8vh] flex justify-between items-center px-4 bg-white/70">
        <button 
          onClick={() => navigate(-1)}
          className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>
        <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
          <Shirt className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Main Content */}
      <div className="h-[82vh] flex flex-col justify-between py-8 px-4">
        <div className="flex-1 flex flex-col items-center justify-center max-h-[45vh]">
          {/* Logo and Title */}
          <div className="w-16 h-16 mb-3">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="35" className="fill-purple-600" />
              <circle cx="42" cy="45" r="4" fill="white" />
              <circle cx="58" cy="45" r="4" fill="white" />
              <path d="M 35 55 Q 50 65 65 55" stroke="white" fill="none" strokeWidth="3" strokeLinecap="round" />
              {[0, 1, 2, 3].map((i) => (
                <path
                  key={i}
                  d={`M ${40 + i * 7} ${70} Q ${35 + i * 10} ${85} ${30 + i * 15} ${90}`}
                  className="stroke-purple-600"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              ))}
            </svg>
          </div>

          <h1 className="text-xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Create your outfit
          </h1>
          <p className="text-gray-500 text-xs">Start by selecting items</p>
        </div>

        {/* Random Style Button */}
        <div className="w-full max-w-xs mx-auto">
          <p className="text-gray-500 text-center text-xs mb-2">Looking for new ideas?</p>
          <button
            className="w-full bg-gradient-to-r from-[#FF7A50] to-[#FF5B7F] text-white rounded-xl py-2.5 flex items-center justify-center gap-2 shadow-lg"
            onClick={() => navigate('/random-style')}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Style 5 random items</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-[10vh] bg-black/90 text-white flex items-center">
        <div className="w-full flex justify-around items-center px-4">
          <button className="flex flex-col items-center">
            <LayoutGrid className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">My Outfits</span>
          </button>

          <div className="flex gap-5">
            <span className="text-gray-400 cursor-pointer text-xs">SWIPE</span>
            <span className="text-[#FF7A50] cursor-pointer text-xs">CANVAS</span>
          </div>

          <button className="flex flex-col items-center">
            <Image className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Wallpapers</span>
          </button>
        </div>
      </div>
    </div>
  );
}
