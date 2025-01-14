export const calculateBattleScore = (
  baseScore: number,
  elementalBonus: number,
  styleBonus: number
): number => {
  return Math.round(baseScore * (1 + (elementalBonus + styleBonus) / 100));
};

export const getBattleTheme = () => {
  const themes = [
    'Summer Festival Vibes',
    'Urban Street Style',
    'Elegant Evening',
    'Sustainable Fashion',
    'Vintage Revival'
  ];
  return themes[Math.floor(Math.random() * themes.length)];
};

export const getElementalMatchup = (
  playerElement: string,
  opponentElement: string
): { bonus: number; description: string } => {
  const matchups: Record<string, { bonus: number; description: string }> = {
    'fire-water': { 
      bonus: 25,
      description: 'Steam Style enhances avant-garde looks'
    },
    'earth-metal': {
      bonus: 20,
      description: 'Industrial Chic blends natural and structured elements'
    },
    'wood-fire': {
      bonus: 30,
      description: 'Phoenix Rising transforms classic pieces'
    }
  };

  const key = [playerElement, opponentElement].sort().join('-');
  return matchups[key] || { bonus: 0, description: 'No special interaction' };
};