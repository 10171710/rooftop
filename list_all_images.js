const fs = require('fs');
const path = require('path');

function listImages(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(listImages(fullPath));
    } else if (/\.(jpg|jpeg|png|webp|svg)$/i.test(file)) {
      results.push(fullPath.replace(/\\/g, '/'));
    }
  });
  return results;
}

const images = listImages('assets/images');
console.log('Total images found in assets/images:', images.length);
console.log(images);
