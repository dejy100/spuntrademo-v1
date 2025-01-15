import React from 'react';
import { motion } from 'framer-motion';
import { Layers, PenTool, Shirt } from 'lucide-react';

type CreateMode = 'swipe' | 'canvas' | 'tryon';

interface CreateModeNavigationProps {
  mode: CreateMode;
  onModeChange: (mode: CreateMode) => void;
}

export default function CreateModeNavigation({ mode, onModeChange }: CreateModeNavigationProps) {
  const modes = [
    { id: 'swipe', label: 'SWIPE', icon: Layers },
    { id: 'canvas', label: 'CANVAS', icon: PenTool },
    { id: 'tryon', label: 'TRY ON', icon: Shirt }
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto px-2 py-1 sm:px-4 sm:py-2">
        <div className="flex justify-between sm:justify-center sm:gap-8">
          {modes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onModeChange(id)}
              className="relative flex-1 sm:flex-none px-3 sm:px-6 py-2 sm:py-3 flex flex-col items-center gap-0.5 sm:gap-1 touch-manipulation"
            >
              <Icon 
                className={`w-5 h-5 ${
                  mode === id 
                    ? 'text-purple-600' 
                    : 'text-gray-400'
                }`} 
              />
              <span 
                className={`text-[10px] sm:text-xs tracking-wide ${
                  mode === id 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-400'
                }`}
              >
                {label}
              </span>
              {mode === id && (
                <motion.div
                  layoutId="activeMode"
                  className="absolute -bottom-1 left-1 right-1 sm:-bottom-2 sm:left-0 sm:right-0 h-0.5 bg-purple-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}