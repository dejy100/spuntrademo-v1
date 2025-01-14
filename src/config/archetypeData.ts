interface CelebrityMatch {
  name: string;
  description: string;
  image: string;
  similarities: string[];
  signatureItems: string[];
}

interface ColorPalette {
  name: string;
  hex: string;
  meaning: string;
}

interface ArchetypeDetails {
  traits: string[];
  description: string;
  colorPalette: ColorPalette[];
  celebrityMatches: CelebrityMatch[];
  styleProfile: {
    strengths: string[];
    recommendations: string[];
    avoidances: string[];
  };
}

export const archetypeData: Record<string, ArchetypeDetails> = {
  Emberflare: {
    traits: [
      'Confident and Bold Expression',
      'Innovative Style Combinations',
      'Dramatic Flair in Accessories',
      'Trend-Setting Approach',
      'Dynamic Color Choices',
      'Statement-Making Pieces',
      'Artistic and Creative Vision',
      'Fearless Fashion Attitude'
    ],
    description: 'You embody passion and dynamism in your style. Your wardrobe choices are bold, expressive, and make a powerful statement, drawing inspiration from the transformative energy of fire.',
    colorPalette: [
      { name: 'Ruby Red', hex: '#E0115F', meaning: 'Power and passion' },
      { name: 'Royal Gold', hex: '#FFD700', meaning: 'Luxury and confidence' },
      { name: 'Deep Purple', hex: '#301934', meaning: 'Mystery and creativity' },
      { name: 'Emerald', hex: '#50C878', meaning: 'Growth and harmony' },
      { name: 'Midnight Blue', hex: '#191970', meaning: 'Depth and trust' }
    ],
    celebrityMatches: [
      {
        name: 'Zendaya',
        description: 'Known for her bold, experimental style and trendsetting looks',
        image: '/images/celebrities/emberflare/zendaya.jpg',
        similarities: [
          'Fearless approach to fashion',
          'Mixing high fashion with street style',
          'Bold color choices',
          'Experimental with silhouettes'
        ],
        signatureItems: [
          'Statement suits',
          'Dramatic evening wear',
          'Innovative textures',
          'Bold accessories'
        ]
      },
      {
        name: 'Timothée Chalamet',
        description: 'Embodies modern elegance with artistic flair',
        image: '/images/celebrities/emberflare/timothee.jpg',
        similarities: [
          'Modern interpretation of classics',
          'Artistic approach to fashion',
          'Gender-fluid elements',
          'Sophisticated edge'
        ],
        signatureItems: [
          'Avant-garde suits',
          'Luxe fabrics',
          'Unique prints',
          'Modern accessories'
        ]
      },
      {
        name: 'Rihanna',
        description: 'Fashion icon who pushes boundaries and sets trends',
        image: '/images/celebrities/emberflare/rihanna.jpg',
        similarities: [
          'Boundary-pushing style',
          'Confidence in bold choices',
          'Mix of street and luxury',
          'Trendsetting approach'
        ],
        signatureItems: [
          'Oversized pieces',
          'Street luxe combinations',
          'Statement accessories',
          'Unexpected pairings'
        ]
      }
    ],
    styleProfile: {
      strengths: [
        'Natural confidence in bold choices',
        'Ability to mix unexpected elements',
        'Strong sense of personal style',
        'Trend awareness and adaptation'
      ],
      recommendations: [
        'Experiment with statement pieces',
        'Layer contrasting textures',
        'Incorporate bold accessories',
        'Play with dramatic silhouettes'
      ],
      avoidances: [
        'Overly conservative styles',
        'Monochromatic looks',
        'Basic, unembellished pieces',
        'Following trends too literally'
      ]
    }
  },
  Sylvane: {
    traits: [
      'Natural and Effortless Style',
      'Sustainable Fashion Focus',
      'Organic Color Palette',
      'Textural Harmony',
      'Balanced Proportions',
      'Earth-Inspired Aesthetics',
      'Mindful Accessorizing',
      'Timeless Appeal'
    ],
    description: "Your style reflects the natural world's harmony and balance. You gravitate towards sustainable materials, organic textures, and earthy tones that create a grounded yet sophisticated appearance.",
    colorPalette: [
      { name: 'Forest Green', hex: '#228B22', meaning: 'Growth and vitality' },
      { name: 'Earth Brown', hex: '#8B4513', meaning: 'Stability and grounding' },
      { name: 'Sage', hex: '#9DC183', meaning: 'Tranquility and balance' },
      { name: 'Sand', hex: '#F4A460', meaning: 'Warmth and neutrality' },
      { name: 'Moss', hex: '#8A9A5B', meaning: 'Natural harmony' }
    ],
    celebrityMatches: [
      {
        name: 'Emma Watson',
        description: 'Champion of sustainable fashion and elegant simplicity',
        image: '/images/celebrities/sylvane/emma.jpg',
        similarities: [
          'Commitment to sustainable fashion',
          'Elegant minimalism',
          'Natural sophistication',
          'Thoughtful styling'
        ],
        signatureItems: [
          'Sustainable materials',
          'Classic tailoring',
          'Earth-toned pieces',
          'Minimal accessories'
        ]
      },
      {
        name: 'Sienna Miller',
        description: 'Master of bohemian elegance and natural style',
        image: '/images/celebrities/sylvane/sienna.jpg',
        similarities: [
          'Effortless bohemian flair',
          'Natural fabric choices',
          'Organic color palettes',
          'Relaxed sophistication'
        ],
        signatureItems: [
          'Flowing dresses',
          'Natural fiber clothing',
          'Artisanal jewelry',
          'Vintage-inspired pieces'
        ]
      },
      {
        name: 'Lily Collins',
        description: 'Embodiment of natural elegance and timeless style',
        image: '/images/celebrities/sylvane/lily.jpg',
        similarities: [
          'Classic with a twist',
          'Natural beauty emphasis',
          'Balanced proportions',
          'Elegant simplicity'
        ],
        signatureItems: [
          'Tailored naturals',
          'Organic textures',
          'Earth-toned basics',
          'Delicate accessories'
        ]
      }
    ],
    styleProfile: {
      strengths: [
        'Natural elegance',
        'Sustainable style awareness',
        'Texture mixing ability',
        'Balance in proportions'
      ],
      recommendations: [
        'Invest in sustainable materials',
        'Layer natural textures',
        'Choose earth-toned basics',
        'Focus on timeless pieces'
      ],
      avoidances: [
        'Synthetic materials',
        'Overly trendy pieces',
        'Harsh color contrasts',
        'Excessive embellishments'
      ]
    }
  },
  Terraforge: {
    traits: [
      'Structured Elegance',
      'Architectural Influence',
      'Modern Minimalism',
      'Precise Detailing',
      'Quality-Focused',
      'Geometric Patterns',
      'Clean Lines',
      'Sophisticated Tech-wear'
    ],
    description: "Your style embodies precision and structure. You appreciate clean lines, architectural influences, and modern minimalism, creating looks that are both sophisticated and forward-thinking.",
    colorPalette: [
      { name: 'Titanium Gray', hex: '#787878', meaning: 'Strength and sophistication' },
      { name: 'Carbon Black', hex: '#2C2C2C', meaning: 'Power and modernity' },
      { name: 'Steel Blue', hex: '#4682B4', meaning: 'Trust and stability' },
      { name: 'Concrete', hex: '#95A5A6', meaning: 'Structure and foundation' },
      { name: 'Arctic White', hex: '#F8F9F9', meaning: 'Clarity and precision' }
    ],
    celebrityMatches: [
      {
        name: 'David Beckham',
        description: 'Master of modern minimalism and structured style',
        image: '/images/celebrities/terraforge/david.jpg',
        similarities: [
          'Clean, structured looks',
          'Modern minimalist approach',
          'Quality-focused wardrobe',
          'Sophisticated casual style'
        ],
        signatureItems: [
          'Well-tailored suits',
          'Premium basics',
          'Modern outerwear',
          'Technical accessories'
        ]
      },
      {
        name: 'Victoria Beckham',
        description: 'Icon of structured elegance and modern sophistication',
        image: '/images/celebrities/terraforge/victoria.jpg',
        similarities: [
          'Architectural silhouettes',
          'Minimalist aesthetic',
          'Precise tailoring',
          'Modern professional style'
        ],
        signatureItems: [
          'Structured blazers',
          'Clean-line dresses',
          'Modern separates',
          'Architectural heels'
        ]
      },
      {
        name: 'Tom Ford',
        description: 'Designer known for precision and luxury in style',
        image: '/images/celebrities/terraforge/tom.jpg',
        similarities: [
          'Impeccable tailoring',
          'Luxurious minimalism',
          'Attention to detail',
          'Modern sophistication'
        ],
        signatureItems: [
          'Perfect-fit suits',
          'Luxury basics',
          'Quality accessories',
          'Refined casual wear'
        ]
      }
    ],
    styleProfile: {
      strengths: [
        'Attention to detail and fit',
        'Modern minimalist aesthetic',
        'Quality-focused approach',
        'Structured style sense'
      ],
      recommendations: [
        'Invest in quality basics',
        'Focus on precise tailoring',
        'Choose architectural pieces',
        'Incorporate technical fabrics'
      ],
      avoidances: [
        'Overly ornate designs',
        'Unstructured silhouettes',
        'Busy patterns',
        'Casual or distressed items'
      ]
    }
  },
  Vermiluxe: {
    traits: [
      'Luxurious Refinement',
      'Classic Elegance',
      'Timeless Style',
      'Rich Textures',
      'Sophisticated Details',
      'Heritage Influence',
      'Quality Craftsmanship',
      'Polished Presentation'
    ],
    description: "Your style exemplifies timeless luxury and refined elegance. You gravitate towards classic pieces with rich textures and sophisticated details, creating an enduring wardrobe that speaks of quality and grace.",
    colorPalette: [
      { name: 'Royal Purple', hex: '#7851A9', meaning: 'Nobility and luxury' },
      { name: 'Champagne Gold', hex: '#F7E7CE', meaning: 'Elegance and sophistication' },
      { name: 'Burgundy', hex: '#800020', meaning: 'Rich heritage' },
      { name: 'Pearl White', hex: '#F5F5F1', meaning: 'Pure refinement' },
      { name: 'Navy Blue', hex: '#000080', meaning: 'Classic authority' }
    ],
    celebrityMatches: [
      {
        name: 'Cate Blanchett',
        description: 'Epitome of timeless elegance and sophisticated style',
        image: '/images/celebrities/vermiluxe/cate.jpg',
        similarities: [
          'Timeless elegance',
          'Sophisticated presence',
          'Quality-focused choices',
          'Refined aesthetic'
        ],
        signatureItems: [
          'Classic evening wear',
          'Refined suits',
          'Luxury accessories',
          'Elegant separates'
        ]
      },
      {
        name: 'Ralph Lauren',
        description: 'Master of classic American luxury',
        image: '/images/celebrities/vermiluxe/ralph.jpg',
        similarities: [
          'Heritage style',
          'Timeless approach',
          'Quality emphasis',
          'Classic refinement'
        ],
        signatureItems: [
          'Classic blazers',
          'Quality knits',
          'Traditional patterns',
          'Heritage pieces'
        ]
      },
      {
        name: 'Amal Clooney',
        description: 'Modern icon of sophisticated professional style',
        image: '/images/celebrities/vermiluxe/amal.jpg',
        similarities: [
          'Professional elegance',
          'Refined taste',
          'Classic with a twist',
          'Polished presentation'
        ],
        signatureItems: [
          'Sophisticated dresses',
          'Classic suits',
          'Elegant accessories',
          'Refined workwear'
        ]
      }
    ],
    styleProfile: {
      strengths: [
        'Understanding of timeless style',
        'Appreciation for quality',
        'Refined taste level',
        'Sophisticated coordination'
      ],
      recommendations: [
        'Invest in classic pieces',
        'Choose quality materials',
        'Focus on perfect fit',
        'Add heritage elements'
      ],
      avoidances: [
        'Trendy fast fashion',
        'Casual streetwear',
        'Experimental designs',
        'Overly edgy pieces'
      ]
    }
  },
  Aquarise: {
    traits: [
      'Fluid Adaptability',
      'Serene Presence',
      'Flowing Aesthetics',
      'Intuitive Style',
      'Calming Energy',
      'Graceful Movement',
      'Harmonious Balance',
      'Refreshing Innovation'
    ],
    description: "Your style flows with graceful adaptability, like water finding its perfect form. You have an intuitive sense for combining fluidity with structure, creating looks that are both refreshing and harmoniously balanced.",
    colorPalette: [
      { name: 'Ocean Blue', hex: '#1E90FF', meaning: 'Depth and fluidity' },
      { name: 'Aqua', hex: '#40E0D0', meaning: 'Refreshing clarity' },
      { name: 'Teal', hex: '#008B8B', meaning: 'Balanced wisdom' },
      { name: 'Sea Foam', hex: '#98FF98', meaning: 'Fresh perspective' },
      { name: 'Crystal Clear', hex: '#E0FFFF', meaning: 'Pure intention' }
    ],
    celebrityMatches: [
      {
        name: 'Nicole Kidman',
        description: 'Epitome of fluid grace and adaptable elegance',
        image: '/images/celebrities/aquarise/nicole.jpg',
        similarities: [
          'Graceful presence',
          'Adaptable style',
          'Flowing silhouettes',
          'Intuitive elegance'
        ],
        signatureItems: [
          'Flowing gowns',
          'Fluid fabrics',
          'Graceful draping',
          'Ethereal pieces'
        ]
      },
      {
        name: 'Tilda Swinton',
        description: 'Master of fluid, avant-garde style',
        image: '/images/celebrities/aquarise/tilda.jpg',
        similarities: [
          'Fluid aesthetics',
          'Innovative approach',
          'Adaptable presence',
          'Unique interpretation'
        ],
        signatureItems: [
          'Flowing suits',
          'Draped designs',
          'Artistic pieces',
          'Innovative silhouettes'
        ]
      },
      {
        name: 'Cate Blanchett',
        description: 'Icon of flowing elegance and adaptable sophistication',
        image: '/images/celebrities/aquarise/cate.jpg',
        similarities: [
          'Graceful adaptability',
          'Flowing elegance',
          'Intuitive style',
          'Balanced sophistication'
        ],
        signatureItems: [
          'Fluid evening wear',
          'Graceful suits',
          'Flowing separates',
          'Ethereal accessories'
        ]
      }
    ],
    styleProfile: {
      strengths: [
        'Intuitive style adaptation',
        'Graceful presentation',
        'Balance of flow and structure',
        'Harmonious coordination'
      ],
      recommendations: [
        'Embrace fluid fabrics',
        'Layer with grace',
        'Mix textures thoughtfully',
        'Choose flowing silhouettes'
      ],
      avoidances: [
        'Rigid structures',
        'Harsh contrasts',
        'Overly structured pieces',
        'Static designs'
      ]
    }
  }
};
