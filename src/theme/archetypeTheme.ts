import { Flame, Leaf, Mountain, Star, Droplets } from 'lucide-react';

export const archetypeTheme = {
  Emberflare: {
    // Passionate, bold, dynamic colors
    colors: {
      gradient: 'from-[#E0115F] via-[#FF4500] to-[#FF8C00]',
      primary: '#E0115F',
      secondary: '#FF4500',
      accent: '#FF8C00'
    },
    icon: Flame,
    buttonStyle: 'bg-gradient-to-r from-[#E0115F] to-[#FF4500] hover:from-[#FF4500] hover:to-[#FF8C00]',
    headerStyle: 'bg-gradient-to-br from-[#E0115F]/10 via-[#FF4500]/5 to-[#FF8C00]/10'
  },
  Sylvane: {
    // Natural, harmonious, organic colors
    colors: {
      gradient: 'from-[#2ECC71] via-[#98FB98] to-[#A8E6CF]',
      primary: '#2ECC71',
      secondary: '#98FB98',
      accent: '#A8E6CF'
    },
    icon: Leaf,
    buttonStyle: 'bg-gradient-to-r from-[#2ECC71] to-[#98FB98] hover:from-[#98FB98] hover:to-[#A8E6CF]',
    headerStyle: 'bg-gradient-to-br from-[#2ECC71]/10 via-[#98FB98]/5 to-[#A8E6CF]/10'
  },
  Terraforge: {
    // Grounded, luxurious, stable colors
    colors: {
      gradient: 'from-[#8B4513] via-[#DAA520] to-[#CD853F]',
      primary: '#8B4513',
      secondary: '#DAA520',
      accent: '#CD853F'
    },
    icon: Mountain,
    buttonStyle: 'bg-gradient-to-r from-[#8B4513] to-[#DAA520] hover:from-[#DAA520] hover:to-[#CD853F]',
    headerStyle: 'bg-gradient-to-br from-[#8B4513]/10 via-[#DAA520]/5 to-[#CD853F]/10'
  },
  Vermiluxe: {
    // Sophisticated, mysterious, radiant colors
    colors: {
      gradient: 'from-[#800080] via-[#4169E1] to-[#1E90FF]',
      primary: '#800080',
      secondary: '#4169E1',
      accent: '#1E90FF'
    },
    icon: Star,
    buttonStyle: 'bg-gradient-to-r from-[#800080] to-[#4169E1] hover:from-[#4169E1] hover:to-[#1E90FF]',
    headerStyle: 'bg-gradient-to-br from-[#800080]/10 via-[#4169E1]/5 to-[#1E90FF]/10'
  },
  Aquarise: {
    // Fluid, serene, adaptable colors
    colors: {
      gradient: 'from-[#1E90FF] via-[#40E0D0] to-[#00CED1]',
      primary: '#1E90FF',
      secondary: '#40E0D0',
      accent: '#00CED1'
    },
    icon: Droplets,
    buttonStyle: 'bg-gradient-to-r from-[#1E90FF] to-[#40E0D0] hover:from-[#40E0D0] hover:to-[#00CED1]',
    headerStyle: 'bg-gradient-to-br from-[#1E90FF]/10 via-[#40E0D0]/5 to-[#00CED1]/10'
  }
} as const;

export type ArchetypeName = keyof typeof archetypeTheme;

// Helper function to get theme for an archetype
export const getArchetypeTheme = (archetype: ArchetypeName) => {
  return archetypeTheme[archetype];
};
