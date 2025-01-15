import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Camera, Sparkles, ArrowRight, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MatchAnalysis from './MatchAnalysis';

interface StyleMatchModalProps {
  onClose: () => void;
}

export default function StyleMatchModal({ onClose }: StyleMatchModalProps) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setShowAnalysis(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 max-w-lg w-full mx-3 md:mx-4 max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
            <h2 className="text-lg md:text-xl font-semibold">Style Match Analysis</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {showAnalysis ? (
          <MatchAnalysis image={selectedImage!} />
        ) : (
          <div className="space-y-4 md:space-y-6 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="aspect-video bg-gray-100 rounded-lg md:rounded-xl overflow-hidden">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected outfit"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                  <Camera className="w-8 h-8 md:w-10 md:h-10 mb-2" />
                  <p className="text-sm md:text-base">No image selected</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <label className="flex flex-col gap-2 p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-purple-200 transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="flex items-center gap-2 text-purple-600">
                  <Upload className="w-5 h-5" />
                  <span className="font-medium">Upload Photo</span>
                </div>
                <p className="text-sm text-gray-500">Select from your device</p>
              </label>

              <button
                onClick={() => navigate('/camera')}
                className="flex flex-col gap-2 p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-purple-200 transition-colors"
              >
                <div className="flex items-center gap-2 text-purple-600">
                  <Camera className="w-5 h-5" />
                  <span className="font-medium">Take Photo</span>
                </div>
                <p className="text-sm text-gray-500">Use your camera</p>
              </button>
            </div>

            <div className="mt-auto pt-4 sticky bottom-0 bg-white border-t">
              <button
                onClick={onClose}
                className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}