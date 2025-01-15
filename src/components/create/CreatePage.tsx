import React from 'react';
import { X, Shirt, LayoutGrid, Image, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Top Navigation */}
      <header className="flex justify-between items-center p-5 bg-white/70">
        <button 
          onClick={() => navigate(-1)}
          className="w-11 h-11 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <button className="w-11 h-11 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
          <Shirt className="w-5 h-5 text-gray-700" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-between py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-24 h-24">
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

          <h1 className="text-2xl font-bold mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Create your outfit
          </h1>
          <p className="text-gray-500 mt-2">Start by selecting items</p>
        </div>

        {/* Random Style Button */}
        <div className="w-full px-6">
          <p className="text-gray-500 text-center mb-3">Looking for new ideas?</p>
          <button
            className="w-full max-w-md mx-auto bg-gradient-to-r from-[#FF7A50] to-[#FF5B7F] text-white rounded-xl py-3.5 flex items-center justify-center gap-2 shadow-lg"
            onClick={() => navigate('/random-style')}
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Style 5 random items</span>
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-black text-white py-5">
        <div className="flex justify-around items-center px-6">
          <button className="flex flex-col items-center gap-1.5">
            <LayoutGrid className="w-6 h-6" />
            <span className="text-xs">My Outfits</span>
          </button>

          <div className="flex gap-8 text-sm">
            <span className="text-gray-400 cursor-pointer">SWIPE</span>
            <span className="text-[#FF7A50] cursor-pointer">CANVAS</span>
          </div>

          <button className="flex flex-col items-center gap-1.5">
            <Image className="w-6 h-6" />
            <span className="text-xs">Wallpapers</span>
          </button>
        </div>
      </nav>
    </div>
  );
}