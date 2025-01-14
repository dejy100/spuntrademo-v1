import https from 'https';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const celebrities = {
  emberflare: ['zendaya', 'rihanna', 'beyonce'],
  earthbound: ['angelina-jolie', 'emma-watson', 'natalie-portman'],
  aquaflow: ['taylor-swift', 'blake-lively', 'margot-robbie'],
  windspirit: ['audrey-hepburn', 'grace-kelly', 'emma-stone']
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(`Failed to download image: ${response.statusCode}`);
      }
    }).on('error', reject);
  });
};

const optimizeImage = async (inputPath, outputPath) => {
  await sharp(inputPath)
    .resize(600, 800, { fit: 'cover' })
    .jpeg({ quality: 80 })
    .toFile(outputPath);
};

async function main() {
  const baseDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'celebrities');

  for (const [archetype, celebs] of Object.entries(celebrities)) {
    const archetypeDir = path.join(baseDir, archetype);
    if (!fs.existsSync(archetypeDir)) {
      fs.mkdirSync(archetypeDir, { recursive: true });
    }

    for (const celeb of celebs) {
      const tempPath = path.join(archetypeDir, `${celeb}-temp.jpg`);
      const finalPath = path.join(archetypeDir, `${celeb}.jpg`);
      
      try {
        // Using placeholder images for now - replace with actual celebrity image URLs
        await downloadImage(`https://via.placeholder.com/600x800?text=${celeb}`, tempPath);
        await optimizeImage(tempPath, finalPath);
        fs.unlinkSync(tempPath); // Clean up temp file
        console.log(`Successfully processed ${celeb}`);
      } catch (error) {
        console.error(`Error processing ${celeb}:`, error);
      }
    }
  }
}

main().catch(console.error);
