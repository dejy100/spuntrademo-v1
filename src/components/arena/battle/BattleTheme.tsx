```tsx
import React from 'react';
import { Timer } from 'lucide-react';

interface BattleThemeProps {
  theme: string;
  timeLeft: number;
}

export default function BattleTheme({ theme, timeLeft }: BattleThemeProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-lg font-medium mb-1">Theme: {theme}</h3>
        <p className="text-sm text-gray-600">Create an outfit that matches the theme</p>
      </div>
      <div className="flex items-center gap-2">
        <Timer className="w-5 h-5 text-orange-500" />
        <span className="text-xl font-bold text-orange-500">{timeLeft}s</span>
      </div>
    </div>
  );
}
```