import React, { useRef } from 'react';
import { Image, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PhotoOptions() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleChoosePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleTakePhoto = () => {
    cameraInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the selected file
      console.log('Selected file:', file);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-700">Or add using photo</h2>
      <div className="grid grid-cols-2 gap-4">
        <motion.button
          onClick={handleChoosePhoto}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center">
              <Image className="w-8 h-8 text-purple-600" />
            </div>
            <span className="font-medium text-gray-800">Choose photo</span>
          </div>
        </motion.button>

        <motion.button
          onClick={handleTakePhoto}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center">
              <Camera className="w-8 h-8 text-pink-600" />
            </div>
            <span className="font-medium text-gray-800">Take photo</span>
          </div>
        </motion.button>
      </div>

      {/* Hidden file inputs */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={cameraInputRef}
        onChange={handleFileChange}
        accept="image/*"
        capture="user"
        className="hidden"
      />
    </div>
  );
}