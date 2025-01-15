import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImagePreviewModalProps {
  image: string;
  alt: string;
  onClose: () => void;
}

export default function ImagePreviewModal({ image, alt, onClose }: ImagePreviewModalProps) {
  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 backdrop-blur-sm bg-white/30 z-50 flex items-center justify-center p-3 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl mx-auto"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-8 md:-top-12 right-0 p-1.5 md:p-2 text-gray-800 hover:text-gray-600"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <div className="bg-white/80 backdrop-blur-md rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl">
            <img
              src={image}
              alt={alt}
              className="w-full h-auto max-h-[80vh] md:max-h-[85vh] object-contain"
              style={{
                imageRendering: 'high-quality',
                objectFit: 'contain'
              }}
            />
            <div className="p-3 md:p-4 bg-white/80 backdrop-blur-sm border-t">
              <h3 className="text-base md:text-lg font-medium text-gray-900">{alt}</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
