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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
      <div className="max-w-lg mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setMode(id)}
              className="relative px-6 py-3 flex flex-col items-center gap-1"
            >
              <Icon className={`w-5 h-5 ${mode === id ? 'text-purple-600' : 'text-gray-400'}`} />
              <span className={`text-xs ${mode === id ? 'text-purple-600 font-medium' : 'text-gray-400'}`}>
                {label}
              </span>
              {mode === id && (
                <motion.div
                  layoutId="activeCreateTab"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-600"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}