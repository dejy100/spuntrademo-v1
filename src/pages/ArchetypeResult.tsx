import React, { useState } from 'react'
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Circle,
  Flex,
  Progress,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Palette, Heart, Zap, Star, User, TrendingUp } from 'lucide-react'
import { archetypeTheme } from '../theme/archetypeTheme'

const MotionBox = motion(Box)
const MotionCircle = motion(Circle)

// Mock data for style personality details
const stylePersonalityDetails = {
  keywords: ['Sophisticated', 'Bold', 'Creative', 'Confident', 'Trendsetting'],
  colorPalette: [
    { name: 'Ruby Red', hex: '#E0115F', meaning: 'Power and passion' },
    { name: 'Royal Gold', hex: '#FFD700', meaning: 'Luxury and confidence' },
    { name: 'Deep Purple', hex: '#301934', meaning: 'Mystery and creativity' },
    { name: 'Emerald', hex: '#50C878', meaning: 'Growth and harmony' },
    { name: 'Midnight Blue', hex: '#191970', meaning: 'Depth and trust' },
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
    },
  ]
}

const CelebrityCard = ({ celebrity, onClick }) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    cursor="pointer"
    onClick={() => onClick(celebrity)}
    bg="white"
    rounded="xl"
    shadow="lg"
    overflow="hidden"
    transition="all 0.2s"
  >
    <Box position="relative" h="400px">
      <Image 
        src={celebrity.image} 
        alt={celebrity.name} 
        w="100%" 
        h="100%" 
        objectFit="cover"
        objectPosition="top center"
      />
    </Box>
    <Box p={4}>
      <Heading size="md" mb={2}>{celebrity.name}</Heading>
      <Text color="gray.600" noOfLines={2}>{celebrity.description}</Text>
    </Box>
  </MotionBox>
)

