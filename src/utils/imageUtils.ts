import sharp from 'sharp';

export const optimizeImage = async (imagePath: string, outputPath: string) => {
  try {
    await sharp(imagePath)
      .resize(600, 800, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 80 })
      .toFile(outputPath);
    return true;
  } catch (error) {
    console.error('Error optimizing image:', error);
    return false;
  }
};

export const getImageUrl = (archetype: string, celebrityName: string) => {
  // Remove the /src prefix as it's not needed in the public URL
  return `assets/images/celebrities/${archetype.toLowerCase()}/${celebrityName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
};
