import React from 'react';
import { motion } from 'framer-motion';
import { Layers, PenTool, Shirt } from 'lucide-react';

interface CreateNavigationProps {
  mode: 'swipe' | 'canvas' | 'tryon';
  setMode: (mode: 'swipe' | 'canvas' | 'tryon') => void;
}

export default function CreateNavigation({ mode, setMode }: CreateNavigationProps) {
  const tabs = [
    { id: 'swipe', label: 'SWIPE', icon: Layers },
    { id: 'canvas', label: 'CANVAS', icon: PenTool },
    { id: 'tryon', label: 'TRY ON', icon: Shirt }
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe">
      <div className="w-full max-w-md mx-auto px-3 py-1 sm:px-6 sm:py-2">
        <div className="flex justify-between items-center">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setMode(id)}
              className="relative flex-1 px-2 sm:px-6 py-2 sm:py-3 flex flex-col items-center gap-0.5 sm:gap-1 touch-manipulation"
            >
              <Icon 
                className={`w-5 h-5 ${
                  mode === id 
                    ? 'text-purple-600' 
                    : 'text-gray-400'
                }`} 
              />
              <span 
                className={`text-[10px] sm:text-xs ${
                  mode === id 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-400'
                }`}
              >
                {label}
              </span>
              {mode === id && (
                <motion.div
                  layoutId="activeCreateTab"
                  className="absolute -bottom-1 left-2 right-2 sm:-bottom-2 sm:left-0 sm:right-0 h-0.5 bg-purple-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}