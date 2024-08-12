const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define the input and output directories
const inputDir = './public/images';  // Replace with your images directory
const outputDir = './public/optimized-images';

// Ensure the output directory exists
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

// Process each image in the input directory
fs.readdirSync(inputDir).forEach(file => {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file);

    // Resize, compress, and convert images
    sharp(inputFile)
        .resize(800) // Resize width to 800px, preserving aspect ratio
        .toFormat('webp') // Convert to WebP format
        .webp({ quality: 80 }) // Compress to 80% quality
        .toFile(outputFile.replace(/\.[^/.]+$/, ".webp"), (err, info) => {
            if (err) {
                console.error('Error processing file:', file, err);
            } else {
                console.log('Processed file:', file, info);
            }
        });
});