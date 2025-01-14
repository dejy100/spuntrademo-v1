import { useEffect } from 'react';
import { useBattle } from '../context/BattleContext';

export function useBattleTimer() {
  const { state, dispatch } = useBattle();

  useEffect(() => {
    if (state.battleStatus === 'in_progress' && state.timeLeft > 0) {
      const timer = setInterval(() => {
        dispatch({ type: 'TICK_TIMER' });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [state.battleStatus, state.timeLeft]);

  return state.timeLeft;
}