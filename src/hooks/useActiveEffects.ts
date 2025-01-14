import { useState, useEffect } from 'react';

interface ActiveEffect {
  type: string;
  remainingTime: number;
}

const useActiveEffects = () => {
  const [activeEffects, setActiveEffects] = useState<ActiveEffect[]>([]);

  useEffect(() => {
    if (activeEffects.length > 0) {
      const timer = setInterval(() => {
        setActiveEffects(prev => 
          prev.map(effect => ({
            ...effect,
            remainingTime: effect.remainingTime - 1
          })).filter(effect => effect.remainingTime > 0)
        );
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [activeEffects]);

  const addEffect = (type: string, duration: number) => {
    setActiveEffects(prev => [...prev, { type, remainingTime: duration }]);
  };

  return { activeEffects, addEffect };
};

export { useActiveEffects };