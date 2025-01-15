import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function StyleMatchModal({ onClose }: Props) {
  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-white rounded-xl p-4 z-50">
        <h3 className="text-lg font-medium mb-4">Visual Search</h3>
        <p className="text-sm text-gray-600 mb-4">Upload an image to find similar items</p>
        
        <div className="space-y-2">
          <button 
            className="w-full flex items-center gap-2 px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm text-purple-700 transition-colors"
            onClick={() => {}}
          >
            <Upload size={18} />
            Upload Image
          </button>
          
          <button 
            className="w-full flex items-center gap-2 px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm text-purple-700 transition-colors"
            onClick={() => {}}
          >
            <Camera size={18} />
            Take Photo
          </button>
        </div>
      </div>
    </>
  );
}