const fs = require('fs');

const file = 'about.html';
let content = fs.readFileSync(file, 'utf8');

const start = content.indexOf('<!-- Extra Section 1: Pillars of Craft & Sustainable Gastronomy -->');
const end = content.indexOf('<!-- Timeline / History -->');

if (start === -1 || end === -1) {
  console.error('Boundaries not found');
  process.exit(1);
}

content = content.slice(0, start) + content.slice(end);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully removed Three Pillars of Skyline Gastronomy from about.html');

