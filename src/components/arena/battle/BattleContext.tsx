```typescript
import React, { createContext, useContext, useState } from 'react';
import { useBattleTimer } from '../../../hooks/useBattleTimer';
import { useActiveEffects } from '../../../hooks/useActiveEffects';
import { useElementalInteraction } from '../../../hooks/useElementalInteraction';

interface BattleContextType {
  timeLeft: number;
  selectedItems: string[];
  addItem: (itemId: string) => void;
  activeEffects: any[];
  addEffect: (type: string, duration: number) => void;
  currentInteraction: string | null;
  activateInteraction: () => void;
}

const BattleContext = createContext<BattleContextType | null>(null);

export function BattleProvider({ children, playerElement, opponentElement }: any) {
  const { timeLeft } = useBattleTimer();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { activeEffects, addEffect } = useActiveEffects();
  const { currentInteraction, activateInteraction } = useElementalInteraction(
    playerElement,
    opponentElement
  );

  const addItem = (itemId: string) => {
    if (selectedItems.length < 6) {
      setSelectedItems(prev => [...prev, itemId]);
    }
  };

  return (
    <BattleContext.Provider value={{
      timeLeft,
      selectedItems,
      addItem,
      activeEffects,
      addEffect,
      currentInteraction,
      activateInteraction
    }}>
      {children}
    </BattleContext.Provider>
  );
}

export function useBattle() {
  const context = useContext(BattleContext);
  if (!context) {
    throw new Error('useBattle must be used within a BattleProvider');
  }
  return context;
}
```