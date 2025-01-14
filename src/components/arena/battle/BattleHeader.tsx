```tsx
import React from 'react';
import { ArrowLeft, X, Sword } from 'lucide-react';

interface BattleHeaderProps {
  onBack: () => void;
  onClose: () => void;
}

export default function BattleHeader({ onBack, onClose }: BattleHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Sword className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-semibold">Style Battle</h2>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
```