export const ArchetypeResult = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedCelebrity, setSelectedCelebrity] = useState(null)
  
  const bgGradient = useColorModeValue(
    'linear(to-r, purple.50, pink.50)',
    'linear(to-r, purple.900, pink.900)'
  )

  const getArchetypeColors = (archetypeName) => {
    const colors = {
      Emberflare: [
        { name: 'Blazing Red', hex: archetypeTheme.Emberflare.colors.primary, meaning: 'Passion and energy' },
        { name: 'Solar Gold', hex: archetypeTheme.Emberflare.colors.secondary, meaning: 'Warmth and vitality' },
        { name: 'Phoenix Orange', hex: archetypeTheme.Emberflare.colors.accent, meaning: 'Transformation' },
        { name: 'Ember Crimson', hex: '#DC143C', meaning: 'Power and intensity' },
        { name: 'Flame Amber', hex: '#FFB347', meaning: 'Creativity and radiance' }
      ],
      Sylvane: [
        { name: 'Forest Green', hex: archetypeTheme.Sylvane.colors.primary, meaning: 'Growth and harmony' },
        { name: 'Earth Brown', hex: archetypeTheme.Sylvane.colors.secondary, meaning: 'Grounding and stability' },
        { name: 'Moss Sage', hex: archetypeTheme.Sylvane.colors.accent, meaning: 'Natural wisdom' },
        { name: 'Leaf Emerald', hex: '#50C878', meaning: 'Vitality and renewal' },
        { name: 'Wood Sienna', hex: '#A0522D', meaning: 'Organic strength' }
      ],
      Terraforge: [
        { name: 'Mountain Gray', hex: archetypeTheme.Terraforge.colors.primary, meaning: 'Strength and endurance' },
        { name: 'Stone Bronze', hex: archetypeTheme.Terraforge.colors.secondary, meaning: 'Timeless foundation' },
        { name: 'Granite Silver', hex: archetypeTheme.Terraforge.colors.accent, meaning: 'Resilience' },
        { name: 'Iron Slate', hex: '#708090', meaning: 'Stability and power' },
        { name: 'Crystal Quartz', hex: '#E6E6FA', meaning: 'Clarity and focus' }
      ],
      Vermiluxe: [
        { name: 'Royal Purple', hex: archetypeTheme.Vermiluxe.colors.primary, meaning: 'Nobility and luxury' },
        { name: 'Imperial Gold', hex: archetypeTheme.Vermiluxe.colors.secondary, meaning: 'Prestige and elegance' },
        { name: 'Velvet Burgundy', hex: archetypeTheme.Vermiluxe.colors.accent, meaning: 'Sophistication' },
        { name: 'Regal Amethyst', hex: '#9966CC', meaning: 'Divine wisdom' },
        { name: 'Crown Gold', hex: '#FFD700', meaning: 'Supreme excellence' }
      ],
      Aquarise: [
        { name: 'Ocean Blue', hex: archetypeTheme.Aquarise.colors.primary, meaning: 'Depth and serenity' },
        { name: 'Wave Teal', hex: archetypeTheme.Aquarise.colors.secondary, meaning: 'Flow and adaptability' },
        { name: 'Coral Aqua', hex: archetypeTheme.Aquarise.colors.accent, meaning: 'Vibrancy and life' },
        { name: 'Pearl White', hex: '#F0FFFF', meaning: 'Purity and clarity' },
        { name: 'Deep Cerulean', hex: '#0047AB', meaning: 'Wisdom and truth' }
      ]
    };
    
    return colors[archetypeName] || stylePersonalityDetails.colorPalette;
  };

  const getArchetypeTraits = (archetypeName) => {
    const traits = {
      Emberflare: [
        'Bold and Dramatic Expression',
        'Passionate Color Choices',
        'Statement-Making Style',
        'Dynamic Energy in Fashion',
        'Trendsetting Combinations',
        'Confident Accessories',
        'Expressive Details',
        'Transformative Looks'
      ],
      Sylvane: [
        'Natural and Organic Style',
        'Sustainable Fashion Choices',
        'Earthy Color Palette',
        'Flowing Silhouettes',
        'Nature-Inspired Details',
        'Balanced Accessories',
        'Eco-Conscious Approach',
        'Harmonious Combinations'
      ],
      Terraforge: [
        'Structured Silhouettes',
        'Enduring Style Choices',
        'Timeless Aesthetics',
        'Quality-Focused Details',
        'Grounded Accessories',
        'Classic Combinations',
        'Refined Minimalism',
        'Lasting Elegance'
      ],
      Vermiluxe: [
        'Regal and Sophisticated',
        'Luxurious Fabric Choices',
        'Elegant Color Palette',
        'Refined Silhouettes',
        'Noble Accessories',
        'Prestigious Details',
        'Royal Aesthetics',
        'Majestic Presence'
      ],
      Aquarise: [
        'Fluid and Adaptable Style',
        'Serene Color Choices',
        'Flowing Aesthetics',
        'Deep and Thoughtful Details',
        'Intuitive Combinations',
        'Refreshing Accessories',
        'Peaceful Presence',
        'Harmonious Flow'
      ]
    };
    
    return traits[archetypeName] || stylePersonalityDetails.keywords;
  };

  const getArchetypeScores = (archetypeName) => {
    const scores = {
      Emberflare: {
        passion: 95,
        creativity: 88,
        confidence: 92,
        innovation: 85
      },
      Sylvane: {
        harmony: 94,
        sustainability: 90,
        authenticity: 88,
        adaptability: 85
      },
      Terraforge: {
        stability: 95,
        craftsmanship: 92,
        durability: 90,
        precision: 88
      },
      Vermiluxe: {
        elegance: 95,
        sophistication: 92,
        refinement: 90,
        prestige: 88
      },
      Aquarise: {
        fluidity: 94,
        intuition: 90,
        serenity: 88,
        depth: 85
      }
    };
    
    return scores[archetypeName] || archetypeData.scores;
  };

  const getArchetypeCelebrities = (archetypeName) => {
    const celebrities = {
      Emberflare: [
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
        }
      ],
      Terraforge: [
        {
          name: 'Angelina Jolie',
          description: 'Icon of timeless elegance and structured sophistication',
          image: '/images/celebrities/terraforge/angelina.jpg',
          similarities: [
            'Timeless elegance',
            'Structured silhouettes',
            'Classic sophistication',
            'Enduring style'
          ],
          signatureItems: [
            'Tailored suits',
            'Classic evening wear',
            'Quality basics',
            'Refined accessories'
          ]
        },
        {
          name: 'Emma Stone',
          description: 'Master of classic style with a modern twist',
          image: '/images/celebrities/terraforge/emma.jpg',
          similarities: [
            'Refined aesthetic',
            'Quality-focused choices',
            'Modern classics',
            'Polished looks'
          ],
          signatureItems: [
            'Structured dresses',
            'Classic separates',
            'Quality fabrics',
            'Timeless pieces'
          ]
        },
        {
          name: 'Natalie Portman',
          description: 'Epitome of enduring grace and refined style',
          image: '/images/celebrities/terraforge/natalie.jpg',
          similarities: [
            'Graceful presence',
            'Timeless choices',
            'Quality-driven',
            'Refined taste'
          ],
          signatureItems: [
            'Classic gowns',
            'Structured pieces',
            'Quality materials',
            'Elegant accessories'
          ]
        }
      ],
      Aquarise: [
        {
          name: 'Taylor Swift',
          description: 'Icon of fluid style evolution and adaptable fashion',
          image: '/images/celebrities/aquarise/taylor.jpg',
          similarities: [
            'Style evolution',
            'Adaptable fashion',
            'Fluid aesthetic',
            'Dynamic presence'
          ],
          signatureItems: [
            'Flowing dresses',
            'Versatile pieces',
            'Shimmering details',
            'Adaptable accessories'
          ]
        },
        {
          name: 'Blake Lively',
          description: 'Master of fluid elegance and effortless style',
          image: '/images/celebrities/aquarise/blake.jpg',
          similarities: [
            'Effortless elegance',
            'Fluid silhouettes',
            'Adaptable style',
            'Natural grace'
          ],
          signatureItems: [
            'Flowing gowns',
            'Ethereal fabrics',
            'Versatile pieces',
            'Elegant accessories'
          ]
        },
        {
          name: 'Margot Robbie',
          description: 'Embodiment of fluid grace and modern sophistication',
          image: '/images/celebrities/aquarise/margot.jpg',
          similarities: [
            'Modern fluidity',
            'Adaptable elegance',
            'Effortless style',
            'Dynamic presence'
          ],
          signatureItems: [
            'Flowing ensembles',
            'Modern classics',
            'Versatile pieces',
            'Chic accessories'
          ]
        }
      ],
      Vermiluxe: [
        {
          name: 'Victoria Beckham',
          description: 'Queen of sophisticated luxury and refined elegance',
          image: '/images/celebrities/vermiluxe/victoria.jpg',
          similarities: [
            'Refined luxury',
            'Sophisticated style',
            'Elegant presence',
            'High-end fashion'
          ],
          signatureItems: [
            'Luxury suits',
            'Designer pieces',
            'Fine tailoring',
            'Premium accessories'
          ]
        },
        {
          name: 'Tilda Swinton',
          description: 'Avant-garde icon of luxurious sophistication',
          image: '/images/celebrities/vermiluxe/tilda.jpg',
          similarities: [
            'Artistic luxury',
            'Unique elegance',
            'Bold sophistication',
            'Refined edge'
          ],
          signatureItems: [
            'Avant-garde pieces',
            'Luxury fabrics',
            'Artistic designs',
            'Statement accessories'
          ]
        },
        {
          name: 'Cate Blanchett',
          description: 'Epitome of timeless luxury and sophisticated grace',
          image: '/images/celebrities/vermiluxe/cate.jpg',
          similarities: [
            'Timeless elegance',
            'Sophisticated luxury',
            'Refined taste',
            'Graceful presence'
          ],
          signatureItems: [
            'Luxury gowns',
            'Designer pieces',
            'Fine jewelry',
            'Elegant accessories'
          ]
        }
      ],
      Sylvane: [
        {
          name: 'Florence Welch',
          description: 'Ethereal icon of natural and bohemian style',
          image: '/images/celebrities/sylvane/florence.jpg',
          similarities: [
            'Natural aesthetic',
            'Bohemian spirit',
            'Organic style',
            'Earth-inspired'
          ],
          signatureItems: [
            'Flowing dresses',
            'Natural fabrics',
            'Vintage pieces',
            'Nature-inspired jewelry'
          ]
        },
        {
          name: 'Sienna Miller',
          description: 'Master of effortless bohemian chic',
          image: '/images/celebrities/sylvane/sienna.jpg',
          similarities: [
            'Natural elegance',
            'Bohemian flair',
            'Effortless style',
            'Earth tones'
          ],
          signatureItems: [
            'Boho dresses',
            'Natural materials',
            'Vintage-inspired pieces',
            'Artisanal accessories'
          ]
        },
        {
          name: 'Stevie Nicks',
          description: 'Legendary figure of mystical and natural style',
          image: '/images/celebrities/sylvane/stevie.jpg',
          similarities: [
            'Mystical presence',
            'Natural flowing style',
            'Bohemian icon',
            'Earth-connected'
          ],
          signatureItems: [
            'Flowing layers',
            'Natural textiles',
            'Mystical pieces',
            'Crystal accessories'
          ]
        }
      ]
    };
    
    return celebrities[archetypeName] || stylePersonalityDetails.celebrityMatches;
  };

  const handleCelebrityClick = (celebrity) => {
    setSelectedCelebrity(celebrity)
    onOpen()
  }

  // Get the archetype data from location state or use mock data
  const archetypeData = location.state?.archetypeResult || {
    name: 'Emberflare',
    element: 'Emberflare',
    description:
      'You embody passion and dynamism in your style. Your wardrobe choices are bold, expressive, and make a powerful statement, drawing inspiration from the transformative energy of emberflare.',
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
    scores: {
      creativity: 85,
      confidence: 92,
      versatility: 78,
      uniqueness: 88,
    }
  }

  const styleTraits = archetypeData.traits || [
    'Confident and Bold Expression',
    'Innovative Style Combinations',
    'Dramatic Flair in Accessories',
    'Trend-Setting Approach',
    'Dynamic Color Choices',
    'Statement-Making Pieces',
    'Artistic and Creative Vision',
    'Fearless Fashion Attitude'
  ];

  return (
    <Box bgGradient={bgGradient} minH="100vh" py={12}>
      <VStack spacing={12} align="stretch" maxW="1200px" mx="auto" px={4}>
        {/* Header Section */}
        <VStack spacing={6} textAlign="center">
          <MotionCircle
            size="100px"
            bg="white"
            shadow="lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
          >
            {(() => {
              const Icon = archetypeTheme[archetypeData.name]?.icon || Sparkles;
              const color = archetypeTheme[archetypeData.name]?.colors.primary || '#805AD5';
              return <Icon size={40} style={{ color }} />;
            })()}
          </MotionCircle>

          <Heading
            as="h1"
            size="2xl"
            bgGradient={`linear(to-r, ${archetypeTheme[archetypeData.name]?.colors.primary || 'purple.500'}, ${archetypeTheme[archetypeData.name]?.colors.secondary || 'pink.500'})`}
            bgClip="text"
          >
            {archetypeData.name}
          </Heading>
          
          <Text fontSize="xl" maxW="800px" mx="auto" color="gray.600" mb={8}>
            {archetypeData.description}
          </Text>

          <Wrap justify="center" spacing={3}>
            {stylePersonalityDetails.keywords.map((keyword, index) => (
              <WrapItem key={index}>
                <Tag
                  size="lg"
                  colorScheme="purple"
                  borderRadius="full"
                  px={6}
                  py={2}
                >
                  {keyword}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>

        {/* Main Content Tabs */}
        <Tabs variant="soft-rounded" colorScheme="purple" align="center">
          <TabList>
            <Tab>
              <Flex align="center" gap={2}>
                <Palette size={20} />
                <Text>Color Analysis</Text>
              </Flex>
            </Tab>
            <Tab>
              <Flex align="center" gap={2}>
                <Star size={20} />
                <Text>Style Profile</Text>
              </Flex>
            </Tab>
            <Tab>
              <Flex align="center" gap={2}>
                <User size={20} />
                <Text>Celebrity Style Twins</Text>
              </Flex>
            </Tab>
          </TabList>

          <TabPanels>
            {/* Color Palette Tab */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {getArchetypeColors(archetypeData.name).map((color, index) => (
                  <MotionBox
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    p={6}
                    bg="white"
                    rounded="xl"
                    shadow="md"
                  >
                    <Box
                      w="full"
                      h="100px"
                      bg={color.hex}
                      rounded="lg"
                      mb={4}
                    />
                    <Heading size="md" mb={2}>
                      {color.name}
                    </Heading>
                    <Text color="gray.600">{color.meaning}</Text>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Style Analysis Tab */}
            <TabPanel>
              <VStack spacing={8} maxW="900px" mx="auto">
                {/* Style Scores Section */}
                <Box bg="white" p={6} rounded="xl" shadow="md" w="full">
                  <Flex align="center" gap={2} mb={6}>
                    <TrendingUp size={24} className="text-purple-500" />
                    <Heading size="md">Style Scores</Heading>
                  </Flex>
                  <VStack align="stretch" spacing={6}>
                    {Object.entries(getArchetypeScores(archetypeData.name)).map(([key, value]) => (
                      <Box key={key}>
                        <Flex justify="space-between" mb={2}>
                          <Text
                            textTransform="capitalize"
                            fontWeight="medium"
                          >
                            {key}
                          </Text>
                          <Text fontWeight="bold">{value}%</Text>
                        </Flex>
                        <Progress
                          value={value}
                          colorScheme="purple"
                          rounded="full"
                          size="sm"
                        />
                      </Box>
                    ))}
                  </VStack>
                </Box>

                {/* Style Traits Section */}
                <Box bg="white" p={6} rounded="xl" shadow="md" w="full">
                  <Flex align="center" gap={2} mb={6}>
                    <Zap size={24} className="text-purple-500" />
                    <Heading size="md">Style Traits</Heading>
                  </Flex>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {getArchetypeTraits(archetypeData.name).map((trait, index) => (
                      <Box
                        key={index}
                        p={4}
                        bg="purple.50"
                        rounded="lg"
                        fontSize="lg"
                        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
                        transition="all 0.2s"
                      >
                        <Flex align="center" gap={2}>
                          <Box as={Star} size={16} className="text-purple-500" />
                          <Text>{trait}</Text>
                        </Flex>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Box>
              </VStack>
            </TabPanel>

            {/* Celebrity Matches Tab */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {getArchetypeCelebrities(archetypeData.name).map((celebrity, index) => (
                  <CelebrityCard
                    key={index}
                    celebrity={celebrity}
                    onClick={handleCelebrityClick}
                  />
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Celebrity Details Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody p={8}>
              {selectedCelebrity && (
                <VStack spacing={6} align="stretch">
                  <Image
                    src={selectedCelebrity.image}
                    alt={selectedCelebrity.name}
                    w="full"
                    h="400px"
                    objectFit="cover"
                    rounded="lg"
                  />
                  <Box>
                    <Heading size="lg" mb={2}>{selectedCelebrity.name}</Heading>
                    <Text color="gray.600" fontSize="lg" mb={4}>
                      {selectedCelebrity.description}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" mb={3}>Style Similarities</Heading>
                    <Text color="gray.600" fontSize="lg" mb={4}>
                      {selectedCelebrity.similarities.join(', ')}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" mb={3}>Signature Items</Heading>
                    <Text color="gray.600" fontSize="lg" mb={4}>
                      {selectedCelebrity.signatureItems.join(', ')}
                    </Text>
                  </Box>
                </VStack>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Navigation Button */}
        <Box textAlign="center" mt={12}>
          <Button
            size="lg"
            colorScheme="purple"
            rightIcon={<TrendingUp />}
            px={10}
            py={7}
            fontSize="xl"
            fontWeight="bold"
            bgGradient="linear(to-r, purple.500, pink.500)"
            color="white"
            _hover={{
              transform: 'translateY(-2px)',
              shadow: 'xl',
              bgGradient: 'linear(to-r, purple.600, pink.600)',
            }}
            _active={{
              transform: 'translateY(0)',
              bgGradient: 'linear(to-r, purple.700, pink.700)',
            }}
            transition="all 0.2s"
            onClick={() => navigate('/matches', { state: { archetype: archetypeData.name } })}
          >
            Explore Your Style Matches
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}

export default ArchetypeResult
