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
        className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold">Style Match Analysis</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!selectedImage ? (
          <div className="space-y-6">
            <p className="text-gray-600">
              Upload or take a photo of an item to see if it matches your style profile
            </p>

            <div className="grid grid-cols-2 gap-4">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-purple-50 rounded-xl flex flex-col items-center gap-3 hover:bg-purple-100 transition-colors"
                >
                  <Upload className="w-6 h-6 text-purple-600" />
                  <span className="font-medium text-purple-600">Upload Photo</span>
                </motion.div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-purple-50 rounded-xl flex flex-col items-center gap-3 hover:bg-purple-100 transition-colors"
                >
                  <Camera className="w-6 h-6 text-purple-600" />
                  <span className="font-medium text-purple-600">Take Photo</span>
                </motion.div>
              </label>
            </div>
          </div>
        ) : (
          <MatchAnalysis
            imageUrl={selectedImage}
            onCreateOutfit={() => {
              navigate('/create');
              onClose();
            }}
            onAddToWardrobe={() => {
              navigate('/add-item');
              onClose();
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}