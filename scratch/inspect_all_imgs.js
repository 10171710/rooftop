const fs = require('fs');

function inspectImages(file) {
  console.log('=== ' + file + ' ===');
  const content = fs.readFileSync(file, 'utf8');
  const imgRegex = /<img[^>]+>/g;
  let match;
  let count = 0;
  while ((match = imgRegex.exec(content)) !== null) {
    count++;
    const tag = match[0];
    const srcMatch = tag.match(/src=["']([^"']+)["']/);
    const altMatch = tag.match(/alt=["']([^"']+)["']/);
    const styleMatch = tag.match(/style=["']([^"']+)["']/);
    const classMatch = tag.match(/class=["']([^"']+)["']/);
    const src = srcMatch ? srcMatch[1] : 'no-src';
    const alt = altMatch ? altMatch[1] : 'no-alt';
    const style = styleMatch ? styleMatch[1] : '';
    const cls = classMatch ? classMatch[1] : '';
    console.log(`${count}. [${alt}] -> ${src.substring(0, 65)}`);
    if (style.includes('blur') || cls.includes('blur') || tag.includes('opacity') || tag.includes('filter')) {
      console.log(`   Notice tag details: cls="${cls}" style="${style}"`);
    }
  }
}

inspectImages('index.html');
inspectImages('index-2.html');

