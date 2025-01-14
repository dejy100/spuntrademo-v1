import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=200&h=200&fit=crop',
    filename: 'work-suit.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=200&h=200&fit=crop',
    filename: 'casual-jeans.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop',
    filename: 'formal-dress.jpg'
  }
];

const outfitsDir = path.join(__dirname, '..', 'public', 'images', 'outfits');

// Ensure the directory exists
if (!fs.existsSync(outfitsDir)) {
  fs.mkdirSync(outfitsDir, { recursive: true });
}

// Download each image
images.forEach(({ url, filename }) => {
  const filepath = path.join(outfitsDir, filename);
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      console.log(`Downloaded ${filename}`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
});
