import React, { useState } from 'react';
import { Briefcase, Coffee, Crown, Eye } from 'lucide-react';
import ImagePreviewModal from './ImagePreviewModal';

interface OutfitItemProps {
  image: string;
  text: string;
  category: 'work' | 'casual' | 'formal';
  onClick: () => void;
}

const CategoryIcons = {
  work: Briefcase,
  casual: Coffee,
  formal: Crown,
};

export default function OutfitItem({ image, text, category, onClick }: OutfitItemProps) {
  const [showPreview, setShowPreview] = useState(false);
  const Icon = CategoryIcons[category];
  
  return (
    <>
      <div 
        className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 cursor-pointer group"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
        }}
      >
        <div className="flex items-center gap-2 flex-1">
          <div 
            className="w-8 h-8 rounded-md overflow-hidden flex-shrink-0 relative group"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${image}?size=thumbnail)`,
                imageRendering: 'auto',
                pointerEvents: 'none'
              }}
            />
            <button
              className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowPreview(true);
              }}
            >
              <Eye className="w-4 h-4 text-white" />
            </button>
          </div>
          <span className="text-sm text-gray-700 truncate">{text}</span>
        </div>
        <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
      </div>

      {showPreview && (
        <ImagePreviewModal
          image={image}
          alt={text}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}
