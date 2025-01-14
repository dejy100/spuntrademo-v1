import {
  Box,
  Grid,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'

export const Recommendations = () => {
  // Mock recommendation data
  const recommendations = {
    outfits: [
      {
        image: 'https://via.placeholder.com/300x400?text=Outfit+1',
        description: 'Tailored black blazer with high-waisted trousers',
      },
      {
        image: 'https://via.placeholder.com/300x400?text=Outfit+2',
        description: 'Minimalist midi dress with architectural details',
      },
      {
        image: 'https://via.placeholder.com/300x400?text=Outfit+3',
        description: 'Monochrome ensemble with subtle texture play',
      },
    ],
    colors: [
      { name: 'Charcoal Gray', hex: '#36454F' },
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Navy Blue', hex: '#000080' },
      { name: 'Camel', hex: '#C19A6B' },
    ],
    tips: [
      'Focus on quality fabrics that drape well',
      'Invest in versatile pieces that can be mixed and matched',
      'Choose accessories that make a subtle statement',
      'Pay attention to fit and tailoring',
    ],
  }

  return (
    <Box>
      <Heading size="2xl" textAlign="center" mb={8}>
        Your Style Recommendations
      </Heading>

      <Tabs colorScheme="purple" isLazy>
        <TabList mb={8}>
          <Tab>Outfit Ideas</Tab>
          <Tab>Color Palette</Tab>
          <Tab>Style Tips</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
              gap={8}
            >
              {recommendations.outfits.map((outfit, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  shadow="md"
                  _hover={{ shadow: 'lg' }}
                >
                  <Image
                    src={outfit.image}
                    alt={`Outfit ${index + 1}`}
                    borderRadius="md"
                    mb={4}
                  />
                  <Text fontSize="lg">{outfit.description}</Text>
                </Box>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel>
            <Grid
              templateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              }}
              gap={8}
            >
              {recommendations.colors.map((color, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  shadow="md"
                  _hover={{ shadow: 'lg' }}
                >
                  <Box
                    bg={color.hex}
                    w="100%"
                    h="100px"
                    borderRadius="md"
                    mb={4}
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    {color.name}
                  </Text>
                  <Text color="gray.500">{color.hex}</Text>
                </Box>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel>
            <VStack spacing={4} align="stretch">
              {recommendations.tips.map((tip, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  shadow="md"
                  _hover={{ shadow: 'lg' }}
                >
                  <Text fontSize="lg">
                    {index + 1}. {tip}
                  </Text>
                </Box>
              ))}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
