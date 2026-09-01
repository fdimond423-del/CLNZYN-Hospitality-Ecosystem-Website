const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'artifacts/aether-studio/public/images';
const files = fs.readdirSync(dir);

async function processImages() {
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      try {
        await sharp(filePath)
          .toColorspace('srgb')
          .toFile(tempPath);
        fs.renameSync(tempPath, filePath);
        console.log('Fixed:', file);
      } catch (err) {
        console.error('Error with', file, err);
      }
    }
  }
}
processImages();
