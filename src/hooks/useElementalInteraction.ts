```typescript
import { useState, useEffect } from 'react';
import { ELEMENT_INTERACTIONS } from '../components/arena/battle/interactions/InteractionTypes';

export function useElementalInteraction(playerElement: string, opponentElement: string) {
  const [currentInteraction, setCurrentInteraction] = useState<string | null>(null);

  const getInteractionKey = () => {
    const elements = [playerElement, opponentElement].sort().join('-');
    return elements;
  };

  const interaction = ELEMENT_INTERACTIONS[getInteractionKey()];

  const activateInteraction = () => {
    if (interaction) {
      setCurrentInteraction(interaction.name);
      setTimeout(() => setCurrentInteraction(null), 3000);
    }
  };

  return {
    interaction,
    currentInteraction,
    activateInteraction
  };
}
```