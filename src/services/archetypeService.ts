import { archetypeData } from '../config/archetypeData';

// This would normally come from an API based on quiz answers or image analysis
export const mockArchetypes = ['Emberflare', 'Sylvane', 'Terraforge', 'Vermiluxe', 'Aquarise'];

export const getArchetypeFromQuiz = (answers: any) => {
  // Mock implementation - in reality, this would analyze quiz answers
  const randomIndex = Math.floor(Math.random() * mockArchetypes.length);
  return mockArchetypes[randomIndex];
};

export const getArchetypeFromImage = (imageData: any) => {
  // Mock implementation - in reality, this would analyze the image
  const randomIndex = Math.floor(Math.random() * mockArchetypes.length);
  return mockArchetypes[randomIndex];
};

export const getArchetypeDetails = (archetypeName: string) => {
  return archetypeData[archetypeName] || archetypeData['Emberflare'];
};
