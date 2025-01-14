import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface ChatHeaderProps {
  onBack?: () => void;
}

export default function ChatHeader({ onBack }: ChatHeaderProps) {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <span className="font-semibold">AI Style Assistant</span>
        </div>
        <div className="w-8" />
      </div>
    </div>
  );
}