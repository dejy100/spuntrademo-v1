```typescript
import { useState, useEffect } from 'react';

export function useElementalPower(element: string) {
  const [isActive, setIsActive] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const activate = () => {
    if (!isActive && cooldown === 0) {
      setIsActive(true);
      
      // Set cooldown after ability ends
      setTimeout(() => {
        setIsActive(false);
        setCooldown(30); // 30 second cooldown
      }, getDuration() * 1000);
    }
  };

  const getDuration = () => {
    switch (element) {
      case 'fire': return 10;
      case 'water': return 15;
      case 'earth': return 20;
      case 'metal': return 12;
      case 'wood': return 15;
      default: return 10;
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [cooldown]);

  return { isActive, cooldown, activate };
}
```