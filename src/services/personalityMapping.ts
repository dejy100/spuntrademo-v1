// Mapping constants for different personality systems
export const elementToArchetype = {
  Flame: "Emberflare",
  Bloom: "Sylvane",
  Terra: "Terraforge",
  Luxe: "Vermiluxe",
  Aqua: "Aquarise",
};

export const bigFiveToElement = {
  // Openness
  high_openness: "Flame", // Creative and experimental
  low_openness: "Terra", // Traditional and conventional

  // Conscientiousness
  high_conscientiousness: "Luxe", // Organized and precise
  low_conscientiousness: "Aqua", // Flexible and adaptable

  // Extraversion
  high_extraversion: "Flame", // Bold and outgoing
  low_extraversion: "Bloom", // Natural and introspective

  // Agreeableness
  high_agreeableness: "Aqua", // Adaptable and harmonious
  low_agreeableness: "Luxe", // Independent and structured

  // Neuroticism
  high_neuroticism: "Terra", // Seeks stability
  low_neuroticism: "Flame", // Confident and dynamic
};

export const mbtiToElement = {
  // Extroversion vs Introversion
  E: "Flame", // Extroverted - bold and expressive
  I: "Bloom", // Introverted - natural and thoughtful

  // Sensing vs Intuition
  S: "Terra", // Sensing - practical and traditional
  N: "Aqua", // Intuitive - flowing and imaginative

  // Thinking vs Feeling
  T: "Luxe", // Thinking - structured and logical
  F: "Bloom", // Feeling - organic and empathetic

  // Judging vs Perceiving
  J: "Luxe", // Judging - organized and planned
  P: "Aqua", // Perceiving - adaptable and flexible
};

// Color analysis mapping
export const colorToElement = {
  warm: "Flame", // Reds, oranges, yellows
  natural: "Bloom", // Greens, browns
  neutral: "Terra", // Beiges, tans
  cool: "Luxe", // Grays, whites
  deep: "Aqua", // Blues, purples
};

interface PersonalityTraits {
  bigFive?: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
  mbti?: string;
  colorPreference?: string;
  elementScores?: Record<string, number>;
}

export const calculateArchetype = (traits: PersonalityTraits) => {
  const elementScores: Record<string, number> = {
    Flame: 0,
    Bloom: 0,
    Terra: 0,
    Luxe: 0,
    Aqua: 0,
  };

  // Process Big Five traits if available
  if (traits.bigFive) {
    const { openness, conscientiousness, extraversion, agreeableness, neuroticism } = traits.bigFive;
    
    // Add scores based on Big Five traits
    if (openness > 0.6) elementScores[bigFiveToElement.high_openness]++;
    if (conscientiousness > 0.6) elementScores[bigFiveToElement.high_conscientiousness]++;
    if (extraversion > 0.6) elementScores[bigFiveToElement.high_extraversion]++;
    if (agreeableness > 0.6) elementScores[bigFiveToElement.high_agreeableness]++;
    if (neuroticism > 0.6) elementScores[bigFiveToElement.high_neuroticism]++;
  }

  // Process MBTI if available
  if (traits.mbti) {
    traits.mbti.split('').forEach(letter => {
      if (mbtiToElement[letter as keyof typeof mbtiToElement]) {
        elementScores[mbtiToElement[letter as keyof typeof mbtiToElement]]++;
      }
    });
  }

  // Process color preference if available
  if (traits.colorPreference && colorToElement[traits.colorPreference as keyof typeof colorToElement]) {
    elementScores[colorToElement[traits.colorPreference as keyof typeof colorToElement]] += 2; // Color preference has higher weight
  }

  // Add direct element scores if available
  if (traits.elementScores) {
    Object.entries(traits.elementScores).forEach(([element, score]) => {
      if (elementScores[element] !== undefined) {
        elementScores[element] += score;
      }
    });
  }

  // Find dominant element
  const dominantElement = Object.entries(elementScores).reduce((a, b) => 
    elementScores[a[0]] > elementScores[b[0]] ? a : b
  )[0];

  // Map to Spuntra Archetype
  return {
    archetype: elementToArchetype[dominantElement as keyof typeof elementToArchetype],
    element: dominantElement,
    scores: elementScores
  };
};

// Archetype descriptions and characteristics
export const archetypeDetails = {
  Emberflare: {
    description: "Dynamic, bold, and experimental in style",
    colorPalette: ["Red", "Orange", "Yellow", "Gold"],
    keywords: ["Bold", "Dynamic", "Passionate", "Expressive"],
    celebrityMatch: "Zendaya",
    element: "Flame",
    style: "Makes bold fashion statements, loves vibrant colors and dramatic pieces"
  },
  Sylvane: {
    description: "Natural, organic, and authentically creative",
    colorPalette: ["Green", "Brown", "Sage", "Olive"],
    keywords: ["Natural", "Authentic", "Organic", "Flowing"],
    celebrityMatch: "Emma Watson",
    element: "Bloom",
    style: "Favors sustainable fashion, natural fabrics, and earthy tones"
  },
  Terraforge: {
    description: "Classic, grounded, and timelessly elegant",
    colorPalette: ["Beige", "Terracotta", "Sand", "Cream"],
    keywords: ["Classic", "Timeless", "Grounded", "Reliable"],
    celebrityMatch: "David Beckham",
    element: "Terra",
    style: "Prefers timeless pieces, perfect fit, and quality materials"
  },
  Vermiluxe: {
    description: "Structured, precise, and modernly minimal",
    colorPalette: ["Silver", "White", "Gray", "Metallic"],
    keywords: ["Structured", "Minimal", "Precise", "Modern"],
    celebrityMatch: "Victoria Beckham",
    element: "Luxe",
    style: "Gravitates towards clean lines, minimal designs, and perfect details"
  },
  Aquarise: {
    description: "Fluid, adaptable, and mysteriously elegant",
    colorPalette: ["Blue", "Purple", "Navy", "Teal"],
    keywords: ["Fluid", "Adaptable", "Mysterious", "Elegant"],
    celebrityMatch: "Rihanna",
    element: "Aqua",
    style: "Embraces fluid silhouettes, versatile pieces, and deep tones"
  }
};
