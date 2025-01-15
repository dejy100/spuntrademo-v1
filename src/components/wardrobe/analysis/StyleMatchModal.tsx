import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function StyleMatchModal({ onClose }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the selected file here
      console.log('Selected file:', file);
    }
  };

  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Handle the camera stream here
      console.log('Camera access granted:', stream);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-white rounded-xl p-4 z-50">
        <h3 className="text-lg font-medium mb-4">Visual Search</h3>
        <p className="text-sm text-gray-600 mb-4">Upload an image to find similar items</p>
        
        <div className="space-y-2">
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button 
            className="w-full flex items-center gap-2 px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm text-purple-700 transition-colors"
            onClick={handleUploadClick}
          >
            <Upload size={18} />
            Upload Image
          </button>
          
          <button 
            className="w-full flex items-center gap-2 px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm text-purple-700 transition-colors"
            onClick={handleTakePhoto}
          >
            <Camera size={18} />
            Take Photo
          </button>
        </div>
      </div>
    </>
  );
}