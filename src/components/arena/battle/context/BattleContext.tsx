import React, { createContext, useContext, useReducer } from 'react';
import { BattleState, BattleAction } from '../types/battle';

const BattleContext = createContext<{
  state: BattleState;
  dispatch: React.Dispatch<BattleAction>;
} | null>(null);

const initialState: BattleState = {
  timeLeft: 60,
  elementalPower: 0,
  styleScore: 0,
  selectedItems: [],
  activeEffects: [],
  battleStatus: 'preparing'
};

function battleReducer(state: BattleState, action: BattleAction): BattleState {
  switch (action.type) {
    case 'TICK_TIMER':
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
        battleStatus: state.timeLeft <= 1 ? 'completed' : state.battleStatus
      };
    case 'ADD_ITEM':
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
        styleScore: state.styleScore + 10 // Basic scoring logic
      };
    case 'ACTIVATE_POWER':
      return {
        ...state,
        elementalPower: state.elementalPower + action.payload.power,
        activeEffects: [...state.activeEffects, action.payload]
      };
    default:
      return state;
  }
}

export function BattleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(battleReducer, initialState);

  return (
    <BattleContext.Provider value={{ state, dispatch }}>
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