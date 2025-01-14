import React from 'react';

interface OutfitPreviewProps {
  image: string;
  alt: string;
  onClick: (e: React.MouseEvent) => void;
}

export default function OutfitPreview({ image, alt, onClick }: OutfitPreviewProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(e);
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      className="flex-shrink-0 w-8 h-8 cursor-pointer rounded-md overflow-hidden"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const mouseEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          handleClick(mouseEvent as unknown as React.MouseEvent);
        }
      }}
    >
      <img 
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
        draggable={false}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
    </div>
  );
}
