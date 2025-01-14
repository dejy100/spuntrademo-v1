export const getStyleScore = (traits: string[]): number => {
  const baseScore = 100;
  const traitBonuses: Record<string, number> = {
    creative: 15,
    confident: 10,
    elegant: 12,
    casual: 8,
    professional: 10
  };

  return traits.reduce((score, trait) => {
    return score + (traitBonuses[trait] || 0);
  }, baseScore);
};

export const getStyleSuggestions = (
  style: string,
  occasion: string
): string[] => {
  const suggestions: Record<string, Record<string, string[]>> = {
    casual: {
      work: ['Comfortable blazer', 'Smart jeans', 'Loafers'],
      party: ['Statement top', 'Dark jeans', 'Ankle boots']
    },
    elegant: {
      work: ['Tailored suit', 'Silk blouse', 'Classic pumps'],
      party: ['Cocktail dress', 'Statement jewelry', 'High heels']
    }
  };

  return suggestions[style]?.[occasion] || [];
};