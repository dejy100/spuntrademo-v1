export interface BattleState {
  timeLeft: number;
  elementalPower: number;
  styleScore: number;
  selectedItems: string[];
  activeEffects: BattleEffect[];
  battleStatus: 'preparing' | 'in_progress' | 'completed';
}

export interface BattleEffect {
  type: string;
  power: number;
  duration: number;
}

export type BattleAction =
  | { type: 'TICK_TIMER' }
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'ACTIVATE_POWER'; payload: BattleEffect };